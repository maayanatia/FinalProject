const requestTimestamps=new Map();

export const rateLimiter = (routeName, windowMs = 1500) => {
  const delay=Math.max(windowMs, 500);

  return (req, res, next) => {
    const key=`${req.ip}:${routeName}`;
    const now=Date.now();
    const lastRequestTime=requestTimestamps.get(key) ?? 0;

    if (now-lastRequestTime<delay) {
      return res.status(429).json({
        error:'Too many requests. Please wait a moment before retrying.'});
    }
    requestTimestamps.set(key, now);
    next();
  };
};


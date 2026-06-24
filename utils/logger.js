export const requestLogger = (req, res, next) => {
  const now=new Date().toISOString();
  console.info(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
};

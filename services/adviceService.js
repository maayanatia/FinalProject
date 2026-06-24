export const fetchRandomAdvice = async () => {
  const ADVICE_API_URL=process.env.ADVICE_API_URL;
  const response=await fetch(ADVICE_API_URL, {
    headers:{Accept:'application/json'}
  });

  if (!response.ok) {
    throw new Error('Unable to fetch advice');
  }

  const data=await response.json();
  return data?.slip?.advice ?? 'No advice available';
};
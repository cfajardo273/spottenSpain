export const getAllAirlines = async () => {
  const response = await fetch('http://localhost:5000/airline');
  return await response.json();
};

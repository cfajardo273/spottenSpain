export const getAllAirplanes = async () => {
  const response = await fetch('http://localhost:5000/airplane');
  return await response.json();
};

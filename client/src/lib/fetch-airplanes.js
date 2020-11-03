const { REACT_APP_SERVER_URL } = process.env;

export const getAllAirplanes = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/airplane`);
  return await response.json();
};

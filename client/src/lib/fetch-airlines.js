const { REACT_APP_SERVER_URL } = process.env;

export const getAllAirlines = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/airline`);
  return await response.json();
};

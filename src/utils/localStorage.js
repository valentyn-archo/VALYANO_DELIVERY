export const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const saveStorage = (key, data) => {
  const value = JSON.stringify(data);

  localStorage.setItem(key, value);
};

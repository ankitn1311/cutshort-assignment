export const setTheme = (darkMode: boolean) => {
  return {
    type: constants.SET_THEME,
    payload: darkMode,
  };
};

export const constants = {
  SET_THEME: "SET_THEME",
};

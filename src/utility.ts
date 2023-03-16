const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
  return getLocalStorage(key);
};

const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const getSidebarState = () => {
  return getLocalStorage('sidebar') == null ? true : getLocalStorage('sidebar');
};

export const setSidebarState = () => {
  return setLocalStorage('sidebar', !getSidebarState());
};

export const getActiveTabState = () => {
  return getLocalStorage('active-tab') || 0;
};

export const setActiveTabState = (value: number) => {
  return setLocalStorage('active-tab', value);
};

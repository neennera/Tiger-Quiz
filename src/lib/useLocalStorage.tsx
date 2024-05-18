export const useLocalStorage = (key: string) => {
  const addItems = (value: string) => {
    let item = getItems();
    item[value] = true;

    try {
      window.localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.log(error);
    }
  };

  const getItems = () => {
    try {
      const item = window.localStorage.getItem(key);
      if (item === 'undefined' || item === null) {
        const newItems = {
          Meat: false,
          Hunter: false,
          Tamer: false,
        };
        window.localStorage.setItem(key, JSON.stringify(newItems));
        return newItems;
      } else {
        return JSON.parse(item);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { addItems, getItems };
};

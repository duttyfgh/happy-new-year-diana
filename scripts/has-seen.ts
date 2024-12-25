// Устанавливает значение hasSeen в localStorage
export const setHasSeen = (value: boolean) => {
    localStorage.setItem('hasSeen', JSON.stringify(value));
};

// Получает значение hasSeen из localStorage (по умолчанию false)
export const getHasSeen = (): boolean => {
    const storedValue = localStorage.getItem('hasSeen');
    return storedValue ? JSON.parse(storedValue) : false;
};
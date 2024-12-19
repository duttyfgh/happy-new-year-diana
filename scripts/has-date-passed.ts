function hasDatePassed(inputDate: string): boolean {
    // Парсим входную дату в формате "dd.mm.yyyy"
    const [day, month, year] = inputDate.split(".").map(Number);
    const dateToCheck = new Date(year, month - 1, day); // Создаем объект Date

    // Текущая дата без времени
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    // Сравниваем даты
    return dateToCheck <= now;
}

export default hasDatePassed
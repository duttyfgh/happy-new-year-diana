function timeUntilNextDay(): string {
    // Текущая дата и время
    const now = new Date();

    // Следующий день в 00:00
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    // Разница во времени в миллисекундах
    const timeDifference = nextDay.getTime() - now.getTime();

    // Конвертация в минуты и часы
    const totalMinutes = Math.floor(timeDifference / 1000 / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Форматирование результата в "hh:mm"
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    return formattedTime;
}

export default timeUntilNextDay
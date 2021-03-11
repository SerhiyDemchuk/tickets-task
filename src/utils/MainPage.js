export const fromToTime = (time) => {
    const convertedTime = new Date(time);
    const hours = (convertedTime.getHours() < 10 ? '0' : '') + convertedTime.getHours();
    const minutes = (convertedTime.getMinutes() < 10 ? '0' : '') + convertedTime.getMinutes();
    return `${hours}:${minutes} - `;
}

export const convCurrency = (currency) => {
    return currency.toLocaleString('ru-RU', { 
        style: 'decimal',
        minimumFractionDigits: 0 
    }) + ' Р';
}

export const timeConvert = (time) => {
    const num = time;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${rhours}ч ${rminutes}м`;
}
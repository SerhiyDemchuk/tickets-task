export const sliceTime = (time) => {
    const a = time.slice(11, 16);
    return `${a} - `;
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
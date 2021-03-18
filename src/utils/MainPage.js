export const displayDestinationTime = (time) => {
    const convertedTime = new Date(time);
    const hours = (convertedTime.getHours() < 10 ? '0' : '') + convertedTime.getHours();
    const minutes = (convertedTime.getMinutes() < 10 ? '0' : '') + convertedTime.getMinutes();
    return `${hours}:${minutes} - `;
}

export const displayPrice = (currency) => {
    return currency.toLocaleString('ru-RU', { 
        style: 'decimal',
        minimumFractionDigits: 0
    }) + ' Р';
}

export const displayTransitTime = (time) => {
    const hours = (time / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${rhours}ч ${rminutes}м`;
}

export const displayStopsAmount = (stops) => {
    if (stops.length === 0) {
        return 'Без пересадок';
    } else if (stops.length === 1) {
        return '1 пересадка'
    } else if (stops.length > 1) {
        return `${stops.length} пересадки`
    }
}

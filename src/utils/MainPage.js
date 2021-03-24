export function filterData(data, filter) {
    let length;

    if (filter === 'no_stops') length = 0;
    if (filter === 'one_stop') length = 1;
    if (filter === 'two_stops') length = 2;
    if (filter === 'three_stops') length = 3;

    const filteredData = [];

    data.map(item => item.segments.map(info =>
        info.stops.length === length || filter === undefined
            ? filteredData.push(item)
            : null
    ));

    return filteredData;
}

const calculateReturnTimeValue = (destinationTime, durationTime, count) => {
    const sum = destinationTime + durationTime;
    let hours = 0;
    let minutes = 0;

    if (count === 'hours') {
        if (sum > 24) {
            hours = sum - 24;
        } else if (sum === 24) {
            hours = 0;
        } else {
            hours = sum;
        }
        return hours;
    } else if (count === 'minutes') {
        if (sum > 60 || sum === 60) {
            minutes = sum - 60;
            hours = hours + 1;
        } else {
            minutes = sum;
        }
        return [hours, minutes];
    }
}

const returnTransitTime = time => {
    const hours = (time / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return [rhours, rminutes];
}

const convertTimeToLeadingZero = (time, value) => {
    return (time + value < 10 ? '0' : '') + time;
}

export const displayTime = (destination, duration) => {
    const convertedTime = new Date(destination);
    const startTripHours = convertTimeToLeadingZero(convertedTime.getHours(), 0);
    const startTripMinutes = convertTimeToLeadingZero(convertedTime.getMinutes(), 0);

    const destinationHours = convertedTime.getHours();
    const destinationMinutes = convertedTime.getMinutes();

    const [durationHours, durationMinutes] = returnTransitTime(duration);

    const backDestinationHour = calculateReturnTimeValue(durationHours, destinationHours, 'hours');
    const [hour, backDestinationMinutes] = calculateReturnTimeValue(durationMinutes, destinationMinutes, 'minutes');

    const endTripHours = convertTimeToLeadingZero(backDestinationHour, hour);
    const endTripMinutes = convertTimeToLeadingZero(backDestinationMinutes, 0);

    if (destination === null) {
        return `${durationHours}ч ${durationMinutes}м`
    } else {
        return `${startTripHours}:${startTripMinutes} - ${endTripHours}:${endTripMinutes}`
    };
}

export const displayPrice = currency => {
    return currency.toLocaleString('ru-RU', {
        style: 'decimal',
        minimumFractionDigits: 0
    }) + ' Р';
}

export const displayStopsAmount = stops => {
    if (stops.length === 0) {
        return 'NO STOPS';
    } else if (stops.length === 1) {
        return '1 STOP'
    } else if (stops.length > 1) {
        return `${stops.length} STOPS`
    }
}

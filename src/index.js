exports.min = function min(array) {
    if (array === undefined || array.length === 0) return 0;
    else {
        return array.reduce((acc, item) => {
            if (acc > item) {
                acc = item;
                return acc;
            }
            return acc;
        }, array[0]);
    }
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) return 0;
    else {
        return array.reduce((acc, item) => {
            if (acc < item) {
                acc = item;
                return acc;
            }
            return acc;
        }, array[0]);
    }
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) return 0;
    else {
        let avg = 0;
        array.forEach((element) => {
            avg += element;
        });
        return avg / array.length;
    }
};

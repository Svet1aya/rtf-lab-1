/**
     * @param array – массив элементов. Например, [1, 8, 3]
     * @param number – число, которое нужно прибавить к числу, полученному из массива
     */

    function addNumber(array, number) {
        if (array.every((value) => typeof value === 'number' )){
            let arrString = parseInt(array.join(''),10) + number;
            return arrString.toString().split('').map(Number);

        }
        return null;
    }

module.exports = {
    addNumber
};
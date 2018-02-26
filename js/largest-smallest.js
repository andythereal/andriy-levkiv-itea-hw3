var array = [];

for (var i = 0; i < 5; i++) {
    array[i] = Number(prompt('Please input ' + (i + 1) + ' number'));
}

function getMax() {
    var maxElement = array[0];
    for (var i = 0; i < array.length; i++) {
        if (maxElement < array[i]) {
            maxElement = array[i];
        }
    }
    return maxElement;
}

function getMin() {
    var minElement = array[0];
    for (var i = 0; i < array.length; i++) {
        if (minElement > array[i]) {
            minElement = array[i];
        }
    }
    return minElement;
}

document.write('Your array: ' + array + '<br>');
document.write('Max element: ' + getMax(array) + '<br>');
document.write('Min element: ' + getMin(array));

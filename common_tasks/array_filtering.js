const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => { 

    return num % 3 == 0;
};

const filterArray = ( arraytoFilter, filterFn ) => {
    const filteredArray = [];

    arraytoFilter.forEach(num => {
        if (filterFn(num)) {
            filteredArray.push(num);
        }
    });
    
    return filteredArray;
}

//[3, 66, 15]

console.log(filterArray(mixedArray, isEven));
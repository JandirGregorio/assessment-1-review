const nums = [1, 2, 3]

const doublePure = (arr) => {
    const newArr = arr.map(num => num * 2);
    return newArr;
};

const doubleImpure = (arr) => {
    const newArr = arr;
    for(let i = 0; i < arr.length; i++){
        newArr[i] = arr[i] * 2;
    }
    return newArr;
    /*
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2;
    }
    return arr;
     */
};

console.log(doublePure(nums));
console.log(doubleImpure(nums));
console.log(doubleImpure(nums));
console.log(doubleImpure(nums));
console.log(doublePure(nums));
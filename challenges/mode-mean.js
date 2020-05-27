/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    const avg = Math.floor(array.reduce((a, b) => a + b) / array.length);

    const temp = [];
    const newArr = [];

    for(let i = 0; i < array.length; i++){
        if(!temp.includes(array[i])) temp.push(array[i]);
        else newArr.push(array[i])
    }

    if(newArr.length === 0) return false;

    newArr.sort((a,b) => b - a);

    const obj = {};
    for(let i = 0; i < newArr.length; i++){
        if(!obj[newArr[i]]){
            obj[newArr[i]] = 1;
        } else {
            obj[newArr[i]] = 1+obj[newArr[i]];
        }
    }

    let mode = 0;
    let index;
    
    for (let key in obj){
        if(obj[key] > mode) {
            mode = obj[key];
            index = key;
            console.log(mode);
            console.log(index);
        }
    }
    mode = parseInt(index);
    // console.log(mode);
    return avg === mode;
}

console.log(modemean([2, 4, 5, 7, 10, 5, 4, 7, 5]));

module.exports = modemean;

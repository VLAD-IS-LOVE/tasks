//1. Разработать функцию сортировки числовых значений в одномерном массиве.
// a)Функция принимает на вход не сортированный массив, и режим сортировки (по возрастанию или по убыванию) 
// б)возвращает отсортированный массив


let arr = [1, 4, 13, 2];
let normalMode = 1;
let reverseMode = -1;
///////Var 1///////
let onSort = (array, mode) => {
  let newArr = array.slice(0, array.length);
  
  if(mode === 1) {
    newArr.sort((a, b) => a - b);
  } else if(mode === -1) {
    newArr.sort((a, b) => b - a);
  }
  return newArr;
}

let sortedArr = onSort(arr, reverseMode);
alert(sortedArr);

///////Var 2///////
let onSort_v2 = (array, mode) => {
  let newArr = array.slice(0, array.length);
  newArr.sort((a, b) => a - b);
  return (mode < 0) ? newArr.reverse() : newArr;
}

let sortedArr_v2 = onSort_v2(arr, reverseMode);
alert(sortedArr2);


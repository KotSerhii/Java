// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangleArea (a,b){
// return a*b;
// }
// console.log(rectangleArea(10,10));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleArea(r){
//   const Pi = 3.1415;
//   return Pi*r*r;
// }
// console.log(Math.round(circleArea(5)));


// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinderArea(h,r){
//   const Pi = 3.1415;
//   return 2*Pi*r*h;
// }
// console.log(Math.round(cylinderArea(25,5)));


// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

// function showArray (arr){
//   for(const item of arr){
//        console.log(item);
//   }
// }
// arr = [123,456,848,'lkj','ljkkjlkjlk', false, 7676, true]
// showArray(arr);


// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент

// function addParagraph (text){
//   return(document.write(`<p>${text}</p>`));
// }
// addParagraph('Lorem ipsum dolor sit amet, consectetur adipi');


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

// function addUl3 (text){
//   return document.write(`
// <ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// addUl3('sandy beach')

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та
// виводить його через document.write

// function addUl (text, numbersLi){
//   document.write (`<ul>`)
//   for(let i = 0; i < numbersLi; i++){
//       document.write(`<li>${text}</li>`)}
//   document.write (`</ul>`)
// }
// addUl('Evetything will be alright',10);


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та
// будує для них список (ul li) та виводить його через document.write
//
// function doListFromArray (arr){
//   document.write('<ul>');
//   for(let item of arr){
//     document.write(`<li>${item}</li>`);
//   }
//   document.write('</ul>');
//   }
//   let arr=[123,'ghost',true, 'reks','peks','feks',787878, 'darling',69696];
// doListFromArray(arr);


// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та
// виводить їх в документ. Для кожного об'єкту окремий блок.

// function doDocumentFromObjects (arr){
//
//   for(const object of arr){
//     document.write(`<div>${object.id} ${object.name} ${object.age}</div>`);
//   }
//
// }
// let h = [
//   {id: 1, name: 'Petya', age: 31},
//   {id: 2, name: 'Petya', age: 32},
//   {id: 3, name: 'Petya', age: 33},
//   {id: 4, name: 'Petya', age: 33},
//   {id: 5, name: 'Petya', age: 33},
//   {id: 6, name: 'Petya', age: 33},
//   {id: 7, name: 'Petya', age: 33},
//   {id: 8, name: 'Petya', age: 33},
//   {id: 9, name: 'Petya', age: 33},
//   {id: 10, name: 'Petya', age: 33}
// ];
// doDocumentFromObjects(h);


//   #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

// function minNumber (array){
//   let min = array[0];
//   for (const number of array){
//     if (number < min){
//       min = number;
//     }
//       }
//   return min;
// }
// let arr=[234,-45,567456,34,5,89,-56,34,78]
// console.log(minNumber(arr));


// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та
// повертає його. Приклад sum([1,2,10]) //->13

// let arr=[2,-4,5,3,5,9,-6,4,7]
// function sumOfArray(Array){
//   let sum = Array[0];
//   for (let i = 1; i < Array.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumOfArray(arr));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr,index1,index2){
//   let a = arr[index1];
//   let b = arr[index2];
//   for(let i=0;i<arr.length;i++){
//     if(i===index1){
//       arr[i]=b;
//     } else if(i===index2){
//       arr[i]=a;
//     }
//   }
//   return arr;
// }
// console.log(swap([11,22,33,44,55,66,77,88,99],4,0));


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
  let curs;
  for (let i = 0; i < currencyValues.length; i++) {
    if (currencyValues[i].currency === exchangeCurrency) {
      curs = currencyValues[i].value;
    }
  }
    return sumUAH / curs;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'))

// #8Nmt60ZT
// - створити блок,
//   - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// let object = document.createElement('div');
// object.classList.add('wrap', 'collapse', 'alpha', 'beta');
// object.style.backgroundColor = 'pink';
// object.style.color = 'blue';
// object.style.fontSize = '36px';
// object.style.height = '300px';
// object.style.margin = '20px';
// object.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque fugiat iste nihil non praesentium, repellendus saepe sint! Animi commodi ducimus obcaecati provident quidem sunt, voluptatibus. Aspernatur maiores maxime ratione.';
//
// let clone = object.cloneNode(true);
// console.log(clone);
//
// document.body.appendChild(clone);
// document.body.appendChild(object);

//   #OPLI89c9G
// - Є масив:
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
// let arr = ['Main', 'Products', 'About us', 'Contacts'];
//
// let ul = document.createElement('ul');
// for (const item of arr) {
//   let li = document.createElement('li');
//   ul.appendChild(li);
//   li.innerText = item;
// }
// document.body.appendChild(ul);


// #jeBqHV525U5
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const element of coursesAndDurationArray){
//   let courseInfo = document.createElement('div');
//   let info = document.createElement('p');
//   info.innerText =element.title+" - "+element.monthDuration;
//   courseInfo.appendChild(info);
//   document.body.appendChild(courseInfo);
// }

// =========================


//   #Kx1xgoKy8
//   - Є масив
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде
// <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//   Завдання робити через цикли.
//
for (const element of coursesAndDurationArray) {
 let courseInfo = document.createElement('div');
 courseInfo.classList.add('item');
 let head = document.createElement('h1');
 head.classList.add('heading');
 head.innerText = element.title;
 let period = document.createElement('p');
 period.classList.add('description');
 period.innerText = element.monthDuration;
 courseInfo.append(head,period);
 document.body.appendChild(courseInfo);
}
// ==========================

// scripts.js

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

  
const createArray = (length) => {
  const result = [];
  for (let i = 0; i < length; i++) { // corrected let i, length to the correct one
      result.push(i); //added a for loop for result and pushed the result by using .push(i)
  }
  return result;
};
const createData = function(){ //added function and removed the arrow function =>
  const current = new Date();  // added () on new date and semi-colons
  current.setDate(1);  //removed = and put a .
  const startDay = current.getDay(); //added const  and changed day to getDay and also added the missing ()
  const daysInMonth = getDaysInMonth(current);  // added const
  const weeks = createArray(6); //changed the value to 6 so that I can be able to see the last number and added const
  const days = createArray(7);  //added const
   let result = [] //value = null  // added let because the variable will be used again in the code
  for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
      let value = {       //removed opening [ and added let
          week: weekIndex + 1,
          days: []
      };             // removed closing square ]
      for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
          const day = (weekIndex * 7) + dayIndex - startDay + 1;   //removed value and added const day
          const isValid = day > 0 && day <= daysInMonth; //added const
          let classString = 'table__cell'; //moved this line to the right position as it was placed in the wrong position. I removed  backtags and replaced with '', and added semi colons.
          if (dayIndex === 0 || dayIndex === 6) {
              classString += 'table__cell_weekend';
          }
           value.days.push({ //removed [ and replaced with (,removed =
              dayOfWeek: dayIndex + 1,
              value: isValid ? day : '',  //removed && and added ? instead 
              class: classString,
           });  //removed closing ] and replaced with ) 
          }
          weeks[weekIndex] = value;
      }
      return weeks;
};
const addCell = function(existing, classString, value) {   //removed => and replaced with function
  return `${existing}<td class="${classString}">${value}</td>`;
};  //moved existing from the bottom to the top and added class =.,removed const result and =, and replaced with return also added semicolon 
const createHtml = function(data) {  //removed => and wrote function instead
  let result = '';
  for (let i = 0; i < data.length; i++) {
    const week = data[i];   // added const and removed ,days in and replaced with =
    let inner = '';
    inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);   // added inner infront of addCell to declare after it was let in the top and added $ infront of {week} and used `` to interpolate in properly and added .week inside it
    for (let j = 0; j < week.days.length; j++) {
      const day = week.days[j];     //removed , value in days and replaced with . and added const before day and separated dayofWeek, removed of and replaced with =
      let classString = 'table__cell';  // added '' to make it a string
      const currentDate = new Date();  // declared current date to be new date
      const isToday = currentDate.getDate() === day.value && currentDate.getMonth() === currentDate.getMonth();  //added currentDate and added getDate to get the date and getMonth to get the month
      const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;  //added day. and == before 1, removed && and added || added day so that i can acces dayofweek using dot notaion. added an extra = to make it stricter
      const isAlternate = week.week % 2 === 0; //added week
      if (isToday) {
        classString = `${classString} table__cell_today`;   //added {} and semicolons on the three if statements
      }
      if (isWeekend) {
        classString = `${classString} table__cell_weekend`;   //added $ and back tags and removed '' and ==
      }
      if (isAlternate) {
        classString = `${classString} table__cell_alternate`;
      }
      inner = addCell(inner, classString, day.value || '');  //added inner = infront of addCell
    }
    result += `<tr>${inner}</tr>`;  // added + sign before the = as it was not supposed to be a declaration and semicolon
  }
  return result;
};

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)


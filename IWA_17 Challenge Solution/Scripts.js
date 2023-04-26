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

// const createArray = (length) => {
//   const result = []; 

//   for (let i = 0; i > length; i++ ) { // corrected let i, length to the correct one
//   result.push(null); //added a for loop for result and pushed the result by using .push()
//   }
//   return result;
// }

// const createData = () => {
//   const current = new Date();// added () on new date and semi-colons
//   current = SetDate(1);

//   const startDay = current.getDay();   //added const  and changed day to getDay and also added the missing ()
//   const daysInMonth = getDaysInMonth(current);  // addedconst

//  const weeks = createArray(5);  //added const
//   const days = createArray(7);  //added const
//   let value = null;             // added let is the variable will be used again in the code

//   for (weekIndex in weeks) {
//       value = [{
//           week: weekIndex + 1,
//           days: []
//       }]

//       for (dayIndex in days) {
//           value = dayIndex - startDay
//           isValid = day > 0 && day <= daysInMonth

//           result[weekIndex].days = [{
//               dayOfWeek: dayIndex + 1,
//               value: isValid && day,
//           }]
//       }
//   }
// }

// const addCell = (existing, classString, value) => {
//   const result = /* html */ `
//       <td ${classString}>
//           ${value}
//       </td>

//       ${existing}
//   `
// }

// const createHtml = (data) => {
//   let result = ''

//   for (week, days in data) {
//       let inner = ""
//       inner= addCell(inner, 'table__cell  table__cell_sidebar', 'Week ${week.week}'); // added inner infront of addCell to declare after it was let in the top and added $ infront of {week} to interpolate in properly and added .week inside it
  
//       for (dayOfWeek, value in days) {
//           let classString = 'table__cell';   // added '' to make it a string
//          const isToday = new Date().getDate() === day.value && new Date().getMonth() === new Date().getMonth(); //added () next to newDate and added getDate to get the date
//          const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7; //added day. and == before 1, removed && and added || added day so that i can acces dayofweek using dot notaion. added an extra = to make it stricter
//           const isAlternate = week.week % 2 === 0; //added week

//           /*let classString = 'table__cell'*/ //removed this line as it was saying i cant redeclare classString. I used it as a guideline instead so I removed claasString and backtags and replaced with '', and added semi colons.

//           if (isToday) {classString += 'table__cell_today';
//         }

//           if (isWeekend) {classString += 'table__cell_weekend';}  //added $ and back tigs and removed ''

//           if (isAlternate) {classString += 'table__cell_alternate';}

//           inner = addCell(inner, classString, day.value) //added inner = infront of addCell
//       }

//       result += `<tr>${inner}</tr>`; // added + sign before the = as it was not supposed to be a declaration and semicolon
//   }
//   return result;
// }



const createArray = (length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
      result.push(i);
  }
  return result;
};
const createData = function(){
  const current = new Date();
  current.setDate(1);
  const startDay = current.getDay();
  const daysInMonth = getDaysInMonth(current);
  const weeks = createArray(6);
  const days = createArray(7);
   let result = [] //value = null
  for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
      let value = {
          week: weekIndex + 1,
          days: []
      };
      for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
          const day = (weekIndex * 7) + dayIndex - startDay + 1;
          const isValid = day > 0 && day <= daysInMonth;
          let classString = 'table__cell';
          if (dayIndex === 0 || dayIndex === 6) {
              classString += 'table__cell_weekend';
          }
           value.days.push({
              dayOfWeek: dayIndex + 1,
              value: isValid ? day : '',
              class: classString,
           });
          }
          weeks[weekIndex] = value;
      }
      return weeks;
};
const addCell = function(existing, classString, value) {
  return `${existing}<td class="${classString}">${value}</td>`;
};
const createHtml = function(data) {
  let result = '';
  for (let i = 0; i < data.length; i++) {
    const week = data[i];
    let inner = '';
    inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);
    for (let j = 0; j < week.days.length; j++) {
      const day = week.days[j];
      let classString = 'table__cell';
      const currentDate = new Date();
      const isToday = currentDate.getDate() === day.value && currentDate.getMonth() === currentDate.getMonth();
      const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
      const isAlternate = week.week % 2 === 0;
      if (isToday) {
        classString = `${classString} table__cell_today`;
      }
      if (isWeekend) {
        classString = `${classString} table__cell_weekend`;
      }
      if (isAlternate) {
        classString = `${classString} table__cell_alternate`;
      }
      inner = addCell(inner, classString, day.value || '');
    }
    result += `<tr>${inner}</tr>`;
  }
  return result;
};


// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)

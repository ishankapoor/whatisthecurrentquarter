let now = new Date();
now.setHours(0,0,0,0);
let day = -1;
let  month = -1;
month =  now.getMonth();
day   =  now.getDate();

const qEndDates = [new Date(now.getFullYear(), 2, 31),
                   new Date(now.getFullYear(), 5, 30),
                   new Date(now.getFullYear(), 8, 30),
                   new Date(now.getFullYear(), 11, 31)];

function highlightText(q){

  let currentQuarter = document.getElementById('q');
  currentQuarter.innerText = 'Q' + q;

  const qEndTag = document.getElementById("end");
  qEndTag.innerText = qEndDates[q - 1].toDateString();

  const currentDateTag = document.getElementById("date");
  currentDateTag.innerText = now.toDateString();

  const diff = new Date (qEndDates[q - 1].getTime() - now.getTime());
  const Difference_In_Days = diff / (1000 * 3600 * 24);

  const delta = document.getElementById("delta");
  delta.innerText = Math.round(Difference_In_Days);

}
if (month < 4 ){
  highlightText(1);
} else if (month < 7){
  highlightText(2);
} else if (month < 10){
  highlightText(3);
} else {
  highlightText(4);
}


/*
const getCurrentQuarter = () => {
  const now = new Date();
  let currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  let quarterStartMonth;
  let quarterEndMonth;
  
  if (currentMonth < 3) {
    quarterStartMonth = 0;
    quarterEndMonth = 2;
  } else if (currentMonth < 6) {
    quarterStartMonth = 3;
    quarterEndMonth = 5;
  } else if (currentMonth < 9) {
    quarterStartMonth = 6;
    quarterEndMonth = 8;
  } else {
    quarterStartMonth = 9;
    quarterEndMonth = 11;
  }
  
  const quarterStart = new Date(currentYear, quarterStartMonth, 1);
  const quarterEnd = new Date(currentYear, quarterEndMonth + 1, 0);
  const daysInQuarter = (quarterEnd - quarterStart) / (1000 * 60 * 60 * 24) + 1;
  const daysLeft = (quarterEnd - now) / (1000 * 60 * 60 * 24) + 1;
  
  const quarter = `Q${Math.floor(currentMonth / 3) + 1}`;
  
  console.log(`Current Quarter: ${quarter}`);
  console.log(`Days left in Quarter: ${daysLeft}`);
  console.log(`Total Days in Quarter: ${daysInQuarter}`);
};

getCurrentQuarter();

*/
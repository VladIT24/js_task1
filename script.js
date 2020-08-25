let money = prompt("Your budget for mounth?");
let time = prompt("Type date in format YYYY-MM-DD");

let response1 = prompt("Type necessary state of expenses in this mounth: ");
let response2 = prompt("How much? ");

let appData = {
    budget : money,
    timeData : time,
    expenses : {
        response1 : response2
    },
    optionalExpenses : {},
    income : [],
    savings: false
};

alert(appData.budget);




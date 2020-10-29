$(document).ready(function(){

const measure = false;

let hour24 = moment().format('H');
let hour12 = moment().format('h');


const m = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(m.toString());

const day = moment().format('ll');
console.log(day);

let $timeHeader = $('#currentDay')
$timeHeader.text(day)

const saveIcon ="save-regular.svg"
console.log(saveIcon)

let savedPlans = JSON.parse(localStorage.getItem("savedPlans"))
consolelog(savedPlans)
if (savedPlans !== null) {
    planText = savedPlans;
}

let $rowDiv = ('<div>');
$rowDiv.addClass('row');



});
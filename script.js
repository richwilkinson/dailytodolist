$(document).ready(function(){

const measure = false;
//Time kept in console log
const m = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(m.toString());
//number of hour 
let hour24 = moment().format('H');
console.log(hour24);
let hour12 = moment().format('h');
console.log(hour12);
//for indexing 
if (measure) {
    hour24 = 13;
    hour12 = 1;
}
//empty variable for saved plans
let planText;
//day and time for header
const day = moment().format('ll');
console.log(day);
//attaches date to header
let $timeHeader = $('#currentDay')
$timeHeader.text(day);


//const saveIcon = 'save-regular.svg';
//console.log(saveIcon);

//pulls any plans that were saved
let savedPlans = JSON.parse(localStorage.getItem("savedPlans")) || [];
console.log(savedPlans)

if (savedPlans !== null) {
    planText = savedPlans;
}

//selects id plans container
let $plansDiv = $('#plans-container');
$($plansDiv).empty();
console.log($plansDiv);

//loop that creates hours for schedule
for (let hour = 9; hour <= 17; hour++) {
console.log(hour)
let index = hour - 9;
console.log(index)

//creates div for rows
let $rowDiv = document.createElement('div');
$($rowDiv).addClass('row');
$($rowDiv).attr('hour-index', hour);
console.log($rowDiv);

//creates column for time display
let $colTimeDiv = document.createElement('div');
$($colTimeDiv).addClass('col-s-2');

//creates element for time display on html
const $timeSpan = document.createElement('span');
$($timeSpan).attr('class','time-block');
$($timeSpan).attr('class','hour');

//asigns time 'am' or 'pm'
let shownTime = 0;
let ampm ="ampm";
if (hour > 12) {
    shownTime = hour - 12;
    ampm = 'pm';
} else {
    shownTime = hour;
    ampm = 'am';
}
console.log(shownTime);

//creates text to display in time box
$($timeSpan).text(`${shownTime} ${ampm}`);
console.log($timeSpan);

//appends time box to row
$rowDiv.append($colTimeDiv);
$colTimeDiv.append($timeSpan);

//creating text input area for plans
let $dailySpan = document.createElement('input');
$($dailySpan).attr('id', `input-${index}`);
$($dailySpan).attr('hour-index', index);
$($dailySpan).attr('type','text');
$($dailySpan).attr('class','dailyStuff');

//assigning index for each input
$($dailySpan).val(planText[index]);
console.log($dailySpan);

//creating column for plan text area
let $colDailyDiv = document.createElement('section');
$($colDailyDiv).addClass('col-s-8');

//appending column onto row and input into column
$rowDiv.append($colDailyDiv);
$($colDailyDiv).append($dailySpan);

//creating save area div
let $colSaveDiv = document.createElement('div');
$($colSaveDiv).addClass('col-s-2');

//creating save button element
let $saveBtn = document.createElement('button');

//styling button
$($saveBtn).attr('id', `saveid-${index}`);
$($saveBtn).attr('save-id', index);
$($saveBtn).attr('class', "far fa-save saveBtn");
console.log($saveBtn);

//appending button onto column and then onto row
$rowDiv.append($colSaveDiv);
$colSaveDiv.append($saveBtn);

$($plansDiv).append($rowDiv);

};

//function for changing of row colors according to time
rowColors = (_$index,hour) => {
console.log("rowColor ", hour24, hour);
if (hour < hour24) {
console.log("lessThan");
$(input).addClass('.present')
} else if (hour > hour24) {
    console.log(greaterThan);
    $(input).addClass('.future')
} else {
    console.log('equal');
    $(input).addClass('.past');
};   
};

//event listener for save button
$("button").click (function(event)  {
    event.preventDefault();
    let $index = $(this).attr('save-id');
    let $inputId = '#input-'+$index;
    let $value = $($inputId).val();

    planText[$index] = $value;
    console.log('value ', $value);
    console.log('index ', {$index});

    localStorage.setItem("savedPlans", JSON.stringify(planText));

});









});
var today = moment();
var eventInput1 = $(".description1")
var eventInput2 = $(".description2")
var eventInput3 = $(".description3")
var eventInput4 = $(".description4")
var eventInput5 = $(".description5")
var eventInput6 = $(".description6")
var eventInput7 = $(".description7")
var eventInput8 = $(".description8")
var eventInput9 = $(".description9")

// hour 1

var hour1 = $("#hour1");
var Input1 = hour1.val();  
var saveBtn1 = $(".saveBtn1")

// hour 2

var hour2 = $("#hour2");
var Input2 = hour1.val();
var saveBtn2 = $(".saveBtn2")
// hour 3

var hour3 = $("#hour3");
var Input3 = hour3.val();
var saveBtn3 = $(".saveBtn3")

// hour 4

var hour4 = $("#hour4");
var Input4 = hour4.val();
var saveBtn4 = $(".saveBtn4")

// hour 5

var hour5 = $("#hour5");
var Input5 = hour5.val();
var saveBtn5 = $(".saveBtn5")

// hour 6

var hour6 = $("#hour6");
var Input6 = hour6.val();
var saveBtn6 = $(".saveBtn6")

// hour 7

var hour7 = $("#hour7");
var Input7 = hour7.val();
var saveBtn7 = $(".saveBtn7")

// hour 8

var hour8 = $("#hour8");
var Input8 = hour8.val();
var saveBtn8 = $(".saveBtn8")

// hour 9

var hour9 = $("#hour9");
var Input9 = hour9.val();
var saveBtn9 = $(".saveBtn9")




$("#currentDay").text(today.format("MMM Do, YYYY"));

$(".hour").text(today.format("hA"));
$("#hour2").text(today.format("hA"));

// Hour 1 commands

function showInput1() {
    localStorage.setItem('givenInput1', Input1)};

saveBtn1.on('click', function(){
    var Input1=eventInput1.val();
    localStorage.setItem('givenInput1', Input1)});

function getInput1() {
    var userTask1 = localStorage.getItem('givenInput1'); 
    // Input1.textcontent = localStorage.getItem('givenInput');
    hour1.attr("placeholder", userTask1)}


// hour 2 commands


function showInput2() {
    localStorage.setItem('givenInput2', Input2)};

saveBtn2.on('click', function(){
    var Input2=eventInput2.val();
    localStorage.setItem('givenInput2', Input2)});

function getInput2() {
    var userTask2 = localStorage.getItem('givenInput2'); 
    // Input1.textcontent = localStorage.getItem('givenInput');
    hour2.attr("placeholder", userTask2)}


// hour 3 commands


function showInput3() {
    localStorage.setItem('givenInput3', Input3)};

saveBtn3.on('click', function(){
    var Input3=eventInput3.val();
    localStorage.setItem('givenInpu3', Input3)});

function getInput3() {
    var userTask3 = localStorage.getItem('givenInput3'); 
    // Input1.textcontent = localStorage.getItem('givenInput');
    hour3.attr("placeholder", userTask3)}


// hour 4 commands


function showInput4() {
    localStorage.setItem('givenInput4', Input4)};

saveBtn4.on('click', function(){
    var Input4=eventInput4.val();
    localStorage.setItem('givenInput4', Input4)});

function getInput4() {
    var userTask4 = localStorage.getItem('givenInput4'); 
    // Input1.textcontent = localStorage.getItem('givenInput');
    hour4.attr("placeholder", userTask4)}

// hour 5 commands


function showInput5() {
    localStorage.setItem('givenInput5', Input5)};

saveBtn5.on('click', function(){
    var Input5=eventInput5.val();
    localStorage.setItem('givenInput5', Input5)});

function getInput5() {
    var userTask5 = localStorage.getItem('givenInput5'); 
    // Input1.textcontent = localStorage.getItem('givenInput');
    hour5.attr("placeholder", userTask5)}


// hour 6 commands


function showInput6() {
    localStorage.setItem('givenInput6', Input6)};

saveBtn6.on('click', function(){
    var Input6=eventInput6.val();
    localStorage.setItem('givenInput6', Input6)});

function getInput6() {
    var userTask6 = localStorage.getItem('givenInput6'); 
    // Input1.textcontent = localStorage.getItem('givenInput');
    hour6.attr("placeholder", userTask6)}

// hour 7 commands


function showInput7() {
    localStorage.setItem('givenInput7', Input7)};

saveBtn7.on('click', function(){
    var Input7=eventInput7.val();
    localStorage.setItem('givenInput7', Input7)});

function getInput7() {
    var userTask7 = localStorage.getItem('givenInput7'); 
    // Input1.textcontent = localStorage.getItem('givenInput');
    hour7.attr("placeholder", userTask7)}


// hour 8 commands


function showInput8() {
    localStorage.setItem('givenInput8', Input8)};

saveBtn8.on('click', function(){
    var Input8=eventInput8.val();
    localStorage.setItem('givenInput8', Input8)});

function getInput8() {
    var userTask8 = localStorage.getItem('givenInput8'); 
    // Input1.textcontent = localStorage.getItem('givenInput');
    hour8.attr("placeholder", userTask8)}


// hour 9 commands


function showInput9() {
    localStorage.setItem('givenInput9', Input9)};

saveBtn9.on('click', function(){
    var Input9=eventInput9.val();
    localStorage.setItem('givenInput9', Input9)});

function getInput9() {
    var userTask9 = localStorage.getItem('givenInput9'); 
    // Input1.textcontent = localStorage.getItem('givenInput');
    hour9.attr("placeholder", userTask9)}





var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();
    localStorage.setItem(time, schedule);
});















getInput1 ();
getInput2 ();
getInput3 ();
getInput4 ();
getInput5 ();
getInput6 ();
getInput7 ();
getInput8 ();
getInput9 ();
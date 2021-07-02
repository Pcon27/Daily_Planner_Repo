var today = moment();
var saveBtn = $(".saveBtn")
var eventInput = $(".description")
var Input1 = eventInput.val();  
var saved = $("#saved");


$("#currentDay").text(today.format("MMM Do, YYYY"));

$(".hour").text(today.format("hA"));
$("#hour2").text(today.format("hA"));

function showInput() {
    localStorage.setItem('givenInput', Input1)};

saveBtn.on('click', function(){
    var Input1=eventInput.val();
    localStorage.setItem('givenInput', Input1)});


function getInput() {
    var userTask = localStorage.getItem('givenInput'); 
    Input1.textcontent = localStorage.getItem('givenInput');
    // saved.text("placeholder", userTask)

}


var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();
    localStorage.setItem(time, schedule);
});

getInput ();
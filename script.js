
var saveBtnsEl = $(".saveBtns");
var row1El = $("#row1");
var row2El = $("#row2");
var row3El = $("#row3");
var row4El = $("#row4");
var row5El = $("#row5");
var row6El = $("#row6");
var row7El = $("#row7");
var row8El = $("#row8");
var row9El = $("#row9");


$(document).ready(function () {
    var $scope = {};
    $scope.date = new Date();
    $scope.moment = moment($scope.date);
    var hr = "h";
    var time = "h:mm:ss";


    // DateTime Format
    $('#currentDay').html($scope.moment.format('MMMM Do h:mm:ss a'));



    if (hr === 9) {
        $(row1El).css("background-color", "green");
    }
    else if (hr > 9) {
        $(row1El).css("background-color", "blue");
    }
    else {
        $(row1El).css("background-color", "red");
    };
    if (hr === 10) {
        $(row2El).css("background-color", "green");
    }
    else if (hr > 10) {
        $(row2El).css("background-color", "blue");
    }
    else {
        $(row2El).css("background-color", "red");
    };
    if (hr === 11) {
        $(row3El).css("background-color", "green");
    }
    else if (hr > 11) {
        $(row3El).css("background-color", "blue");
    }
    else {
        $(row3El).css("background-color", "red");
    };
    if (hr === 12) {
        $(row4El).css("background-color", "green");
    }
    else if (hr > 12) {
        $(row4El).css("background-color", "blue");
    }
    else {
        $(row4El).css("background-color", "red");
    };
    if (hr === 1) {
        $(row5El).css("backgruond-color", "green");
    }
    else if (hr >= 9 && hr <= 12) {
        $(row5El).css("background-color", "blue");
    }
    else {
        $(row5El).css("background-color", "red");
    };
    if (hr === 2) {
        $(row6El).css("backgruond-color", "green");
    }
    else if (hr >= 9 && hr <= 12) {
        $(row6El).css("background-color", "blue");
    }
    else if (hr === 1) {
        $(row6El).css("background-color", "blue");
    }
    else {
        $(row6El).css("background-color", "red");
    };
    if (hr === 3) {
        $(row7El).css("backgruond-color", "green");
    }
    else if (hr >= 9 && hr <= 12) {
        $(row7El).css("background-color", "blue");
    }
    else if (hr < 3) {
        $(row7El).css("background-color", "blue");
    }
    else {
        $(row7El).css("background-color", "red");
    };
    if (hr === 4) {
        $(row8El).css("backgruond-color", "green");
    }
    else if (hr >= 9 && hr <= 12) {
        $(row8El).css("background-color", "blue");
    }
    else if (hr < 4) {
        $(row8El).css("background-color", "blue");
    }
    else {
        $(row8El).css("background-color", "red");
    };
    if (hr === 5) {
        $(row9El).css("backgruond-color", "green");
    }
    else if (hr >= 9 && hr <= 12) {
        $(row9El).css("background-color", "blue");
    }
    else if (hr < 5) {
        $(row9El).css("background-color", "blue");
    }
    else {
        $(row9El).css("background-color", "red");
    };



    $(".input-group input[type=text]").each(function() {
        var name = $(this).attr("name")
        $(this).val(localStorage.getItem(name))
    });

    //SAVE
    $(saveBtnsEl).click(function () {
        var id = $(this).attr("name");
        var inputVal = $("Input[name=" + id + "]").val();
        var CurrentDate = moment().format('h:mm:ss a');

        console.log(id);
        console.log(inputVal);
        if (inputVal == "") {
            $('.alerts').text('Please enter info first');
        }
        else {
            localStorage.setItem(id, inputVal + " -------- " + CurrentDate);
            $("Input[name=" + id + "]").val(inputVal + " -------- " + CurrentDate)
        };
    });



});

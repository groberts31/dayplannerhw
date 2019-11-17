
var infoBoxEl = document.querySelector(".infoBox").value;

$(".saveBtns").click(function () {
    // $(".infoBox").localStorage.setItem();
    console.log("Yes it works");
});

$(document).ready(function () {
    var $scope = {};
    $scope.date = new Date();
    $scope.moment = moment($scope.date);

    // DateTime Format
    $('#currentDay').html($scope.moment.format('MMMM Do h:mm:ss a'));

})
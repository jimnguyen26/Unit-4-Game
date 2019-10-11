
$(document).ready(function() {
console.log('waddup');

var random=Math.floor(Math.random() * 101 + 19)

var btnSecondary1= Math.floor(Math.random() * 11 +1)
var btnSecondary2= Math.floor(Math.random() * 11 +1)
var btnSecondary3= Math.floor(Math.random() * 11 +1)
var btnSecondary4= Math.floor(Math.random() * 11 +1)

var total= 0;
var wins= 0;
var losses= 0;

$('#randomNumber').text(random);
$('.wins').text(wins);
$('.losses').text(losses);
$('.total').text(total);

function reset() {
random=Math.floor(Math.random() * 101 + 19);
};
console.log(random);

btnSecondary1= Math.floor(Math.random() * 11 + 1);
console.log(btnSecondary1);
btnSecondary2= Math.floor(Math.random() * 11 + 1);
console.log(btnSecondary2);
btnSecondary3= Math.floor(Math.random() * 11 + 1);
console.log(btnSecondary3);
btnSecondary4= Math.floor(Math.random() * 11 + 1);
console.log(btnSecondary4);
});



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
var score= 0;

$('#randomNumber').html(random);
$('.wins').html(wins);
$('.losses').html(losses);
$('#score').html(score);

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

function winning(){
    alert("You win!");
    wins++;
    $('.wins').html(wins);
    reset('#score');
}

function losing() {
    alert("You lose!");
    losses++;
    $('.losses').html(losses);
    reset('#score');
}

$('.btnSecondary1').on('click', function() {
total = total + btnSecondary1;
console.log(total);
$('#score').html(total);
if (total === random) {
    winning();
}
    else if (total > random) {
        losing();
    }
});

$('.btnSecondary2').on('click', function() {
total = total + btnSecondary2;
console.log(total);
$('#score').html(total);
if (total === random) {
    winning();
}
    else if (total > random) {
        losing();
    }
});

$('.btnSecondary3').on('click', function() {
total = total + btnSecondary2;
console.log(total);
$('#score').html(total);
if (total === random) {
    winning();
    }
    else if (total > random) {
        losing();
    }
});
$('.btnSecondary4').on('click', function() {
total = total + btnSecondary2;
console.log(total);
$('#score').html(total);
if (total === random) {
    winning();
    }
    else if (total > random) {
        losing();
    }
});
});
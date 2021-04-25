console.log('Script Loaded');

var inputtext = document.getElementById('input-text');

var clearall = document.getElementById('clearall-btn');
var clearone = document.getElementById('clear-btn');

function buttonclicked(button){
    inputtext.value += button;
};

clearone.addEventListener('click', function(){
    inputtext.value = inputtext.value.slice(0,inputtext.value.length-1);
});

equals.addEventListener('click', function(){
    if(inputtext.value === ''){
        alert('Enter Numbers to Calculate');   
    } else {
        var numEntered = inputtext.value;
        var result = eval(numEntered);
        inputtext.value = result;
    }
});

one.addEventListener('click', function(){
    buttonclicked(1);
});
two.addEventListener('click', function(){
    buttonclicked(2);
});
three.addEventListener('click', function(){
    buttonclicked(3);
});
four.addEventListener('click', function(){
    buttonclicked(4);
});
five.addEventListener('click', function(){
    buttonclicked(5);
});
six.addEventListener('click', function(){
    buttonclicked(6);
});
seven.addEventListener('click', function(){
    buttonclicked(7);
});
eight.addEventListener('click', function(){
    buttonclicked(8);
});
nine.addEventListener('click', function(){
    buttonclicked(9);
});

div.addEventListener('click', function(){
    buttonclicked("/");
});
mul.addEventListener('click', function(){
    buttonclicked("*");
});
sub.addEventListener('click', function(){
    buttonclicked("-");
});
add.addEventListener('click', function(){
    buttonclicked("+");
});
zero.addEventListener('click', function(){
    buttonclicked(0);
});

clearall.addEventListener('click', function(){
    inputtext.value = '';
});

var pointbtn = document.getElementById('point-btn');
pointbtn.addEventListener('click', function(){
    buttonclicked('.');
});
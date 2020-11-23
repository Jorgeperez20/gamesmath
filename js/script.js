var numAle = Math.floor(Math.random() * (10 - 1)) + 2;
document.getElementById("numberone").innerHTML = numAle;
var numAle1 = Math.floor(Math.random() * (10 - 1)) + 2;
document.getElementById("numbertwo").innerHTML = numAle1;

var button = document.getElementById("btn").addEventListener("click", function(evt){
    var result = parseInt(numAle) * parseInt(numAle1);
    var input = document.getElementById("result").value;
    
    if(input == result){
        document.getElementById("message").innerHTML = "<p class='display-3 text-success'>Correcto</p><a href='javascript:location.reload()' class='btn btn-primary'>Siguiente</a>";
    }
    else{
        document.getElementById("message").innerHTML = "<p class='display-3 text-danger'>Incorrecto</p>";
    }
});
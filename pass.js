var pass = document.querySelector("#sub");
var upper = document.querySelector("#upper");
var lower = document.querySelector("#lower");
var numb = document.querySelector("#num");
var sym = document.querySelector("#sym");
var length = document.querySelector("#length");
var j="", k="", l="", m="";
var password = document.querySelector(".pass");


pass.addEventListener("click", function(){
    password.textContent = UpperlLetterGenerate(length.value);

})

function UpperlLetterGenerate(num) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefjhijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "&/'/-)=$*^:!;,.~{#|[`\^@]}·"
    var res = "";
    for(var i=0; i<num; i++){
        if(upper.checked){
            j = uppercase;
        } else {j="";}
        if(lower.checked){
            k = lowercase;
        } else {k="";}
        if(numb.checked){
            l = numbers;
        } else {l="";}
        if(sym.checked){
            m = symbols;
        } else {m="";}
        var res = (j+k+l+m)[Math.floor(Math.random() * (j+k+l+m).length)] + res;
    }
    return res;
  }
  
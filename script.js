let displayResult = document.getElementById("displaytext")

let calculate = (num) =>{
    displayResult.value += num;
}


let Output = () => {
   try {
       displayResult.value = eval(displayResult.value)
   }
   catch(err) {
       alert("OOPS PLEASE INPUT A VALID NUMBER");
   }
}

function clr() {
    displayResult.value = "";
}

function del() {
    displayResult.value= displayResult.value.slice(0, -1);
}
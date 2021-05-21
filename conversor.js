const button = document.getElementById("button");
const text = document.getElementById("decimal");
const container = document.getElementById("result");
const h2 = document.createElement("h2");

function conversor(decimal) {
  let binario = 0;
  let dec = decimal;
  let array2 = [];

  if (decimal == 0) {
    binario = 0;
  }
  if (decimal == 1) {
    binario = 1;
  }
  if(decimal > 1 ){
    while (decimal >= 2) {
      let sobras = decimal % 2;
      decimal = Math.floor(decimal / 2);
      if (decimal == 1) {
        array2.push(sobras);
        array2.push(1);
      } else {
        array2.push(sobras);
      }
      
    }
    array2.reverse();
    binario = array2.join("");
  }

  h2.innerText = `O número ${dec} em binário é ${binario}`;

  container.appendChild(h2);
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  conversor(text.value);
});

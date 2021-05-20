
const button = document.getElementById('button')
const text = document.getElementById('decimal').value;
const container = document.getElementById('result')
const h2 = document.createElement('h2')



function conversor(decimal){
  console.log(Number(text));
 
  
  
  
  
  let dec = decimal
  let array2 = []

  while (decimal >= 2) {
    let sobras = decimal % 2
    decimal = Math.floor(decimal/2)
      if(decimal == 1){
        array2.push(sobras)
        array2.push(1)
      } else{
        array2.push(sobras)
      }
  
  }
  array2.reverse()

  let binario = array2.join('')
 
  

  h2.innerText = `O número ${dec} em binário é ${binario}`
  
  container.appendChild(h2)

  
 }

 button.addEventListener('click',(e)=>{
  e.preventDefault()
  conversor(text)
 }
 )



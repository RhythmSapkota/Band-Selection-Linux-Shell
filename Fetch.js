
//const firsthead = document.querySelector("h1");
//firsthead.textContent = "Hello world!";


let mButton = document.querySelector("button");
let firsthead = document.querySelector("h1");

function multiply(num1, num2) {
    let result = num1 * num2;
        num1 = document. getElementById("firstNumber"). value;
        num2 = document. getElementById("secondNumber"). value;
        document. getElementById("result"). innerHTML = num1 * num2;
        
    return result;
  }

function setUserName() {
  const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("ame", myName);
      firsthead.textContent = `Hello World, ${myName}`;
    }
  }

if (!localStorage.getItem("ame")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("ame");
    firsthead.textContent = `Hello World, ${storedName}`;
  }
    mButton.onclick = () => {
      setUserName();
  };
//const Secondppar = docment.querySelector("a");
//Secondppar.link = "www.google.com";

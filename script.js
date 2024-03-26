// const body = document.body;
// const div = document.createElement("div");
// div.innerText = "Hello World";
// body.append(div);


// // div.textContent = "hey"
// body.appendChild(div);

// const buttonEl = document.getElementById('master')
// buttonEl.addEventListener('click', addFunction)

//  function addFunction(){
//      buttonEl.classList.add('button')
//   }



let heading = document.getElementById("head");
// console.log(heading);

let sect = document.createElement("div");// declaring a variable sect with div
// sect = document.createElement("p");
sect.innerHTML = "I love Raymond with all my heart";// adding the string to the div, and in our console it will be displayed as a div
let bodyElement = document.querySelector("body");// Accessing the body element from the document
bodyElement.appendChild(sect);// adding our sect to the body element which we have accessed 
let ray = document.createElement("p");// creating a paragraph element with a variable ray
ray.innerHTML = "all that glitters is not gold"// adding the string to our ray 
bodyElement.appendChild(ray);// this line means attaching our element to the document 


//UPDATING OUR PARAGRAPH 
ray.innerText = "beauty";// we have updated our paragraph to beauty
ray.style.color = "red";// changing the color of our p
//DELETING
let wrongPara = document.querySelector("h2");// accessing the string 
wrongPara.remove();// this code removes the string 
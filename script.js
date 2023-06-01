// 1. Store each input as a variable (there should be two input boxes - one for each answer) [x ]
// 2. Store the button as a variable (there should be ONE button) [ x]
// 3. Create a click handler [ ]
// 4. Use the .value property to store user input [ ]
// 5. Add console.log to test if the code is being stored [ ]
// 6. Write a conditional statement with else-if to include all 4 possible results [ ]
// 7. Write a compound conditional statement that uses input from both questions to provide the user with a result [ ]
// 8. Write a sentence using string concatenation using the data stored in the user input variables [ ]
// 9. Add a next level feature! [ ]
    

let submitButton=document.querySelector(".submitButton");
let result=document.querySelector(".result");
let resultimg=document.querySelector(".resultimg"); 

submitButton.onclick=function(){
let input1=document.querySelector(".input1").value;
let input2=document.querySelector(".input2").value;

  if ((input1 ==="spring/summer ") && input2==="fire/earth sign "){
    result.innerHTML="Because you picked " + input1 + " and " + input2 + " you are the color yellow! ";
    resultimg.src= "https://cdn11.bigcommerce.com/s-3uewkq06zr/images/stencil/1280x1280/products/146/385/lemon_yellow__63669.1494606073.png?c=2"
  }

else if ((input1 ==="fall/winter ") && input2==="fire/earth sign "){
   result.innerHTML="Because you picked " + input1 + " and " + input2 + " you are the color red! "; 
  resultimg.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Solid_red.svg/512px-Solid_red.svg.png?20150316143248"
}

else if ((input1 ==="spring/summer ") && input2==="air/water sign "){
   result.innerHTML="Because you picked " + input1 + " and " + input2 + " you are the color blue! ";
  resultimg.src="https://www.collinsdictionary.com/images/full/royalblue_372859843_1000.jpg"
}

else if ((input1 ==="fall/winter ") && input2==="air/water sign "){
   result.innerHTML="Because you picked " + input1 + " and " + input2 + " you are the color purple! ";
  resultimg.src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVycGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
}

  else {
    result.innerHTML="Try again!"
    
  }


  
};
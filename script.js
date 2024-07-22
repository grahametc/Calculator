let output = document.getElementById('output');

function clr(){
  output.value = '';
  scrollRight();
}

function del(){
    output.value = output.value.substring(0, output.value.length-1);
    scrollRight();
}

function displayInput(input){
  if(output.value == "Error" || output.value == "Infinity"){
    clr();
  }
    output.value += input;
    console.log((output.value).length);
    scrollRight();
}



function calculate(){
  try{
    output.value = eval(output.value);
  } catch(error){
    output.value = "Error";
  }
}

function scrollRight(){
  output.scrollLeft = output.scrollWidth;
}
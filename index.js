function onPress(value){
  let number = document.getElementById("number");
  number.value += value;
}

function ResultShow(){
  document.getElementById("number").value =
    eval(document.getElementById("number").value);
}

function clearInput(){
  document.getElementById("number").value = "";
}

function clearOne(){
  let input = document.getElementById("number");
  input.value = input.value.slice(0, -1);
}

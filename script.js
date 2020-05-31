function start(){
  var count = 0
};

function copy(){

};
function alert(){
  alert("Hello world");
  document.write("こんにちは！！<br>");
};
document.getElementById("text-button").onclick = function() {
  document.getElementById("text").innerHTML = "クリックされた！";
};

function OnButtonClick(idname,name) {
  var count = 0;
  target = document.getElementById("output");

  var getresult = document.getElementById(idname).value; //値の取得
  var text = getresult + "  "+name +"  ";
  //target.innerHTML = text;
  inputform.input_txt.value=text; //フォームに表示

};

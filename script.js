function start(){

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
var count = 0;
function OnButtonClick() {

  target = document.getElementById("output");
  target.innerHTML = "打てました！！";
  count += 1;
};
function getValue(idname){
	// value値を取得する
	var result = document.getElementById(idname).value;
	// Alertで表示する
	alert("value値は「" + result + "」です");
  }
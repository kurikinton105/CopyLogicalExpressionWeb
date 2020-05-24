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

function OnButtonClick(idname) {
  var count = 0;
  target = document.getElementById("output");
  var getresult = document.getElementById(idname).value;
  target.innerHTML = "打てました！！"+ "π " + count+  " "+ getresult;
  document.sample.value = getresult;
  //document.form_003.textBox_003.value = text;
  count += 1;
};

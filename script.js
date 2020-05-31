function start(){
  var count = 0
};

function copy(){

};
function alert(){
  alert("Hello world");
  document.write("こんにちは！！<br>");
};

// ボタンをクリックした時の反応
function OnButtonClick(idname,name) {
  target = document.getElementById("output");

  var getresult = document.getElementById(idname).value; //値の取得
  var text = getresult + "  "+name +"  ";
  //target.innerHTML = text;
  inputform.input_txt.value=text; //フォームに表示

};

function ClearOnButtonClick(idname){
  var text = "";
  inputform.input_txt.value=text; //フォームに表示
  //結果のクリア
  target = document.getElementById("outputCopy");
  target.innerHTML = "";
}

//クリップボードにテキストをコピー
function CopyOnButtonClick(idname){
  var getresult = document.getElementById(idname).value; //値の取得
  //var textarea = document.getElementsByTagName(idname)[0];
  target = document.getElementById("outputCopy");
  //コピー
  input_txt.select();
  document.execCommand("copy");

  target.innerHTML = getresult + "　をコピーしました！";
};


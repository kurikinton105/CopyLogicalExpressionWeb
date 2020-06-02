process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

var input_text = ' ((A → B) → C) ';

var j = 0;
//console.log(input_text.length);
var kakko_count= 0;
var count_right = 0;
for(i =0;i<input_text.length;i++){ //例外処理
    if(input_text[i] == '('){kakko_count +=1};
    if(input_text[i] == ')'){kakko_count -=1};
    
}
input_text = input_text.replace(/ /g,""); //空白を削除
//console.log(input_text);

if(kakko_count!= 0){
    console.log("カッコの数が合っていません")
}else{
    // →を消去！
    var length = input_text.length;
    var i =0;
    while(1){
        if(i == length){break;}
        //console.log(input_text[i])
        if(input_text[i] == '→'){ // →が見つかったとき
            console.log(input_text,input_text.length);
            console.log("→",i);
            var find = i;
            var j= i;
            var left;
            var right;
            var count = 1;
            while(1){ // 右側を見つける
                if(count === 0 || j == (input_text.length-1)){
                    right = input_text.substr(i+1,j-i);
                    console.log("右",i,j);
                    //console.log(left);
                    break;
                }
                if(input_text[j]=='('){
                    count +=1; // 左が見つかったらプラス１
                }else if(input_text[j]==')'){
                    count -= 1;
                }
                //console.log(input_text[i+j],count);
                j +=1;
            }
        
            // 左側を見つける
            j=0;
            console.log("find",find,i);
            count =1;
            while(1){
                if(count === 0 || j=== 0){
                    left = input_text.substr(j,i);
                    console.log("左",i,j);
                    //console.log(right);
                    break;
                }
                if(input_text[i-j]=='('){
                    count -=1; // 左が見つかったらマイナス１
                }else if(input_text[i-j]==')'){
                    count += 1;
                }
                //console.log(input_text[i+j],count);
                j +=1;
            }
            console.log("left:",left,"right:",right);
            var text_before = left+"→"+right;
            var change_text = "(¬" + left +")"+ "∨" + right;
            //input_text.replace(text_before,change_text);
            //console.log(text_before);
            //console.log(change_text);
            input_text= input_text.replace(text_before,change_text);
            length = input_text.length;
            //console.log(length);
        }
        length = input_text.length;
        i+=1;
    }
    console.log("→の削除",input_text);
    
    // ドモルガンを行う！！
    var domorugan;
    for(i =0;i<input_text.length;i++){
        if(input_text[i-1] == '¬' & input_text[i] == "("){
            count = 1;
            j=i;
            while(1){
                if(count === 0 || j=== input_text.length){
                    domorugan = input_text.substr(i+2,j-(i+2)-1);
                    break;
                }
                if(input_text[i+j]=='('){
                    count +=1; // 左が見つかったらプラス１
                }else if(input_text[i+j]==')'){
                    count -= 1;
                }
                j+=1;
            }
            //console.log(i+2,j);
            console.log("ドモルガンの内容",domorugan);
            //右と左を特定
            
            var domorugan_after;
            /***
            var k = str.indexOf("∧",0);
            if(k!= -1){
                domorugan_after = "¬"+ domorugan.substr(0,k) + ")∨(¬" + domorugan.substr(k+1,domorugan.length) + ")";
                input_text = input_text.replace(domorugan,domorugan_after);
            }else{
                var k = str.indexOf("∨",0);
                if(k!= -1){
                    domorugan_after = "¬"+ domorugan.substr(0,k) + ")∨(¬" + domorugan.substr(k+1,domorugan.length) + ")";
                    input_text = input_text.replace(domorugan,domorugan_after);
                }
            }
            console.log(k);
            
            input_text = input_text.replace(domorugan,domorugan_after);
            
            ***/
            for(k=0;k<domorugan.length;k++){
                if(domorugan[k] == "∧"){
                    domorugan_after =  domorugan.substr(0,k) + ")∨(¬" + domorugan.substr(k+1,domorugan.length) + ")";
                    input_text = input_text.replace(domorugan,domorugan_after);
                    //console.log(domorugan_after);
                    //console.log("ドモルガン",input_text);
                }
                if(domorugan[k] == "∨"){
                    domorugan_after =  domorugan.substr(0,k) + ")∧(¬" + domorugan.substr(k+1,domorugan.length) + ")";
                    input_text = input_text.replace(domorugan,domorugan_after);
                    //console.log(domorugan_after);
                    //console.log("ドモルガン",input_text);
                }
                
            }
            //console.log(input_text);
        }
    }
    console.log("ドモルガン",input_text);
    // 分配法則を使う
    for(i =0;i<input_text.length;i++){
        if(input_text[i] == '¬' & input_text[i+1] == "("){
            
        }
    }
    
    //否定を削除
    var ans = input_text;
    for(i =0;i<input_text.length;i++){
        //if(input_text[i])
        ans[j] = input_text[i]
    }
}


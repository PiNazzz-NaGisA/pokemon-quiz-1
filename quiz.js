var quiz=[
  ["イーブイの進化系統でこおりタイプはどれ？","グレイシア","ブラッキー","リーフィア","ニンフィア",1],
  ["ポケモンXYの男主人公の名前はなに？","セレナ","コウタ","カルム","プラターヌ",3],
  ["ポケモンXYで3番目に戦うジムリーダが使うポケモンのタイプは？","むしタイプ","かくとうタイプ","いわタイプ","くさタイプ",2],
  ["ポケモンXYのポケモン図鑑であるカロス図鑑に乗っているポケモンの数は何匹でしょう？","326匹","454匹","527匹","636匹",2]
];
var counter = 0;
var score = 0;
var end = false;

function set(){
  var order = document.getElementById("order");
  var question = document.getElementById("question");

  order.innerHTML = "【第" + (counter + 1) +"問】";
  question.innerHTML = quiz[counter][0];

  for(var i = 1; i < 5; i++){
    var answer = document.getElementById("answer" + + i);
    answer.innerHTML = quiz[counter][i];
  }
}

function judge(num){
  if(end){
    return;
  }
  var result = document.getElementById("result");
  var answer = quiz[counter][5];
  if(answer == num){
    result.innerHTML = "正解！";
    score += 1;
  }
  else{
     result.innerHTML = "不正解...";
  }
  if(counter == quiz.length - 1){
    result.innerHTML += quiz.length + "問中" + score + "問正解!";
    end = true;
  }
  else{
    counter += 1;
    set();
  }
}
var answer = quiz[0][5];
if(answer == num){
  result.innerHTML = "正解！";
}
else{
  result.innerHTML = "不正解...";
}
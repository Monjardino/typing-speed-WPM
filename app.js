var actual_word = ""
var corrects = 0
var fails = 0

function checkWord(word, typed_word){

  if(word.trim().toLowerCase() == typed_word.trim().toLowerCase()){
    document.write("-=-" * 30);
    correct();

  }else{

    document.write("-=-" * 30);
    fail()

  }
}

function correct(){

  global corrects;
  corrects += 1;

}


function fail(){

  global fails;
  fails += 1;

}

function genNewWord(){

  var randomword = math.random(1, 66);
  return words[randomword];

}

document.write("-=-" * 30);
document.write("Typing Speed Test");
document.write("-=-" * 30);

document.write("[A] 30 Seconds ");
document.write("[B] 1 Minutes ");
document.write("[C] 3 Minutes ");

var timer = window.prompt("").trim().toUpperCase();
var start = window.prompt("Press (S) to Start ").toUpperCase();

if(start in "Ss"){

  document.write("3");
  setTimeout(1);
  document.write("2");
  setTimeout(1);
  document.write("1");
  setTimeout(1);
  document.write("Start");

  if(timer in "Aa"){

    var typing_time = 30;
    var end_time = Date.now() + typing_time;
    while(Date.now() < end_time){

      actual_word = genNewWord();
      document.write(actual_word);
      typed_word = window.prompt();
      checkWord(actual_word, typed_word);

    }
  }else if(timer in "Bb"){

    typing_time = 60;
    end_time = Date.now() + typing_time

  }
}

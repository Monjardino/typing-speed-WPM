words = {
1 : "ablity",
2 : "able",
3 : "about",
4 : "above",
5 : "accept",
6 : "according",
7 : "account",
8 : "alone",
9 : "agency",
10 : "arm",
11 : "animal",
12 : "air",
13 : "after",
14 : "anyone",
15 : "another",
16 : "apply",
17 : "answer",
18 : "attention",
19 : "around",
20 : "area",
21 : "article",
22 : "available",
23 : "baby",
24 : "back",
25 : "bad",
26 : "bag",
27 : "ball",
28 : "bank",
29 : "bar",
30 : "base",
31 : "beat",
32 : "beautiful",
33 : "become",
34 : "bed",
35 : "before",
36 : "begin",
37 : "between",
38 : "blood",
39 : "bilion",
40 : "buy",
41 : "box",
42 : "build",
43 : "bug",
44 : "call",
45 : "camera",
46 : "campaign",
47 : "cancer",
48 : "capital",
49 : "card",
50 : "car",
51 : "carrer",
52 : "chair",
53 : "center",
54 : "catch",
55 : "close",
56 : "city",
57 : "class",
58 : "company",
59 : "cup",
60 : "control",
61 : "dark",
62 : "day",
63 : "decide",
64 : "death",
65 : "develop",
66 : "detail",
}

var actual_word = "";
var corrects = 0;
var fails = 0;
var typed_word = document.getElementById("typed_wordinput");
var tirty = document.getElementById("start30");
var onemin = document.getElementById("start1");
var twomin = document.getElementById("start2");


function checkWord(word, typed_word){

  if(word.trim().toLowerCase() == typed_word.trim().toLowerCase()){
    correct();

  }else{
    fail()

  }
}

function correct(){
  corrects += 1;

}


function fail(){
  fails += 1;

}

function genNewWord(){

  var randomword = math.random(1, 66);
  return words[randomword];
}

if (tirty.onclick()){
  typing_time = 30;
  end_time = Date.now() + typing_time;
  while(Date.now() < end_time){
    genNewWord();
    checkWord();
    console.log(corrects + "Words in 30 seconds");
  }
}
if (onemin.onclick()){
  typing_time = 60;
  end_time = Date.now() + typing_time;
  while (Date.now( + typing_time)){
    genNewWord();
    checkWord();
    console.log(corrects + "WPM")
  }
}
if (onemin.onclick()){
  typing_time = 180;
  end_time = Date.now( + typing_time);
  while (Date.now( < end_time)){
    genNewWord();
    checkWord();
  }
}

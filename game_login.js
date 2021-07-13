var player1_name = localStorage.getItem("player_1");
var player2_name = localStorage.getItem("player_2");
var player_1_score  = 0;
var player_2_score  = 0;
var question_turn ="player1";
var answer_turn = "player2";

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;
document.getElementById("player_question").innerHTML = "question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn - " + player2_name;


function send(){
    hint = document.getElementById("hint").value ;
    get_word = document.getElementById("word").value ;
    word = get_word.toLowerCase();
    console.log(word);

    c1 = word.charAt(1);
    c2 = word.charAt(Math.floor(word.length/2));
    c3 = word.charAt(word.length - 1);

    replace_c1 = word.replace(c1,"_")
    replace_c2 = replace_c1.replace(c2,"_")
    replace_c3 = replace_c2.replace(c3,"_")
    console.log(replace_c3);

    question_word = "<h4 id='word_display'> Q " + replace_c3 + "</h>";
    input_box  = "<br> Answer : <input type='text' id='input_checkbox'>";
    hint_row = "<br><br><b style='color: red'>"+hint+"</b> ";
    check_buttton = '<br><br><br><button class="btn btn-info" onclick="check()"> check </button>'
    row = question_word +hint_row+ input_box + check_buttton ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("hint").value = "";
}

function check(){
    var get_answer = document.getElementById("input_checkbox").value ;
    var answer = get_answer.toLowerCase();
    if (answer == word){
        if (answer_turn == "player1"){
            player_1_score += 1;
            document.getElementById("player1_score").innerHTML = player_1_score;
        }
        else{
            player_2_score += 1;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
    }
    else{
        if (answer_turn == "player1"){
            player_1_score -= 1;
            document.getElementById("player1_score").innerHTML = player_1_score;
        }
        else{
            player_2_score -= 1;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
    }
    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn - " + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn - " + player1_name;
    }
    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn - " + player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn - " + player1_name;
    }
}

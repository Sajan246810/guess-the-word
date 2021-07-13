var player1_name,player2_name;

function login(){
    player1_name = document.getElementById("player_1_name_input").value ; 
    player2_name = document.getElementById("player_2_name_input").value ; 
    localStorage.setItem("player_1",player1_name);
    localStorage.setItem("player_2",player2_name);
    window.location = "game_page.html";
};
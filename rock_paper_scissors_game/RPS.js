const choices = ['R','P','S']

function run(){
    let user_choice = document.getElementById("ip").value.toUpperCase();
    let rand_index = Math.floor(Math.random()*choices.length)
    let comp_choice = choices[rand_index];
    if(choices.includes(user_choice)){
        if(user_choice === comp_choice){
            document.getElementById("result").innerHTML = "TIE";
        }
        else if((user_choice == 'R' && comp_choice == 'P')||(user_choice == 'P' && comp_choice == 'S')||(user_choice == 'S' && comp_choice == 'R')){
            document.getElementById("result").innerHTML = "Your Choice: "+user_choice+"<br>"+"LOST coz Computer chose: " + comp_choice ;
        }
        else{
            document.getElementById("result").innerHTML = "Your Choice: "+user_choice+"<br>"+"Hurray! you WON! Computer guessed:" + comp_choice ;
        }
    }
    else{
        document.getElementById("result").innerHTML = "Enter a valid Option between (R / P / S).";
    }
}



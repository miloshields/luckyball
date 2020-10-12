function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
// initialize quick pick variables 
var qp_balls = [0,0,0,0,0]
var qp_lucky_ball
//set values
for(i = 0; i < 5 ; i ++) {
  qp_balls[i] = getRandomInt(1, 49)
}
qp_lucky_ball = getRandomInt(1, 19)
//initalize inputted variables
  var in_balls
  var in_lucky_ball
//get prompted values
      var win_string = prompt("Enter winning numbers separated by a space.")
      in_lucky_ball = prompt("Enter lucky ball number")
      in_balls = win_string.split(" ")

        //do calculations
        var samecount = 0
            for(i = 0; i < 5; i++){
              for(j = 0; j < 5; j++){
                if (qp_balls[i] == in_balls[j])
                samecount++;
              }
            }
        var samelucky = 1
        if(qp_lucky_ball == in_lucky_ball){
          samelucky = 10
        }
        var prize_case = (samecount+1)*samelucky
        var prize_string = "0"
        switch (prize_case){
          case 10: 
            prize_string = "4"
            break;
          case 20:
            prize_string = "6"
            break;
          case 3:
            prize_string = "3"
            break;
          case 30:
            prize_string = "25"
            break;
          case 4:
            prize_string = "20"
            break;
          case 40:
            prize_string = "150"
            break;
          case 5:
            prize_string = "200"
            break;
          case 50:
            prize_string = "5,000"
            break;
          case 6:
            prize_string = "25,000 a YEAR for LIFE"
            break;
          case 60:
            prize_string = "7,000 a WEEK for LIFE"
            break;
        }
        
//print to screen
        document.getElementById("qp_balls").innerHTML = "The quick pick numbers are " + (qp_balls.sort((a, b) => a - b)).toString()
        document.getElementById("qp_lucky_ball").innerHTML = "The lucky ball number is " + qp_lucky_ball          
        document.getElementById("in_balls").innerHTML = "The winning numbers are " +in_balls.toString()
        document.getElementById("in_lucky_ball").innerHTML = "The lucky ball number is " + in_lucky_ball 
        if(prize_string == "0"){
          document.getElementById("payout").innerHTML = "You didn't win." 
        }
        else{
          document.getElementById("payout").innerHTML = "You win! Payout: $" + prize_string 
        }
        
                  

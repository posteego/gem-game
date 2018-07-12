/************* Gem Game Logic **************/

// declare variables

var random_num,
    current,
    wins = 0,
    losses = 0,
    gem = [];


function randomNum(gemgen, max, min){
  // generate a random number

  // gemgen decides if generating game number or gem vals
  // can choose max/min
  // using 120/19 for random_num
  // using 12/1 for gem

  // check gemgen
  if (gemgen === true){
    // creating an array of length 4
    while(gem.length < 4){
      // set random number for each gem
      let randomnumber = Math.floor(Math.random() * (max - min + 1) + min);

      // check if repeat
      if(gem.indexOf(randomnumber) > -1) continue;
      
      // add number to array
      gem[gem.length] = randomnumber;
    }
  } else {
    // random number
    random_num = Math.floor(Math.random() * (max - min + 1) + min);
  }
}


function setup() {
  // set values and update on screen
  current = 0;
  
  // set gem values
  randomNum(true,12,1);
  
  // set game's random number
  randomNum(false,120,19);

  // update values
  valueUpdate();
}


function valueUpdate() {
  // print values
  $('#random').text(random_num);
  $('#user').text(current);
  $('#wins').text(wins);
  $('#losses').text(losses);
}


function clicks() {
  // update user value depending on the gem they click

  $("#0").on('click', function() {
    current += gem[0];
    valueUpdate();
    if (current > random_num) {
      losses++;
      alert("you lose!");
      game();
    } if (current === random_num) {
      wins++;
      alert("you win!");
      game();
    }
  });

  $("#1").on('click', function() {
    current += gem[1];
    valueUpdate();
    if (current > random_num) {
      losses++;
      alert("you lose!");
      game();
    } if (current === random_num) {
      wins++;
      alert("you win!");
      game();
    }
  });

  $("#2").on('click', function() {
    current += gem[2];
    valueUpdate();
    if (current > random_num) {
      losses++;
      alert("you lose!");
      game();
    } if (current === random_num) {
      wins++;
      alert("you win!");
      game();
    }
  });

  $("#3").on('click', function() {
    current += gem[3];
    valueUpdate();
    if (current > random_num) {
      losses++;
      alert("you lose!");
      game();
    } if (current === random_num) {
      wins++;
      alert("you win!");
      game();
    }
  });
}


function game() {
  // game logic
  
  // game setup
  setup();

  // monitor clicking
  clicks();
}

game();
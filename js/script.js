const init_the_game = () => {
  const start_btn = document.querySelector('.start-game');
  let player_score = 0;
  let computer_score = 0;
  let result;

  const start_game = () => {
    document.querySelector('.intro').classList.add('fadeOut');
    let game_viwer = document.querySelectorAll('.score, .game-opts');
    for (let i = 0; i < game_viwer.length; i++) {
      game_viwer[i].classList.add('fadeIn');
    }
  };

  const play_match = () => {
    const options = document.querySelectorAll('.game-opts li');
    const player_hand = document.querySelector('.player-choice img');
    const computer_hand = document.querySelector('.computer-choice img');

    // PLAYER CHOICE
    options.forEach(option => {
      option.addEventListener('click', function() {
        // UPDATE IMAGES
        player_hand.setAttribute('src', `./imgs/rock.png`);
        computer_hand.setAttribute('src', `./imgs/rock.png`);

        // GENERATE COMPUTER CHOICE
        const computer_choices = ['paper', 'scissors', 'rock'];
        const computer_num = Math.floor(Math.random() * 3);
        const computer_choice = computer_choices[computer_num];
        const msg = document.querySelector('.match h2');
        const hands = document.querySelectorAll(
          '.player-choice img, .computer-choice img'
        );

        hands.forEach(hand => {
          hand.addEventListener('animationend', function() {
            this.style.animation = '';
          });
        });

        // SHAKE HANDS ANIMATION
        player_hand.style.animation = 'shake 1.5s ease';
        computer_hand.style.animation = 'shake 1.5s ease';

        setTimeout(() => {
          // UPDATE IMAGES
          player_hand.setAttribute('src', `./imgs/${player_choice}.png`);
          computer_hand.setAttribute('src', `./imgs/${computer_choice}.png`);

          // CHECK WHO'S WIN
          whos_win(player_choice, computer_choice);

          // DISPLAY MESSAGE
          msg.textContent = result;
        }, 1500);

        // PLAYER CHOICE
        player_choice = this.classList.value;
      });
    });
  };

  const update_score = () => {
    const pScore = document.querySelector('.player-score .info p');
    const cScore = document.querySelector('.computer-score .info p');
    pScore.textContent = player_score;
    cScore.textContent = computer_score;
    console.log(pScore);
  };

  const whos_win = (player_choice, computer_choice) => {
    if (player_choice === computer_choice) {
      result = 'هناك تعادل';
      return;
    } else {
      // CHECK SITUTIONS
      if (player_choice === 'rock') {
        if (computer_choice === 'paper') {
          result = 'أسف! لقد خسرت';
          computer_score++;
          update_score();
          return;
        } else {
          result = 'مبروك! لقد فزت';
          player_score++;
          update_score();
          return;
        }
      }
      if (player_choice === 'paper') {
        if (computer_choice === 'scissors') {
          result = 'أسف! لقد خسرت';
          computer_score++;
          update_score();
          return;
        } else {
          result = 'مبروك! لقد فزت';
          player_score++;
          update_score();
          return;
        }
      }

      if (player_choice === 'scissors') {
        if (computer_choice === 'rock') {
          result = 'أسف! لقد خسرت';
          computer_score++;
          update_score();
          return;
        } else {
          result = 'مبروك! لقد فزت';
          player_score++;
          update_score();
          return;
        }
      }
    }
  };

  //   INIT THE INNER FUNCTIONS
  start_btn.addEventListener('click', start_game);
  play_match();
};

// CALL THE FUNCTION
init_the_game();

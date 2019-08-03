
    const NUM_OF_GUESSES = 12;
 
    let crystalGame = {
        pointScore: 0,
        numOfWins: 0,
        numOfLosses: 0,
        randValue: 0,

        getRandomInt: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        initialize: function() {

            randValue = crystalGame.getRandomInt (30, 80);
            document.getElementById("rand-num-val").innerHTML = randValue;

            document.querySelectorAll(".crystal-image").forEach(function(node){            
                node.setAttribute("rand-val", crystalGame.getRandomInt (13, 50));
                // console.log("inside load " + node.getAttribute("rand-val"));
            })
        },  

        calcScore: function() {

            if (parseInt(this.pointScore) === parseInt(this.randValue))
            {
                this.numOfWins++;
            }
            else
            {
                this.numOfLosses++;
            }
        },

        displayScore: function () {
            document.getElementById("num-of-wins").innerHTML = "Wins: " + this.numOfWins;
            document.getElementById("num-of-losses").innerHTML = "Losses: " + this.numOfLosses;
        }
    };

    window.onload = function(){
        crystalGame.initialize();   
     
    }

    document.querySelectorAll(".crystal-image").forEach(function(node){
        node.addEventListener("click", function() {
                        
            crystalGame.pointScore += parseInt(node.getAttribute("rand-val"));
            document.getElementById("player-score").innerText  = crystalGame.pointScore;

            crystalGame.calcScore();
            crystalGame.displayScore();

            
        });
      })




 
    let crystalGame = {

        pointScore: 0,
        numOfWins: 0,
        numOfLosses: 0,
        randValue: 0,

        minCrystalVal: 1,
        maxCrystalVal: 12,

        minRandVal: 19,
        maxRandVal: 120,

        defaultScore: 0,


        getRandomInt: function (min, max) {
             min = Math.ceil(min);
             max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        resetGame: function() {

            this.pointScore = this.defaultScore;

            this.randValue = this.getRandomInt (this.minRandVal, this.maxRandVal);
            document.getElementById("rand-num-val").innerHTML = this.randValue;
            document.getElementById("player-score").innerText  = this.defaultScore;

            let rootObj = this;
    
            document.querySelectorAll(".crystal-image").forEach(function(node){     
                const crystalRanVal =  rootObj.getRandomInt (rootObj.minCrystalVal, rootObj.maxCrystalVal);                                   
                node.setAttribute("rand-val", crystalRanVal);                
            })
        },  

        calcScore: function() {

            let isWinOrLoos = false;

            if (parseInt(this.pointScore) === parseInt(this.randValue))
            {
                this.numOfWins++;     
                isWinOrLoos = true;          
            }
            else if (parseInt(this.pointScore) > parseInt(this.randValue))
            {
                this.numOfLosses++;      
                isWinOrLoos = true;                        
            }

            if (isWinOrLoos)
            {
                document.getElementById("num-of-wins").innerHTML = "Wins: " + this.numOfWins;
                document.getElementById("num-of-losses").innerHTML = "Losses: " + this.numOfLosses;
    
                this.resetGame();
            }
        },
    };

    window.onload = function(){
        crystalGame.resetGame();   
     
    }

    document.querySelectorAll(".crystal-image").forEach(function(node){
        node.addEventListener("click", function() {
                        
            crystalGame.pointScore += parseInt(node.getAttribute("rand-val"));
            document.getElementById("player-score").innerText  = crystalGame.pointScore;

            crystalGame.calcScore(); 
            
        });
    })



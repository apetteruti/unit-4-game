$(document).ready(function () {

    //VARIABLES//
    var userTally = 0 //Sum of the numbers users guess
    var wins = 0 //Total user wins
    var losses = 0 //Total user losses

    //RANDOM NUMBER
    //Computer will generate a random number between 9 -120 and display on the page
    var target = Math.floor((Math.random() * 120) + 9);
    // alert(target);
    $("#number-to-guess").text(target)

    //CRYSTAL NUMBERS
    //Four random numbers between 1 -12 will be randomly generated and assigned to 4 crystals on the page
    //Amber number generator
    var amberNumber = Math.floor((Math.random() * 12) + 1);
    // alert(amberNumber);
    $("#amber").text(amberNumber)

    //Ruby number generator
    var rubyNumber = Math.floor((Math.random() * 12) + 1);
    // alert(rubyNumber);
    $("#ruby").text(rubyNumber)

    //Sapphire number generator
    var sapphireNumber = Math.floor((Math.random() * 12) + 1);
    // alert(sapphireNumber);
    $("#sapphire").text(sapphireNumber)

    //Emerald number generator
    var emeraldNumber = Math.floor((Math.random() * 12) + 1);
    $("#emerald").text(emeraldNumber)

    //TOOLS/FUNCTIONS
    //Reload page when the score = random number or the score > random number (maybe need a while function?)

    function reset() { //resets the game
        // $("alert").on("click", function () {
            // $("#showTally").empty();
            userTally = 0;
            console.log(userTally);
            console.log($("#showTally"));
            $("#showTally").text(userTally);
        // })
    }

    function newTargetNumber() {
        target = Math.floor((Math.random() * 120) + 9);
        console.log(target);
        $("#number-to-guess").text(target);
    }

    function newCrystalNumber() {
        amberNumber = Math.floor((Math.random() * 12) + 1);
        rubyNumber = Math.floor((Math.random() * 12) + 1);
        sapphireNumber = Math.floor((Math.random() * 12) + 1);
        emeraldNumber = Math.floor((Math.random() * 12) + 1);
        newClickNumbers();
    }

    //When the score equals the random number, add one to win
    function winOrLose() {
        if (userTally == target) {
            wins++; //adds one to win
            alert("Score! You win!");
            $("#wins").text(wins);
            reset(); //restart game
            newTargetNumber();
            newCrystalNumber(); //generates all new random numbers for crystals and target
        }

        //If the score goes over the random number, add one to loss
        else if (userTally > target) {
            losses++;
            alert("Bummer! You lose!");
            $("#losses").text(losses);
            reset(); //restart game
            newTargetNumber();
            newCrystalNumber(); //generates all new random numbers for crystals and target
        }
    }

    //CLICKS//
    //When the player clicks a crystal the number associated with it will be added to a score
    //Each click will add the number to the userTally

    function newClickNumbers() {
        //Amber
        $("#amber").on("click", function () {
            userTally = userTally + amberNumber //adds the amber number to the userTally
            // userTally.push (amberNumber)
            console.log(userTally)
            $("#showTally").text(userTally) //shows it in the Tally area
            winOrLose() //win or lose function
        })

        //Ruby
        $("#ruby").on("click", function () {
            userTally = userTally + rubyNumber //adds the amber number to the userTally
            console.log(userTally)
            $("#showTally").text(userTally) //shows it in the Tally area
            winOrLose() //win or lose function
        })

        //Sapphire
        $("#sapphire").on("click", function () {
            userTally = userTally + sapphireNumber //adds the amber number to the userTally
            console.log(userTally)
            $("#showTally").text(userTally) //shows it in the Tally area
            winOrLose() //win or lose function
        })

        //Emerald
        $("#emerald").on("click", function () {
            userTally = userTally + emeraldNumber //adds the amber number to the userTally
            console.log(userTally)
            $("#showTally").text(userTally) //shows it in the Tally area
            winOrLose() //win or lose function
        })
    }

    newClickNumbers()

})
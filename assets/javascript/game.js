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
        userTally = 0
        // target = 0              
        target = Math.floor((Math.random() * 120) + 9)
        amberNumber = Math.floor((Math.random() * 12) + 1)
        rubyNumber = Math.floor((Math.random() * 12) + 1)
        sapphireNumber = Math.floor((Math.random() * 12) + 1)
        emeraldNumber = Math.floor((Math.random() * 12) + 1)
    }

    //When the score equals the random number, add one to win
    function winOrLose() {
        if (userTally == target) { 
            wins++ //adds one to win
            alert ("Score! You win!")
            $("#wins").text(wins)
            reset()//restart game
        }

        //If the score goes over the random number, add one to loss
        else if (userTally > target) {
            losses++
            alert ("Bummer! You lose!")
            $("#losses").text(losses)
            reset() //restart game
        }
    }

    //CLICKS//
    //When the player clicks a crystal the number associated with it will be added to a score
    //Each click will add the number to the userTally

    //Amber
    $("#amber").on("click", function () {
        userTally = userTally + amberNumber //adds the amber number to the userTally
        // userTally.push (amberNumber)
        console.log(userTally)
        $("#showTally").text(userTally) //shows it in the Tally area
        winOrLose() //win or lose function
        // test to see if the score is equal to target - add one to win and reset
        // if (userTally == target) { 
        //     wins++ //adds one to win
        //     alert ("Score! You win!")
        //     $("#wins").text(wins)
        //     reset //restart game
        // }

        // //If the score goes over the random number, add one to loss and reset
        // else if (userTally > target) {
        //     losses++
        //     alert ("Bummer! You lose!")
        //     $("#losses").text(losses)
        //     reset //restart game
        // }
    })

    //Ruby
    $("#ruby").on("click", function () {
        userTally = userTally + rubyNumber //adds the amber number to the userTally
        console.log(userTally)
        $("#showTally").text(userTally) //shows it in the Tally area
        winOrLose() //win or lose function
        //test to see if the score is equal to target - add one to win and reset
        // if (userTally == target) { 
        //     wins++ //adds one to win
        //     alert ("Score! You win!")
        //     $("#wins").text(wins)
        //     reset //restart game
        // }

        // //If the score goes over the random number, add one to loss and reset
        // else if (userTally > target) {
        //     losses++
        //     alert ("Bummer! You lose!")
        //     $("#losses").text(losses)
        //     reload //restart game
        // }
    })

    //Sapphire
    $("#sapphire").on("click", function () {
        userTally = userTally + sapphireNumber //adds the amber number to the userTally
        console.log(userTally)
        $("#showTally").text(userTally) //shows it in the Tally area
        winOrLose() //win or lose function
        //test to see if the score is equal to target - add one to win and reload
        // if (userTally == target) { 
        //     wins++ //adds one to win
        //     alert ("Score! You win!")
        //     $("#wins").text(wins)
        //     reload //restart game
        // }

        // //If the score goes over the random number, add one to loss and reload
        // else if (userTally > target) {
        //     losses++
        //     alert ("Bummer! You lose!")
        //     $("#losses").text(losses)
        //     reload //restart game
        // }
    })

    //Emerald
    $("#emerald").on("click", function () {
        userTally = userTally + emeraldNumber //adds the amber number to the userTally
        console.log(userTally)
        $("#showTally").text(userTally) //shows it in the Tally area
        winOrLose() //win or lose function
        //test to see if the score is equal to target - add one to win and reload
        // if (userTally == target) { 
        //     wins++ //adds one to win
        //     alert ("Score! You win!")
        //     $("#wins").text(wins)
        //     reload //restart game
        // }

        // //If the score goes over the random number, add one to loss and reload
        // else if (userTally > target) {
        //     losses++
        //     alert ("Bummer! You lose!")
        //     $("#losses").text(losses)
        //     reload //restart game
        // }
    })
})    

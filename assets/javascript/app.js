
var questions = [
    questionOne = {
        ask: "Ice hockey pucks are made from what material?",
        choices:[ "recycled plastic", "aluminum", "vulcanized rubber", "fiberglass"],
        answer: 2,
    },
    questionTwo = {
        ask: "Which is not apart of the six original hockey teams?",
        choices:[ "Boston Bruins", "Detriot Red Wings", "New York Rangers", "Los Angeles Kings"],
        answer: 3,
    },
    questionThree = {
        ask: "How many players from each team are allowed on the ice at the same time?",
        choices:[ "six", "eight", "five", "seven"],
        answer: 0,
    },
    questionFour = {
        ask: "What is known as a hat trick?",
        choices:[ "A bunny, a hat, & a magician", "A player scores 3 goals in a single game", "An offensive play manuever", "A major penalty"],
        answer: 1,
    },
    questionFive = {
        ask: "Violently checked into the boards is called what?",
        choices:[ "boarding", "hooking", "charging", "roughing"],
        answer: 0,
    },
    questionSix = {
        ask: "How many periods are in a hockey game?",
        choices:[ "four", "six", "two", "three"],
        answer: 3,
    },
    questionSeven = {
        ask: "Hockey is an off-sides game, meaning what?",
        choices:[ "Only backward passing allowed", "Forward passing is allowed", "No passing allowed", "Must stay on your side of the rink"],
        answer: 1,
    },
    questionEight = {
        ask: "If a player enters their opponents zone before the puck itself does, they are what?",
        choices:[ "onsides", "get a foul", "offsides", "penalized"],
        answer: 2,
    },
    questionNine = {
        ask: "A major penalty lasts for how many minutes in the penalty box?",
        choices:[ "3 mins", "two 2 min penalties", "2 mins", "5 mins"],
        answer: 3,
    },
    questionTen = {
        ask: "Where is the recognized birthplace of organized ice hockey?",
        choices:[ "Nova Scotia", "Montreal", "Alberta", "Great Britian"],
        answer: 2,
    },
    questionEleven = {
        ask: "What year was the Stanley Cup established, making it the longest standing trophy to date?",
        choices:[ "1901", "1893", "1897", "1903"],
        answer: 1,
    },
    questionTwelve = {
        ask: "How many total divisions are in the NHL's two conferences?",
        choices:[ "six", "four", "eight", "ten"],
        answer: 1,
    },
    questionThirteen = {
        ask: "Who is the Boston Bruins biggest rival?",
        choices:[ "LA Kings", "New York Rangers", "Montreal Canadians", "Washington Capitals"],
        answer: 2,
    },
    questionFourteen = {
        ask: "Who was the first NHL team to win back-to-back Stanley Cups?",
        choices:[ "Detriot Red Wings", "Ottawa Senators", "New York Rangers", "Boston Bruins"],
        answer: 1,
    },
    questionFifteen = {
        ask: "Who was the fastest player in NHL history to reach 1,000 career points?",
        choices:[ "Paul Coffey", "Wayne Gretzkey", "Mark Messier", "Ron Francis"],
        answer: 1,
    },
    questionSixteen = {
        ask: "Which hockey player has won the most Stanley Cups with 11 wins?",
        choices:[ "Henri Richard", "Jean Beliveau", "Red Kelly", "Yvan Cournoyer"],
        answer: 0,
    },
    questionSeventeen = {
        ask: "Who was the first NHL player to be awarded Sportsman of the Year honors from Sports Illustrated?",
        choices:[ "Wayne Gretzkey", "Bobby Orr", "Bobby Bourne", "US Olympic Hockey Team"],
        answer: 1,
    },
    questionEighteen = {
        ask: "What player set an NHL record in 1976, with 10 points in a game?",
        choices:[ "Bert Olmstead", "Maurice Richard", "Darryl Sittler", "Wayne Gretzkey"],
        answer: 2,
    },
    questionNineteen = {
        ask: "Who was the first NHL player to reach 50 goals in a season?",
        choices:[ "Teemu Selanne", "Jarome Ignila", "Wayne Gretzkey", "Maurice Richard"],
        answer: 3,
    },
    questionTwenty = {
        ask: "Who was the first player to score 100 points in a season?",
        choices:[ "Phil Esposito", "Bobby Orr", "Gordie Howe", "Bobby Hull"],
        answer: 0,
    },
    questionTwentyOne = {
        ask: "Who was the first goalie to ever record 20 or more shutouts in a single season?",
        choices:[ "Alex Connell", "George Hainsworth", "Tony Esposito", "Hal Winkler"],
        answer: 1,
    }]
    
    var correct = 0;
    var wrong = 0;
    var endTime = 0;

    var timer = 20;
    var running = false;
    
    var questionCount = questions.length;
    var index = 0;
    var holder = [];
    
    //start button function
    $("#start").on("click", function(){
        $("#question").empty("");
        $("#start").hide();
        countDown();
        showQuestion();
        });

        //timer
    function countDown(){
        timer = 20;
        $("#ask").append(`<h2 id="timer">Time Left: ${timer} </h2>`);
        //need to fix the second delay here
        var count = setInterval(function() {
            $("#timer").html(`<h2 id="timer">Time Left: ${timer} </h2>`);
            timer--;
            
            if(timer === 0){
                clearInterval(count);
                //$("#question").fadeToggle("slow", timedOut);
                endTime++;
            }
        }, 1000);

    };

    //places question and choices on screen 
    function showQuestion(){
    $("#question").append(`<div id="ask"> ${questions[index].ask} <br><br></div>`);
    for (var j = 0; j < questions[index].choices.length; j++){
        var userPick = $("<button>");
        userPick.html(questions[index].choices[j]);
        userPick.addClass("pick-answer");
        userPick.attr("value", questions[index].answer);
        userPick.attr("id", "a" + j);
        $("#ask").append(userPick);
 
        $("#start").off()
    }};
    console.log("GRRRRR");


    $("body").on("click", "a.pick-answer", function(){

        
        console.log("computer is dead meat")

    })
    

    //hide restart
    //$("#restart").hide();



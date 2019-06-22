
var questions = [
    questionOne = {
        ask: "Ice hockey pucks are made from what material?",
        choices: ["recycled plastic", "aluminum", "vulcanized rubber", "fiberglass"],
        answer: [false, false, true, false],
    },
    questionTwo = {
        ask: "Which is not apart of the six original hockey teams?",
        choices: ["Boston Bruins", "Detriot Red Wings", "New York Rangers", "Los Angeles Kings"],
        answer: [false, false, false, true],
    },
    questionThree = {
        ask: "How many players from each team are allowed on the ice at the same time?",
        choices: ["six", "eight", "five", "seven"],
        answer: [true, false, false, false],
    },
    questionFour = {
        ask: "What is known as a hat trick?",
        choices: ["A bunny, a hat, & a magician", "A player scores 3 goals in a single game", "An offensive play manuever", "A major penalty"],
        answer: [false, true, false, false],
    },
    questionFive = {
        ask: "Violently checked into the boards is called what?",
        choices: ["boarding", "hooking", "charging", "roughing"],
        answer: [true, false, false, false],
    },
    questionSix = {
        ask: "How many periods are in a hockey game?",
        choices: ["four", "six", "two", "three"],
        answer: [false, false, false, true],
    },
    questionSeven = {
        ask: "Hockey is an off-sides game, meaning what?",
        choices: ["Only backward passing allowed", "Forward passing is allowed", "No passing allowed", "Must stay on your side of the rink"],
        answer: [false, true, false, false],
    },
    questionEight = {
        ask: "If a player enters their opponents zone before the puck itself does, they are what?",
        choices: ["onsides", "get a foul", "offsides", "penalized"],
        answer: [false, false, true, false],
    },
    questionNine = {
        ask: "A major penalty lasts for how many minutes in the penalty box?",
        choices: ["3 mins", "two 2 min penalties", "2 mins", "5 mins"],
        answer: [false, false, false, true],
    },
    questionTen = {
        ask: "Where is the recognized birthplace of organized ice hockey?",
        choices: ["Nova Scotia", "Montreal", "Alberta", "Great Britian"],
        answer: [false, true, false, false],
    },
    questionEleven = {
        ask: "What year was the Stanley Cup established, making it the longest standing trophy to date?",
        choices: ["1901", "1893", "1897", "1903"],
        answer: [false, true, false, false],
    },
    questionTwelve = {
        ask: "How many total divisions are in the NHL's two conferences?",
        choices: ["six", "four", "eight", "ten"],
        answer: [false, true, false, false],
    },
    questionThirteen = {
        ask: "Who is the Boston Bruins biggest rival?",
        choices: ["LA Kings", "New York Rangers", "Montreal Canadians", "Washington Capitals"],
        answer: [false, false, true, false],
    },
    questionFourteen = {
        ask: "Who was the first NHL team to win back-to-back Stanley Cups?",
        choices: ["Detriot Red Wings", "Ottawa Senators", "New York Rangers", "Boston Bruins"],
        answer: [false, true, false, false],
    },
    questionFifteen = {
        ask: "Who was the fastest player in NHL history to reach 1,000 career points?",
        choices: ["Paul Coffey", "Wayne Gretzkey", "Mark Messier", "Ron Francis"],
        answer: [false, true, false, false],
    },
    questionSixteen = {
        ask: "Which hockey player has won the most Stanley Cups with 11 wins?",
        choices: ["Henri Richard", "Jean Beliveau", "Red Kelly", "Yvan Cournoyer"],
        answer: [true, false, false, false],
    },
    questionSeventeen = {
        ask: "Who was the first NHL player to be awarded Sportsman of the Year honors from Sports Illustrated?",
        choices: ["Wayne Gretzkey", "Bobby Orr", "Bobby Bourne", "US Olympic Hockey Team"],
        answer: [false, true, false, false],
    },
    questionEighteen = {
        ask: "What player set an NHL record in 1976, with 10 points in a game?",
        choices: ["Bert Olmstead", "Maurice Richard", "Darryl Sittler", "Wayne Gretzkey"],
        answer: [false, false, true, false],
    },
    questionNineteen = {
        ask: "Who was the first NHL player to reach 50 goals in a season?",
        choices: ["Teemu Selanne", "Jarome Ignila", "Wayne Gretzkey", "Maurice Richard"],
        answer: [false, false, false, true],
    },
    questionTwenty = {
        ask: "Who was the first player to score 100 points in a season?",
        choices: ["Phil Esposito", "Bobby Orr", "Gordie Howe", "Bobby Hull"],
        answer: [true, false, false, false],
    },
    questionTwentyOne = {
        ask: "Who was the first goalie to ever record 20 or more shutouts in a single season?",
        choices: ["Alex Connell", "George Hainsworth", "Tony Esposito", "Hal Winkler"],
        answer: [false, true, false, false],
    }]

var correct = 0;
var wrong = 0;
var endTime = 0;

var timer = 20;
var running = false;
var intervalId;

var questionCount = questions.length;
var index = 0;

function clean() {
    $("#timer").html("");
    $("#questions").html("");
    $(".pick-answer").remove();
    $("#answers").html("");
    $("#start").html("");
    $("#start").hide();
};

//start button function
$("#start").on("click", function () {
    $("#question").empty("");
    $("#start").hide();
    countDown();
    showQuestion();
});

//timer
function countDown() {
    //set timer 
    timer = 15;
    //in not running set to true, clear the interval and start decrement function
    if (!running) {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        running = true;
    }
};

function decrement() {
    //counts timer down
    timer--;
    //adds to html
    $("#timer").html(`Time Left: ${timer}`); {
        // if time runs out, run stop function, show in html time ran out and add score to out of time
        if (timer === 0) {
                stop();
                endTime++;
                clean();
                timedOut();
        }
    };

};
//stop function clears interval
function stop() {
    running = false;
    clearInterval(intervalId);
};


//fix this

function timedOut() {
    clean();
    var timerH = $("#timer");
    timerH.text("Out of Time, Genius!");
    var questionsD = $("#answer");
    questionsD.text(`The correct answer was ${questions[index].choices[questions[index].answer.indexOf(true)]}`);

    if (index === (questions.length - 1)) {
        gameOver();
    }
    index++;
    $("#start").show();
    $("#start").text("Next");
    $("#start").one("click", function () {
        $("#answer").text("");
        countDown();
        showQuestion();
        $("#start").hide();
    });
};



function correctGuess() {
    clean();
    var timerH = $("#timer");
    timerH.text("Correct!");
    var questionsD = $("#question");
    questionsD.text("");

    if (index === (questions.length - 1)) {
        gameOver();
    }
    index++;
    $("#start").show();
    $("#start").text("Next");
    $("#start").one("click", function () {
        $("#answer").text("");
        countDown();
        showQuestion();
        $("#start").hide();
    });
};

function wrongGuess() {
    clean();
    var timerH = $("#timer");
    timerH.text("Wrong, So Sorry!");
    var questionsD = $("#answer");
    questionsD.text(`The correct answer was ${questions[index].choices[questions[index].answer.indexOf(true)]}`);

    if (index === (questions.length - 1)) {
        gameOver();
    }
    index++;
    $("#start").show();
    $("#start").text("Next");
    $("#start").one("click", function () {
        $("#answer").text("");
        countDown();
        showQuestion();
        $("#start").hide();
    });
};

function gameOver() {
    clean();
    var timerH = $("#timer");
    timerH.text("Game Over!");
    var questionsD = $("#question");
    questionsD.html(`<p>The total correctly answered: ${correct}</p> <p>The total incorrectly answered: ${wrong}</p> <p>The total you ran out of time: ${endTime}</p><p>Click Next to Play Again!</p>`);

    $("#start").show();
    $("#start").text("Play Again?");
    $("#start").one("click", function () {
        $("#answer").text("");
        $("#question").text("");
        timerH.text("");
        resetCounters();
        countDown();
        showQuestion();
        $("#start").hide();
    });
};

function resetCounters(){
    index = 0;
    correct = 0;
    wrong = 0;
    endTime = 0;
};

//places question and choices on screen 
function showQuestion() {
    $("#start").off();
    $("#timer").text(`Time Left: ${timer}`);
    $("#question").text(`${questions[index].ask}`);
    for (var j = 0; j < questions[index].choices.length; j++) {
        var userPick = $("<button>");
        userPick.html(questions[index].choices[j]);
        userPick.addClass("pick-answer");
        userPick.attr("value", questions[index].answer[j]);
        userPick.attr("id", "a" + j);
        $("#answer").append(userPick);

    }
    $(".pick-answer").one("click", function () {

        
        var guess = $(this).attr("value");
        

        if (guess === "true") {
            stop();
            correct++;
            clean();
            correctGuess();
    
        }
        if (guess === "false") {
            stop();
            wrong++;
            clean();
            wrongGuess();
            
        };
    });
};


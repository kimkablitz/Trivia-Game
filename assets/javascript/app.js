window.onload = function () {
    var unanswered = 0
    var correctAnswer = 0;
    var wrongAnswer = 0
    var questionArray = ["Normal adult dogs have how many teeth?",
        "Through what part of the body do dogs sweat?",
        "What is the most common training command taught to dogs?",
        "What is a dog’s most highly developed sense?",
        "Puppies are delivered how many weeks after conception?",
        "What is the favorite dog breed of the Queen of England?",
        "Which TV series had a dog named K9 who was also a robot?",
        "Which dog breed is the smallest of them all?",
        "Which breed was once known as St. John’s Newfoundland?",
        "Which dog breed has a black tongue?",
        "The first dogs registered in the American Kennel Club belonged to what group?",
        "Which dog yodels instead of barks?",
        "What breed of dog is the smallest used in hunting?",
        "What is the name of the dog on the front of the Cracker Jack box?",
        " How old was the world’s oldest dog, an Australian cattle hound named Bluey, in human years?",
        "What was the most popular dog name of 2011, according to VPI Pet Insurance?",
        "What is the most popular breed of dog, according to the American Kennel Club’s registrations?",
    ]
    var qArr = questionArray[Symbol.iterator]()
    var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13', 'question14', 'question15', 'question16', 'question17'];
    var gArr = gifArray[Symbol.iterator]()
    var theGif;
    var correctA = ["C", "D", "C", "B", "C", "A", "C", "D", "C", "D", "B", "C", "B", "C", "D", "C", "D"]
    var cArr = correctA[Symbol.iterator]()
    const choicesArray = [
        {
            A: 24,
            B: 38,
            C: 42,
            D: 32,
        },


        {
            A: "Mouth",
            B: "Ears",
            C: "Nose",
            D: "Paws",
        },

        {
            A: "Stay",
            B: "Beg",
            C: "Sit",
            D: "Dance",
        },

        {
            A: "Taste",
            B: "Smell",
            C: "Sight",
            D: "Touch",
        },
        {
            A: 36,
            B: 22,
            C: 9,
            D: 16,
        },
        {
            A: "Corgi",
            B: "Basenji",
            C: "Poodle",
            D: "Pomeranian",
        },

        {
            A: "Full House",
            B: "Star Trek",
            C: "Doctor Who",
            D: "Law & Order",
        },

        {
            A: "Dachshund",
            B: "Shih tzu",
            C: "Pomeranian",
            D: "Chihuahua",
        },
        {
            A: "Newfoundland",
            B: "Golden retriever",
            C: "Labrador",
            D: "Puli",
        },
        {
            A: "Husky",
            B: "Labrador",
            C: "Weimaraner",
            D: "Chow chow",
        },
        {
            A: "Herding",
            B: "Sporting",
            C: "Working",
            D: "Hound",
        },
        {

            A: "Komondor",
            B: "Otterhound",
            C: "Basenji",
            D: "Basset hound",
        },

        {
            A: "Chihuahua",
            B: "Miniature Dachshund",
            C: "Toy poodle",
            D: "Smooth fox terrier",
        },

        {

            A: "Jack",
            B: "Max",
            C: "Bingo",
            D: "Fido",
        },

        {
            A: 32,
            B: 27,
            C: 30,
            D: 29,
        },
        {

            A: "Lucy",
            B: "Bailey",
            C: "Bella",
            D: "Max",
        },

        {
            A: "Golden retriever",
            B: "Beagle",
            C: "German Shepherd",
            D: "Labrador",
        },

    ]
    var chArr = choicesArray[Symbol.iterator]()
    var count; const RESETCOUNT = 15; var timerID;
    var choices; var answers;
    var timerOutOfTime = 0; var wrongAnswerClicked = 0;

    //timer
    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(timerID)
            OutOfTime()
            timerOutOfTime = 1;
        }
        $("#timeLeft").html(count + " seconds")
    }
    //out of time
    function OutOfTime() {
        $(".question").html("Out of time!")
        $('.answerList').hide()
        $('#startBtn').show()
        $('#gif').html('<img src = "assets/images/' + theGif + '.gif" width = "400px">')
        unanswered++
    }
    //ignorant(chose the incorrect)

    function ignorant() {
        wrongAnswerClicked = 1;
        $(".question").text("That was not it")
        $("#correctedAnswer").text("The correct answer was " + choices)
        $('#gif').html('<img src = "assets/images/' + theGif + '.gif" width = "400px">')
        $('.answerList').hide()
        $('#startBtn').show()
        wrongAnswer++
    }
    //smart(chose the correct)
    function correct() {
        $(".question").text("That is it")
        $('#gif').html('<img src = "assets/images/' + theGif + '.gif" width = "400px">')
        $('.answerList').empty()
        $('#startBtn').show()
        correctAnswer++
    }
    //generate gif
    function myGif() {
        theGif = gArr.next().value
        $('#gif').html('<img src = "assets/images/' + theGif + '.gif" width = "400px" height="250px">');
    }
    console.log(theGif)
    //generate next questions & answers 
    function nextQuest() {

        theQuestion = qArr.next().value
        choices = chArr.next().value;
        answers = Object.keys(choices).map(function (c) {
            return '<li data-answer=' + c + ' class="">' + choices[c] + '</li>'
        })
        $('.question').html(theQuestion)
        $('.answerList').html(answers);
        $("#correctedAnswer").empty()
        $('#gif').empty()
        $('.answerList').show();
        // Reset if out of time.
        if (timerOutOfTime) {
            timerOutOfTime = 0;
        }

        if (wrongAnswerClicked) {
            $("#timeLeft").show();
            wrongAnswerClicked = 0;
        }
    }

    //Start Btn
    $(document).on("click", "#startBtn", function () {
        $(this).hide()
        
        nextQuest()

        count = RESETCOUNT
        $("#timeLeft").html(count + " seconds")
        clearInterval(timerID)
        timerID = setInterval(timer, 1000);
        choices = cArr.next().value;


    })

    //when an answer is clicked
    $('.answerList').on('click', 'li', function (event) {
        clearInterval(timerID);
        $("#timeLeft").hide();
        $('#startBtn').text("next")
        myGif()
        if ($(this).data('answer') === choices) {
            correct();
            $("#timeLeft").show();
        }
        else {
            ignorant()
        }
    });


    console.log(correctAnswer)
    console.log(wrongAnswer)
    console.log(unanswered)


//the clock canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
}




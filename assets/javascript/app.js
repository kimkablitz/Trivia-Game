
//  id=timeLeft
//  id=currentQuestion
//  class='question'
//  class='answerList'
// <!-- Answer Page -->

//  id=message
//  id=correctedAnswer
//  id=gif
// <!-- Scoreboard -->

//  id=finalMessage
//  id=correctAnswers
//  id=incorrectAnswers
//  id=unanswered
//  id='startOverBtn'

window.onload = function() {
//countdown timer for each questions

var questionArray =["Normal adult dogs have how many teeth?",
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
var eArr = questionArray[Symbol.iterator]()
var choicesArray=[
    A. 24
    B. 38
    C. 42
    D. 32,
    A. Mouth
    B. Ears
    C. Nose
    D. Paws,
    A. Stay
    B. Beg
    C. Sit
    D. Dance,
    A. Taste
    B. Smell
    C. Sight
    D. Touch,
    A. 36
    B. 22
    C. 9
    D. 16,
    A. Corgi
    B. Basenji
    C. Poodle
    D. Pomeranian,
    A. Full House
    B. Star Trek
    C. Doctor Who
    D. Law & Order,
    A. Dachshund
    B. Shih tzu
    C. Pomeranian
    D. Chihuahua,
    A. Newfoundland
    B. Golden retriever
    C. Labrador
    D. Puli,
    A. Husky
    B. Labrador
    C. Weimaraner
    D. Chow chow,
    A. Herding
    B. Sporting
    C. Working
    D. Hound,
    A. Komondor
    B. Otterhound
    C. Basenji
    D. Basset hound,
    A. Chihuahua
    B. Miniature Dachshund
    C. Toy poodle
    D. Smooth fox terrier,
    A. Jack
    B. Max
    C. Bingo
    D. Fido,
    A. 32
    B. 27
    C. 30
    D. 29,
    A. Lucy
    B. Bailey
    C. Bella
    D. Max,
    A. Golden retriever
    B. Beagle
    C. German Shepherd
    D. Labrador,
    ]
var iArr = choicesArray[Symbol.iterator]()

$('#startBtn').click(function(){
    var count = 30;
var counter = setInterval(timer,1000);
function timer(){
    count=count-1;

    if (count<0) {
        clearInterval(counter)
        $(".question").html("Out of time!")
        nextQuestion()
    }

    $("#timeLeft").html(count +" seconds")  
}
    $('.question').html(eArr.next().value)
    $('.answerList').html(iArr.next().value)
})

}
//when start button is clicked

//next Question function
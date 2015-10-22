$(document).ready(function(){


//Quiz questions and answers
	var quizQuestions = [
		{
			question: 'How many hours per day do cats sleep?',
			choices: ['15 hours per day', '10 hours per day', '22 hours per day', '5 hours per day'],
			correctAnswer: 0
		},
		{
			question: 'A cat has how many whiskers, on average?',
			choices: ['8 whiskers', '30 whiskers', '24 whiskers', '10 whiskers'],
			correctAnswer: 2
		},
		{
			question: 'What do you call a group of cats?',
			choices: ['Caggle', 'Clowder', 'Cat Pack', 'Covey'],
			correctAnswer: 1
		},
		{
			question: 'Which is NOT the name of a cat breed?',
			choices: ['Balinese', 'Maine Coon', 'Burmillian', 'Bengal'],
			correctAnswer: 2
		},
		{
			question: 'Which of the following statements is false?',
			choices: ['A cat’s tail held high means they are happy', 'A twitching tail means they are getting irritated', 'A thumping tail means they are very frustrated', 'A tail tucked underneath the body = hunger'],
			correctAnswer: 3
		}
	]


	//Variables
	var currentQuestion= 0;
	var numCorrect = 0;
	



	//Click on homepage to start quiz
    $("#get-started").on("click", function () {
        $("#intro-screen").hide();
        $('#quiz-box').show();
        $('#under-quiz').show();
        //loadQuestion();
        //imgChange();
        event.preventDefault();

        //defining correct choice
        //var correctChoice = quizQuestions[0].correctAnswer;
        
        
		
		//show question
        $("#quiz-box .question").html('<h2>'+quizQuestions[currentQuestion].question+'</h2>');

        //show answers
        $("#quiz-answers .answer-a").html('<div class="cat-button"> </div> <p>'+quizQuestions[currentQuestion].choices[0]+'</p>');
        $("#quiz-answers .answer-b").html('<div class="cat-button"> </div> <p>'+quizQuestions[currentQuestion].choices[1]+'</p>');
        $("#quiz-answers .answer-c").html('<div class="cat-button"> </div> <p>'+quizQuestions[currentQuestion].choices[2]+'</p>');
        $("#quiz-answers .answer-d").html('<div class="cat-button"> </div> <p>'+quizQuestions[currentQuestion].choices[3]+'</p>');

        questionNumber();
    
    });


    //Pressing submit button to load next question
    
    $("#submit").on("click",function () {

    	if (currentQuestion < 4) {
        currentQuestion++;
       	$("#quiz-box .question").html('<h2>'+quizQuestions[currentQuestion].question+'</h2>');

        $("#quiz-answers .answer-a").html('<div class="cat-button"> </div> <p>'+quizQuestions[currentQuestion].choices[0]+'</p>');
        $("#quiz-answers .answer-b").html('<div class="cat-button"> </div> <p>'+quizQuestions[currentQuestion].choices[1]+'</p>');
        $("#quiz-answers .answer-c").html('<div class="cat-button"> </div> <p>'+quizQuestions[currentQuestion].choices[2]+'</p>');
        $("#quiz-answers .answer-d").html('<div class="cat-button"> </div> <p>'+quizQuestions[currentQuestion].choices[3]+'</p>');

    }

    	else {
    		$('#quiz-box').hide();
			$('#results-screen').show();

    	}

  		questionNumber();
        event.preventDefault();
    });

//check for right answer

function answerCheck() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == "") {
                alert('Please select an answer');
        }else if (answer == questions[currentQuestion].correctAnswer){
                console.log("Correct!");
                numberCorrect++;
             
        }else{
                console.log("Wrong");
                
        };
    }

    






	//Keep track of question number
	function questionNumber() {
		$('#count').html(parseInt($('#count').html(), 10) + 1);

	}



	//Load question and choices
	// function loadQuestion() {
	// 	$quiz.empty();
	// 	$answers.empty();
	// 	$quiz.append('<p>' + allQuestions[currentQuestion].question + '</p>');
	// 	for (var i = 0; i <= 3; i++) {
	// 		document.getElementById('answers').innerHTML += '<input type="radio" name="choice" value='+i+'>' + allQuestions[currentQuestion].choices[i] + '<br/>';
	// 	}
	// }
	

















});
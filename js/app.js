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
	];


	//Variables
	var currentQuestion= 0;
	var numCorrect = 0;


	


	//Getting the answer

    $("#quiz-answers").on('click','li', function () {

        	$(this).children('.box').toggleClass('checked');

        	selectedAnswer= $(this).children('input').attr('value');
        	console.log(selectedAnswer);

        	
 });

    //Showing correct answer in console log and getting correct number

    $("#submit").on("click",function () {
    	 if (selectedAnswer == quizQuestions[currentQuestion].correctAnswer)
        	{
                console.log("Correct!");
                numCorrect++;
                
             
        }

        	else
        	{
                console.log("Wrong");
                
        };


    });



	//Click on homepage to start quiz
    $("#get-started").on("click", function () {
        //event.preventDefault();
        $("#intro-screen").hide();
        $('#quiz-box').show();
        $('#under-quiz').show();
  
		
		//show question
        $("#quiz-box .question").html('<h2>'+quizQuestions[currentQuestion].question+'</h2>');

        //show answers
        $("#quiz-answers .answer-a").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="0"><p>'+quizQuestions[currentQuestion].choices[0]+'</p>');
        $("#quiz-answers .answer-b").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="1"><p>'+quizQuestions[currentQuestion].choices[1]+'</p>');
        $("#quiz-answers .answer-c").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="2"><p>'+quizQuestions[currentQuestion].choices[2]+'</p>');
        $("#quiz-answers .answer-d").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="3"><p>'+quizQuestions[currentQuestion].choices[3]+'</p>');

        questionNumber();
        

   });
    
 


    //Pressing submit button to load next question
    
    $("#submit").on("click",loadQuestion); 
	//event.preventDefault();


	
  function loadQuestion () {
    	
    	if (currentQuestion < 4) {
        currentQuestion++;

       	$("#quiz-box .question").html('<h2>'+quizQuestions[currentQuestion].question+'</h2>');

        $("#quiz-answers .answer-a").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="0"><p>'+quizQuestions[currentQuestion].choices[0]+'</p>');
        $("#quiz-answers .answer-b").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="1"><p>'+quizQuestions[currentQuestion].choices[1]+'</p>');
        $("#quiz-answers .answer-c").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="2"><p>'+quizQuestions[currentQuestion].choices[2]+'</p>');
        $("#quiz-answers .answer-d").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="3"><p>'+quizQuestions[currentQuestion].choices[3]+'</p>');


    }

    	else {
    		$('#quiz-box').hide();
			$('#results-screen').show();
			$('#question-count').hide();
			$('#submit').hide();
			$(".correct-answer").html('<div class="correct-answer"><p>You answered <span id="correct-answers">'+numCorrect+'</span>/5 questions correctly!</p>');


    	}


  		questionNumber();
        

    }




//Starting a new game

 $('#new-game').on('click', startNewGame);
        


  function startNewGame () {
  	currentQuestion= 0;
  	numCorrect=0;
	$('#quiz-box').show();
	$('#count').html(0);
	$('#results-screen').hide();
	$('#question-count').show();
	$('#submit').show();



	
		//show question
  		$("#quiz-box .question").html('<h2>'+quizQuestions[currentQuestion].question+'</h2>');

        //show answers
        $("#quiz-answers .answer-a").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="0"><p>'+quizQuestions[currentQuestion].choices[0]+'</p>');
        $("#quiz-answers .answer-b").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="1"><p>'+quizQuestions[currentQuestion].choices[1]+'</p>');
        $("#quiz-answers .answer-c").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="2"><p>'+quizQuestions[currentQuestion].choices[2]+'</p>');
        $("#quiz-answers .answer-d").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="3"><p>'+quizQuestions[currentQuestion].choices[3]+'</p>');

        questionNumber();  

  	}

    

	//Keeping track of question number under quiz
	function questionNumber() {
		$('#count').html(parseInt($('#count').html(), 10) + 1);

	}





});
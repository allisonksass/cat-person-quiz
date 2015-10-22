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



	//Getting the answer


     $("#quiz-answers").on('click','li', function () {

        	$(this).children('.box').toggleClass('checked');

        	var selectedAnswer= $(this).children('input').attr('value');
        	alert(selectedAnswer);

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

    });


	



	//Click on homepage to start quiz
    $("#get-started").on("click", function (event) {
        $("#intro-screen").hide();
        $('#quiz-box').show();
        $('#under-quiz').show();
        //loadQuestion();
        //imgChange();
        event.preventDefault();
        
        
		
		//show question
        $("#quiz-box .question").html('<h2>'+quizQuestions[currentQuestion].question+'</h2>');

        //show answers
        $("#quiz-answers .answer-a").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="0"><p>'+quizQuestions[currentQuestion].choices[0]+'</p>');
        $("#quiz-answers .answer-b").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="1"><p>'+quizQuestions[currentQuestion].choices[1]+'</p>');
        $("#quiz-answers .answer-c").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="2"><p>'+quizQuestions[currentQuestion].choices[2]+'</p>');
        $("#quiz-answers .answer-d").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="3"><p>'+quizQuestions[currentQuestion].choices[3]+'</p>');

        questionNumber();


        //getting their answer correct answer
        	
        

   });
    
 


    //Pressing submit button to load next question
    
    $("#submit").on("click",function (event) {

    	

    	if (currentQuestion < 4) {
        currentQuestion++;
       	$("#quiz-box .question").html('<h2>'+quizQuestions[currentQuestion].question+'</h2>');

        $("#quiz-answers .answer-a").html('<div class="cat-button"> </div> <p>'+quizQuestions[currentQuestion].choices[0]+'</p>');
        $("#quiz-answers .answer-b").html('<div class="cat-button"> </div> <p>'+quizQuestions[currentQuestion].choices[1]+'</p>');
        $("#quiz-answers .answer-c").html('<div class="cat-button"> </div> <p>'+quizQuestions[currentQuestion].choices[2]+'</p>');
        $("#quiz-answers .answer-d").html('<div class="cat-button"> </div> <p>'+quizQuestions[currentQuestion].choices[3]+'</p>');

//!put function testing the answers within the if statement here!


    }

    	else {
    		$('#quiz-box').hide();
			$('#results-screen').show();
			$('#question-count').hide();
			$('#submit').hide();


    	}

  		questionNumber();
        event.preventDefault();




    


    });





//STARTING NEW GAME

 $('#new-game').on('click', function(){
        startNewGame();
    });

  function startNewGame () {
  	var currentQuestion= 0;
  	var numberCorrect=0
	$('#quiz-box').show();
	$('#count').html(0);

  	$("#quiz-box .question").html('<h2>'+quizQuestions[currentQuestion].question+'</h2>');

        //show answers
        $("#quiz-answers .answer-a").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="0"><p>'+quizQuestions[currentQuestion].choices[0]+'</p>');
        $("#quiz-answers .answer-b").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="1"><p>'+quizQuestions[currentQuestion].choices[1]+'</p>');
        $("#quiz-answers .answer-c").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="2"><p>'+quizQuestions[currentQuestion].choices[2]+'</p>');
        $("#quiz-answers .answer-d").html('<div class="box"><div class="cat-button"> </div> </div><input type="hidden" value="3"><p>'+quizQuestions[currentQuestion].choices[3]+'</p>');

        questionNumber();

  	}

    

	//Keep track of question number
	function questionNumber() {
		$('#count').html(parseInt($('#count').html(), 10) + 1);

	}

     //defining the correct answer
   //      $("#quiz-answers").on('click', function () {
   //      var selectedAnswer = $(this).children('#quiz-answers');
   //      var correctAnswer = quizQuestions[currentQuestion].correctAnswer;

   //      $(this).children('.cat-button').toggleClass('checked');
            
   //      if (selectedAnswer == correctAnswer) {
   //          alert("Correct!");
   //          numCorrect++;
   //      } else {
   //          alert ("Wrong!");
   //      }

   // });

	

















});
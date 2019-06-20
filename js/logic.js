 
// Break the project down into different components (data, presentation, views, style, DOM manipulation) 
// Data? here to? 

const record = {
  player1win:0, 
  player2win:0, 
  turns: 0
}

let playerOne = 1
let playerTwo = 2
let currentPlayer = 0
let gameBoard =0
let gameBoard2 =0
/// gameStart 이후에, 위의 부분은 돔과 소통한다. Joel의 자바스크립트 파일이 어떻게 Dom 과 소통했는지 리뷰 해 보도록 하자. 

//////////////////other infor should be in document.ready ////////////////////////////////////////

$(document).ready(function(){


$body = $('body')

///////DOM control part////////////////**


//button to be clicked, start 
let $div =$('<div></div>').addClass('secondWindow')

let $message0 = $('<div> Game start?</div>').addClass('thirdWindow')
let $message1 = $('<div>Do you want to play game?</div>').addClass('thirdWindow')
let $message2 =$('<div>Do you want to quit?</div>').addClass('thirdWindow')
let $message3 =$('<div>You Won! One more game?</div>').addClass('thirdWindow')
let $message4 =$('<div>Draw Game! One more game?</div>').addClass('thirdWindow')
let $message5 =$('<div>Game Started!</div>').addClass('thirdWindow')
let $message6 =$('<div>You Lost! One more game?</div>').addClass('thirdWindow')
let $yes = $('<div>yes</div>').addClass('fourthWindow')
let $no = $('<div>no</div>').addClass('fifthWindow')



let $secondWindow; 
let $gameStart = $('#GameStart'); 

$('.nowPlaying').html('')

// $gameStart.on('hover').removeClass('flash')

$gameStart.on('mousedown', function(){
  $gameStart.addClass('red').on('mouseup', function(){
    $gameStart.removeClass('red')
    record.player1win = 0
    record.player2win = 0
    $('.score1').html(record.player1win)
    $('.score2').html(record.player2win)
    $('.turnNumber').html(0)
   
    $('.game').removeClass('flash')
  })

  $secondWindow = $div.append($message0).append($yes, $no)
  

  $body.append($secondWindow);    /// why when I  directly added .hide().fadeIn() did not work?????
  $secondWindow.hide().fadeIn(500);

  //layout done 
  $secondWindow.on('mousedown', function(event){
     $(event.target).addClass('red')
     .on('mouseup', ()=>{ $(event.target).removeClass('red')})
   
  })
  })

  $body.on('click', ()=>{
    $yes.on('click', ()=>{
      $('.game').html('Now You Playing!')  
      $('.cells').removeClass('animated')
      gameStart()
      $('.secondWindow').fadeOut();
      // turnChange(currentPlayer); 
      $('.secondWindow').remove();
     })
  
     $no.on('click', ()=>{

      
      $('.secondWindow').fadeOut();
      $('.game').addClass('flash').html('Click to Start a New Game!')
      // $('.secondWindow').remove();
  
  })
})

  function winnerWindow(message){
    $secondWindow = $div.append(message).append($yes, $no)

    $body.append($secondWindow);  
    $secondWindow.hide().fadeIn(500);
  
    //layout done 
    $secondWindow.on('mousedown', function(event){
       $(event.target).addClass('red')
       .on('mouseup', ()=>{ $(event.target).removeClass('red')})
    })
  }

  function drawWindow(){
    $secondWindow = $div.append($message4).append($yes, $no)
  
    $body.append($secondWindow);  
    $secondWindow.hide().fadeIn(500);
  
    //layout done 
    $secondWindow.on('mousedown', function(event){
       $(event.target).addClass('red')
       .on('mouseup', ()=>{ $(event.target).removeClass('red')})
     
    })
  
  }


//popup, z-index 
//////////////////DOM part end /////////////////////////////////////////////////////////////////



  function resetBoard(){
    gameBoard ={ // we need game board objec to update DOM eventually. 
    a: [0, 0, 0], // still faster than for? 
    b: [0, 0, 0],
    c: [0, 0, 0]

    
  }, 
  gameBoard2 = {
    a: [0, 0, 0], // still faster than for? 
    b: [0, 0, 0],
    c: [0, 0, 0]
  }
  // currentPlayer = 1
  }

  

  let icon1 ='<img src="library/c.svg" alt="c">'
  let icon2 ='<img src="library/x.svg" alt="x">'

  function turnChange(player){ // can I use currentPlayer, the same variable name? 
    record.turns += 1
    currentPlayer = player === playerOne ? playerTwo : playerOne; 
    if(currentPlayer == playerOne){
      $('.icon1').addClass('animated bounce')
      $('.icon2').removeClass('animated bounce')
      $('.player1').addClass('animated pulse')
      $('.player2').removeClass('animated pulse')
    }else if(currentPlayer ==playerTwo) {
      $('.icon2').addClass('animated bounce')
      $('.icon1').removeClass('animated bounce')
      $('.player2').addClass('animated pulse')
      $('.player1').removeClass('animated pulse')
    }

    $('.turnNumber').html(record.turns)
  
  }

  function gameStart(){ //randomely set up who is going to play first
    resetBoard()
    $('.cells').removeClass('animated')

    console.log(gameBoard)  
    
    $('.cells').html("")
    let num = Math.ceil(Math.random() * 10)

   
    // debugger 
    if(num <6){
      currentPlayer = playerOne
      // playerOne starts
    } else{
      currentPlayer = playerTwo
    }
    record.turns =1; 
    $('.turnNumber').html(record.turns)
    if(currentPlayer ===2){
      
      setTimeout(randomPick(), 1500)
      
      
    }

 }

function anotherRandom(){
  setTimeout(randomPick, 1000)
}
 function randomPick(){
    
  if(currentPlayer ===2){
    
    for( let i = 0; i < $cells.length; i++){  
      if(!document.getElementsByClassName('cells')[i].className.includes('animated')){
        console.log('random fired');
        let num = Math.ceil(Math.random() * 10)
        if(num <7){
         let aa =$('.cells')[i]
         aa.click()
         return
      }
      

  }  
    }

}anotherRandom();
}

 let $cells = $('.cells')
//  debugger
  let $gameBoard = $('.gameboard')

  // 다른 에리어가 클릭 되었을 때 엄한 아이디를 받지 않도록 주의하자. a, b, c로 시작하는 아이디만 엔터 하도록 하자. 
  // event delegation
  $gameBoard.on('click', '.cells', (event)=>{
    // console.log('fired:, updated: event.target.id: ', event.target.id);
    console.log(`event Target fired`, event.target);
    let digit = event.target.id.split("")
    

    // console.log('event.target', event.target);
    if(gameBoard[digit[0]][digit[1]] = gameBoard[digit[0]][digit[1]]){
      console.log('the cells already taken');
      // order always matters. 
    }
    else if(currentPlayer == 1){
      $(event.target).append(icon1).hide().fadeIn(500).addClass('animated flip').addClass('mapIcon')
      // turnChange(currentPlayer)
      
      // record.player1win = 

      ///////////remove effect of "fadeIn"
      $('.cells img').fadeIn(1000)
      $('.gameboard').toggleClass('rotate180', 2000)  
      setTimeout(randomPick, 2000)



      
    }else if(currentPlayer ==2){
      $(event.target).append(icon2).hide().fadeIn(500).addClass('animated flip').addClass('mapIcon');

      // $('.gameboard').addClass('rotate180')
      $('.cells img').fadeOut(2000)
      // $('.cells').css('display', 'hidden')
      // turnChange(currentPlayer)
    } 
    
    if(gameBoard[digit[0]][digit[1]]===0){
      gameBoard[digit[0]][digit[1]] = currentPlayer // how to check the sopt + update data base

      
      //turn and other effect starts. 1 seconds later. 
      
      turnChange(currentPlayer)
      // if()
      //turn change here. 
     }
    
     winCheck(currentPlayer) //order always matters. 
    

    console.log(gameBoard);
    console.log('currentPlayer :', currentPlayer)
  
  })  



  
  function winCheck(currentPlayer){
    
    let message = `Player ${currentPlayer} won!
    You wish to continue playing?`

    //append button, and on click, resetBoard to be fired
    // If whole game stops, game start. 
 
    let l1 = gameBoard.a[0] * gameBoard.a[1] * gameBoard.a[2]
    let l2 = gameBoard.b[0] * gameBoard.b[1] * gameBoard.b[2] 
    let l3 = gameBoard.c[0] * gameBoard.c[1] * gameBoard.c[2] 
    
    let l4 = gameBoard.a[0] * gameBoard.b[1] * gameBoard.c[2] 
    
    let l5 = gameBoard.a[0] * gameBoard.b[0] * gameBoard.c[0] 
    let l6 = gameBoard.a[1] * gameBoard.b[1] * gameBoard.c[1] 
    let l7 = gameBoard.a[2] * gameBoard.b[2] * gameBoard.c[2] 
    let l8 = gameBoard.a[2] * gameBoard.b[1] * gameBoard.c[0] 

  if( l1 ==1  || l2 ==1|| l3 ==1|| l4 ==1|| l5 ==1 || l6 ==1|| l7 ==1 || l8== 1) // this works!
    
    {
      // on click, pop up(css), click 
      record.player1win += 1 // win counter increased //NaN. 
      //window pop up 
      // console.log('player one won');
      $('.score1').html(record.player1win)
      winnerWindow($message3)
      $('.cells').addClass('animated')
      
      //DOM control function to be started. 
     
      // you
    }else if(l1 ==8  || l2 ==8|| l3 ==8|| l4 ==8|| l5 ==8 || l6 ==8|| l7 ==8 || l8 ==8){
      record.player2win += 1
      // console.log('player two won');
      $('.score2').html(record.player2win) 
      winnerWindow($message6)
      $('.cells').addClass('animated')
      
      
    }

    else if(record.turns >9){
      
      drawWindow()
      $('.cells').addClass('animated')
      


    }

 
  }
  

})



   

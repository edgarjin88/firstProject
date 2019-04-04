 
// Break the project down into different components (data, presentation, views, style, DOM manipulation) 
// Data? here to? 


//All logic to be seperated from DOB manipulation.
// function by function, to be seperated. 
// Data to be stored as an Object. 


// Switch turns between X and O (or whichever markers you select)
// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins

// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)





///////DOM control part////////////////**
 

//update score board
//update game board
// flushing player bottom 

//button to be clicked, start 

// 시작시 바로 시작 하지 않는 점. 
// 끝나고 클릭 되는 점. 


/////

const record = {
  player1win:0, 
  player2win:0, 
  turns: 0
}
let playerOne = 1
let playerTwo = 2
let currentPlayer = 0
let gameBoard =0
/// gameStart 이후에, 위의 부분은 돔과 소통한다. Joel의 자바스크립트 파일이 어떻게 Dom 과 소통했는지 리뷰 해 보도록 하자. 

//////////////////other infor should be in document.ready ////////////////////////////////////////

$(document).ready(function(){
  console.log(`jQuery ready`);



$body = $('body')

///////DOM control part////////////////**
 

//update score board
//update game board
// flushing player bottom 

//button to be clicked, start 
let $div =$('<div></div>').addClass('secondWindow')

let $message0 = $('<div> Game start?</div>').addClass('thirdWindow')
let $message1 = $('<div>Do you want to play game?</div>').addClass('thirdWindow')
let $message2 =$('<div>Do you want to quit?</div>').addClass('thirdWindow')
let $message3 =$('<div>You Won! One more game?</div>').addClass('thirdWindow')
let $message4 =$('<div>Draw Game! One more game?</div>').addClass('thirdWindow')
let $message5 =$('<div>Game Started!</div>').addClass('thirdWindow')
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
 // event delegation. But outside of body tag not working? 
 //if I can see on the window, doesn't that mean it is already updated? 
    
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

  function winnerWindow(){
    $secondWindow = $div.append($message3).append($yes, $no)

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

//draw 펑션도 만들어라. 

  function resetBoard(){
    gameBoard ={ // we need game board objec to update DOM eventually. 
    a: [0, 0, 0], // still faster than for? 
    b: [0, 0, 0],
    c: [0, 0, 0]

    
  }
  // currentPlayer = 1
  }
  
  // resetBoard();
  

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
      
      randomPick()
    }

   

  

    //////below code to be removed


   

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
      setTimeout(randomPick, 1000)



      
    }else if(currentPlayer ==2){
      $(event.target).append(icon2).hide().fadeIn(500).addClass('animated flip').addClass('mapIcon');
      
      // turnChange(currentPlayer)
    } 
    
    if(gameBoard[digit[0]][digit[1]]===0){
      gameBoard[digit[0]][digit[1]] = currentPlayer // how to check the sopt + update data base

      turnChange(currentPlayer); 
      // if()
      //turn change here. 
     }
    
     winCheck(currentPlayer) //order always matters. 
    

    console.log(gameBoard);
    console.log('currentPlayer :', currentPlayer)
  
  })  
    // turnchange, turn count, player change, place record done. 
    
    

    // $('#GameStart').on('click', function(){
    // gameStart();  
    // Game start on click, all reset, current player randomly taken. 
  

    // })
  

//// 상하 좌우 뒤집히는 로직 만들자. 

////////////////////////////////////////////done//////////////////////////////////////////////////////////////////

  
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
      winnerWindow()
      $('.cells').addClass('animated')
      
      //DOM control function to be started. 
     
      // you
    }else if(l1 ==8  || l2 ==8|| l3 ==8|| l4 ==8|| l5 ==8 || l6 ==8|| l7 ==8 || l8 ==8){
      record.player2win += 1
      // console.log('player two won');
      $('.score2').html(record.player2win) 
      winnerWindow()
      $('.cells').addClass('animated')
      
      
    }

    else if(record.turns >9){
      
      drawWindow()
      $('.cells').addClass('animated')
      


    }

    
   
 
  }
  
///////////////////// at the end of document.ready////////////////////////////////////


/////// AI system//////////////




// player2 일 경우에만 실행한다. 

// random 으로 맵이 제로인 곳을 픽업 한다. 
// for loop를 사용할지, jquery를 사용할지 알아보자. 

//그다음 아이디 값을 기반으로 해서 다시 추격해서 맵에다가 아이콘 올리도록 한다. 


// 중복되는 펑션들은 밖으로 빼서 리팩토링 하도록 하자. 





////////////////////////////
})


/////

// let emptyCells = []

// for (let line in gameBoard) {
//   for(let i = 0; i <gameBoard[line].length; i++){
//     if(gameBoard[line][i] ===0){
//       emptyCells.push(gameBoard[line][i])

//       let num = Math.ceil(Math.random() * 10)

    
//     if(num <6){
//       // click
        //마지막까지 클릭을 안 할 상황도 생긴다. 
        // 클릭 할 때 카운터 한번 올리고, 카운터가 제로면 한번더 돌리는 걸로 하자. 
        // 클릭 안하면 걍 턴 한번 더 돌리자. 

//     }
//   }
// }
// console.log('curretnly empty cells: ', emptyCells)
   

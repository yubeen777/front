/* 로직을 먼저 파악해보자
랜덤번호 지정
우저가 번호를 입력한다 그리고 go라는 버튼을 누름 
만약에 유저가 랜덤번호를 맞추면 맞췄다는 알림
랜덤 번호가 < 유저번호  down
랜덤 번호가 < 유저번호 up
reset 버튼을 누르면 게임이 리셋 된다
5번의 기호를 다쓰면 게임이 끝난다(더이상 추측 불가 ,버튼이 disable)
유저가 1~100 범위 밖에 숫자를 또 입력하면 알려준다 기회를 깍지 않는다 
유저가 이미 입력한 숫자를 또 입력하면 알려준다 기회를 깍지 않는다 */


let computerNum =0;
let playButton = document.getElementById("play-button");//document이건 브라우저에 있는 문서를 의미한다.
//getElementById는 id를 통해 해당하는 요소를 찾아준다는 의미이다.
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton  = document.getElementById("reset-button");
let chances =5; 
let GameOver = false
let chanceArea = document.getElementById("chance-area")
let history = []


playButton.addEventListener("click", play);//addEventListener는 이벤트를 추가하는 메소드이다.
//이벤트가 발생하면 play함수를 실행한다. 문법은 addEventListener("이벤트", 함수명)이다.인벤트에는 click, mouseover, mouseout, keydown, keyup 등이 있다. play함수는 아래에 정의되어 있다.여기서 play()는 함수를 호출하는 것이 아니라 함수를 참조하는 것이다. 함수를 호출하려면 play()가 아니라 play이다.
resetButton.addEventListener("click",reset )
userInput.addEventListener("focus",disappear) //function() {userInput,value = ""} 이렇게 해도 된다 익명의 함수를 쓴거인데 그 이유는 저 함수를 다른곳에 사용할 일이 없고 여기서만 사용하는 거라면 굳이 함수를 만들어 메모리 차지 하지 않게 저렇게 선언하는 방법이자 이유이다(안에 있는 로직이 단순할때 익몀함수 이용)


function pickRandomNumber() {
  computerNum =Math.floor (Math.random() * 100)+1;// 0-99가 나오기 때문에 +1을 해준다. 
    console.log("정답",computerNum);
}

function play() {
    let userValue = userInput.value;
    if(userValue<1 || userValue>100){
        resultArea.textContent="1부터 100 사이의 숫자만 가능해용~"
        return;//이걸 쓰면 밑의 함수를 실행 하지 않고 끝내는 역할이다
        //그럼으로 찬스는 깍이지 않게 된다
    }
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자 입니다";
        return;
    }
    chances -- ; // 찬스가 -1씩 된다는 의미
    chanceArea.textContent= `남은 기회:${chances}번`
    if (userValue < computerNum) {
        resultArea.textContent = "Up bro~!";
    }else if (userValue > computerNum) {
        resultArea.textContent = "Down bro~!";
    }else {
        resultArea.textContent = "Correct!";
        
        GameOver = true
        // playButton.disabled = true 이렇게도 됨
    }
    
    history.push(userValue)//이렇게 하면 입력 값이 히스토리 빈 배열의 담긴다


    if (chances <1){
        GameOver = true
    }
    if (GameOver == true){
        playButton.disabled = true
    }
} 


function reset(){
    userInput.value = "" ;
    pickRandomNumber();
    resultArea.textContent = "다시 시작 ㄱㄱ!";
}


function disappear(){
    userInput.value= ""
}
pickRandomNumber();
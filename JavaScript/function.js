 /* function greet(){
     console.log("안녕 내 이름은 제시카야 ");
 }

----------------------------------------------------------------------------------
 function greet(name){
 return  `안녕 내 이름은 ${name}야`;
 }
  greet("에밀리");

  console.log(greet("에밀리"));
 함수는 크게 두 가지 방식으로 사용할 수 있음

  어떤 방식을 선택할지는 사용 목적에 따라 다름!

 단순히 출력만 필요하면 console.log() 방식
 반환된 값을 다른 로직에서 활용할 수도 있도록 하려면 return 방식 
----------------------------------------------------------------------------------*/

 /*
 function meetAt(year, month, date) {
    if (month === undefined && date === undefined) {
        return `${year}년`;
    } else if (date === undefined) {
        return `${year}년 ${month}월`;
    } else {
        return `${year}/${month}/${date}`;
    }
}

// 테스트 실행
console.log(meetAt(2024));       // 출력: "2024년"
console.log(meetAt(2024, 5));    // 출력: "2024년 5월"
console.log(meetAt(2024, 5, 10)); // 출력: "2024/5/10"

//✔ undefined를 활용한 인자 체크 방법
//✔ 불필요한 meetAt() 호출 제거
//✔ 조건에 따라 문자열을 다르게 조합하는 방법


----------------------------------------------------------------------------------*/

// function findSmallestElement(arr) {
//     if(arr.length === 0){
//         return 0;
//     }else{
//         return Math.min(...arr); // 배열에서 가장 작은 값을 찾으려면 Math.min()을 활용.
//     }                              //...arr를 사용하면 배열이 각 요소로 풀어져서(spread) 전달됨.
// }

// console.log(findSmallestElement([15,6,1515,48,4,1]));

/*배열을 개별 요소로 펼치기
javascript
복사
편집
let numbers = [1, 2, 3];
console.log(...numbers); // 출력: 1 2 3 (각 요소가 개별적으로 출력됨)
✅ ...numbers는 [1, 2, 3]을 개별 요소 1, 2, 3으로 확장함.

🔹 배열을 합칠 때 사용
javascript
복사
편집
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // 출력: [1, 2, 3, 4, 5, 6]
✅ 두 배열을 쉽게 합칠 수 있음!*/

// let numbers = [1, 2, 3];
// console.log(...numbers); // 출력: 1 2 3 (각 요소가 개별적으로 출력됨)
// //consol.log(numbers); // 출력: [1, 2, 3] (배열 전체가 출력됨)
/*----------------------------------------------------------------------------------*/
// let money = 54320;
// let currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10];

// for (let i = 0; i < currency.length; i++) {
//     let count = Math.floor(money / currency[i]); // 현재 화폐로 나눌 수 있는 개수
//     money %= currency[i]; // 남은 금액 업데이트
//     console.log(`${currency[i]} X ${count}`);
// }
let unit = [50000,10000,5000,1000,500,100]//돈 단위
function changeCalculate(money) {
  for(let i=0;i<unit.length;i++){
    
    let num = Math.floor(money / unit[i])//Math.floor()는 주어진 숫자를 내림(버림)하여 가장  가까운 정수로 변환하는 함수입니다.소수점 이하를 모두 버리고, 작은 정수로 내립니다.
      
    console.log(unit[i]+"X"+num)
      
    money = money - (unit[i]*num)
  }
}

changeCalculate(12300)

/*
i	화폐 단위 unit[i]	money / unit[i] 몫(num)	  money = money - (unit[i] * num)	출력
0	50000	           12300 / 50000 = 0	      12300 - (50000 × 0) = 12300	    50000 X 0
1	10000	           12300 / 10000 = 1	      12300 - (10000 × 1) = 2300	    10000 X 1
2	5000	           2300 / 5000 = 0	          2300 - (5000 × 0) = 2300	        5000 X 0
3	1000	           2300 / 1000 = 2	          2300 - (1000 × 2) = 300	        1000 X 2
4	500	               300 / 500 = 0	          300 - (500 × 0) = 300	            500 X 0
5	100	               300 / 100 = 3	          300 - (100 × 3) = 0	            100 X 3
*/
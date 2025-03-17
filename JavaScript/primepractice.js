let n =11
let isPrime = true //isPrime을 true로 초기화하여, 기본적으로 소수라고 가정

if (n ===1){// 1은 소수가 아님 
    isPrime = false
}else{
    for(let i=2;i<n;i++){// n이 1이 아닌 경우, for 문을 사용하여 2부터 n-1까지의 숫자로 n을 나누어 봅니다.
      // 즉, n이 2부터 n-1까지 어떤 수로도 나누어지지 않으면 소수입니다.
      if(n % i == 0){//n을 i로 나누었을 때 나머지가 0이면 약수가 존재하는 것이므로 소수가 아닙니다.
        isPrime =  false 
      }
    }
}

console.log(isPrime===true ? "소수입니다" : "소수가 아닙니다")
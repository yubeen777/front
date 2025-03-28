for (let i = 1; i <= 50; i++) {
  let strNumber = i.toString(); //숫자를 문자열로 변환
  let result = ""; //"짝" 문자열을 저장할 result 변수를 초기화합니다.
  for (let j = 0; j < strNumber.length; j++) {
    //strNumber의 각 자리 숫자를 확인하는 두 번째 for 문입니다.
    if (strNumber[j] === "3" || strNumber[j] === "6" || strNumber[j] === "9") {
      result += "짝";
    }
  }
  console.log(result.length > 0 ? result : i);
}

// ### 1️⃣ `i = 3`
// 1. `3`을 문자열로 변환 → `"3"`
// 2. `"3"`의 각 자리 숫자를 확인
//    - `"3"`은 `3`, `6`, `9` 중 하나이므로 **"짝"을 추가**
// 3. `result = "짝"`
// 4. 출력: **짝** ✅

// ---

// ### 2️⃣ `i = 36`
// 1. `36`을 문자열로 변환 → `"36"`
// 2. `"36"`의 각 자리 숫자를 확인
//    - 첫 번째 자리 `"3"` → `result += "짝"` (짝 추가)
//    - 두 번째 자리 `"6"` → `result += "짝"` (짝 추가)
// 3. `result = "짝짝"`
// 4. 출력: **짝짝** ✅

// ---

// ### 3️⃣ `i = 17`
// 1. `17`을 문자열로 변환 → `"17"`
// 2. `"17"`의 각 자리 숫자를 확인
//    - `"1"`은 `3`, `6`, `9`가 아님 → 아무것도 추가 X
//    - `"7"`도 `3`, `6`, `9`가 아님 → 아무것도 추가 X
// 3. `result = ""` (빈 문자열)
// 4. 출력: **17** ✅ (숫자 그대로 출력)

// ---

// ### 4️⃣ `i = 39`
// 1. `39`을 문자열로 변환 → `"39"`
// 2. `"39"`의 각 자리 숫자를 확인
//    - `"3"` → `result += "짝"` (짝 추가)
//    - `"9"` → `result += "짝"` (짝 추가)
// 3. `result = "짝짝"`
// 4. 출력: **짝짝** ✅

// ---

// ## 🔹 정리
// ✔ 숫자를 **문자열로 변환한 후**, 각 자리 숫자를 하나씩 검사한다.
// ✔ `"3", "6", "9"`가 포함되면 `"짝"`을 추가한다.
// ✔ `"3", "6", "9"`가 여러 개 포함되면 **그 개수만큼 "짝"을 출력한다.**
// ✔ `"3", "6", "9"`가 없으면 숫자를 그대로 출력한다.

// **즉, 숫자 하나하나를 떼어서 3, 6, 9가 포함되었는지 확인하고, 포함된 개수만큼 "짝"을 추가하는 방식!** 🚀

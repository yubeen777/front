// DOM 요소 참조
let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".tab-type div");
let underLine = document.getElementById("under-line");
let taskBoard = document.getElementById("task-board");

// 상태 변수
let taskList = [];
let filterList = [];
let mode = "all";

// 이벤트 리스너 등록
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (e) {
    filter(e);
  });
}

// 할 일 추가 함수
function addTask() {
  let inputValue = taskInput.value.trim();
  if (inputValue === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  let task = {
    id: randomID(),
    content: inputValue,
    isComplete: false,
    createdAt: new Date().toLocaleString(),
  };

  taskList.push(task);
  taskInput.value = "";
  render();
}

// 할 일 렌더링 함수
function render() {
  let list = mode === "all" ? taskList : filterList;
  let resultHTML = "";

  for (let i = 0; i < list.length; i++) {
    let task = list[i];
    resultHTML += `
      <div class="task">
        <div>
          <div class="${task.isComplete ? 'task-done' : ''}">${task.content}</div>
          <small class="date-text">${task.createdAt}</small>
        </div>
        <div>
          <button onclick="toggleComplete('${task.id}')">${task.isComplete ? '↩' : '✔'}</button>
          <button onclick="deleteTask('${task.id}')">🗑</button>
        </div>
      </div>
    `;
  }

  taskBoard.innerHTML = resultHTML;
}

// 완료 상태 토글
function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  filter();
}

// 삭제 함수
function deleteTask(id) {
  taskList = taskList.filter(task => task.id !== id);
  filter();
}

// 필터 함수
function filter(e) {
  if (e) {
    mode = e.target.id;
    underLine.style.width = e.target.offsetWidth + "px";
    underLine.style.left = e.target.offsetLeft + "px";
  }

  filterList = [];

  if (mode === "all") {
    render();
  } else if (mode === "ongoing") {
    filterList = taskList.filter(task => !task.isComplete);
    render();
  } else if (mode === "done") {
    filterList = taskList.filter(task => task.isComplete);
    render();
  }
}

// 랜덤 ID 생성기
function randomID() {
  return '_' + Math.random().toString(36).substr(2, 9);
} 

// 페이지 로딩 시 첫 번째 탭 ('모두') 자동 클릭 효과
window.onload = function () {
  let firstTab = document.getElementById("all");
  mode = "all";
  underLine.style.width = firstTab.offsetWidth + "px";
  underLine.style.left = firstTab.offsetLeft + "px";
  render();
};

import { clearForm, copyTextToClipboard, createCopyButton } from "../App.js";

let currentGreeting = '';
export default function greetings() {
  // 기존 요소 리셋
  clearForm();

  // 타이틀 생성
  document.querySelector(".function-name").textContent = "첫인사";
  // 설명 생성
  document.querySelector(".function-explanation").textContent = "하단의 문자 생성 버튼을 클릭해 주세요";

  // 폼 생성
  const form = document.createElement('form');
  form.classList.add('form');

  // 텍스트 영역 생성
  const input = document.createElement('textarea');
  input.style.display = 'block';
  input.classList.add('msg-input');
  input.cols = "50";
  input.rows = "25"; 
  currentGreeting = 
  `[인천 아이미래로]
안녕하세요, 인천 아이미래로 입니다 :)
    
인천 아이미래로에선 아기들의 건강과 엄마들의 안정을 최우선으로 하는 
전문적인 산모 및 신생아 관리프로그램을 약속드립니다.
    
▶문의
   - 남인천(미추홀구,남동구, 연수구, 동구)
     032-442-5992
    
   - 서인천(계양구,서구, 중구)
     032-327-6992
    
   - 부평구
     032-262-5992
    
▶공식사이트
   www.imirae-incheon.com

▶서비스 후기 더 보기
   blog.naver.com/imirae-incheon`;

  input.innerHTML = currentGreeting;

  // 복사 버튼 생성
  const copyButton = createCopyButton();
  copyButton.style.display = 'block';
  
  function handleCopyButton() {
    copyTextToClipboard(currentGreeting);
  } 
  
  // 복사 버튼 이벤트 생성
  copyButton.addEventListener('click', handleCopyButton);
  
  // DOM에 추가
  const con = document.createElement('div');
  con.appendChild(copyButton);
  form.appendChild(input);
  form.appendChild(con);

  const mainContentContainer = document.querySelector('.main-content');
  mainContentContainer.appendChild(form);

  // 입력창 엔터 이벤트 조정
  input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      copyTextToClipboard(currentGreeting);
    }
  });

};
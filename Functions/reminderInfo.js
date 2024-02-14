import { clearForm, copyTextToClipboard, createCopyButton } from "../App.js";

let name = '';

function generateGreetingMsg(name) {
    return `[인천 아이미래로]
    ${name} 산모님~♡

    아가 예뻐하시고 케어 잘하시는 
    프리미엄급 관리사님으로 매칭 되도록 최대한 신경쓰겠습니다~
    
    저도 서비스가 종료되는 때까지 산모님께서 
    편안하고 행복하게 서비스 받으시는지 
    지속적으로 체크하고 신경 써서 
    산모님께서 만족하시는 서비스가 되도록 최선을 다하겠습니다 :)
    
    가족 분들과 편히 상의하시고 말씀해 주세요~ 연락 기다리겠습니다 :) 
    
    감사합니다~!`
}

export default function serviceInfo() {
    // 기존 요소 리셋
    clearForm();

    // 타이틀 생성
    document.querySelector(".function-name").textContent = "상담 후 리마인더";
    // 설명 생성
    document.querySelector(".function-explanation").textContent = "해당 항목들을 모두 작성 및 선택 후에 하단에 있는 문자 생성 버튼을 클릭해 주세요"

    // 폼 생성
    const form = document.createElement('form');
    form.classList.add('form');
    // 폼을 기반으로 텍스트 생성 버튼 생성
    const createTextButton = document.createElement('button');
    createTextButton.classList.add('create-text-button');
    createTextButton.textContent = '메시지 생성';
    createTextButton.type = 'button';

    // 텍스트 생성을 위한 산모 이름 입력창 생성
    const name_label = document.createElement('label');
    name_label.classList.add('name-label');
    name_label.textContent = '산모 이름';
    const name_input = document.createElement('input');
    name_input.classList.add('name-input');
    name_input.type = 'text';

    // 산모 이름 저장
    name_input.addEventListener('input', () => {
        name = name_input.value;
        console.log(name);
    });

    // 메시지 생성 함수
    function createText() {
        const currentGreeting = generateGreetingMsg(name);
        msg_input.innerHTML = currentGreeting;
        msg_input.style.display = 'block'; // Show textarea
        copyButton.style.display = 'block'; // Show copy button
    }

    // 텍스트 영역 생성
    const msg_input = document.createElement('textarea');
    msg_input.classList.add('msg-input');
    msg_input.cols = "50";
    msg_input.rows = "25";
    msg_input.style.display = 'none';
    form.appendChild(msg_input);

    // 입력창 엔터 이벤트 조정
    name_input.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            createText();
        }
    })
    // 메시지 복사 버튼 이벤트 생성
    createTextButton.addEventListener('click', (e) => {
        e.preventDefault();
        createText();
    });
    
    // 복사 버튼 생성
    const copyButton = createCopyButton();
    copyButton.style.display = 'none';
    
    // 복사 버튼 동작 생성
    function handleCopyButton() {
        const currentGreeting = generateGreetingMsg(name);
        copyTextToClipboard(currentGreeting);
    }
    
    // 복사 버튼 이벤트 생성
    copyButton.addEventListener('click', handleCopyButton);

    // DOM에 추가
    const con = document.createElement('div');
    const con2 = document.createElement('div');
    con2.classList.add('name-input-container')
    name_label.appendChild(name_input);
    con.appendChild(copyButton);
    con2.appendChild(name_label);
    con2.appendChild(createTextButton);
    form.appendChild(con2);
    form.appendChild(msg_input);
    form.appendChild(con);

    const main_container = document.querySelector('.main-content');
    main_container.style.width = '511.430px';
    main_container.style.height = '612.500px';

    const mainContentContainer = document.querySelector('.main-content');
    mainContentContainer.appendChild(form);
}
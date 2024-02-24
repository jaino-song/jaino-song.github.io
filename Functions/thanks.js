import { clearForm, copyTextToClipboard, createCopyButton } from "../App.js";

let name = '';

function generateGreetingMsg(name) {
    return `[인천 아이미래로]
입금 확인/예약 확정 완료

${name} 산모님 ~♡

입금 확인 되었고, 예약도 완료 되었습니다~!

궁금하신 점 있으시면 
언제든지 연락 주시고요~

산모님의 서비스를 잘 준비하고 있겠습니다 :)

예쁜 아가 순산하시면 연락주세요~

감사합니다~!`
}

export default function thanks() {
    // 기존 요소 리셋
    clearForm();

    // 타이틀 생성
    document.querySelector(".function-name").textContent = "예약 확정 완료";
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
import { clearForm, copyTextToClipboard, createCopyButton } from "../App.js";

let name = '';

function generateGreetingMsg(name) {
    return `[인천 아이미래로]
${name} 산모님~♡

산후관리서비스 관련 
안내사항 보내드립니다 :)

▶관리사님의 근무시간은 오전 9시부터 오후 6시까지이며 
점심 식사 시간이 포함된 1시간 휴게시간이 있습니다.

휴게시간은 산모님과 관리사님이 서로 잘 조율하셔서 사용하시면 됩니다^^ 

▶관리사님께서 하시는 주 업무는 
신생아 케어 (신생아 목욕, 신생아 빨래, 수유, 젖병 삶기 등),
산모 음식 준비, 
아기와 산모가 머무는 방의 청소와 거실과 
화장실의 간단한 청소 등의 일들을 하시는데 
묵은 빨래, 대청소, 베란다 청소 등의 
과중한 일들은 하지 않으십니다.

그 외 산모님께서 도움이 필요한 일이 생겼을 시에, 
그때그때 말씀하시면 거의 다 도와드립니다 :)

그리고 산모님께서 젖몸살이 오면 케어해주십니다^^

궁금하신 점 있으시면 언제든지 문자 또는 연락 주세요 :)

감사합니다.`
}

export default function serviceInfo() {
    // 기존 요소 리셋
    clearForm();

    // 타이틀 생성
    document.querySelector(".function-name").textContent = "서비스 소개";
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
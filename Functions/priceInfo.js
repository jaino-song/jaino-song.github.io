import { clearForm, copyTextToClipboard, createCopyButton, fetchTextsJSON, fetchVoucherJSON } from "../App.js";

let name = '';
let area = '';
let weeks = 0;
let days = 0;
let type = '';
let fullPrice = 0;
let grant = 0;
let actualPrice = 0;
let bankAccountList = {};
let voucherList = {};
let input = '';
let createTextButton = '';
let copyButton = '';

async function getBankAccountList() {
    bankAccountList = await fetchTextsJSON();
}

async function getVoucherList() {
    voucherList = await fetchVoucherJSON();
}

// 데이터 입력 여부 확인 함수
function dataChecker() {
    if (days === 0) {
        alert('서비스 기간을 입력해 주세요');
        throw new Error('서비스 기간을 입력해 주세요');
    }
    else if (name === '') {
        alert('산모 이름을 입력해 주세요');
        throw new Error('산모 이름을 입력해 주세요');
    }
}
// 메시지 생성 버튼 생성
function createCreateTextButton() {
    createTextButton = document.createElement('button');
    createTextButton.classList.add('create-text-button');
    createTextButton.textContent = '메시지 생성';
    createTextButton.type = 'button';
    createTextButton.addEventListener('click', createText);
}

function generatePriceMsg(name) {
    // 바우처 유형에 따른 가격표 정보 설정
    fullPrice = voucherList[type][days].fullPrice;
    grant = voucherList[type][days].grant;
    actualPrice = voucherList[type][days].actualPrice;
    return `[인천 아이미래로]

${name} 산모님~♡ 
예약금 관련해서 안내 드립니다 :)

서비스 기간: 
    출퇴근 ${weeks}주 (평일기준 ${days}일)
정부지원 바우처 유형: 
    ${type}

기본 서비스 금액은 
총 ${fullPrice}원이며, 
정부 지원금액은 
${grant}원 입니다.

산모님께서 부담하시는 금액은 
${actualPrice}원 입니다.

서비스 예약을 위해 
선납하실 예약금은 
100,000원 입니다.

예약금 입금 후에 
서비스 예약이 확정 됩니다.

입금 계좌번호: 
${bankAccountList[area].bankName} ${bankAccountList[area].accNum}
예금주: ${area === "3" ? "송진호(자이노컴퍼니)" : "인천 아이미래로 (김정인ㄹㄹ)"};

입금시 입금자명을 꼭 기재해 주세요 :)
(타인 계좌에서 송금시 산모님 성함 기재 필수)

감사합니다.`
}

export default async function priceInfo() {
    clearForm();
    document.querySelector(".function-name").textContent = "금액 및 계좌번호";
    document.querySelector(".function-explanation").textContent = "해당 항목들을 모두 작성 및 선택 후에 하단에 있는 문자 생성 버튼을 클릭해 주세요"
    
    await getBankAccountList();
    await getVoucherList();

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
    });

    // 바우처 유형 선택창 생성
    const type_label = document.createElement('label');
    type_label.classList.add('type-label');
    type_label.textContent = '바우처 유형';
    const type_select = document.createElement('select');
    type_select.classList.add('type-select');
    type_select.innerHTML = `
        <option disabled selected>선택하세요</option>
        <option disabled>---------A형 첫째아-----------</option>
        <option value="A가1형">A가-1형</option>
        <option value="A통합1형">A통합-1형</option>
        <option value="A라1형">A라-1형</option>
        <option disabled>---------A형 둘째아-----------</option>
        <option value="A가2형">A가-2형</option>
        <option value="A통합2형">A통합-2형</option>
        <option value="A라2형">A라-2형</option>
        <option disabled>---------A형 셋째아-----------</option>
        <option value="A가3형">A가-3형</option>
        <option value="A통합3형">A통합-3형</option>
        <option value="A라3형">A라-3형</option>
        <option disabled>---------쌍생아 인력 1-----------</option>
        <option value="B가1형">B가-1형</option>
        <option value="B통합1형">B통합-1형</option>
        <option value="B라1형">B라-1형</option>
        <option disabled>---------쌍생아 인력 2-----------</option>
        <option value="B가2형">B가-2형</option>
        <option value="B통합2형">B통합-2형</option>
        <option value="B라2형">B라-2형</option>
    `;

    /* 가격표 정보 입력 후 위에 추가
        <option value="C가-1형">C가-1형</option>
        <option value="C통합-1형">C통합-1형</option>
        <option value="C라-1형">C라-1형</option>
        <option value="C가-2형">C가-2형</option>
        <option value="C통합-2형">C통합-2형</option>
        <option value="C라-2형">C라-2형</option>
        */
    type_select.addEventListener('change', () => {
        type = type_select.value;
        if (type[0] === 'A' && (type[2] === '1' || type[3] === '1')) {    
            days_input.innerHTML = `
                <option disabled selected value>선택하세요</option>
                <option value="5">5일</option>
                <option value="10">10일</option>
                <option value="15">15일</option>`;
        }
        else {
            days_input.innerHTML = `
                <option disabled selected value>선택하세요</option>
                <option value="10">10일</option>
                <option value="15">15일</option>
                <option value="20">20일</option>`;
        }
    });

    // 서비스 기간(일) 입력창 생성
    const days_label = document.createElement('label');
    days_label.classList.add('days-label');
    days_label.textContent = '서비스 기간(일)';
    const days_input = document.createElement('select');
    days_input.classList.add('days-input');
    days_input.innerHTML = `
        <option disabled selected value>바우처 유형을 선택하세요</option>`;
    
    days_input.addEventListener('change', () => {
        days = days_input.value;
        // 서비스 기간(주) 설정
        if (days < 5) {
            weeks = 1;
        }
        else {
            weeks = Math.floor(days / 5);
        }
    });

    // 구역 설정
    const area_label = document.createElement('label');
    area_label.classList.add('area-label');
    area_label.textContent = '지역 선택';
    const area_select = document.createElement('select');
    area_select.classList.add('area-select');
    area_select.innerHTML = `
        <option value disabled selected>선택하세요</option>
        <option value="0">남동구</option>
        <option value="1">서구</option>
        <option value="2">부평구</option>
        <option value="3">자이노 컴퍼니</option>
    `;
    area_select.addEventListener('change', () => {
        area = area_select.value;
    }
    );

    // 텍스트 영역 생성
    input = document.createElement('textarea');
    input.style.display = 'none';
    input.classList.add('msg-input');
    input.cols = "50";
    input.rows = "25";

    // 복사 버튼 생성
    copyButton = createCopyButton();
    copyButton.style.display = 'none';
    
    function handleCopyButton() {
        const currentGreeting = generatePriceMsg(name);
        copyTextToClipboard(currentGreeting);
    } 
    
    // 복사 버튼 이벤트 생성
    copyButton.addEventListener('click', handleCopyButton);

    // 메시지 생성 버튼 생성
    createCreateTextButton();

    // DOM에 추가
    const form = document.createElement('form');
    form.classList.add('form');
    form.appendChild(name_label);
    form.appendChild(name_input);
    form.appendChild(type_label);
    form.appendChild(type_select);
    form.appendChild(days_label);
    form.appendChild(days_input);
    form.appendChild(area_label);
    form.appendChild(area_select);
    form.appendChild(input);
    form.appendChild(createTextButton);
    form.appendChild(copyButton);
    const mainContentContainer = document.querySelector('.main-content');
    mainContentContainer.appendChild(form);
}

// 메시지 생성 함수
function createText() {
    try {
        dataChecker();
    }
    catch {
        stop;
    }
    const currentGreeting = generatePriceMsg(name);
    input.innerHTML = currentGreeting;
    input.style.display = 'block'; // Show textarea
    copyButton.style.display = 'block'; // Show copy button
}
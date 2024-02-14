import greetings from "./Functions/greetings.js";
import serviceInfo from "./Functions/serviceInfo.js";
import priceInfo from "./Functions/priceInfo.js";
import reminderInfo from "./Functions/reminderInfo.js";
import thanks from "./Functions/thanks.js";

export function clearForm() {
    const form = document.querySelector('.form');
    const mainContentContainer = document.querySelector('.main-content');
    if (form) {
        mainContentContainer.removeChild(form);
    }
}

export function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("복사 완료")
    }).catch(() => {
        alert("복사 실패. 관리자에게 문의하세요.")
    })
}

export function createCopyButton() {
    const copyButton = document.createElement('button');
    copyButton.classList.add('copy-button');
    copyButton.textContent = '메시지 복사';
    copyButton.type = 'button';
    return copyButton;
}

export function fetchTextsJSON() {
    return fetch('./asset/json/texts.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Here 'data' is the parsed JSON object
        const loadedJSON = data.bankAccountList;
        return loadedJSON;
    })
    .catch(error => {
        alert('There has been a problem with your fetch operation:', error);
    });
}

export function fetchVoucherJSON() {
    return fetch('./asset/json/voucher.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Here 'data' is the parsed JSON object
        const loadedJSON = data.voucherList;
        return loadedJSON;
    })
    .catch(error => {
        alert('There has been a problem with your fetch operation:', error);
    });
}

export { greetings, serviceInfo, priceInfo, reminderInfo, thanks };
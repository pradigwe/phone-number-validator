const resultsDiv = document.getElementById('results-div');
const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const responseMessages = document.getElementsByClassName('response-msg');
const userMessages = document.getElementsByClassName('user-msg')

let phoneNumber = '';
const checkPhoneNumber = () => {
    console.log('check number')
    const formatRegex = /^1?\s*(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if(formatRegex.test(phoneNumber)) {
        console.log('valid number')
        return true;
    } else {
        return false;
    }
}

const displayNumber = (validity) => {
    const userMsg = document.createElement('p');
    userMsg.className = 'user-msg';
    userMsg.innerText = phoneNumber;
    resultsDiv.appendChild(userMsg);
    
    const resultMsg = document.createElement('p');
    resultMsg.className = 'response-msg';
    resultMsg.innerText = `${validity ? 'Valid' : 'Invalid'} US number: ${phoneNumber}`;
    resultsDiv.appendChild(resultMsg);
}

const scrollToBottom = () => {
    const maxHeight = parseInt(window.getComputedStyle(resultsDiv).maxHeight.slice(0,-2));
    if(resultsDiv.scrollHeight >= maxHeight) {
        resultsDiv.style.overflowY = 'scroll';
    }
    resultsDiv.scrollTop = resultsDiv.scrollHeight;
    console.log('scroll');
}

input.addEventListener('keydown', (event) => {
    if(event.code === 'Enter'){
        if(input.value.trim() === ''){
            alert('Please provide a phone number');
        } else {

            phoneNumber = input.value;
            input.value = '';
            displayNumber(checkPhoneNumber())
            scrollToBottom();
        }
    }
})

checkBtn.addEventListener('click', () => {
    if(input.value.trim() === ''){
        alert('Please provide a phone number');
    } else {
        console.log(input.value);
        phoneNumber = input.value;
        input.value = '';
        displayNumber(checkPhoneNumber())
        scrollToBottom();
    }
})

clearBtn.addEventListener('click', () => {
    resultsDiv.innerHTML = ``;
    const baseMsg = document.createElement('p');
    baseMsg.className = 'response-msg';
    baseMsg.innerText = 'Enter a phone number to get started!';
    // resultsDiv.appendChild(baseMsg);
})
const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const CUSTOMER_NAME = "Mohamed Salah";
const BANKER_NAME = "Banker";
const CUSTOMER_IMG = "'https://cdn-icons-png.flaticon.com/512/666/666201.png'";
const BANKER_IMG = "'assets/images/kmans-logo Small.png'";

const CUSTOMER_MSGS = [
"Ohh... I can't understand what you trying to say. Sorry!",
"Does the bank have online banking and a mobile app?",
"I need to speak with the Manager!! NOW :(",
"Where are the bank's branches?",
"What are the bank's fees?",
"What are the minimum balance requirements?",
"Can I use an ATM for free?",
"What happens if I try to withdraw more money than I have in my account?",
]



msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(BANKER_NAME, BANKER_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(CUSTOMER_MSGS.length - 1);
  const msgText = CUSTOMER_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(CUSTOMER_NAME, CUSTOMER_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(max) {
  return Math.floor(Math.random() * max);
}
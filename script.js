const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const againButton = document.querySelector("#again-button");
const closeButton = document.querySelector("#close-button");
const successPanel = document.querySelector("#success-panel");
const hint = document.querySelector("#hint");

const noMessages = [
  "Mình sẽ đợi câu trả lời thật xinh của bạn nhé.",
  "Không sao, nhưng mình nghĩ đi cùng nhau sẽ vui lắm đó ♡",
  "Cho mình một cơ hội được làm bạn vui nha?",
];
let noClickCount = 0;

function showSuccess() {
  successPanel.hidden = false;
  document.body.style.overflow = "hidden";
  successPanel.querySelector(".success-heart").focus?.();
}

function hideSuccess() {
  successPanel.hidden = true;
  document.body.style.overflow = "";
}

yesButton.addEventListener("click", showSuccess);
againButton.addEventListener("click", hideSuccess);
closeButton.addEventListener("click", hideSuccess);

noButton.addEventListener("click", () => {
  hint.textContent = noMessages[noClickCount % noMessages.length];
  noClickCount += 1;
  noButton.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-4px)" },
      { transform: "translateX(4px)" },
      { transform: "translateX(0)" },
    ],
    { duration: 280, easing: "ease-out" },
  );
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !successPanel.hidden) hideSuccess();
});

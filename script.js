const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");

generateBtn = wrapper.querySelector(".form button");

qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) {
    // in case the input is empty it will return immidiately
    alert("please provide your intput");
    return;
  }
  generateBtn.innerText = "Generating Qr Code";

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  wrapper.classList.add("active");

  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "QR Code Generated";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});

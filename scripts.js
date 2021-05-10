"use strict";

//
let s = 20;
let hs = 0;
//
let x = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(`.secretnumber`).textContent = x;

//
document.querySelector(`.mainbutton`).addEventListener("click", function () {
  const num = Number(document.querySelector(`.maininput`).value);
  console.log(num);
  //   document.querySelector(`.scorevalue`).textContent = s;
  document.querySelector(`.highscorevalue`).textContent = hs;
  //   ----------------if not a number-----------------------
  if (!num) {
    document.querySelector(`.message`).textContent = `⚠️ Not a NUMBER!!! ⚠️`;
    document.querySelector(`.message`).style.color = `red`;
    // ------------------------if CORRECT---------------------
  } else if (num === x) {
    document.querySelector(
      `.message`
    ).textContent = `✔️🎈🎉 Correct Number 🎊🪅✔️`;
    document.querySelector(`.secretnumber`).textContent = x;
    document.querySelector(`body`).style.background = `#7dc734`;
    document.querySelector(`.scorevalue`).textContent = s;
    // hs = s;
    // document.querySelector(`.highscorevalue`).textContent = hs;
    if (s > hs) {
      hs = s;
      document.querySelector(`.highscorevalue`).textContent = hs;
    }
    //  else {
    //   document.querySelector(`.highscorevalue`).textContent = hs;
    // }
  }

  // ---------------too high------------------------
  else if (num > x) {
    if (s > 0 && num > 0 && num < 21) {
      document.querySelector(`.message`).textContent = `📈 Too HIGH !!!!📈`;
      document.querySelector(`.message`).style.color = `red`;
      document.querySelector(`.message`).style.fontWeight = `bold`;
      s--;
      document.querySelector(`.scorevalue`).textContent = s;
    }
  }
  //   --------------------if number less than random--------
  else if (num < x) {
    if (s > 0 && num > 0 && num < 21) {
      document.querySelector(`.message`).textContent = `📉 TOO LOW!!! 📉`;
      document.querySelector(".message").style.color = `cyan`;
      s--;
      document.querySelector(`.scorevalue`).textContent = s;
    }
  }
  if (s === 0) {
    document.querySelector(`.message`).textContent = `😰 You Lost LOSER! 😰`;
  }
});
document.querySelector(`.btn2`).addEventListener(`click`, function () {
  s = 20;

  x = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.scorevalue`).textContent = s;
  document.querySelector(`body`).style.background = `#222`;
  document.querySelector(`body`).style.color = `#FFFFFF`;
  document.querySelector(`.userscore`).style.color = `#FFFFFF`;
  document.querySelector(`.userhighscore`).style.color = `#FFFFFF`;
  document.querySelector(`.maininput`).value = " ";
  document.querySelector(`.message`).textContent = `🔢Enter a Number!!!! 🔢`;
  document.querySelector(`.message`).style.color = `#FFFFFF`;
  document.querySelector(`.secretnumber`).textContent = `?`;
  // document.querySelector(`.secretnumber`).textContent = x;
  //   document.querySelector(`.highscorevalue`).textContent = s;
});

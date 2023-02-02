const images = ["./imgs/banana.png", "./imgs/orange.png", "./imgs/apple.png"];

const itemdiv = document.querySelectorAll(".item");
const spinBtn = document.querySelector(".spinBtn");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

spinBtn.addEventListener("click", () => {
  spinBtn.style.display = "none";

  setTimeout(() => {
    for (let i = 0; i < 15; i++) {
      itemdiv[i].style.background = "none";

      let myRandomIndex = getRandomInt(0, 2);
      itemdiv[i].innerHTML = "<img src=' " + images[myRandomIndex] + "'/>";
    }
  }, 0);

  setTimeout(() => {
    for (let i = 0; i < 15; i++) {
      itemdiv[i].style.background = "none";

      let myRandomIndex = getRandomInt(0, 2);
      itemdiv[i].innerHTML = "<img src=' " + images[myRandomIndex] + "'/>";
    }
  }, 200);

  setTimeout(() => {
    for (let i = 0; i < 15; i++) {
      itemdiv[i].style.background = "none";

      let myRandomIndex = getRandomInt(0, 2);
      itemdiv[i].innerHTML = "<img src=' " + images[myRandomIndex] + "'/>";
    }
  }, 300);

  setTimeout(() => {
    for (let i = 0; i < 15; i++) {
      itemdiv[i].style.background = "none";

      let myRandomIndex = getRandomInt(0, 2);
      itemdiv[i].innerHTML = "<img src=' " + images[myRandomIndex] + "'/>";
    }
  }, 400);

  setTimeout(() => {
    for (let i = 0; i < 15; i++) {
      let myRandomIndex = getRandomInt(0, 3);
      itemdiv[i].innerHTML = "<img src=' " + images[myRandomIndex] + "'/>";
    }
  }, 500);

  setTimeout(() => {
    for (let i = 0; i < 15; i++) {
      let myRandomIndex = getRandomInt(0, 3);
      itemdiv[i].innerHTML = "<img src=' " + images[myRandomIndex] + "'/>";
    }
  }, 600);

  //   testing

  setTimeout(() => {
    for (let i = 0; i < 15; i++) {
      if (
        itemdiv[i].innerHTML === itemdiv[i + 1]?.innerHTML &&
        itemdiv[i + 1]?.innerHTML === itemdiv[i + 2]?.innerHTML
      ) {
        if (i === 3 || i === 4 || i === 8 || i === 9) {
        } else {
          setTimeout(() => {
            itemdiv[i].style.background = "lightgreen";
          }, 0);
          setTimeout(() => {
            itemdiv[i + 1].style.background = "lightgreen";
          }, 50);
          setTimeout(() => {
            itemdiv[i + 2].style.background = "lightgreen";
          }, 100);

          // break;
        }
      }
    }
  }, 800);

  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      if (
        itemdiv[i].innerHTML === itemdiv[i + 5]?.innerHTML &&
        itemdiv[i + 5]?.innerHTML === itemdiv[i + 10]?.innerHTML
      ) {
        setTimeout(() => {
          itemdiv[i].style.background = "lightblue";
        }, 0);
        setTimeout(() => {
          itemdiv[i + 5].style.background = "lightblue";
        }, 50);
        setTimeout(() => {
          itemdiv[i + 10].style.background = "lightblue";
        }, 100);

        // break;
      }
    }
  }, 1000);

  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      if (
        itemdiv[i].innerHTML === itemdiv[i + 6]?.innerHTML &&
        itemdiv[i + 6]?.innerHTML === itemdiv[i + 12]?.innerHTML
      ) {
        setTimeout(() => {
          itemdiv[i].style.background = "black";
        }, 0);
        setTimeout(() => {
          itemdiv[i + 6].style.background = "black";
        }, 50);
        setTimeout(() => {
          itemdiv[i + 12].style.background = "black";
        }, 100);

        // break;
      }
    }

    spinBtn.style.display = "block";
  }, 1100);
});

// console.log(itemdiv[0].innerHTML);

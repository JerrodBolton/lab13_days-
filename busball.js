// alert("Hey I don't feel so good today?")
const randomize = function (array) {
  return Math.floor(Math.random() * array.length);
};
// I made a class so that I can the list that put everything in this class.
class randomNumber {
  numberShown = 0;
  numberOC = 0;

  constructor(name, srcImg) {
    this.name = name;
    this.srcImg = srcImg;
    //  is there any other info that you think that you need to add to the list put it here.
  }
}

// I'm setting the variables later on so I can use it in my coat
rightSideImage = null;
middleSideImage = null;
leftSideImage = null;
totalNumberOC = 0;
MAX_CLICKS_NEED = 25;

let imgInfo = [
  // I'm add a new image into the random image shower
  new randomNumber("bag", "img/bag.jpg"),
  new randomNumber("banana", "img/banana.jpg"),
  new randomNumber("bathroom", "img/bathroom.jpg"),
  new randomNumber("boots", "img/boots.jpg"),
  new randomNumber("breakfast", "img/breakfast.jpg"),
  new randomNumber("bubblegum", "img/bubblegum.jpg"),
  new randomNumber("chair", "img/chair.jpg"),
  new randomNumber("cthulhu", "img/cthulhu.jpg"),
  new randomNumber("dog-duck", "img/dog-duck.jpg"),
  new randomNumber("dragon", "img/dragon.jpg"),
  new randomNumber("pen", "img/pen.jpg"),
  new randomNumber("pet-sweep", "img/pet-sweep.jpg"),
  new randomNumber("scissors", "img/scissors.jpg"),
  // I put this array here as I can get my night object a name and pictures
];  //? 

// // this is nothing but a check in order to see if it pull the image??
// for (let j = 0; j < imgInfo.length; j++) {
//     console.log(imgInfo[6].srcImg);
// }

// I need something  that I can put it on my webpage it time for DOM M

const busBallHeader = document.getElementById("busBallHeader");
const allImage = document.getElementById("all_pic");
const endThoughts = document.getElementById("endThoughts");
const rightSideImg = document.getElementById("rightSideImg");
const rightSideName = document.getElementById("rightSideName");
const leftSideImg = document.getElementById("leftSideImg");
const leftSideName = document.getElementById("leftSideName");
const middleSideImg = document.getElementById("middleSideImg");
const middleSideName = document.getElementById("middleSideName");
//  this is so that I can make my chart
const imgChart = document.getElementById("imgChart");

function getRandom() {
  // I'm making a function so that is can get a random number image in my array.
  let rightSideImageJ = Math.floor(Math.random() * imgInfo.length);
  let middleSideImageJ = Math.floor(Math.random() * imgInfo.length);
  let leftSideImageJ = Math.floor(Math.random() * imgInfo.length);
  // I don't have to do it like this I can do a get "randomize(imgInfo)"

  let leftVsMiddle = leftSideImageJ === middleSideImageJ;
  let rightVsMiddle = rightSideImageJ === middleSideImageJ;
  let rightVsLeft = rightSideImageJ === leftSideImageJ;
  // this is so that I can do a check on me new variable
  //  console.log(leftVsMiddle,rightVsMiddle,rightVsLeft);

  while (leftVsMiddle || rightVsMiddle || rightVsLeft) {
    if (leftVsMiddle) {
      // leftSideImageJ = Math.floor(Math.random() * imgInfo.length);
      leftSideImageJ = randomize(imgInfo);
    } else if (rightVsMiddle) {
      // rightSideImageJ = Math.floor(Math.random() * imgInfo.length);
      rightSideImageJ = randomize(imgInfo);
    } else if (rightVsLeft) {
      // middleSideImageJ = Math.floor(Math.random() * imgInfo.length);
      middleSideImageJ = randomize(imgInfo);
    }
    leftVsMiddle = leftSideImageJ === middleSideImageJ;
    rightVsMiddle = rightSideImageJ === middleSideImageJ;
    rightVsLeft = rightSideImageJ === leftSideImageJ;
  }

  // right image and name will show in the webpage
  rightSideName.innerText = imgInfo[rightSideImageJ].name;
  rightSideImg.src = imgInfo[rightSideImageJ].srcImg;
  // middle image and name will show in the webpage
  middleSideName.innerText = imgInfo[middleSideImageJ].name;
  middleSideImg.src = imgInfo[middleSideImageJ].srcImg;
  // left image and name will show in the webpage.
  leftSideName.innerText = imgInfo[leftSideImageJ].name;
  leftSideImg.src = imgInfo[leftSideImageJ].srcImg;

  // update the other two displayed in
  middleSideImage = imgInfo[middleSideImageJ];
  rightSideImage = imgInfo[rightSideImageJ];
  leftSideImage = imgInfo[leftSideImageJ];
}

// getRandom();
//   this is a target
const clickBestO = function (JBD) {
  if (totalNumberOC < MAX_CLICKS_NEED) {
    const imgThatWBCO = JBD.target;
    const id = imgThatWBCO.id;

    rightSideImage.numberOC++;
    middleSideImage.numberOC++;
    leftSideImage.numberOC++;

    // console.log(` Right image ${rightSideImage.name} has been shown ${rightSideImage.timesShown} and the right img ${rightSideImage.name} has been shown ${rightGoatOnThePage.timesShown} so far.`);

    if (
      id === "rightSideImg" ||
      id === "middleSideImg" ||
      id === "leftSideImg"
    ) {
      // this is helping me track the ones that is clicked

      if (id === "rightSideImg") {
        rightSideImage.numberShown++;
        //  mean the right was clicks
      }
      if (id === "middleSideImg") {
        middleSideImage.numberShown++;
        // mean the middle was clicks
      }
      if (id === "leftSideImg") {
        leftSideImg.numberShown++;
        // mean the left was clicks
      }
      getRandom();
    }
  }

  //  this is going to add to the total
  totalNumberOC++;

  if (totalNumberOC === MAX_CLICKS_NEED) {
    allImage.removeEventListener("click", clickBestO);
    updateLS();
    chartMarkerImg(); // this is where i'm going to make my chart
    console.log("you have made your selection");
    for (let j = 0; j < imgInfo.length; j++) {
      //  this is going to show the number of times I have clicked
      let scoreLi = document.createElement("li");
      scoreLi.innerText = `${imgInfo[j].name}: ${imgInfo[j].numberShown}`;
      endThoughts.appendChild(scoreLi); // this is add the ending score to the webpage
    }
  }
};

function chartMarkerImg() {
  // I have to make a element so that I can make my chart
  let bigTitle = document.createElement("h2");
  bigTitle.innerText = "You have Chosen!";
  // I got the "imgChart" from the id that I made in my HTML in the div elements tags.
  imgChart.appendChild(bigTitle);

  const ImgName = [];
  const ImgLikes = [];

  for (let k = 0; k < imgInfo.length; k++) {
    const oneImgName = imgInfo[k].name;
    ImgName.push(oneImgName);
  }
  for (let i = 0; i < imgInfo.length; i++) {
    const oneLikeMade = imgInfo[i].numberShown;
    ImgLikes.push(oneLikeMade);
  }
  ImgLikes.push(25);

  let myChart = document.getElementById("myChart").getContext("2d");
  let imgC = new Chart(myChart, {


    data: {
      labels: ImgName,
      datasets: [
        {
          label: "Image that are liked",
          type: "bar",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: ImgLikes,
        },
      ],
    },

    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

allImage.addEventListener("click", clickBestO);
getRandom();

//I want to be able to show the date after the screen has reloaded

function updateLS() {
  // the thing that I need to do is make a const for my date collector

  const aString = JSON.stringify(imgInfo);

  // I think that I need this so that I can add the to imgInfo img in the products
  localStorage.setItem("everyProducts", aString);
}

function getUpdatedLS() {
  const oldData = localStorage.getItem("everyProducts");

  const allImage = JSON.parse(oldData);
  // I put this here so that I can this can happen first.
  if (allImage !== null) {
    imgInfo = allImage;
  }
  //  if the top Statement is false than this one what happened.
  else {
    console.log("The storage is ready to be looked at... ");
  }
}
// I put this here b/c  I want to call the function
getUpdatedLS();

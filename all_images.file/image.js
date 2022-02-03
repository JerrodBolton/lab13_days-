// alert("this is just a check") // I just want to check and make sure everything is connect. 


// My end gold of all this code is to make all the images to appear on the screen. 



class imgInfoBlueprint {
  constructor(name, srcImg) {
    this.name = name;
    this.srcImg = srcImg;
//  is there any other info that you think that you need to add to the list put it here.
}

//  goThoughtTheaArrays = () => {
//     // we going to make the name appear on the browser
//     for (let j = 0; j < imgInfo.length; j++){
//         let element = this.name;
//         console.log(element);
//     }
//  } 

}

// let nameOfImg = imgInfoBlueprint.name
// let srcOfImg = imgInfoBlueprint.srcImg

let imageInfo = [
  // I'm going to add a array here in order to add all the images that I have 
    new imgInfoBlueprint("bag", "../home.file/img/bag.jpg"),
    new imgInfoBlueprint("banana", "../home.file/img/banana.jpg"),
    new imgInfoBlueprint("bathroom", "../home.file/img/bathroom.jpg"),
    new imgInfoBlueprint("boots", "../home.file/img/boots.jpg"),
    new imgInfoBlueprint("breakfast", "../home.file/img/breakfast.jpg"),
    new imgInfoBlueprint("bubblegum", "../home.file/img/bubblegum.jpg"),
    new imgInfoBlueprint("chair", "../home.file/img/chair.jpg"),
    new imgInfoBlueprint("cthulhu", "../home.file/img/cthulhu.jpg"),
    new imgInfoBlueprint("dog-duck", "../home.file/img/dog-duck.jpg"),
    new imgInfoBlueprint("dragon", "../home.file/img/dragon.jpg"),
    new imgInfoBlueprint("pen", "../home.file/img/pen.jpg"),
    new imgInfoBlueprint("pet-sweep", "../home.file/img/pet-sweep.jpg"),
    new imgInfoBlueprint("scissors", "../home.file/img/scissors.jpg"),
  // I put this array here as I can get my night object a name and pictures
]; 
   let allImage = document.getElementById("allImage")
   let allName = document.getElementById("allNames");
// console.log(imgInfoBlueprint.name[]); // this just a check to see what will appear when ask for this

// let nameOfImg = imgInfoBlueprint.
// let srcOfImg = imgInfoBlueprint.srcImg
// for (let index = 0; index <= imageInfo.length; index++) {
//       allImage.innerText+= imageInfo[index].srcImg
//      console.log(imageInfo[index].srcImg)
// }
// for (let index = 0; index <= imageInfo.length; index++) {

//     let allName = document.getElementById("allNames");
//       allName.innerText+= `  ${imageInfo[index].name}  `
//      console.log(imageInfo[index].name)
// }
makeImgAppear = () => {
    let img="";
    let name="";
    // let whole_div_pic = document.createElement("img") + document.createElement("p")


    for (let counter = 0; counter < imageInfo.length; counter++ ) {
        img += `<img src="${imageInfo[counter].srcImg}" alt="${imageInfo[counter].name}" />`;
        name += `${imageInfo[counter].name}`
        // document.createElement("img")= img;
          
        document.getElementById("div_pictures").innerHTML = img;
       

        // document.getElementById("div_name").innerText = name;
    }
    // document.getElementById("div_pictures").innerHTML = img + name;
    // document.getElementById("div_name").innerText = name;
    img.classList.add("img")


} 
makeImgAppear();
 
// this is nothing but a check in order to see if it pull the image??
// for (let j = 0; j <= imgInfo.length; j++) {
//     console.log(imgInfo[3].srcImg);
// }
//  I need something to go thought this array
// imgInfo.forEach(element => {
//    element.document.getElementById("allImage");
//  }
// )
// 
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("loaded")
  let memeData = [];
  memeData.push("meme");
  const meme = JSON.parse(localStorage.getItem('newMeme')) || [];
  let memeLocation = document.getElementById("output1");
  memeLocation.append(meme);
  
});
  
let img = document.getElementsByTagName("img");
let form = document.querySelector("form");
const button = document.querySelector("button");
form.addEventListener("submit", function(e){
  e.preventDefault();
  const meme = document.createElement("div");
  const textTop= document.createElement("div");
  const textBottom = document.createElement("div");
  const img = document.createElement("img");

  img.src = document.getElementById("imageUrl").value;
  textTop.classList.add("textTop");
  textTop.innerHTML = document.getElementById("topText").value;
  textBottom.classList.add("textBottom");
  textBottom.innerHTML = document.getElementById("bottomText").value;
    

  meme.classList.add("meme");
  meme.append(textTop);
  meme.append(textBottom);
  meme.append(img);
  let memeLocation = document.getElementById("output1");
  memeLocation.append(meme);

  form.reset()
  
  localStorage.setItem('newMeme', JSON.stringify(meme));
})

//next step is to store things into local storage and be able to delete items e



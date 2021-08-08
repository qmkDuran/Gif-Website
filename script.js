const APIKEY = "fcjXsVRVRwV0mctuMO81VyFgttywKfGO"


document.addEventListener("DOMContentLoaded", init)
function init() {
  document.getElementById("btnSearch").addEventListener("click", (e) => {
    e.preventDefault() //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=50&q=`
    let str = document.getElementById("search").value.trim()
    url = url.concat(str)
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
      	clearAllImages();
      	displayNumberOfImages(50, content);
      })
      .catch((err) => {
        console.error(err)
      })
     
  })
}

function clearAllImages() {
	var elements = document.getElementsByTagName('picture');
	while (elements[0]) elements[0].parentNode.removeChild(elements[0]); 
} // Finds element which is 'picture' and it's also number 0 in the array where all pictures are kept. Picture than asks its parent to delete it.
  // When it is deleted the next picture takes its spot and becomes the new zero and also gets deleted. This happens till all images are deleted.

function displayNumberOfImages(numImages, content) {
	let displayImage = document.createElement("picture");
  let out = document.querySelector(".out");
  for (var i = 0; i < numImages; i++) {
  	let img = document.createElement("img");
    img.src = content.data[i].images.downsized_medium.url;
    displayImage.append(img);
    out.insertAdjacentElement("afterbegin", displayImage);
  }
}

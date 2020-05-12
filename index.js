document.addEventListener('DOMContentLoaded', () => {

  function blue(event){
  	event.target.style.backgroundColor = "blue";
    console.log("I'm blue"); // red
  };
  function red(event){
    event.target.style.backgroundColor = "red";
    console.log(box.style.backgroundColor); // red
  };



  function fetchGiph(){
    let clicked = event.target
    function slapItOnTheDom(image){
      clicked.style.backgroundImage = `url(${image})`;
    }

  return fetch('https://api.giphy.com/v1/gifs/random?api_key=lcEjvxE7nYztdiwFzKVR1TtlT7SKP9jC&tag=cats&rating=G')
  .then(response => response.json())
  .then(parsed => parsed.data.image_original_url)
  .then(slapItOnTheDom);
  }

  document.querySelectorAll(".box").forEach(box =>
    box.addEventListener("click", fetchGiph));



  // function blue(){
  // 	document.body.style.backgroundColor = "blue";
  //   console.log(document.body.style.backgroundColor); // blue
  // };

  // box.addEventListener("click", red);
  // button.addEventListener("click", blue);

});


//
// function renderBooks(json) {
//   const main = document.querySelector('main')
//   json.forEach(book => {
//     const h2 = document.createElement('h2')
//     h2.innerHTML = `<h2>${book.name}</h2>`
//     main.appendChild(h2)
//   })
// }
//
//
//
// giph_api = JSON.parse(RestClient.get("http://api.giphy.com/v1/gifs/search?q=chuck+norris&api_key=dc6zaTOxFJmzC&limit=10"))
// num = rand(0...9)
// gif = giph_api["data"][num]["id"]
// result = "https://media.giphy.com/media/#{gif}/giphy.gif"

function displayPoem(response) {
  
//Display the generated poem

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function generatePoem(event) {
  event.preventDefault();

  //build the API URL
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b4tba9bff663492fbddb13d5a4800eo6";
  let prompt = `User instructions: Generate a French Poem about Love ${instructionsInput.value}`;
  let context= "You are a romantic Poem expert and love to write short poems. Your mission is to write a 4 line poem in basic HTML and separate each line with a <br/>. Make sure you follow the user instructions. Do not include a title to the poem. Sign the poem with `Shecodes AI` inside a <strong> element";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  let poemElement= document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML= ` <div class="generating"> 👩🏻‍💻 Generating a French poem about ${instructionsInput.value} </div>`;
  
  //Make a call to the API



axios.get(apiURL).then(displayPoem);
}
  

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
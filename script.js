var input = document.getElementsByTagName("input")[0];

document.querySelector(".pok").addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData();
});

function fetchData() {
  // Hide all data before fetching new data
  document.querySelector(".image").innerHTML = "";
  document.querySelector(".HP").style.display = "none";
  document.querySelector(".attack").style.display = "none";
  document.querySelector(".name").style.display = "none";
  document.querySelector(".type").style.display = "none";
  document.querySelector(".console").style.display = "none";

  let pokemon = input.value.trim().toLowerCase(); 
  if (!pokemon) return; 

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      return response.json();
    })
    .then((data) => {
      

      // Show the data
      document.querySelector(
        ".image"
      ).innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;
      document.querySelector(
        ".HP"
      ).innerHTML = `<span>HP:</span> ${data.stats[0].base_stat}`;
      document.querySelector(
        ".attack"
      ).innerHTML = `<span>ATTACK:</span> ${data.stats[1].base_stat}`;
      document.querySelector(".name").innerHTML = `NAME: ${
        data.name
      }`;
      document.querySelector(".type").innerHTML = `TYPE: ${
        data.types[0].type.name
      }`;

      // Show the fetched data
      document.querySelector(".HP").style.display = "block";
      document.querySelector(".attack").style.display = "block";
      document.querySelector(".name").style.display = "block";
      document.querySelector(".type").style.display = "block";
      document.querySelector(".image").style.display = "block";
      document.querySelector(".console").style.display = "block";
    })
    .catch((error) => {
    
      // Hide previous data and show error message
      document.querySelector(".HP").style.display = "none";
      document.querySelector(".attack").style.display = "none";
      document.querySelector(".name").style.display = "none";
      document.querySelector(".type").style.display = "none";
      document.querySelector(
        ".image"
      ).innerHTML = `<p class="error">POKEMON DOESN'T EXIST</p>`;
      setTimeout(() => {
        document.querySelector(".image").innerHTML = ""; 
      }, 10000);
    });
}

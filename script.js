
var input= document.getElementsByTagName("input")[0];

document.querySelector(".pok").addEventListener("submit",(e)=>{
    e.preventDefault();
    fetchData();
});

function fetchData(){
    // document.querySelector(".display").innerHTML=`<div class="image">
    //     </div>
    //     <p class="name"></p>
    //     <p class="type"></p>
    //     <div class="console">    
    //             <p class="HP"></p>
    //             <p class="attack"></p>`
    document.querySelector(".HP").style.display="block";
        document.querySelector(".attack").style.display="block";
        document.querySelector(".name").style.display="block";
        document.querySelector(".type").style.display="block";
        document.querySelector(".console").style.display="block";
    console.log(input.value);
let pokemon=input.value;

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(i => i.json()).then(
    (i)=>{ 
         
        document.querySelector(".image").innerHTML=`<img src="${i.sprites.front_default}"></td>` 
        document.querySelector(".HP").innerHTML=`<span>HP:</span> ${i.stats[0].base_stat}`;
        document.querySelector(".attack").innerHTML=`<span>ATTACK:</span> ${i.stats[1].base_stat}`;
        document.querySelector(".name").innerHTML=`NAME : ${i.name}`;
        document.querySelector(".type").innerHTML=`TYPE : ${i.types[0].type.name}`;

    }
)
.catch((e)=>{
   
    document.querySelector(".HP").style.display="none";
        document.querySelector(".attack").style.display="none";
        document.querySelector(".name").style.display="none";
        document.querySelector(".type").style.display="none";
        document.querySelector(".console").style.display="none";
        document.querySelector(".image").innerHTML=`<p class="error">POKEMON DOESN'T EXIST</p>`;
        setTimeout(()=>document.querySelector(".image").innerHTML=``,1000
    )});

}

function blink() {

        document.querySelector(".inst").style.display="none"
       

  
     setTimeout(()=>document.querySelector(".inst").style.display="inline-block",400)
   


    
}


let id = setInterval(()=>blink(),1000);
setTimeout(() => {
    clearInterval(id);
    
}, 5000);










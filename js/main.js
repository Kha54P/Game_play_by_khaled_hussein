let navList = document.querySelectorAll('nav ul li a');
let activeLink = document.getElementById('activeLink');
let games = document.getElementById('Games');
let btnClose = document.getElementById('btnClose')
let showDetaila = document.getElementById('showDetaila')
let showGames = document.getElementById('showGames')
let image = document.getElementById('image')
let title = document.getElementById('title')
let stat = document.getElementById('status')
let cat = document.getElementById('cat')
let plat = document.getElementById('plat')
let description = document.getElementById('description')
let btnGame = document.getElementById('btnGame')
let getID = document.getElementById('getID')



// getCategory
for( let i = 0 ; i < navList.length; i++){
    navList[i].addEventListener('click',(e)=>{
       let value =  e.target.getAttribute('category')
        console.log(value)
        if(value){
           for(let i = 0 ; i < navList.length ; i++){
            navList[i].classList.remove('active')
           }
            navList[i].classList.add('active')
        }
        getAPI(value);
    })
}
// get Api
const loading = document.getElementById('lodear')
async function getAPI(cat) {
  
  loading.classList.remove("d-none");
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c5ec271717msh9d672f54af0082bp120cefjsnf1d7ce2ba837',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
      const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
      const data = await response.json();
      showGams(data);
      // tets(data)
      loading.classList.add("d-none")
      console.log(data)
  }
  
  getAPI('mmorpg');

// 



 function showGams(data){
     let box = ''
        for(let i = 0 ; i<data.length ;i++){
     box += `
    <div  onclick = "get(${data[i].id})" class="col-md-3 p-0 pt-3 rounded-2">
    <div class="card rounded-2 bg-transparent text-white ">
            <img src="${data[i].thumbnail}" class="w-100 rounded-top-3" alt="">
            <div class="title pt-3  bg-transparent d-flex justify-content-between align-items-center pb-0">
                <h6>${data[i].title}</h6>
                <span class=" btnFree">Free</span>
            </div>
            <p class=" opacity-50" >${data[i].short_description}</p>
            <div class="card-footer d-flex justify-content-between align-items-center ">
                <span  >${data[i].platform}</span>
                <span >${data[i].genre}</span>
               </div>
    </div>
   </div>
    `  
   }
   
   document.getElementById('Gams').innerHTML = box
   
 }

btnClose.addEventListener('click' , ()=>{
  showDetaila.classList.add('d-none')
  showGames.classList.remove('d-none')
})


async function getDetalis(id){
  // const loading = document.getElementById('lodear')
  loading.classList.remove("d-none")
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'c5ec271717msh9d672f54af0082bp120cefjsnf1d7ce2ba837',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
  };
  
  const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options)
  const response = await api.json();
  detaila(response);
  loading.classList.add('d-none')
}


// display details 
 function detaila(response){
  let allDetails = [];
  allDetails.push(response)
  for(let i = 0 ; i < allDetails.length ; i++){
  console.log(allDetails)
    image.innerHTML=`<img src="${allDetails[i].thumbnail}" class="w-100" alt="" /> `;
    title.innerHTML = `Title: ${allDetails[i].title}`;
    cat.innerHTML = `Category: <span class="text-bg-info px-2 rounded-3 text-black">${allDetails[i].genre}</span>`;
    plat.innerHTML = `Platform: <span class="text-bg-info px-2 rounded-3 text-black">${allDetails[i].platform}</span>`;
    stat.innerHTML = `Status: <span class="text-bg-info px-2 rounded-3 text-black">${allDetails[i].status}</span>`;
    description.innerHTML = `${allDetails[i].description}`;
    btnGame.addEventListener('click',()=>{
      window.open(allDetails[i].game_url,'_blank')
    }) 
   }
   }
  
  
// 


function get(id){

  showGames.classList.add('d-none');
  showDetaila.classList.remove('d-none');
  getDetalis(id);
}

// ////
// let lodear = document.getElementById('lodear')

// window.onload =  function load(){
//   lodear.style.display = 'none'
// }

// // window.addEventListener('load',function(){

// //   lodear.classList.add('d-none')

// // })


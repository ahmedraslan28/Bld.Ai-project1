const excelBtn = document.querySelector(".excelBtn");
const pythonBtn = document.querySelector(".pythonBtn");
const webBtn = document.querySelector(".webBtn");
const AwsBtn = document.querySelector(".AwsBtn");
const jsBtn = document.querySelector(".jsBtn");
const DrawingBtn = document.querySelector(".DrawingBtn");
const dataBtn = document.querySelector(".dataBtn");
let python = [] , aws = [] , js = [] , Excel = [] ;
let Data_sci = [] , Drawing = [] , Web_dev = [] ;
async function FETCH() {
  const res = await fetch("https://ahmedraslan28.github.io/ApiHost/db.json");
  const data = await res.json();
  python.push(data[0]);
  Excel.push(data[1]);
  Web_dev.push(data[2]);
  js.push(data[3]);
  Data_sci.push(data[4]);
  aws.push(data[5]);
  Drawing.push(data[6]);
  return true;
}

function CreateCard(card) {
  let items_container1 = document.querySelector(".items-container.one");
  let items_container2 = document.querySelector(".items-container.two");
  let container = document.querySelector("#carouselExampleControls");
  let item_all = container.querySelectorAll("div.carousel-item"); 
  let inhtml = "",allhtml = "";
  ////////////////////////////////////////////////////////////////////////////
  items_container1.innerHTML = "";
  items_container2.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    let inhtml = "" ; 
    inhtml += `<div class="card">`;
    inhtml += `
    <img src= ${card[i].img} class="card-img-top" alt="...">
    <div class="card-body">
      <div class="card-title">${card[i].title}</div>
      <div class="card-author">${card[i].author}</div>
      <div class="card-rate">
        <span class="checked">${card[i].rate}</span>
        <span class="fa fa-star ${card[i].draw_star[0]}"></span>
        <span class="fa fa-star ${card[i].draw_star[1]}"></span>
        <span class="fa fa-star ${card[i].draw_star[2]}"></span>
        <span class="fa fa-star ${card[i].draw_star[3]}"></span>
        <span class="fa fa-star-half-full ${card[i].draw_star[4]}"></span>
        <span class="students">${card[i].students}</span>
      </div>
      <div class="card-price">${card[i].price}</div>
    </div>
    `;
    inhtml += `</div>`;
    item_all[i].innerHTML = inhtml;
    items_container1.innerHTML += inhtml;
  }
  for (let i = 4; i < 8; i++) {
    let inhtml = "";
    inhtml += `<div class="card">`;
    inhtml += `
    <img src= ${card[i].img} class="card-img-top" alt="...">
    <div class="card-body">
      <div class="card-title">${card[i].title}</div>
      <div class="card-author">${card[i].author}</div>
      <div class="card-rate">
        <span class="checked">${card[i].rate}</span>
        <span class="fa fa-star ${card[i].draw_star[0]}"></span>
        <span class="fa fa-star ${card[i].draw_star[1]}"></span>
        <span class="fa fa-star ${card[i].draw_star[2]}"></span>
        <span class="fa fa-star ${card[i].draw_star[3]}"></span>
        <span class="fa fa-star-half-full ${card[i].draw_star[4]}"></span>
        <span class="students">${card[i].students}</span>
      </div>
      <div class="card-price">${card[i].price}</div>
    </div>
    `;
    inhtml += `</div>`;
    item_all[i].innerHTML = inhtml;
    items_container2.innerHTML += inhtml;
  }
  document.querySelector(".title").innerHTML = card[8].tit;
  document.querySelector(".details").innerHTML = card[8].disc;
  document.querySelector(".Explore-btn").innerHTML = card[8].bt;
}

window.onload = async () => {
  await FETCH();
  const objs = [...python[0].python];
  CreateCard(objs);
};
excelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.exe");
  active.style.color = "grey";
  active.classList.remove("active"); ; 
  cur.style.color = "black";
  cur.classList.add("active") ;
  const obj = [...Excel[0].excel];
  CreateCard(obj);
});
pythonBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.py");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...python[0].python];
  CreateCard(obj);
});
webBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.web");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...Web_dev[0].Web_Dev];
  CreateCard(obj);
});
AwsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.aws");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...aws[0].AWS];
  CreateCard(obj);
});
jsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.js");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...js[0].JS];
  CreateCard(obj);
});
DrawingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.draw");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...Drawing[0].Drawing];
  CreateCard(obj);
});
dataBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.dta");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...Data_sci[0].Data_Science];
  CreateCard(obj);
});

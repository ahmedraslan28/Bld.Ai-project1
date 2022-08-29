// parretn div
let par = document.querySelector(".course-preview-container");

// array carry courses to search in
let courses_data = [];

function FETCH() {
  fetch("https://ahmedraslan28.github.io/ApiHost/phase2.json")
    .then((res) => res.json())
    .then((data) => {
      let arr = data.courser_list;
      arr.forEach((course) => {
        let cur_course = CreateCourse(course);
        cur_course.setAttribute("id", `${course.id}`);
        par.append(cur_course);
        courses_data.push({ id: course.id, title: course.title });
      });
    });
}

function CreateCourse(item) {
  //////// cretae divs ////////////////////////
  let course_pre = document.createElement("div"),
    course_img = document.createElement("div"),
    course_info = document.createElement("div"),
    course_description = document.createElement("div"),
    course_author = document.createElement("div"),
    course_rate = document.createElement("div"),
    course_price = document.createElement("div");

  /////// init classes for divs ///////////////////////
  course_pre.classList.add("course-preview");
  course_img.classList.add("course-img");
  course_info.classList.add("course-info");
  course_description.classList.add("course-description");
  course_author.classList.add("course-author");
  course_rate.classList.add("course-rate");
  course_price.classList.add("course-price");

  ///////////////fill divs with inner data ///////////////
  course_img.innerHTML = `<a href="#">  <img src="${item.img}" alt=""/>  </a>`;
  course_description.innerHTML = `${item.title}`;
  course_author.innerHTML = `${item.author}`;
  course_rate.innerHTML = ` <span class="checked">${item.rate}</span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star-half-full checked"></span>
    <span class="students">${item.students}</span> `;
  course_price.innerHTML = item.price;

  ///////////// add divs inside each other //////////
  course_info.append(course_description);
  course_info.append(course_author);
  course_info.append(course_rate);
  course_info.append(course_price);
  course_pre.append(course_img);
  course_pre.append(course_info);

  return course_pre;
}

FETCH();

let search_bar = document.querySelector(".search-bar");
search_bar.addEventListener("input", (e) => {
  e.preventDefault();
  let search_value = search_bar.value.toLowerCase();
  let found = 1;
  courses_data.forEach((course) => {
    let found = course.title.toLowerCase().includes(search_value);
    let tmp = document.getElementById(`${course.id}`);
    !found ? (tmp.style.display = "none") : (tmp.style.display = "block");
  });
});
document.querySelector(".search-bar").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector(".search-icon-btn").click();
    }
});
const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

const userIcon = $(".user-icon");
const userTab = $(".user-login");
const html = $("html");
const menuTab = $(".nav-control");
const menuIcon = $(".menu-icon");
const closeMenuTab = $(".close");
const showDelete = $(".show");
const wrapMenu = $(".wrapper");

userIcon.onclick = function () {
  userTab.classList.toggle("show");
};

html.onclick = function (e) {
  if (e.target !== userIcon) {
    userTab.classList.remove("show");
  }
};

menuIcon.onclick = function () {
  menuTab.classList.add("active");
  wrapMenu.classList.add("active");
};

wrapMenu.onclick = function () {
  wrapMenu.classList.remove("active");
  menuTab.classList.remove("active");
};

closeMenuTab.onclick = function () {
  menuTab.classList.remove("active");
  wrapMenu.classList.remove("active");
};
// Header end

// Slide section start
{
  let cnt = 2;
  setInterval(function () {
    document.getElementById("radio-" + cnt).checked = true;
    cnt++;
    if (cnt > 3) {
      cnt = 1;
    }
  }, 3000);
}
// Slide section end

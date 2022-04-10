/* Start Setup Datatables Plugin */
// $(function () {
//   $("#recentData").DataTable();
// });
/* End Setup Datatables Plugin */

/* Start Add Some Actions*/
const sideMenu = document.querySelector("aside"),
  menuBtn = document.querySelector("#menu-bar"),
  closeBtn = document.querySelector("#close-btn"),
  themeColor = document.querySelector(".theme-toggler");

/* Show Menu */
menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("show-hide-menu");
});

/* Hide Menu */
closeBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("show-hide-menu");
});

/* Change Theme Color */
themeColor.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeColor.querySelector(".fa-sun").classList.toggle("active");
  themeColor.querySelector(".fa-moon").classList.toggle("active");
});
/* End Add Some Actions*/

/* Fill Tables With Data - From Orders JS File */
let counter = 1;
cars.forEach((car) => {
  const tr = document.createElement("tr");
  const trContent = `
                      <td>${counter}</td>
                      <td>${car.color}</td>
                      <td>${car.type}</td>
                      <td>${car.registration}</td>
                      <td>${car.capacity}</td>
                    `;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
  counter++;
});

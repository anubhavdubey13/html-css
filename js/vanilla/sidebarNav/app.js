const menu = document.querySelector("#menu-icon");
const sidebar = document.querySelector(".sidebar");
const sidebarNav = document.querySelector(".sidebar-nav");

const menuClickCallback = () => {
    sidebar.style.display === "none" ?
        [sidebar.style.display = "block", sidebarNav.style.width = "10rem"]:
        [sidebar.style.display = "none", sidebarNav.style.width = "4rem"];
}

menu.addEventListener("click", menuClickCallback);
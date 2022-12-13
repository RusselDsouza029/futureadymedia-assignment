function handleSideMenu() {
    const menuIcon = document.getElementById("menuIcon");
    const navLink = document.getElementById("navLink");
    if (menuIcon.className == "fa-solid fa-bars") {
        menuIcon.className = "fa-solid fa-xmark";
        navLink.style.top = "70px";
        navLink.style.opacity = "1";
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "auto";
        navLink.style.opacity = "0";
        navLink.style.top = "-1000px";
        menuIcon.className = "fa-solid fa-bars";
    }
}
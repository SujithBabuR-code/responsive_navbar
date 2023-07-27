document.getElementById("menu-toggle").addEventListener("click", function () {
    var mobileMenuList = document.getElementById("mobile-menu-list");
    mobileMenuList.style.display = mobileMenuList.style.display === "block" ? "none" : "block";
    this.classList.toggle("active");
});

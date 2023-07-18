const close_btn = document.querySelector(".modal-form-box-close");
const form_box = document.querySelector(".modal-form");
const opening_button = document.getElementsByClassName("header-buttons-main")[1];
const burger = document.getElementsByTagName("details")[0];
const burger_body = document.querySelector(".details");
const burger_menu = document.querySelector(".burger-menu");
const burger_btn = document.querySelector(".burger-close-btn");
const burger_portfolio = document.querySelector(".burger-text");

burger_btn.onclick = () => {
    burger.open = false;
    
}

opening_button.onclick = () => {
   form_box.style.display = "flex";
   document.body.style.overflow = "hidden";
};

close_btn.onclick = () => {
    form_box.style.display = "none";
    document.body.style.overflow = "visible";
};

burger_portfolio.onclick = () => {

    burger.open = false;
}

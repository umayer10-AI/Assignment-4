let main = document.querySelector("#card-container");

main.addEventListener("click", (e) => {
    if(e.target.closest(".i")){
        let a = e.target.closest(".i");
        let b = a.closest(".card-parent");
        b.remove();
        let cardParent = document.querySelector("#card-container").children.length;
        document.querySelector(".total").innerText = cardParent;
        document.querySelector(".t").innerText = cardParent;
    }
})
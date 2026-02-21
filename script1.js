let btns = document.querySelector("#btn-container");
btns.addEventListener("click",(e) => {
    if(e.target.matches("button")){
        dd(e.target.id);
    }
});

function dd(id){
    let a = document.getElementById(id);
    let all = document.getElementById("all");
    let Interview = document.getElementById("Interview");
    let Rejected = document.getElementById("Rejected");

    all.classList.remove("bg-blue-500","text-white");
    Interview.classList.remove("bg-blue-500","text-white");
    Rejected.classList.remove("bg-blue-500","text-white");

    all.classList.add("bg-gray-100","text-black");
    Interview.classList.add("bg-gray-100","text-black");
    Rejected.classList.add("bg-gray-100","text-black");

    a.classList.remove("bg-gray-100","text-black");
    a.classList.add("bg-blue-500","text-white");
    // console.log(Interview);

    let h = document.querySelector("#card-container");
    let h1 = document.querySelector(".section1");
    let h2 = document.querySelector(".section2");
    let k1 = document.querySelector(".blank");
    let d1 = document.querySelector("#d1");
    let d2 = document.querySelector("#d2");
    let d3 = document.querySelector("#d3");
    // console.log(d1);

    if(id === "all"){
        h.classList.remove("hidden");
        h1.classList.add("hidden");
        h2.classList.add("hidden");
        d1.classList.remove("hidden");
        d2.classList.add("hidden");
        d3.classList.add("hidden");
    }
    else if(id === "Interview"){
        h.classList.add("hidden");
        h1.classList.remove("hidden");
        h2.classList.add("hidden");
        d1.classList.add("hidden");
        d2.classList.remove("hidden");
        d3.classList.add("hidden");
        checkBlank(h1);
    }
    else if(id === "Rejected"){
        h.classList.add("hidden");
        h1.classList.add("hidden");
        h2.classList.remove("hidden");
        d1.classList.add("hidden");
        d2.classList.add("hidden");
        d3.classList.remove("hidden");
        checkBlank(h2);
    }
}

let s1 = document.querySelector(".section1");
let s2 = document.querySelector(".section2");

let interViewC = 0;
let rejectedC = 0;
let c1 = 0;
let c2 = 0;
let cardParent = document.querySelector("#card-container").children.length;
document.querySelector(".total").innerText = cardParent;
document.querySelector(".t").innerText = cardParent;
document.querySelector(".t2").innerText = cardParent;
document.querySelector(".t3").innerText = cardParent;
// document.querySelector(".tt1").innerText = s1.children.length;
// document.querySelector(".tt2").innerText = s2.children.length;



let parent = document.getElementById("card-container")
parent.addEventListener("click",(e) => {
    if(e.target.matches(".interview-btn")){
        let p = e.target.closest(".card-parent");
        let companyName = p.querySelector(".c-name").innerText;
        let skillName = p.querySelector(".w-name").innerText;
        let salary = p.querySelector(".salary").innerText;
        let applicable = p.querySelector(".applicable").innerText;
        let applicable2 = p.querySelector(".applicable");
        let longName = p.querySelector(".l-name").innerText;

        interViewC++;
        document.querySelector(".interViewC").innerText = interViewC;
        c1++;
        document.querySelector(".tt1").innerText = c1;

        applicable2.innerText = "INTERVIEW";
        applicable2.classList.remove("btn-error","btn-primary");
        applicable2.classList.add("btn-accent");
        
        let section1 = document.querySelector(".section1");
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between bg-base-200 p-6 rounded-lg card-parent">
            <div class="space-y-4">
                <div>
                    <h2 class="text-xl font-semibold c-name">${companyName}</h2>
                    <p class="text-neutral/50 w-name">${skillName}</p>
                </div>
                <div>
                    <p class="text-neutral/50 salary">${salary}</p>
                </div>
                <button class="btn btn-soft btn-accent applicable">INTERVIEW</button>
                <p class="l-name">${longName}</p>
                <div>
                    <button class="interview-btn btn btn-outline btn-accent font-semibold">interview</button>
                    <button class="Rejected-btn btn btn-outline btn-error font-semibold">Rejected</button>
                </div>
            </div>
            <div>
                <i class="fa-regular fa-trash-can"></i>
            </div>
        </div>
        `;

        section1.appendChild(div);

    }
    else if(e.target.matches(".Rejected-btn")){
        let p = e.target.closest(".card-parent");
        let companyName = p.querySelector(".c-name").innerText;
        let skillName = p.querySelector(".w-name").innerText;
        let salary = p.querySelector(".salary").innerText;
        let applicable = p.querySelector(".applicable").innerText;
        let applicable2 = p.querySelector(".applicable");
        let longName = p.querySelector(".l-name").innerText;

        rejectedC++;
        document.querySelector(".rejectedC").innerText = rejectedC;
        c2++;
        document.querySelector(".tt2").innerText = c2;

        applicable2.innerText = "REJECTED";
        applicable2.classList.remove("btn-accent","btn-primary");
        applicable2.classList.add("btn-error");
        
        let section2 = document.querySelector(".section2");
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between bg-base-200 p-6 rounded-lg card-parent">
            <div class="space-y-4">
                <div>
                    <h2 class="text-xl font-semibold c-name">${companyName}</h2>
                    <p class="text-neutral/50 w-name">${skillName}</p>
                </div>
                <div>
                    <p class="text-neutral/50 salary">${salary}</p>
                </div>
                <button class="btn btn-soft btn-error applicable">REJECTED</button>
                <p class="l-name">${longName}</p>
                <div>
                    <button class="interview-btn btn btn-outline btn-accent font-semibold">interview</button>
                    <button class="Rejected-btn btn btn-outline btn-error font-semibold">Rejected</button>
                </div>
            </div>
            <div>
                <i class="fa-regular fa-trash-can"></i>
            </div>
        </div>
        `;

        section2.appendChild(div);
    }
});


s1.addEventListener("click", (e) => {
    if(e.target.matches(".Rejected-btn")){
        let p = e.target.closest(".card-parent");
        let d = p.querySelector(".applicable");
        d.innerText = "REJECTED";
        d.classList.remove("btn-accent","btn-primary");
        d.classList.add("btn-error" ,"btn");
        s2.appendChild(p);
        interViewC--;
        document.querySelector(".interViewC").innerText = interViewC;
        c1--;
        document.querySelector(".tt1").innerText = c1;
        rejectedC++;
        document.querySelector(".rejectedC").innerText = rejectedC;
        c2++;
        document.querySelector(".tt2").innerText = c2;
    }
})
s2.addEventListener("click", (e) => {
    if(e.target.matches(".interview-btn")){
        let p = e.target.closest(".card-parent");
        let d = p.querySelector(".applicable");
        d.innerText = "INTERVIEW";
        d.classList.remove("btn-error","btn-primary");
        d.classList.add("btn-accent" ,"btn");
        s1.appendChild(p);
        interViewC++;
        document.querySelector(".interViewC").innerText = interViewC;
        c1++;
        document.querySelector(".tt1").innerText = c1;
        rejectedC--;
        document.querySelector(".rejectedC").innerText = rejectedC;
        c2--;
        document.querySelector(".tt2").innerText = c2;
    }
})

function checkBlank(v){
    let b = document.querySelector(".blank");
    if(v.children.length === 0){
        b.classList.remove("hidden");
    }
    else{
        b.classList.add("hidden");
    }
}
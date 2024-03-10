let input = document.querySelector("input");
let search = document.querySelector(".id");
search.addEventListener('click',()=>{
    if(search = true){
    input.style.display ="block";
    // logo.style.display = "none";
    }
});

let logo = document.querySelector(".nav-logo");
let all = document.querySelector(".nav-menu");
let cross = document.querySelector(".cross")
logo.addEventListener('click',()=>{
    all.style.left = "0px"
});
cross.addEventListener('click',()=>{
    all.style.left = "-500px"
});

let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let slider = document.querySelector(".slider");
let img = document.querySelectorAll(".img");

let index = 0;
next.addEventListener('click',()=>{
    // console.log(img.length);
    img[index].classList.remove('show');
    if(index >= img.length-1){
        index = 0;
    }
    else{
        index+=1
    }
    img[index].classList.add('show');
    slider.style.transform = `translateX(-${index*100}%)`;
});

prev.addEventListener('click',()=>{
    // console.log(img.length);
    img[index].classList.remove('show');
    if(index <= 0){
        index = img.length-1;
    }
    else{
        index-=1
    }
    img[index].classList.add('show');
    slider.style.transform = `translateX(-${index*100}%)`;
});
setInterval(()=>{
    img[index].classList.remove('show');
    if(index >= img.length-1){
        index = 0;
    }
    else{
        index+=1
    }
    img[index].classList.add('show');
    slider.style.transform = `translateX(-${index*100}%)`;
},5000);

let li = document.querySelectorAll(".li li");
let add = document.querySelectorAll(".add");
li.forEach((e)=>{
    e.addEventListener('click',()=>{
        let btn = e.getAttribute("data-type");
        add.forEach((i)=>{
            if(i.classList.contains(btn) == true){
                i.style.display = "block";
                i.style.transform = "scale(1)";
            }else{
                i.style.display = "none";
                i.style.transform = "scale(0)";
            }
        })
    })
});
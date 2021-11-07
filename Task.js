

let tabs = document.querySelectorAll(".tabs li");

let text = document.querySelectorAll("div");

console.log(text);

console.log(tabs);

tabs.forEach(element => {
    element.addEventListener('click',function(){
        removeActive();
        element.classList.add("active");  
        console.log(element.getAttribute("id"));
        text.forEach(ele=>{
            ele.classList.remove("act");
        })
        document.getElementsByClassName(element.getAttribute("id"))[0].classList.add("act");
});
})


function removeActive(){
    tabs.forEach((ele)=>{
        ele.classList.remove("active");
    })
}


const mainImage = document.getElementById("MainImage");
const smallImage = document.getElementsByClassName("small-img");

smallImage[0].onclick = function()
{
    mainImage.src= smallImage[0].src
}

smallImage[1].onclick = function()
{
    mainImage.src= smallImage[1].src
}

smallImage[2].onclick = function()
{
    mainImage.src= smallImage[2].src
}

smallImage[3].onclick = function()
{
    mainImage.src= smallImage[3].src
}


document.querySelector("#navbar > li:nth-child(1) > a").classList.remove('active')
document.querySelector("#navbar > li:nth-child(2) > a").classList.add('active')



const close = document.getElementById('close');
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const shop = document.querySelector("#navbar > li:nth-child(2) > a");
const home = document.querySelector("#navbar > li:nth-child(1) > a")
if(bar)
{
    bar.addEventListener("click", () => {
        nav.classList.add('active')
    });
}

if(close)
{
    close.addEventListener("click", () => {
        nav.classList.remove('active')
    });
}

if(shop)
{
    shop.addEventListener("click", () => {
        home.classList.remove('active')
        shop.classList.add('active')
    });
}

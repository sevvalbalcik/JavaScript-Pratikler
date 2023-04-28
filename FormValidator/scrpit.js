let urunler = [
    {
        name : 'deniz kaban',
        link : 'https://www.hanthis.com/deniz-kaban',
        img : 'img/deniz-ceket-b5d9e3.jpg'
    },
    {
        name : 'elma elbise',
        link : 'https://www.hanthis.com/elma-elbise',
        img : 'img/elma-elbise-971-a6.jpg'
    },
    {
        name : 'ortanca büstiyer',
        link : 'https://www.hanthis.com/ortanca-bustiyer',
        img : 'img/ortanca-bustiyer-a930f9.jpg'
    },
    {
        name : 'ortanca etek',
        link : 'https://www.hanthis.com/ortanca-etek-',
        img : 'img/ortanca-etek--393351.jpg'
    },
    {
        name : 'elma elbise 2',
        link : 'https://www.hanthis.com/elma-elbise-2',
        img : 'img/On_a9dc0fcf-9b95-4925-abc0-5d1e0dd31c94.jpg'
    },
    {
        name : 'ying-yang büstiyer',
        link : 'https://www.hanthis.com/yin-yang-bustiyer',
        img : 'img/On_83c7c100-06c1-475d-8317-072820b0de19.jpg'
    }
]

let index=0
let urunlerCount=urunler.length
let interval
let settings = {
    duration : "1000",
    random : false
}

init(settings)

function left(){
    index--
    showSlide(index)
}
    
function right(){
    index++
    showSlide(index)
}

function showSlide(i){
    index=i
    if(i<0){
        index=urunlerCount
    }if(i>=urunlerCount){
        index=0
    }
    document.querySelector('.card-img-top').setAttribute('src',urunler[index].img)
    document.querySelector(".card-title").textContent = urunler[index].name
    document.querySelector(".card-link").setAttribute('href',urunler[index].link)
}

function init(settings){
    let prev
    interval=setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random()*urunlerCount)
            }while(index==prev)
            prev=index
        }else{
            if(index==urunlerCount-1){
                index=0
            }
            showSlide(index)
            console.log(index)
            index++
        }
        showSlide(index)
    },settings.duration)
}

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval)
    })
})
   

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings)
    })
})

var slide = document.getElementById("slide");
var backBtn = document.getElementById("backBtn");
var nextBtn = document.getElementById("nextBtn");
var slideimages = new Array[
    "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060__340.jpg", "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg",

"https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521__340.jpg", "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg"
];
let i=0;
nextBtn.onclick = function(){
    if(i<3){
        slide.src = slideimages[i+1];
        i++;
    }
}

backBtn.onclick = function(){
    if(i>0){
        slide.src = slideimages[i-1];
        i--;
    }
}

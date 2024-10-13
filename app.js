const fullImage = document.getElementById("fullImg")
const imgBox = document.getElementById("fullImgBox")
const thumbnail = document.getElementById("thumbnail")
const cross = document.getElementById("cross")


const openFullImg = (source) => {
    fullImage.src = source
    imgBox.style.display = "flex" ;
}

const closeImage = () => {
    imgBox.style.display = "none";
}

// for ARIA, WCAG, Screen Readers Accessibility, performance score please view screenshoot Image attached with files


/*Tried to create keyboard keys left & right to change events, but is not successful, I'll update once I am able to  

const thumbnails = document.querySelectorAll('.thumbnails');
const target = document.querySelector('.thumbnails img');


document.addEventListener("keydown", function(e) {
    let index = [].indexOf.call(thumbnails, target);
    console.log(e)
    if (e.keyCode == 39 && thumbnails[0]) {
        fullImage.src= "https://i.guim.co.uk/img/media/fccf2d648bd42dae41b65cad55925181506ec5e7/0_117_6016_3611/master/6016.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1a6ae016322e5bf310e4351808be2235";
        imgBox.style.display = "flex" ;        
        } else if(e.keyCode == 39 && thumbnails[0]){
            fullImage.src = "https://img.freepik.com/premium-photo/colorful-aurora-borealis-northern-lights-streaming-color-winter-landscape_926199-141206.jpg"
            imgBox.style.display = "flex" ;   
        } else if(e.keyCode == 39 && thumbnails[1]){
            fullImage.src = "https://img.freepik.com/premium-photo/colorful-aurora-borealis-northern-lights-streaming-color-winter-landscape_926199-141206.jpg"
            imgBox.style.display = "flex" ;   
        } else if(e.keyCode == 37 && thumbnails[0]){
            fullImage.src = "https://redandwinedecor.in/wp-content/uploads/2023/04/4-18.jpg"
            imgBox.style.display = "flex" ;   
        } 

})
*/ 
        
    
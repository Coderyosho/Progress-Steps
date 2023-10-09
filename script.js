const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click',()=>{
        currentActive++

        //Use this so that it will not exceed more than 4 or that is no. of circles
        if(currentActive > circles.length){
            currentActive = circles.length
        }

        update()
})

prev.addEventListener('click',() => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    } 
    update()
})

function update(){
    circles.forEach((circle,idx) =>{
        if(idx< currentActive){
            circle.classList.add('active')
            //circle >>(above) circles >> to html class which have circle(only) and it will add active
        }
        else{
            circle.classList.remove('active')
        }
    })

    const active = document.querySelectorAll('.active')

    // adding/connecting two or more circles 
    progress.style.width = (active.length -1 )/(circles.length-1  ) *100 +'%'
    //here we take the number of active and divide it with total number of circle to find the % as width in css is in width of progress.

    if(currentActive === 1){
        prev.disabled = true
    }
    else if(currentActive === circles.length){
        next.disabled = true
    }
    else{
        prev.disabled = false
        next.disabled = false
    }

}
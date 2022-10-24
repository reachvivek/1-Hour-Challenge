document.getElementById('imgs')

const img=document.querySelectorAll('#imgs img')

let index=0

function run(){
    index++;
    if(index==img.length){
        index=0
    }
    document.getElementById('imgs').style.transform=`translateX(${-index*500}px)`
    setTimeout(run, 2000)
}

setTimeout(run, 2000)
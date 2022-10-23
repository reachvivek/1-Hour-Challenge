document.getElementById('open').addEventListener('click', ()=>{
    document.getElementById('container').classList.add('active')    
})

document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('container').classList.remove('active')    
})
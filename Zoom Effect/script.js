document.getElementById('container').addEventListener('mousemove', (e)=>{
    const x=e.clientX-e.target.offsetLeft;
    const y=e.clientY-e.target.offsetTop;
    document.querySelector('img').style.transformOrigin=`${x}px ${y}px`;
    document.querySelector('img').style.transform='scale(2)'
})

document.getElementById('container').addEventListener('mouseleave', ()=>{
    document.querySelector('img').style.transform='scale(1)'
    document.querySelector('img').style.transformOrigin=`center center`;
})
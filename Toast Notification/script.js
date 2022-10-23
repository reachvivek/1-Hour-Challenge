const btn=document.getElementById('btn')
const container=document.getElementById('container')

btn.addEventListener('click', ()=>{
    createNotification()
})

let createNotification=()=>{
    const notif=document.createElement('div')
    notif.classList.add('toast');
    notif.innerText="This is a sample notification!"
    container.appendChild(notif);
    setTimeout(()=>{
        notif.remove()
    }, 5000)
}
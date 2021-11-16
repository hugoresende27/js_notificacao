const btn = document.getElementById('btn')
const toast = document.getElementById('notif')


const msg = [
    'Mensagem 1',
    'Mensagem 2',
    'Mensagem 3',
    'Mensagem 4'
]

const types = ['info', 'sucesso', 'erro']

btn.addEventListener('click', () => criarNotific())

function criarNotific (message = null, type = null) {
    console.log ('teste')
    const notif = document.createElement('div')
    notif.classList.add('notif')
    notif.classList.add(type ? type : getType())


    notif.innerText = message ? message : getMsg ()

    toast.appendChild(notif)
    setTimeout( () => {
        notif.remove()
    }, 3000)/*MENSAGEM DESAPARECEM APÓS 3000ms */
}

function getMsg(){
    return msg[Math.floor(Math.random() * msg.length)]
}

function getType(){
    return types[Math.floor(Math.random() * types.length)]
}
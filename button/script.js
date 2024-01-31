let btn_open = document.querySelector('button[data-open]')
let btn_close = document.querySelectorAll('button[data-close]')
let dialog = document.querySelector('dialog')


btn_open.onclick = () => {
    dialog.showModal()
}

btn_close.forEach(element => {
    
    element.onclick = () => {
        dialog.close()
    }
});
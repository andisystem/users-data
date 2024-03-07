addEventListener('DOMContentLoaded', () => {
    const btn_main = document.querySelector('.btn_main')
    if (btn_main) {
        btn_main.addEventListener('click', () => {
            const main_items = document.querySelector('.main_items')
            main_items.classList.toggle('show')
        })
    }
})
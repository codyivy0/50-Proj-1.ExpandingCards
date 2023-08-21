const panels = document.querySelectorAll('.panel')
console.log('test')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses(panel)
        panel.classList.add('active')
    })
})


function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
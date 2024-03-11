const allStar =  document.querySelectorAll('.rating .ratingc')
const ratingValue = document.querySelector('.rating input')
allStar.forEach((item, idx)=> {
    item.addEventListener('click', function() {
        let click = 0
        ratingValue.value = idx + 1
        console.log(ratingValue.value)

        allStar.forEach(i=> {
            i.classList.replace('rate', 'ratingc')
        })
        for (let i=0; i<allStar.length; i++) {
            if(i <= idx) {
                allStar[i].classList.replace('ratingc', 'rate')
            }else{
                allStar[i].style.setProperty('--i', click)
                click++
            }
        }
    })
})


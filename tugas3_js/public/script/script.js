const submitButton = document.querySelector('#submit')
const capres = ['Anis', 'Ganjar']

submitButton.addEventListener('click', (ev) => {
    ev.preventDefault()
    const amountChoice = document.getElementById('jumlahPilihan').value
    const list = document.getElementById('choiceList')
    const choiceId = document.getElementById('choiceId')
    let temp = " "
    let tempList = " "
    if (amountChoice.length <= 0) {
        alert("isi dulu bjir")
    } else {
        for (let i = 1; i <= amountChoice; i++) {
            temp += `Pilihan ${i}: <br>`
            tempList += ` Pilihan ${i} <br>`
        }
    }
    list.innerHTML = tempList
    choiceId.innerHTML = temp
})


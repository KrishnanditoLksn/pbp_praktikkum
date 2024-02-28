const submitButton = document.querySelector('#submit')
const parentButton = document.getElementById('buttonParent')
const text = document.createTextNode("OK")
const username = document.getElementById('inputUsername').value

submitButton.addEventListener('click', (ev) => {
    ev.preventDefault()
    const amountChoice = document.getElementById('jumlahPilihan').value
    const list = document.getElementById('choiceList')
    const choiceId = document.getElementById('choiceId')
    const button = document.createElement('button')
    button.className = "btn btn-danger"
    let temp = " "
    let tempList = " "
    if (amountChoice.length <= 0) {
        alert("isi dulu bjir")
    } else {
        for (let i = 1; i <= amountChoice; i++) {
            temp += `Pilihan ${i}: <br>`
            tempList += ` Pilihan ${i} <br>`
            button.appendChild(text)
            parentButton.appendChild(button)
        }
    }
    list.innerHTML = tempList
    choiceId.innerHTML = temp


    button.addEventListener('click', (ev) => {
        ev.preventDefault()
        alert("Ok")
    })
})

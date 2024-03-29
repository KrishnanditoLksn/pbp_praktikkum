const submitButton = document.querySelector('#submit')
const parentButton = document.getElementById('buttonParent')
const text = document.createTextNode("OK")
const radioButton = document.getElementById('radio')
const name = document.getElementById("inputUsername").value


submitButton.addEventListener('click', (ev) => {
    ev.preventDefault()
    const amountChoice = document.getElementById('jumlahPilihan').value
    const list = document.getElementById('choiceList')
    const choiceId = document.getElementById('choiceId')
    const button = document.createElement('button')
    const pilihanContainer = document.getElementById("pilihanContainer")
    button.className = "btn btn-danger"
    pilihanContainer.className = "container d-flex flex-row justify-content-between align-items-center  bg-info bg-opacity-10 border  border-2"
    let temp = " "
    let choices = []
    let tempList = " "
    if (amountChoice.length <= 0) {
        alert("Mohon isi dahulu !!!")
    } else {
        if (validatorNumber(amountChoice)) {
            alert("Input harus angka ")
        } else {
            for (let i = 1; i <= amountChoice; i++) {
                temp += `Pilihan ${i}: <br>`
                tempList += ` Teks Pilihan ${i} <br>`
                button.appendChild(text)
                parentButton.appendChild(button)
                choices.push(`Teks Pilihan ${i}`) // Simpan teks pilihan ke dalam array
                submitButton.disabled = true
            }
            button.addEventListener('click', () => {
                const radioContainer = document.getElementById("radioInputContainer")
                radioButton.innerHTML = ""; // Mengosongkan radioButton sebelum menambahkan radio button baru
                for (let j = 1; j <= amountChoice; j++) {
                    // a new div for the form-check
                    let formCheckDiv = document.createElement('div');
                    formCheckDiv.className = "form-check";
                    radioContainer.className = "container d-flex flex-row justify-content-between align-items-center  bg-info bg-opacity-10 border  border-2"

                    // a new radio button
                    let newRadioButton = document.createElement('input');
                    newRadioButton.type = "radio";
                    newRadioButton.className = "form-check-input";
                    newRadioButton.id = "flexRadioDefault" + j;
                    newRadioButton.name = "flexRadioDefault";

                    //  a new label
                    let newLabel = document.createElement('label');
                    newLabel.className = "form-check-label";
                    newLabel.htmlFor = "flexRadioDefault" + j;
                    console.log(choices.toString())
                    newLabel.textContent = `${choices[j - 1]}`; // Ambil teks pilihan dari array

                    // Append the radio button and label to the form-check div
                    formCheckDiv.appendChild(newRadioButton);
                    formCheckDiv.appendChild(newLabel);

                    // Append Radio button
                    radioButton.appendChild(formCheckDiv);

                    // Radio button event Listener
                    newRadioButton.addEventListener('change', () => {
                        if (newRadioButton.checked) {
                            console.log(`Pilihan yang dipilih: ${choices[j - 1]}`);
                            const okButton = document.createElement("button")
                            okButton.textContent = "OK"
                            okButton.className = "btn btn-primary"
                            radioButton.appendChild(okButton)

                            // Ok button listener
                            okButton.addEventListener('click', () => {
                                let choice = choices[j - 1]
                                alert(`Pilihan yang dipilih: ${choices[j - 1]}`);
                                // console.log("Hallo, nama saya , saya mempunyai sejumlah <Jml> pilihan yaitu <Teks Pilihan 1>, <Teks Pilihan 2>, <Teks Pilihan dst>, dan saya memilih <Teks Pilihan >\n"))
                                alert(`Halo , nama saya ${name} , , saya mempunyai sejumlah ${choices.length} pilihan yaitu ${choices.toString()} dan saya memilih ${choice}`)
                                okButton.disabled = true
                            });
                        }
                    });

                    button.disabled = true
                }
            });
        }
        list.innerHTML = tempList
        choiceId.innerHTML = temp
    }
})


const validatorNumber = (param) => {
    return !isNaN(parseFloat(param)) && param % 1 !== 0;
}
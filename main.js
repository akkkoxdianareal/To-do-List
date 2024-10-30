let listMaker = document.querySelector('#inputs')

let arrayOfInputs = []


function addInputs() {
    const inputContainer = document.createElement('section')
    const btnInputDelete = document.createElement('button')
    const itemInput = document.createElement('input')

    itemInput.setAttribute('type', 'text')
    itemInput.setAttribute('id', 'listItems')

    btnInputDelete.innerHTML = '<i class="fa-solid fa-x"></i>'
    btnInputDelete.setAttribute('class', 'boton delete-btn')

    arrayOfInputs.push(itemInput)

    inputContainer.style.animation = 'popup .5s ease'

    for (let item = 0; item <= arrayOfInputs.length; item++) {

        itemInput.setAttribute('placeholder', `item`)

        inputContainer.appendChild(itemInput)

        inputContainer.appendChild(btnInputDelete)

        listMaker.appendChild(inputContainer)

        btnInputDelete.addEventListener('click', () => {
            inputContainer.style.animation = 'popup2 0.3s reverse ease'
            setTimeout(() => {
                inputContainer.remove()
            }, 290);

        })
    }
}

function makeList() {
    // Items input
    let items = document.querySelectorAll('#listItems');

    // Acá obtengo el valor del textarea
    let titulo = document.querySelector("#titulo").value;

    if (titulo <= 0) {
        alert("No hay nada por aquí.")
    }

    else if (titulo) {

        const newtittle = document.createElement("h1")
        newtittle.textContent = `${titulo}`;

        const listUl = document.createElement("ul")
        let container = document.querySelector(".list-container")
        listUl.appendChild(newtittle)

        // CREO UN FOR para ver cuales son todas las partes del array y su longitud para crear listas de esa cantidad
        //Aqui reviso que contiene mi array apartir de 1, porque 0 esta reservado para el titulo,
        //y se crearan todos los elementos al recorrerlos
        for (let item = 0; item < items.length; item++) {

            let newItems = items[item]
            console.log(newItems.value)

            const newListItem = document.createElement("li")

            newListItem.textContent = `${newItems.value}`;

            // Agrego el listUL.AppendChild para que se recorra en el for y agreegue todos los items creados
            if (newItems.value) {
                container.appendChild(listUl)
                listUl.appendChild(newListItem)

            }
            else {
                alert('Hay elementos vacios')
            }

            newListItem.addEventListener('click', () => {
                newListItem.classList.toggle('complete')
            })
        }

        // -------------

        // Sección botones
        const newSection = document.createElement("section")
        //Se crea un boton para eliminar objetos
        const newButton = document.createElement("button")
        newButton.setAttribute('class', 'boton delete-btn');

        const completeButton = document.createElement("button")
        completeButton.setAttribute('class', 'boton');

        //ListUl.appendChild añade a si mismo (un hijo) del objeto que creamos antes
        //o sea nuestras constantes
        newButton.innerHTML = "<i class='fa-solid fa-trash'></i> Eliminar";
        completeButton.innerHTML = "<i class='fa-solid fa-info'></i> Click para completar";

        listUl.appendChild(newSection)
        newSection.appendChild(newButton)
        newSection.appendChild(completeButton)

        //Agrego un evendlistener para el nuevo boton que cree y elimino el ul que cree
        newButton.addEventListener('click', () => {
            listUl.style.animation = 'popup2 0.3s reverse ease'
            setTimeout(() => {
                listUl.remove()
            }, 250);
        })
        let complete = false;

        completeButton.addEventListener('click', () => {
            complete = !complete;
            listUl.classList.toggle('complete-task')
            completeButton.classList.toggle('complete-btn')
            completeButton.innerHTML = (complete == false) ? "<i class='fa-solid fa-info'></i> Click para completar" : "<i class='fa-solid fa-check'></i> Completada"
        })
    }
    else if (titulo > 0 && items.length == 0) {
        alert('hola')
        console.log('hola')
    }
}

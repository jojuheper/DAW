/*
//URLs para probar:
//https://www.eldia.es/rss/section/12502
//https://feeds.bbci.co.uk/mundo/rss.xml
//https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada
*/
function init() {
    selectRSS();
    let rss = getArrayFromLocalStorage();
    if (rss.length > 0) {
        callServer(rss[0].url);
    }
}

let data = {
    selectRSS: document.getElementById('campoSelect'),
    addRSS: document.getElementById('crearRSS'),
    deleteRSS: document.getElementById('borrarRSS'),
    overlay: document.getElementById('overlay'),
    takeInputs: document.getElementById('recogerDatos'),
    closeWindows: document.getElementById('cerrarVentana'),
    news: document.getElementById('noticias'),
}

function showWindows() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    data.overlay.style.display = 'flex';
}

function hideWindows() {
    data.overlay.style.display = 'none';
}

function initializeArray() {
    let rss = [];
    return rss;
}

function getArrayFromLocalStorage() {
    let storedArray = localStorage.getItem('rss');
    if (storedArray) {
        return JSON.parse(storedArray);
    } else {
        return initializeArray();
    }
}

function saveArrayToLocalStorage(array) {
    localStorage.setItem('rss', JSON.stringify(array));
}

function takeDataInputs(event) {
    // stop before events and test minimun cases of inputs
    event.preventDefault();
    // this flag is for repeat the same inputs
    flag = true;
    const title = document.getElementById('input1').value;
    const url = document.getElementById('input2').value;

    if (title === '' || url === '') {
        alert('Rellene todos los datos correctamente...');
        hideWindows(event);
        return;
    }

    const inputValues = {
        title: title,
        url: url
    };

    let rss = getArrayFromLocalStorage();
    rss.forEach(item => {
        if (item.title === title && item.url === url)
            flag = false;
    });

    if (flag) {
        rss.push(inputValues);
        saveArrayToLocalStorage(rss);
        selectRSS();
        callServer(url);
    }


    if (rss.length > 0) hideWindows();

}

function callServer(url) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'server.php?url=' + encodeURIComponent(url), true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (xhr.responseText) {
                handleJsonResponse(xhr.responseText);
            } else {
                console.error('La respuesta del servidor no es un JSON válido.');
            }
        }
    }
    xhr.send();
}

function handleJsonResponse(responseJson) {
    if (responseJson) {
        let responseData = JSON.parse(responseJson);

        if (responseData.channel && responseData.channel.item) {
            let noticiasElement = document.getElementById('noticias');

            noticiasElement.innerHTML = '';

            let items = responseData.channel.item;
            items.forEach(item => {
                let tituloElement = document.createElement('h3');
                tituloElement.textContent = item.title;

                let descripcionElement = document.createElement('p');
                descripcionElement.textContent = item.description;

                let enlaceElement = document.createElement('a');
                enlaceElement.href = item.link;
                enlaceElement.textContent = 'Leer más';

                noticiasElement.appendChild(tituloElement);
                noticiasElement.appendChild(descripcionElement);
                noticiasElement.appendChild(enlaceElement);

                noticiasElement.appendChild(document.createElement('hr'));
            });
        } else {
            console.error('La estructura de la respuesta JSON no es la esperada.');
        }
    } else {
        console.error('La respuesta del servidor no es válida JSON');
    }
}

function selectRSS() {
    data.selectRSS.innerHTML = '';
    let rss = getArrayFromLocalStorage();
    if (rss.length > 0) {
        rss.forEach(item => {
            let option = document.createElement('option');
            option.text = item.title;
            option.value = item.url;
            data.selectRSS.appendChild(option);
        });
    }

}

function changeRSS() {

    let selected = data.selectRSS.value;
    let rssArray = getArrayFromLocalStorage();

    if (selected) {
        let first = [];
        // we need the push the selected item to first position
        // normaly in the LocalStorage don't sorted
        rssArray.map(item => {
            if (item.url === selected) {
                first.unshift(item);
            } else {
                first.push(item);
            }
        });
        saveArrayToLocalStorage(first);
        selectRSS();
        callServer(selected);
    }

}

// delete the first selected RSS
function deleteRSS() {
    let rss = data.selectRSS;
    let selectedUrl = rss.value;

    if (selectedUrl) {
        let rssArray = getArrayFromLocalStorage();
        // put in rssArray all item less the equal on the first position
        rssArray = rssArray.filter(item => item.url !== selectedUrl);
        saveArrayToLocalStorage(rssArray);
        selectRSS();
    }
}

data.selectRSS.addEventListener('click', () => selectRSS());
data.selectRSS.addEventListener('change', () => changeRSS());
data.addRSS.addEventListener('click', () => showWindows());
data.takeInputs.addEventListener('click', (event) => takeDataInputs(event));
data.closeWindows.addEventListener('click', () => hideWindows());
data.deleteRSS.addEventListener('click', () => deleteRSS());

// initialize the application
document.addEventListener('DOMContentLoaded', init());
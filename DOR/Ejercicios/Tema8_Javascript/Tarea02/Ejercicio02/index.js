const characters = [
    { name: "Frodo", image: "./resources/frodo.png", description: "Un hobbit del Condado y el portador del Anillo." },
    { name: "Gandalf", image: "./resources/gandalf.png", description: "Un mago poderoso y guía de la Comunidad del Anillo." },
    { name: "Aragorn", image: "./resources/aragorn.png", description: "El heredero de Isildur y rey legítimo de Gondor." },
    { name: "Legolas", image: "./resources/legolas.png", description: "Un elfo del Bosque Negro y un arquero habilidoso." },
    { name: "Gimli", image: "./resources/gimli.png", description: "Un enano valiente y miembro de la Comunidad del Anillo." },
    { name: "Sam", image: "./resources/sam.png", description: "Un hobbit y el mejor amigo de Frodo." },
    { name: "Boromir", image: "./resources/boromir.png", description: "Un guerrero de Gondor y miembro de la Comunidad del Anillo." },
    { name: "Saruman", image: "./resources/saruman.png", description: "Un mago que se vuelve traidor." },
    { name: "Sauron", image: "./resources/sauron.png", description: "El Señor Oscuro y creador del Anillo Único." }
];

const chosenCharacter = characters[Math.floor(Math.random() * characters.length)];
let attemptsLeft = 3;

const characterDescription = document.querySelector('#character').innerHTML = chosenCharacter.description;

const result = document.getElementById('result');
const attempts = document.getElementById('attempts');
const image = document.getElementById('characterImage');

const checkGuess = () => {
    const guess = document.getElementById('guess').value.trim();

    if (guess === "") {
        alert("Por favor, escribe un nombre de personaje.");
        return;
    }
    if (guess.toLowerCase() === chosenCharacter.name.toLowerCase()) {
        result.textContent = `¡Felicidades! Adivinaste el personaje correctamente: ${chosenCharacter.description}`;
        result.style.color = "green";
        attempts.textContent = "";
        image.src = chosenCharacter.image;
        image.style.display = "block";
        setTimeout(() => {
            location.reload();
        }, 3000);
    } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
            result.textContent = "Intenta de nuevo.";
            result.style.color = "red";
            attempts.textContent = `Te quedan ${attemptsLeft} intentos.`;
        } else {
            result.textContent = `Has perdido. El personaje era ${chosenCharacter.name}: ${chosenCharacter.description}`;
            result.style.color = "red";
            attempts.textContent = "";
            image.src = chosenCharacter.image;
            image.style.display = "block";
        }
    }
}
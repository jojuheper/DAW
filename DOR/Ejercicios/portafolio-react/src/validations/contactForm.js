export const contactForm = ({ name, surname, message, email }) => {

    const regexText = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/;
    const regexEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexMessage = /^[a-zA-Z0-9\s.,!?¡¿]+$/;

    if (!regexText.test(name)) return false;
    if (!regexText.test(surname)) return false;
    if (!regexEmail.test(email)) return false;
    if (!regexMessage.test(message)) return false;

    return true;
}

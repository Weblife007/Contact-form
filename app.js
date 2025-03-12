const form = document.querySelector('.formBody');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const queryType = document.querySelectorAll('input[name="select"]');
const message = document.getElementById('message');
const checkBox = document.getElementById('checkbox');
const alert = document.getElementById('alert')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateInputs()) {
        form.submit(); // Submit only if validation passes
        // openAlert.alert(openAlert.classList.add('open-alert'))
        openPopUp();
        // document.getElementById('alert').
    }
});

const setError = (element, message) => {
    const first = element.parentElement;
    const errorDisplay = first.querySelector('.error');
    errorDisplay.innerText = message;
    first.classList.add('error');
};

const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

function openPopUp() {
    alert.classList.add('open-alert')
}

const validateInputs = () => {
    const firstnameValue = firstName.value.trim();
    const lastnameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const checkboxValue = checkBox.checked;

    let isValid = true;

    if (firstnameValue === '') {
        setError(firstName, 'This field is required');
        isValid = false;
    }
    // } else {
    //     setSuccess(firstName);
    // }

    if (lastnameValue === '') {
        setError(lastName, 'This field is required');
        isValid = false;
    }

    if (!isValidEmail(emailValue)) {
        setError(email, 'Please enter a valid email');
        isValid = false;
    }

    let querySelected = false;
    queryType.forEach((option) => {
        if (option.checked) {
            querySelected = true;
        }
    });

    if (!querySelected) {
        setError(queryType[0].closest("#click-on"), "Please select a query type");
        isValid = false;
    } 
    if (messageValue === '') {
        setError(message, 'This field is required');
        isValid = false;
    }

    if (!checkboxValue) {
        setError(checkBox, 'To submit this form, please consent to being contacted');
        isValid = false;
    }

    return isValid;
};

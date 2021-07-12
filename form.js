let placeholders = document.querySelector(".placeholder");
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".call__form");
    form.addEventListener("submit", formSend);
    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);
        let formData = new FormData(form);
        if (error === 0) {
            let response = await fetch("sendmail.php", {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message)
                form.reset();
                placeholders.classList.add("placeholder-active");
                console.log("fwefwefwfe");
            } else {
                alert("Неполадки с сервером");
            }
        } else {

        }
    }
    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll(".required");
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRomoveError(input);


            if (input.classList.contains("telephone")) {
                if (!telTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.value == "--") {
                formAddError(input);
                error++;
            }
            else {
                if (input.value == "") {
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add("error-validate");
        input.classList.add("error-validate");
    }
    function formRomoveError(input) {
        input.parentElement.classList.remove("error-validate");
        input.classList.remove("error-validate");
    }
    let regExpTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    function telTest(input) {
        return regExpTel.test(input.value);
    }
})
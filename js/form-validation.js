const form = document.querySelector("form")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const campos = form.querySelectorAll("input, select, textarea");

    let todosPreenchidos = true;
    let senhaValida = true;

    campos.forEach((campo) => {
        if ((campo.type === "checkbox" || campo.type === "radio") && !campo.checked) {
            todosPreenchidos = false;
        }
        else if (campo.type !== "checkbox" && campo.type !== "radio" && campo.value.trim() === "") {
            todosPreenchidos = false;
        }

        if (campo.id === "idSenha" && campo.value.trim().length < 6) {
            senhaValida = false;
        }
    });

    if (!todosPreenchidos) {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } 
    else if (!senhaValida) {
        alert("A senha deve ter no mínimo 6 caracteres.");
    } 
    else {
        form.submit();
    }
});

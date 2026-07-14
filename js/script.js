async function loadComponent(id, file) {

    try {

        const response = await fetch(file);

        const html = await response.text();

        document.getElementById(id).innerHTML = html;

    }

    catch(error){

        console.error(error);

    }

}

loadComponent("navbar","components/navbar.html");

loadComponent("footer","components/footer.html");
// ==========================================
// COPY CODE BUTTON
// ==========================================

const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetId = button.dataset.copyTarget;

        const code = document
            .getElementById(targetId)
            .innerText;

        navigator.clipboard.writeText(code);

        button.innerHTML = `
            <i class="bi bi-check2"></i>
            <span>Copied!</span>
        `;

        button.classList.remove("btn-primary");

        button.classList.add("btn-success");

        setTimeout(() => {

            button.innerHTML = `
                <i class="bi bi-copy"></i>
                <span>Copy</span>
            `;

            button.classList.remove("btn-success");

            button.classList.add("btn-primary");

        }, 2000);

    });

});
// var modalButton = document.querySelectorAll(".cardModal");

function createModal() {
    const modalElement = document.querySelector(".modal");
    if (!modalElement) {
        console.log("Erro");
    }
    else {
        var modalContent = document.createElement("div");
        modalContent.classList.add("modalContent");

        var modalSpan = document.createElement("span");
        modalSpan.classList.add("modalSpan");
        modalSpan.innerHTML = "&times;";
        modalSpan.addEventListener('click', function () {
            closeModal();
        });

        var modalDetails = document.createElement("div");
        modalDetails.classList.add("modalDetails");

        modalContent.appendChild(modalSpan);
        modalContent.appendChild(modalDetails);

        modalElement.appendChild(modalContent);
    }
}

createModal();

// Fecha o modal se o usuário clicar fora dele
window.onclick = function (event) {
    var modal = document.querySelector('.modal');
    if (event.target == modal) {
        closeModal();
    }
}

function closeModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = "none";
}

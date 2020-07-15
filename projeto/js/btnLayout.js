(function() {

    const btn = document.querySelector('#btnMudaLayout');
    btn.addEventListener('click', () => {
        moduloMural.mudarLayout();

        if (btn.textContent.trim() == 'Linhas') {
            btn.textContent = "Blocos";
        }
        else {
            btn.textContent = 'Linhas';
        }
    });

})();

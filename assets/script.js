    // script da validação do index.html
(function () {
        'use strict';
        var forms = document.querySelectorAll('.needs-validation');
        // Iterar sobre cada formulário e aplicar validação
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();

// script da validação do CriarLogin.html
(function () {
        'use strict'
        var forms = document.querySelectorAll('.needs-validation')       
        Array.from(forms).forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    })()

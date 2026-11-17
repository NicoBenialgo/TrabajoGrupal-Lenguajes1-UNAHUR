// Lenguajes Informáticos 1 — UNAHUR 2026 (prueba de prácticas con sitio InfoHoy)
// ── 1. MODO OSCURO ──────────────────────────────
const btnModo = document.getElementById("btn-modo");
btnModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
    // Cambiar el texto del botón según el estado actual
    const modoActivo = document.body.classList.contains("modo-oscuro");
    btnModo.textContent = modoActivo ? "☀ Modo claro" : "🌙 Modo oscuro";
});
// ── 2. VALIDACIÓN DE FORMULARIO DE CONTACTO ────────────────────────────── 
const formulario=document.getElementById("formContacto");
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
            const respuesta = document.getElementById("respuestaFormulario");
            //primera validacion
            if (nombre === "" || email === "" || mensaje === ""){
                respuesta.textContent = "Por favor, completá todos los campos";
                respuesta.className = "alert alert-danger mt-3";
                return;
            }
            //segunda validacion
            const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formatoEmail.test(email)){
                respuesta.textContent = "Por favor, ingresá un correo electrónico válido";
                respuesta.className = "alert alert-danger mt-3";
                return;
            }
            respuesta.textContent = "Gracias por contactarte con nosotros! Tu mensaje fue enviado con éxito"
            respuesta.className = "alert alert-success mt-3";
            formulario.reset();
    });

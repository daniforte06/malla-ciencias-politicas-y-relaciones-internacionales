
const ramos = document.querySelectorAll('.ramo');
let aprobados = new Set();

ramos.forEach(ramo => {
  ramo.addEventListener('click', () => {
    const id = ramo.dataset.id;
    ramo.classList.toggle('aprobado');

    if (aprobados.has(id)) {
      aprobados.delete(id);
    } else {
      aprobados.add(id);
    }

    actualizarHabilitados();
  });
});

function actualizarHabilitados() {
  ramos.forEach(ramo => {
    const requisitos = ramo.dataset.prerreqs.split(',').filter(Boolean);
    const puedeTomarse = requisitos.every(r => aprobados.has(r));
    
    ramo.classList.remove('habilitado');
    if (!ramo.classList.contains('aprobado') && puedeTomarse) {
      ramo.classList.add('habilitado');
    }
  });
}

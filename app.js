/**
 * Joel Romero Franco - CV Profesional y Formal
 * Controlador de vistas separadas (C# / Java) y funciones de impresión
 */

document.addEventListener('DOMContentLoaded', () => {
  initCvViewSwitcher();
});

function initCvViewSwitcher() {
  const btnCsharp = document.getElementById('tabCsharpBtn');
  const btnJava = document.getElementById('tabJavaBtn');
  const viewCsharp = document.getElementById('cvViewCsharp');
  const viewJava = document.getElementById('cvViewJava');

  function showView(target) {
    if (target === 'java') {
      if (viewJava) viewJava.style.display = 'block';
      if (viewCsharp) viewCsharp.style.display = 'none';
      if (btnJava) btnJava.classList.add('active');
      if (btnCsharp) btnCsharp.classList.remove('active');
      document.title = "CV Joel Romero Franco - Desarrollador Junior (Java / Full Stack)";
      history.replaceState(null, null, '#java');
    } else {
      if (viewCsharp) viewCsharp.style.display = 'block';
      if (viewJava) viewJava.style.display = 'none';
      if (btnCsharp) btnCsharp.classList.add('active');
      if (btnJava) btnJava.classList.remove('active');
      document.title = "CV Joel Romero Franco - Desarrollador Junior (C# .NET / Full Stack)";
      history.replaceState(null, null, '#csharp');
    }
  }

  if (btnCsharp) {
    btnCsharp.addEventListener('click', (e) => {
      e.preventDefault();
      showView('csharp');
    });
  }

  if (btnJava) {
    btnJava.addEventListener('click', (e) => {
      e.preventDefault();
      showView('java');
    });
  }

  // Comprobar URL hash (#java o #csharp)
  const hash = window.location.hash.toLowerCase();
  if (hash === '#java') {
    showView('java');
  } else {
    showView('csharp');
  }
}

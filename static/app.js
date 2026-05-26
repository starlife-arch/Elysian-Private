(function(){
  const forms = document.querySelectorAll('form[data-confirm]');
  forms.forEach(f => f.addEventListener('submit', (e) => {
    if(!confirm(f.dataset.confirm)){ e.preventDefault(); }
  }));
})();

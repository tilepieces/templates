window.bootstrapTooltips = [...document.querySelectorAll('[data-bs-toggle=tooltip]')].map((tooltipTriggerEl)=>{
  return new bootstrap.Tooltip(tooltipTriggerEl,{container: 'body'})
});
var popoverTriggerList = [...document.querySelectorAll('[data-bs-toggle=popover]')];
window.bootstrapPopovers = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl,{container: 'body'})
})
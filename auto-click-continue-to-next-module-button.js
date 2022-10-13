let autoNext = () => {
  Array.from(document.querySelectorAll('button'))
    .filter(b => b.textContent === 'Continue to next module')
    .forEach(b => b.click());


  
};

setInterval(autoNext, 5000);

    let input = document.getElementById('input1');
    let buttons = document.querySelectorAll('button');

    
    buttons.forEach(button => {
    button.addEventListener('click', () => {
    let buttonText = button.textContent;

    if (buttonText ==='DEL') {
    
      input.value = input.value.slice(0, -1);
    } else if (buttonText === '=') {
    
    try {
        let result = eval(input.value);
        input.value = result;
      } catch (error) {
        input.value = 'Error';
      }
      
    } 
    else if (buttonText === '%') {
      try {
        input.value = eval(input.value + '/100');
      } catch (error) {
        input.value = 'Error';
      }
    }
    
    else { input.value += buttonText;
    
    }

  });
});

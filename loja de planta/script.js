
document.addEventListener('DOMContentLoaded', function () {
    
    
    const toggleButton = document.getElementById('toggleButton');

    
    toggleButton.addEventListener('click', function () {
       
        document.body.classList.toggle('dark-mode');
    });

   
    document.querySelectorAll('.produto button').forEach(button => {

        
        button.addEventListener('click', function() {
            alert('Item adicionado ao carrinho!');
        });

        
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#388e3c'; // Cor mais escura
        });

       
        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#4CAF50'; // Cor original
        });
    });
});

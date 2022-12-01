const container = document.querySelectorAll('.gallery');
const besar = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.gallery-img');
container.forEach(function(e){
    
    e.addEventListener('click',function(iven){
        if(iven.target.className == 'gallery-img'){
            besar.src = iven.target.src;
            besar.classList.add('fade');
            setTimeout(function(){
                besar.classList.remove('fade');
         
            }, 500);
            
        }   
        thumbs.forEach(function(asli){
            asli.className = 'gallery-img';
        });
        
        iven.target.classList.add('active');
        iven.preventDefault();
        iven.stopPropagation();
    });
});
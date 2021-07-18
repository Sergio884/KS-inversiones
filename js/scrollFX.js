    
    window.addEventListener('scroll',()=>{
        let contenedores = document.getElementsByClassName("figura");
        let tamanio=window.innerHeight*0.90;
        for(let i=0;i<contenedores.length;i++){

            let alturaEfecto=contenedores[i].getBoundingClientRect().top;

            if(alturaEfecto<=tamanio){
                // contenedores[i].classList.remove("ocultar-figura");
                
                contenedores[i].classList.add("animate__fadeInUp");
                contenedores[i].classList.remove("animate__fadeOutDown");

            }
            else{
                console.log("ocultar");
                
                contenedores[i].classList.remove("animate__fadeInUp");
                contenedores[i].classList.add("animate__fadeOutDown");


            }


        }
    })

<template>
  
    <div class="contain-conocenos">
      <img src="../assets/13.png" alt="" class="imagen_conocenos">
      <div class="informacion-conocenos">
             <h1 class="titulo-conocenos">Asados Del Oeste</h1>
             <div class="parte-inicial">
              <img src="../assets/5.jpg" alt="" class="imagen_principal">
              <p>
                nos enorgullecemos de ofrecer una experiencia gastronómica única. 
                Somos tu destino ideal para satisfacer esos antojos de comida rápida con sabores auténticos y calidad.
                Nuestro menú está cuidadosamente diseñado para complacer a todos los gustos y antojos. Desde jugosas 
                hamburguesas con ingredientes frescos y salsas caseras hasta deliciosos asados para diferentes preferencias,
                 cada bocado está lleno de sabor y frescura.
                 En Asados del Oeste, la satisfacción del cliente es nuestra prioridad número uno. Nuestro equipo está 
                 comprometido a brindarte un servicio excepcional en un ambiente acogedor y amigable. Ya sea que estés 
                 buscando una rápida comida para llevar o deseas disfrutar de una comida relajada en nuestro espacio,
                  estamos aquí para hacer que tu experiencia sea memorable.

              </p>
              

              </div>
            </div>
            <div class="contenedor-iconos">
                <div class="componente">
                  <img src="../assets/parrilla.png" alt="" class="iconoConocenos">
                  <p>Contamos con amplia variedad de productos para diferentes gustos, todos con el delicioso toque de la comida al carbon</p>
                </div>
                <div class="componente">
                  <img src="../assets/restaurante.png" alt="" class="iconoConocenos">
                  <p>Brindamos atencion todos los dias apartir de las 5pm para que no tengas excusas de deleitarte</p>
                </div>
                <div class="componente">
                  <img src="../assets/pin-de-ubicacion.png" alt="" class="iconoConocenos">
                  <p>Ubicados sobre la via al mar Km7, para que salgas de la rutina de la ciudad, con un clima fresco y una vista hermosa.</p>
                </div>
                <div class="componente">
                  <img src="../assets/nota-musical.png" alt="" class="iconoConocenos">
                  <p>Amplia variedad de musica para ambientar el lugar para que te sientas comodo en nuestras instalaciones</p>
                </div>
         </div>
         <div class="menu">
          <h1 class="titulo_menu">Menu</h1>
          <p class="texto">Explora nuestro menú, descubre tus favoritos y déjanos encargarnos del resto. ¡Estamos ansiosos por deleitarte con lo mejor en comida !</p>
          <div class="imagenes">
          <img src="../assets/menu2.png" alt="" class="menuimg">
          <img src="../assets/menu.png" alt="" class="menuimg">
        </div>
        </div>


         <div class="mapa">
          <p class="texto">Que esperas para visitarnos</p>
         <iframe  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3785.4943172154294!2d-76.58842592280384!3d3.4595559875287156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjcnMzQuNCJOIDc2wrAzNScwMC44Ilc!5e1!3m2!1ses!2sco!4v1715180163892!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
           
      </template>
      
      <script setup>
 
    
    
    
      </script>
      
      <style>
      .contain-conocenos{
    margin-top: 8rem;
    width: 90%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
   
    filter: none;

      }
      .parte-inicial{
        display: flex;
        padding: 2rem;
        gap: 2rem;
        font-size: 1rem;
      }

.informacion-conocenos{
  padding: 2rem;
}

      .titulo-conocenos{
        font-size:2.5rem;
        text-align: inherit;
        padding-left: 4rem;
      }
      .imagen_principal{
        width: 35rem;
      }
      .imagen_conocenos{
        width: 100%;
      }
    .iconoConocenos{
      width: 50%;
      display: block;
      margin: auto;
      padding-bottom: 1rem;
     
    }
    .contenedor-iconos{
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 3rem;
      padding: 2rem;   
      background: rgb(247, 169, 44);

    }
    .mapa{
     
      justify-content: center;
      text-align: center;
    }  
    .menu{
     
      text-align: center;
      gap: 2rem;
    }
    .titulo_menu{
      font-size: 2rem;
      text-transform: uppercase;
    }
    .imagenes{
      display: flex;
      gap: 2rem;
      justify-content: center;
      text-align: center;
    }
    .menuimg{
      width: 35%;
    }
    .texto{
      margin-left: 2rem;
      text-align: left;
      font-size: 1rem;
    }
    
      </style>
      
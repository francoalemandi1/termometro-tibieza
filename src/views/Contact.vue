<template>
<div class='flex lg:m-8 lg:p-8 px-8 p-2 m-2'>
  <div class='lg:w-1/12'></div>
  <section class="lg:w-10/12 mx-4">
    <h1 class="text-xl font-normal font-bold lg:mt-4 my-4 mx-4 lg:px-0 leading-relaxed">
      Sugerencias!
    </h1>
    <h4 class="text-lg font-normal text-gray-700 lg:mt-4 my-4 mx-4 lg:px-0">
      Mi intención es armar un pool de muchas preguntas para hacerlo más dinámico y divertido pero, lamentablemente, mi imaginación es finita :'('. Dicho esto, recurro a vos para que me des una mano con alguna que se te ocurra. Sentite más que libre de enviarme un mensajito por redes sociales. <br /> Cualquier sugerencia de pregunta o feedback es bienvenida!
      <br /> <br />
      Mis canales de contacto son:
      <div class='flex my-4'>
        <div class="w-12 mr-2 text-gray-500">
          <a href="https://twitter.com/francoalemandi" target='_blank' class="hover:text-gray-700">
            <twitter-svg />
          </a>
        </div>
      </div>
    </h4>
  </section>
  <div class='lg:w-1/12'></div>
</div>
</template>

<script>
import TwitterSvg from '../assets/twitterSvg.vue'
export default {
  components: { TwitterSvg }
}
</script>

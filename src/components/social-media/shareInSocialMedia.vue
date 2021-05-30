<template>
<div class='block mt-4'>
  <h1 class='text-3xl text-center font-bold tracking-normal leading-relaxed m-2 lg:m-0'>Compartilo con tus amigxs!</h1>
  <div class='flex flex-wrap justify-center my-4'>
    <a @click='init()' id='facebook-btn' target='_blank' class="text-sm flex cursor-pointer p-2 mx-4 my-2 lg:my-0 text-white rounded-md border-solid border-1 bg-facebook">
      <facebook-icon />
      <p class='mx-1'>Facebook</p>
    </a>
    <a @click='init()' id='twitter-btn' target='_blank' class="text-sm flex cursor-pointer p-2 lg:mx-4 my-2 lg:my-0 text-white rounded-md border-solid border-1 bg-twitter">
      <twitter-icon width='20px' height='20px' />
      <p class='mx-1'>Twitter</p>
    </a>
    <a @click='init()' id='whatsapp-btn' target='_blank' class="text-sm flex cursor-pointer p-2 mx-4 my-2 lg:my-0 text-white rounded-md border-solid border-1 bg-whatsapp">
      <whatsapp-icon class='mt-1' />
      <p class='mx-1'>Whatsapp</p>
    </a>
    <a @click='copyUrlLink()' target='_blank' class="text-sm flex cursor-pointer p-2 mx-4 text-white my-2 lg:my-0 rounded-md border-solid border-1 bg-indigo-400">
      <link-icon class='mt-1 mx-1' />
      <p>{{ !isCopyClicked ? 'Copia el link' : 'Link copiado!' }}</p>
      <input id='url' v-model='urlLink' type='hidden' />
    </a>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

import WhatsappIcon from '../../assets/whatsappSvg.vue'
import TwitterIcon from '../../assets/twitterSvg.vue';
import FacebookIcon from '../../assets/fcbkSvg.vue';
import LinkIcon from '../../assets/linkSvg.vue';

export default {
  components: { WhatsappIcon, TwitterIcon, FacebookIcon, LinkIcon },
  setup() {
    window.route = useRoute();

    const urlLink = ref(location.href);
    const isCopyClicked = ref(false); 
    const copyUrlLink = () => {
      isCopyClicked.value = true;
      let url = document.querySelector('#url')
      url.setAttribute('type', 'text') 
      url.select()

      try {
        let successful = document.execCommand('copy');
      } catch (err) {
        console.log('Oops, unable to copy');
      }

      /* unselect the range */
      url.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    }



    const init = () => {
      const facebookBtn = document.querySelector("#facebook-btn");
      const twitterBtn = document.querySelector("#twitter-btn");
      const whatsappBtn = document.querySelector("#whatsapp-btn");

      const routeName = window.route.name;

      let postUrl = encodeURI(document.location.href);
      let postTitle = encodeURI(`Resultaste ser ${routeName}`)

      facebookBtn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
      );

      twitterBtn.setAttribute(
        "href",
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
      );

      whatsappBtn.setAttribute(
        "href",
        `https://wa.me/?text=${postTitle} ${postUrl}`
      );
    }

    return {
      urlLink,
      copyUrlLink,
      isCopyClicked,
      init
    }
  }

}
</script>

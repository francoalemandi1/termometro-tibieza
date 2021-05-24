<template>
  <button class="p-3 rounded-lg" :class='[bgColor, textColor]'>
    {{ text }}
  </button>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      bgColor: {
        type: String,
        required: true
      },
      textColor: {
        type: String,
        required: true
      }
    }
  }
</script>
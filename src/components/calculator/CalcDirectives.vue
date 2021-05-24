<template>
  <div class='m-8 p-8'>
    <h1 class='text-xl font-normal font-bold mx-4'>Cómo resolverlo</h1>
    <div class='inline-block m-4 p-8 bg-gray-100 text-blue-900 text-sm'>
      <ul class="list-disc" v-for='directive in directives' :key='directive'>
        <li class="mb-4">{{ directive.directive }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import useDirectives from '../../store/directives/index.js'
  export default {
    setup() {
      const { directives } = useDirectives();

      return {
        directives
      }
    }    
  }
</script>

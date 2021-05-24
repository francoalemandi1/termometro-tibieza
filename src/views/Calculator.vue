<template>
  <div>
    <calculator-wrapper />
  </div>
</template>

<script>
import CalcDirectives from '../components/calculator/CalcDirectives.vue'
import CalculatorWrapper from '../components/calculator/CalculatorWrapper.vue'
  export default {
    components: { CalcDirectives, CalculatorWrapper }
  }
</script>
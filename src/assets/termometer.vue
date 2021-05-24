<template>
<div  class="thermometer--very-low">
  <div class="glass">
    <div class="liquid" :style='[width, termColor]' ></div>
    <svg class="ruler">
      <rect x="0px" y="0" width="20%" height="100%" fill="url(#ticks--very-low)"  rx="2"/>
      <rect x="20%" y="0" width="20%" height="100%" fill="url(#ticks--low)"  rx="2"/>
      <rect x="40%" y="0" width="20%" height="100%" fill="url(#ticks--moderate)"  rx="2"/>
      <rect x="60%" y="0" width="20%" height="100%" fill="url(#ticks--high)"  rx="2"/>
      <rect x="80%" y="0" width="20%" height="100%" fill="url(#ticks--very-high)"  rx="2"/>
      <defs>
        <pattern id="ticks--very-low" class="ticks--very-low" width="60px" height="100%" patternUnits="userSpaceOnUse" x="0">
          <line x1="1px" x2="1px" y2="6px" />
          <line x1="12px" x2="12px" y2="6px" />
          <line x1="24px" x2="24px" y2="6px" />     
          <line x1="36px" x2="36px" y2="6px" />
          <line x1="48px" x2="48px" y2="10px" />
        </pattern>
        <pattern id="ticks--low" class="ticks--low" width="60px" height="100%" patternUnits="userSpaceOnUse" x="0">
          <line x1="1px" x2="1px" y2="6px" />
          <line x1="12px" x2="12px" y2="6px" />
          <line x1="24px" x2="24px" y2="6px" />     
          <line x1="36px" x2="36px" y2="6px" />
          <line x1="48px" x2="48px" y2="10px" />
        </pattern>
        <pattern id="ticks--moderate" class="ticks--moderate" width="60px" height="100%" patternUnits="userSpaceOnUse" x="0">
          <line x1="1px" x2="1px" y2="6px" />
          <line x1="12px" x2="12px" y2="6px" />
          <line x1="24px" x2="24px" y2="6px" />     
          <line x1="36px" x2="36px" y2="6px" />
          <line x1="48px" x2="48px" y2="10px" />
        </pattern>
        <pattern id="ticks--high" class="ticks--high" width="60px" height="100%" patternUnits="userSpaceOnUse" x="0">
          <line x1="1px" x2="1px" y2="6px" />
          <line x1="12px" x2="12px" y2="6px" />
          <line x1="24px" x2="24px" y2="6px" />     
          <line x1="36px" x2="36px" y2="6px" />
          <line x1="48px" x2="48px" y2="10px" />
        </pattern>
        <pattern id="ticks--very-high" class="ticks--very-high" width="60px" height="100%" patternUnits="userSpaceOnUse" x="0">
          <line x1="1px" x2="1px" y2="6px" />
          <line x1="12px" x2="12px" y2="6px" />
          <line x1="24px" x2="24px" y2="6px" />     
          <line x1="36px" x2="36px" y2="6px" />
          <line x1="48px" x2="48px" y2="10px" />
        </pattern>
      </defs>
    </svg>
  </div>
</div>
</template>

<script>
import { computed } from 'vue';
  export default {
    props: {
      termWidth: {
        type: Number,
        required: true
      },
    },
    setup(props) {
      const { termWidth } = props;
      const width = computed(() => {
        return { '--width': termWidth + '%' }
      })
      const colors = {
        veryLow: '#249AA7',
        low: '#B8E1F2',
        moderate: '#ABD25E',
        high: '#F8C830',
        veryHigh: '#F1594A'
      }
      const termColor = computed(() => {
        let perc = parseInt(termWidth);

        if (perc > 0 && perc <= 20) return { '--color': colors.veryLow }
        if (perc > 20 && perc <= 40) return { '--color': colors.low }
        if (perc > 40 && perc <= 60) return { '--color': colors.moderate }
        if (perc > 60 && perc <= 80) return { '--color': colors.high }
        if (perc > 80 && perc <= 100) return { '--color': colors.veryHigh }

        return "Nothing"
      })

      return { termWidth, width, termColor }
    }
  }
</script>

<style lang="scss" scoped>
$low: #B8E1F2;
$veryLow: #249AA7;
$moderate: #ABD25E;
$high: #F8C830;
$veryHigh: #F1594A;

body {
  background: #454545;
}

.thermometer {
  max-width: 100%;
  margin: 2rem auto;

  span {
    font-family: Verdana;
    font-size: 1rem;
    color: #ccc;
    min-width: 100%;
    text-align: center;
    display: block;    
    margin-bottom: 1.25rem;
  }
  
  .liquid {
    display: block;
    width: 100%;
    height: 1.275rem;
    border: 1px solid darken(#ebebeb, 10);
    border-radius: 10px;
    margin: .25rem auto 0;
    position: relative;
    &:before {
      position: absolute;
      content: "";
      height: 70%;
      left: 3px;
      top: 14%;
      border-radius: 10px;
      transition: width .3s ease;
    }
  }
  
  .ruler {
    height: .625rem;
    width: 100%;
    margin-left: 2px;
    .ticks {
      &--very-low,
      &--low,
      &--moderate,
      &--high,
      &--very-high {
        line {
          stroke-width: 2px; 
          shape-rendering:crispEdges    
        }
      }
      &--very-low { stroke: $veryLow; }
      &--low { stroke: $low; }
      &--moderate { stroke: $moderate; }
      &--high { stroke: $high; }  
      &--very-high { stroke: $veryHigh; }  
    }
  }
  &--very-low {
    @extend .thermometer; 
  }      

  &--very-low {
    .liquid:before {
      background: var(--color);
      width: var(--width);
    }
  }
  
}
</style>
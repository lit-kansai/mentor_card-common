<template>
  <div class="mc-close_button">
    <div
      class="mc-close_button-body"
      :style="{ 'background-color': getColor() }"
    ></div>
    <div class="mc-close_button-shadow"></div>
  </div>
</template>

<script lang="ts">
import { getCardColor } from '@/main';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
  @Prop()
  variant?: string;

  getColor() {
    return getCardColor(this.variant);
  }
}
</script>

<style lang="stylus" scoped>
.mc-close_button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
}

.mc-close_button-body {
  cursor: pointer;
  border: 3px solid #ffffff;
  position: absolute;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 10;
  transition: all 0.15s ease-in-out;
  background-image: url('../../assets/close.svg');
}

.mc-close_button-shadow {
  background: url('../../assets/shadow.png');
  background-repeat: repeat;
  position: absolute;
  top: 8px;
  left: 8px;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  z-index: 0;
  transition: all 0.15s ease-in-out;
}

@keyframes move {
  from {
    background-position: 0px;
  }

  to {
    background-position: 5px;
  }
}

.mc-close_button:hover {
  .mc-close_button-body {
    top: -2px;
    left: -2px;
  }

  .mc-close_button-shadow {
    top: 10px;
    left: 10px;
    animation: move 0.2s linear 0s infinite;
  }
}

@media screen and (max-width: 768px) {
  .close_button {
    width: 42px;
    height: 42px;
  }
}
</style>

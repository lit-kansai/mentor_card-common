<template>
  <div class="icon-box-x">
    <div
      class="icon-box-y"
      :style="{
        'background-color': getColor,
        'background-image': `url(https://storage.googleapis.com/mentor-card-production.appspot.com/card/${getUid}/icon)`
      }"
    ></div>
  </div>
</template>

<script>
import { getCardColor } from '@/main';

export default {
  props: ['variant', 'uid'],
  computed: {
    getColor() {
      return getCardColor(`${this.variant}`);
    },
    getUid() {
      return this.uid;
    }
  }
};
</script>

<style scoped>
.icon-box-x {
  width: 40%;
  position: absolute;
  z-index: 70;
  top: 32px;
  left: calc(((100% - 40% - 6px) / 2));
}
.icon-box-y {
  padding-top: 100%;
  width: 100%;
  border-radius: 50%;
  border: solid 3px #ffffff;
  background-size: cover;
}
</style>

<template>
  <div class="decos">
    <img
      :src="`/decoration/${name[(r + i) % name.length]}.svg`"
      class="deco"
      v-for="(_, i) in new Array(c)"
      :key="i"
      :style="
        `top: ${o + i * s}px; animation: ${getAnimation(
          i,
          name[(r + i) % name.length]
        )} ${50 + Math.floor(Math.random() * 30)}s linear 0s infinite;`
      "
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class Decoration extends Vue {
  name = ['line1', 'line2', 'circle'];
  r = Math.floor(Math.random() * this.name.length);

  c = 0;
  o = 0;
  s = 0;

  @Prop({ default: 0 })
  count?: number;
  @Prop({ default: 0 })
  offset?: number;
  @Prop({ default: 0 })
  size?: number;

  @Watch('count')
  watchCount(count: number) {
    this.c = count;
  }

  @Watch('offset')
  watchOffset(offset: number) {
    this.o = offset;
  }

  @Watch('size')
  watchSize(size: number) {
    this.s = size;
  }

  getAnimation(i: number, name: string) {
    if (name == 'circle') return Math.random() > 0.5 ? 'rotateR' : 'rotateL';
    if (i % 2 == 0) return Math.random() > 0.5 ? 'moveLeft' : 'moveLeft2';
    return Math.random() > 0.5 ? 'moveRight' : 'moveRight2';
  }
}
</script>

<style scoped lang="stylus">
.decos {
  top: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
}

.deco {
  position: absolute;
  top: 0;
  width: 70%;
  opacity: 0.3;

  &:nth-of-type(odd) {
    left: -35%;
  }

  &:nth-of-type(even) {
    right: -35%;
  }
}

@media screen and (max-width: 768px) {
  .deco {
    width: 90%;
  }
}
</style>

<style lang="stylus">
@keyframes rotateR {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes rotateL {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
}

@keyframes moveRight {
  0% {
    transform: rotate(0deg) translate(0%);
  }

  50% {
    transform: rotate(0deg) translate(30%);
  }

  100% {
    transform: rotate(0deg) translate(0%);
  }
}

@keyframes moveLeft {
  0% {
    transform: rotate(0deg) translate(0%);
  }

  50% {
    transform: rotate(0deg) translate(-30%);
  }

  100% {
    transform: rotate(0deg) translate(0%);
  }
}
@keyframes moveRight2 {
  0% {
    transform: rotate(0deg) translate(30%);
  }

  50% {
    transform: rotate(0deg) translate(0%);
  }

  100% {
    transform: rotate(0deg) translate(30%);
  }
}

@keyframes moveLeft2 {
  0% {
    transform: rotate(0deg) translate(-30%);
  }

  50% {
    transform: rotate(0deg) translate(0%);
  }

  100% {
    transform: rotate(0deg) translate(-30%);
  }
}
</style>

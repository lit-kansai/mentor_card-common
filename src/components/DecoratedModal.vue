<template>
  <div class="mentor-modal-box">
    <div class="modal shadow">
      <CloseButton @click.native="onClose" :variant="variant" v-if="!noclose" />
      <slot name="fixed"></slot>
      <div
        class="modal-body"
        :style="{ 'background-color': getColor() }"
        @scroll="onScroll"
        ref="body"
      >
        <slot></slot>
        <Decoration :count="count" :offset="offset" :size="size" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getCardColor } from '@/main';
import { Component, Vue, Prop } from 'vue-property-decorator';
import CloseButton from '@/components/parts/CloseButton.vue';
import MobileDetect from 'mobile-detect';
import inobounse from 'inobounce';
import Decoration from '@/components/parts/Decoration.vue';

@Component({ components: { CloseButton, Decoration } })
export default class DecoratedModal extends Vue {
  @Prop({ default: 'orange' })
  variant?: string;
  @Prop({ default: false })
  noclose?: boolean;

  y = 0;
  count = 0;
  offset = 0;
  size = 0;

  mounted() {
    const md = new MobileDetect(window.navigator.userAgent);

    if (md.is('ios')) inobounse.enable();
    this.y = window.scrollY;
    document.documentElement.classList.add('disable-scroll');
    document.body.classList.add('disable-scroll');
    const app = document.getElementById('app');
    if (app) app.style.marginTop = `${-this.y}px`;

    window.addEventListener('resize', this.resize);
    this.resize();
  }

  resize() {
    const body = this.$refs.body as Element;
    this.size = body.clientHeight * 0.4;
    this.count = Math.floor((body.scrollHeight - this.size) / this.size) - 1;
    this.offset = this.size;
  }

  onClose(e: Event) {
    inobounse.disable();
    this.$emit('close', e);
  }

  onScroll(e: Event) {
    this.$emit('scroll', e);
  }

  getColor() {
    return getCardColor(this.variant);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  }
}
</script>

<style>
.disable-scroll {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>

<style lang="stylus" scoped>
.mentor-modal-box {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 60;
}

.modal {
  border-radius: 16px;
  position: relative;
  max-width: 600px;
  width: 85vw;
  margin: 0px auto 0px;
  top: 10%;
  height: 80%;
  z-index: 20;
  font-family: 'Noto Sans JP', sans-serif;
  margin-bottom: 32px;
}

.modal-body {
  border: 3px solid #ffffff;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  transition: all 0.15s ease-in-out;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  z-index: 0;

  & > *:not(.decos) {
    z-index: 10;
  }
}

.modal-body::-webkit-scrollbar {
  display: none;
}

.shadow {
  position: relative;
  transition: all 0.15s ease-in-out;
  top: 0px;
  left: 0px;

  &::after {
    content: '';
    background: url('/shadow.png');
    background-repeat: repeat;
    position: absolute;
    top: 6px;
    left: 6px;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    border-radius: inherit;
    z-index: -1;
    transition: all 0.15s ease-in-out;
  }
}

.close_button {
  position: absolute;
  top: -20px;
  left: -20px;
  z-index: 1;

  &::after {
    z-index: 0;
  }
}
</style>

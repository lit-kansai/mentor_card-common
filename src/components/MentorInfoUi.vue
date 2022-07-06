<template>
  <div class="mc-modal mc-shadow" ref="modal">
    <MentorIcon
      :uid="getMentor.slackUid || getMentor.id"
      :variant="getMentor.color"
      ref="icon"
      class="mc-icon"
    />
    <div class="mc-modal-body" :style="{ 'background-color': getColor() }">
      <MentorInfo :mentor="getMentor" class="mc-mentor-info" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MentorIcon from '@/components/parts/MentorIcon.vue';
import MentorInfo from '@/components/MentorInfo.vue';
import { Mentor } from '@/models/mentor';
import { getCardColor } from '@/main';

@Component({
  components: {
    MentorIcon,
    MentorInfo
  }
})
export default class MentorInfoUi extends Vue {
  @Prop()
  mentor?: Mentor | null;

  get getMentor() {
    return this.mentor;
  }
  getColor() {
    return getCardColor(this.mentor?.color);
  }

  mounted() {
    window.onresize = this.resize;
    this.resize();
  }

  resize() {
    const icon = (this.$refs.icon as Vue).$el as HTMLDivElement;
    const modal = this.$refs.modal as HTMLDivElement;
    let top = -1000;
    const iwidth = icon.offsetWidth;
    top = top > iwidth / -2 ? top : iwidth / -2;
    icon.style.top = `${top}px`;
    modal.style.top = `${iwidth / 2}px`;
  }
}
</script>

<style lang="stylus">
.mc-modal {
  * {
    box-sizing: content-box;
  }
}
</style>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese');

.mc-modal {
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
  box-sizing: content-box;
}

.mc-modal-body {
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

  & > *:not(.mc-decos) {
    z-index: 10;
  }
}

.mc-modal-body::-webkit-scrollbar {
  display: none;
}

.mc-mentor-info {
  margin-top: calc(20% + 32px);
}

.mc-shadow {
  position: relative;
  transition: all 0.15s ease-in-out;
  left: 0px;

  &::after {
    content: '';
    background: url('~@/assets/shadow.png');
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

.mc-close_button {
  position: absolute;
  top: -20px;
  left: -20px;
  z-index: 1;

  &::after {
    z-index: 0;
  }
}

.mc-mentor-info {
  padding: 32px 0px;
}

.mc-mentor-info * {
  box-sizing: content-box;
}
</style>

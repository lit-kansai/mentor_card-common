<template>
  <transition name="fade">
    <DecoratedModal
      v-if="getMentor"
      :variant="getMentor.color"
      @close="onClose"
      @scroll="onScroll"
      class="mentor-modal"
    >
      <template v-slot:fixed>
        <MentorIcon
          :slackUid="getMentor.slackUid"
          :variant="getMentor.color"
          ref="icon"
          class="icon"
        />
      </template>
      <MentorInfo :mentor="getMentor" class="mentor-info" />
    </DecoratedModal>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import DecoratedModal from '@/components/DecoratedModal.vue';
import MentorIcon from '@/components/parts/MentorIcon.vue';
import MentorInfo from '@/components/MentorInfo.vue';
import { Mentor } from '@/models/mentor';

@Component({
  components: {
    DecoratedModal,
    MentorIcon,
    MentorInfo
  }
})
export default class MentorModal extends Vue {
  @Prop()
  mentor?: Mentor | null;

  get getMentor() {
    return this.mentor;
  }

  onScroll(e: Event) {
    const icon = (this.$refs.icon as Vue).$el as HTMLDivElement;
    const mbody = e.target as HTMLDivElement;
    let top = 32 - mbody.scrollTop;
    const iwidth = icon.offsetWidth;
    top = top > iwidth / -2 ? top : iwidth / -2;
    icon.style.top = `${top}px`;
  }

  onClose(e: Event) {
    this.$emit('close', e);
  }
}
</script>

<style>
.mentor-modal .modal {
  top: 14%;
}
</style>

<style lang="stylus" scoped>
.icon {
  pointer-events: none;
}
.mentor-info {
  margin-top: calc(40% + 64px);
}

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese');
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

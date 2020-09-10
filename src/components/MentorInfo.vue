<template>
  <div class="mentor-info">
    <MentorName :name="getMentor.name" />
    <Courses :courses="getMentor.courses" />
    <Sns :sns="getMentor" />
    <Nounai :slackUid="getMentor.slackUid" />
    <Prefecture :pref="getMentor.prefecture" :city="getMentor.city" />
    <div v-for="(p, i) in getMentor.profile" :key="p.title + i">
      <QueHeader :text="p.title" />
      <Answer :body="p.body" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Modal from '@/components/Modal.vue';
import MentorName from '@/components/parts/MentorName.vue';
import QueHeader from '@/components/parts/QueHeader.vue';
import Courses from '@/components/parts/Courses.vue';
import Sns from '@/components/parts/Sns.vue';
import Prefecture from '@/components/parts/Prefecture.vue';
import Answer from '@/components/parts/Answer.vue';
import Decoration from '@/components/parts/Decoration.vue';
import Nounai from '@/components/parts/Nounai.vue';
import { Mentor } from '@/models/mentor';

@Component({
  components: {
    Modal,
    MentorName,
    QueHeader,
    Courses,
    Sns,
    Prefecture,
    Answer,
    Decoration,
    Nounai
  }
})
export default class MentorInfo extends Vue {
  @Prop()
  mentor?: Mentor | null;

  get getMentor() {
    return this.mentor;
  }
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese');

.mentor-info {
  padding: 32px 0px;
}
</style>

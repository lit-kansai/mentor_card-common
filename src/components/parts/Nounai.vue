<template>
  <div class="nounai" v-show="loaded" v-if="slackUid">
    <QueHeader text="脳内シート" />
    <img
      :src="
        `https://storage.googleapis.com/mentor-card-production.appspot.com/card/${slackUid}/nounai`
      "
      @load="onLoaded"
    />
  </div>
</template>

<script lang="ts">
import QueHeader from '@/components/parts/QueHeader.vue';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({ components: { QueHeader } })
export default class MentorModal extends Vue {
  @Prop()
  slackUid?: string | null;

  loaded = false;

  onLoaded() {
    this.loaded = true;
  }
}
</script>

<style scoped>
.nounai img {
  max-width: 350px;
  margin: 38px auto 0px;
  width: 60%;
  display: block;
}
</style>

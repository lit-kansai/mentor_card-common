<template>
  <div class="mc-nounai" v-show="loaded" v-if="slackUid">
    <QueHeader text="脳内シート" />
    <img
      :src="
        `https://storage.googleapis.com/mentor-card-production.appspot.com/card/${slackUid}/nounai`
      "
      @load="onLoaded"
    />
  </div>
</template>

<script>
import QueHeader from '@/components/parts/QueHeader.vue';

export default {
  props: ['slackUid'],
  components: { QueHeader },
  data: function() {
    return {
      loaded: false
    };
  },
  computed: {
    getUid() {
      return this.slackUid;
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    }
  }
};
</script>

<style scoped>
.mc-nounai img {
  max-width: 350px;
  margin: 38px auto 0px;
  width: 60%;
  display: block;
}
</style>

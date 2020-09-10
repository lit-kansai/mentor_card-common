<template>
  <div class="sns" v-if="getSns.facebook || getSns.twitter || getSns.instagram">
    <CourseSnsHeader>-SNS-</CourseSnsHeader>
    <div class="flex">
      <SnsIcon
        v-if="getSns.facebook"
        sns="facebook"
        :account="getSns.facebook"
      />
      <SnsIcon v-if="getSns.twitter" sns="twitter" :account="getSns.twitter" />
      <SnsIcon
        v-if="getSns.instagram"
        sns="instagram"
        :account="getSns.instagram"
      />
    </div>
  </div>
</template>

<script>
import CourseSnsHeader from '@/components/parts/CourseSnsHeader.vue';
import SnsIcon from '@/components/parts/SnsIcon.vue';

export default {
  props: ['sns'],
  components: { CourseSnsHeader, SnsIcon },
  computed: {
    getSns() {
      return this.sns;
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

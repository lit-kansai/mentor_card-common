<template>
  <div class="sns" v-if="sns.facebook || sns.twitter || sns.instagram">
    <CourseSnsHeader>-SNS-</CourseSnsHeader>
    <div class="flex">
      <SnsIcon v-if="sns.facebook" sns="facebook" :account="sns.facebook" />
      <SnsIcon v-if="sns.twitter" sns="twitter" :account="sns.twitter" />
      <SnsIcon v-if="sns.instagram" sns="instagram" :account="sns.instagram" />
    </div>
  </div>
</template>

<script>
import CourseSnsHeader from '@/components/parts/CourseSnsHeader.vue';
import SnsIcon from '@/components/parts/SnsIcon.vue';

export default {
  props: ['sns'],
  components: { CourseSnsHeader, SnsIcon }
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

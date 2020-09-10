<template>
  <div class="sns">
    <a :href="getAccountUrl" target="_blank">
      <img :src="`/sns/${getSns}.svg`" />
    </a>
  </div>
</template>

<script>
export default {
  props: ['sns', 'account'],
  computed: {
    getAccountUrl() {
      switch (this.sns) {
        case 'facebook':
          return this.account;
        case 'twitter':
          return `https://twitter.com/${this.account.replace(/@/, '')}`;
        case 'instagram':
          return `https://instagram.com/${this.account.replace(/@/, '')}`;
      }
      return '';
    },
    getSns() {
      return this.sns;
    }
  }
};
</script>

<style scoped>
.sns img {
  width: 64px;
  margin: 0 4px;
}
</style>

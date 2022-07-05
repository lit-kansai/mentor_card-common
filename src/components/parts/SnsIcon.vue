<template>
  <div class="mc-sns">
    <a :href="getAccountUrl" target="_blank">
      <img :src="require(`@/assets/sns/${getSns}.png`)" />
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
.mc-sns img {
  width: 64px;
  margin: 0 4px;
}
</style>

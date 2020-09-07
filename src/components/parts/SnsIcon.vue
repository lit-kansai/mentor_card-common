<template>
  <div class="sns">
    <a :href="getAccountUrl(account, sns)" target="_blank">
      <img :src="`/sns/${sns}.svg`" />
    </a>
  </div>
</template>

<script>
export default {
  props: ['sns', 'account'],
  methods: {
    getAccountUrl(account, sns) {
      switch (sns) {
        case 'facebook':
          return account;
        case 'twitter':
          return `https://twitter.com/${account.replace(/@/, '')}`;
        case 'instagram':
          return `https://instagram.com/${account.replace(/@/, '')}`;
      }
      return '';
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

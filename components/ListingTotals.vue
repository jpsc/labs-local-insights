<template>
  <div>
    <div v-for="post in posts" :key="post">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: null,
    }
  },
  async fetch() {
    this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts')
  },
  fetchOnServer: false,
}
</script>

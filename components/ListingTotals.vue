<template>
  <div>
    {{ serverResponse }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      serverResponse: null,
    }
  },
  async fetch() {
    this.serverResponse = await this.$http.$get('/api/listing-totals')
  },
  fetchOnServer: false,
}
</script>

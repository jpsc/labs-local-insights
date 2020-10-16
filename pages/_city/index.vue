<template>
  <div>
    {{ city.title }}
  </div>
</template>

<script>
export default {
  asyncData({ params, error, payload }) {
    if (payload) return { city: payload }
    else return { city: { title: 'Oosplein' } }
  },
}
</script>

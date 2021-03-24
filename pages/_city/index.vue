<template>
  <div>
    <div class="bg-orange-2 h-[48px] w-full"></div>
    <ListingTotals></ListingTotals>
    <svg-icon name="add-house" />
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

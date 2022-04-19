<template>
  <div class="flex justify-between">
    <nuxt-link
      v-if="prev"
      :to="localePath(prev.path)"
      class="font-bold text-primary hover:underline"
    >
      {{ prev.title }}
    </nuxt-link>
    <span v-else>&nbsp;</span>
    <nuxt-link
      v-if="next"
      :to="localePath(next.path)"
      class="font-bold hover:underline"
    >
      {{ next.title }}
    </nuxt-link>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  name: "PrevNext",
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style scoped>

</style>

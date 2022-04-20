<template>
  <div class="fixed bottom-0 left-12 m-3">
    <div class="icon">
      <nuxt-link
        v-if="$i18n.locale !== 'pl'"
        :to="switchLocalePath('pl')">Polski</nuxt-link>
      <nuxt-link
        v-if="$i18n.locale !== 'en'"
        :to="switchLocalePath('en')">English</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher"
}
</script>

<style lang="postcss" scoped>
.icon {
  background-color: var(--bg-secondary);
  border-color: var(--border-color);
  @apply relative m-0 p-2 top-0 cursor-pointer rounded border transition-all duration-200 ease-in-out;

  &:hover {
    transform: translateY(-1px);
    border-color: var(--border-color-secondary);
    @apply text-white;
  }
  &.selected {
    color: var(--color-primary);
  }
}
</style>

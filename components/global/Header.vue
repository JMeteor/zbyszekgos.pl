<template>
  <header>
    <nav class="container" aria-label="Main Menu">
      <nuxt-link class="btn block" to="/">Home</nuxt-link>
      <nuxt-link class="btn block" to="/about">Vitae</nuxt-link>
      <nuxt-link class="btn block" to="/work">Prace</nuxt-link>
    </nav>
  </header>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
header {
}

nav {
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 15px;
  padding: 32px 0;
  a {
    color: var(--color-primary);
    font-family: var(--font-serif);
    font-size: 32px;
    text-align: center;
    text-decoration: none;
    &:hover,
    &:visited {
      color: inherit;
    }
  }
}
/* Need two because of smoother switching between color modes */
@keyframes fadeIn1 {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeIn2 {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>

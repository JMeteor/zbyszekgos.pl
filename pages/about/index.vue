<template>
  <div class="container">
    <article class="about m-x-auto">
      <picture>
        <img :src="about.cover" />
      </picture>
      <h1 class="text-center text-5xl mt-6 mb-4">{{ about.title }}</h1>
      <nuxt-content :document="about" class="about text-lg" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const about = await $content('about')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      })
    return { about };
  }
}
</script>

<style>
.about p:first-of-type {
  text-indent: 5%;
}
</style>

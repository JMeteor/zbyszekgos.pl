<template>
  <div class="w-full">
    <picture class="block max-w-xl ml-auto mr-auto">
      <img :src="about.cover" />
    </picture>
    <article class="about mx-auto max-w-xl">
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

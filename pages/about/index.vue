<template>
  <div class="w-full">

    <picture class="block max-w-xl ml-auto mr-auto">
      <img :src="about[0].cover" />
    </picture>
    <article class="ml-auto mr-auto max-w-xl">
      <h1 class="text-center text-5xl mt-6 mb-4">{{ about[0].title }}</h1>
      <nuxt-content :document="about[0]" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let about;
    try {
      about = await $content("about").fetch();
    } catch (e) {
      error({ message: "Project not found" });
    }
    return { about };
  }
}
</script>

<style scoped>
  .about-cover {
    max-width: 650px;
  }
</style>

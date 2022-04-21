<template>
  <main>
    <h1 class="title text-center mb-8">Prace</h1>
    <ol class="flex justify-center gap-5">
      <li
        v-for="(artwork, index) in artworks"
        :key="index"
        class="max-w-md">
        <nuxt-link
          class="block text-center"
          :to="{ name: 'work-slug', params: { slug: artwork.slug } }"
        >
          <img
            :src="artwork.cover"
            :alt="artwork.title"
            class="max-h-96"
          />
          <h2 class="subtitle mt-3">{{ artwork.title }}</h2>
        </nuxt-link>
      </li>
    </ol>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const artworks =  await $content('work')
      .only(['title', 'slug', 'cover'])
      .fetch()
      .catch(() => {
        error({ message: 'Work not found' });
      })

    return {
      artworks
    };
  }
}
</script>

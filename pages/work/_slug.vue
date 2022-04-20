<template>
  <main>
    <nav class="mb-8" aria-label="go back">
      <router-back class="block" :to="localePath('/work')" />
    </nav>

    <article>
      <header>
        <h1>{{ artwork.title }}</h1>
        <h2>category: {{ artwork.category }}</h2>
        <h2>material: {{ artwork.material }}</h2>
      </header>

      <picture class="block mb-12">
        <source
          :srcset="artwork.cover"
          media="(min-width: 800px)">
        <img
          :src="artwork.cover"
          alt=""
        />
      </picture>

      <ul>
        <li
          v-for="(photoURL, index) in artwork.gallery"
          :key="index"
        >
          <img :src="photoURL" alt="" class="max-h-52">
        </li>
      </ul>

      <nuxt-content :document="artwork" />

      <prev-next :prev="prev" :next="next" />
    </article>
  </main>
</template>

<script>
import PrevNext from "~/components/global/PrevNext";
export default {
  components: {PrevNext},
  async asyncData({ $content, params, i18n, error }) {
    const artwork =  await $content(i18n.locale, 'work', params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Artwork does not exists" });
      })

    const [prev, next] = await $content(i18n.locale, 'work')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      artwork,
      prev,
      next
    }
  },
}
</script>

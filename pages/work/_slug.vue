<template>
  <main>
    <nav class="mb-8" aria-label="go back">
      <router-back class="block" to="/work" />
    </nav>

    <article class="grid-">
      <header class="color-light">
        <h1 class="color-light italic absolute text-8xl right-0">{{ artwork.title }}</h1>
        <h2 class="material color-light">
          <span>Technic</span>: {{ artwork.category }}</h2>
        <h2 class="text-5xl color-light">
          <span class="block text-base tracking-wide">Material</span>: {{ artwork.material }}</h2>
      </header>

      <picture class="picture">
        <source
          :srcset="artwork.cover"
          media="(min-width: 800px)">
        <img
          :src="artwork.cover"
          alt=""
        />
      </picture>

      <ul class="gallery">
        <li
          v-for="(photoURL, index) in artwork.gallery"
          :key="index"
        >
          <img :src="photoURL" alt="" class="max-h-52">
        </li>
      </ul>

      <nuxt-content :document="artwork" />

      <prev-next
        :prev="prev"
        :next="next"
      />
    </article>
  </main>
</template>

<script>
import PrevNext from '~/components/global/PrevNext';
export default {
  name: 'WorkDetailsPage',
  components: {PrevNext},
  async asyncData({ $content, params, error }) {
    const artwork =  await $content('work', params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Artwork does not exists' });
      })

    const [prev, next] = await $content('work')
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

<style>
article {
  position: relative;
  width: 100%;
}
.material {
  text-orientation: upright;
  writing-mode: vertical-lr;
  height: 40vh;
}

.picture {
  top: -4rem;
  left: -4rem;
  z-index: -1;
  position: absolute;
}

.color-light {
  color: white;
}

.gallery {

}
</style>

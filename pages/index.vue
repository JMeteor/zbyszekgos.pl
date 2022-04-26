<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1
        ref="title"
        class="title text-center">Zbyszek Gos</h1>
      <h2
        ref="subtitle"
        class="subtitle text-center">
        <span>Rzeźby</span>
        <span>|</span>
        <span>Nagrobki</span>
        <span>|</span>
        <span>Pomniki</span>
      </h2>
      <video src='/media/hero.mp4' autoplay></video>
    </section>

    <section class="mt-8">
      <header class="text-center">
        <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto mb-5">Aktualności</h3>
      </header>

      <ul>
        <li
          v-for="(post, index) in posts"
          :key="index"
          class="mb-4"
        >
          <p>{{ post.description }}</p>
          <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">LINK</nuxt-link>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: 'Homepage',
  async asyncData({ $content, error }) {
    const posts = await $content('blog')
      .only(['title', 'description', 'slug'])
      .limit(5)
      .fetch()
      .catch(() => {
        error({ message: "Blog posts not found" });
      })

    return {
      posts
    }
  },
  mounted() {
    gsap.from(this.$refs.title, {
      duration: 1, opacity: 0, y: -50
    })
    gsap.from(this.$refs.subtitle, {
      duration: 1, opacity: 0, x: -50
    })
  }
}
</script>

<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center">Nuxt — Tailwind — Netlify CMS</h1>
      <h2 class="subtitle text-center">Witam</h2>
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
}
</script>

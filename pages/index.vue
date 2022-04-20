<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center">Nuxt — Tailwind — Netlify CMS</h1>
      <h2 class="subtitle text-center">{{ $t('welcome') }}</h2>
    </section>

    <section class="mt-8">
      <header class="text-center">
        <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto mb-5">{{ $t('news') }}</h3>
      </header>

      <ul>
        <li
          v-for="(post, index) in posts"
          :key="index"
          class="mb-4"
        >
          <p>{{ post.description }}</p>
          <nuxt-link :to="localePath(post.path)">LINK</nuxt-link>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Homepage',
  async asyncData({ $content, app, error }) {
    const posts = await $content(app.i18n.locale, 'blog')
      .only(['title', 'description'])
      .limit(5)
      .fetch()
      .catch(() => {
        error({ message: "Blog posts not found" });
      })

    return {
      posts: posts.map((posts) => ({
        ...posts,
        // path: posts.path.replace(`/${app.i18n.locale}`, ''),
      }))
    };
  },
}
</script>

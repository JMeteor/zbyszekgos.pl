<template>
  <main class="container">
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center">Zbyszek Gos</h1>
      <h2 class="subtitle text-center">{{ $t('welcome') }}</h2>
      <video src="/media/hero.mp4" autoplay />
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Aktualności</h3>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
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
        path: posts.path.replace(`/${app.i18n.locale}`, ''),
      }))
    };
  },
}
</script>

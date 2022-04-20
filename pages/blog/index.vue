<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Blog</h1>

    </section>
  </main>
</template>

<script>
export default {
  name: 'BlogOverview',
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

<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Blog</h1>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <p>{{ post.description }}</p>
          <pre>{{ post }}</pre>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'BlogOverview',
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
    };
  },
}
</script>

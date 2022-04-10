<template>
  <main>
    <section v-if="post">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>

      <article>
        <h1 class="">{{ post.title }}</h1>
        <p class="mt-1 mb-4 text-primary-600 dark:text-primary-400">{{ post.description }}</p>
        <nuxt-content :document="post" />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'BlogPost',
  async asyncData({ $content, params, app, error }) {
    const post = await $content(app.i18n.locale, 'blog', params.blog)
      .fetch()
      .catch(() => {
        error({
          statusCode: 404,
          message: 'Blog post not found'
        });
      });
    return { post };
  },
  mounted() {
    console.log('mounted post', this.post);
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }
  }
}
</script>

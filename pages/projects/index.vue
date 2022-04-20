<template>
  <main class="container">
    <h1 class="title text-center mb-8">Projects page</h1>
    <ol class="flex justify-center gap-5 projects-grid">
      <li v-for="(project, index) in projects" :key="index" class="max-w-md">
        <nuxt-link
          class="block text-center"
          :to="localePath(project.path)"
        >
          <img
            :src="project.cover"
            :alt="project.title"
            class="max-h-96"
          />
          <h2 class="subtitle mt-3">{{ project.title }}</h2>
        </nuxt-link>

      </li>
    </ol>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, app, error }) {
    const projects =  await $content(app.i18n.locale, "projects")
      .only(['title', 'slug', 'cover'])
      .fetch()
      .catch(() => {
        error({ message: "Project Page not found" });
      })

    return {
      projects: projects.map((projects) => ({
        ...projects,
        path: projects.path.replace(`/${app.i18n.locale}`, '')
      }))
    };
  },
}
</script>

<style lang="scss">
.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 5vw);
  grid-gap: 15px;
  img {
    max-height: 420px;
  }
}
</style>

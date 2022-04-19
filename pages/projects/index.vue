<template>
  <main>
    <h1 class="title text-center mb-8">Projects page</h1>
    <ol class="flex justify-between gap-2">
      <li v-for="(project, index) in projects" :key="index" class="max-w-md">
        <nuxt-link
          class="block text-center"
          :to="localePath(project.path)"
        >
          <img :src="project.cover" alt="" />
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

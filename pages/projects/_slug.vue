<template>
  <main>
    <nav class="mb-8" aria-label="go back">
      <router-back class="block" />
    </nav>

    <article>
      <header>
        <h1>{{ project.title }}</h1>
        <h2>category: {{ project.category }}</h2>
        <h2>material: {{ project.material }}</h2>
      </header>

      <picture class="block mb-12">
        <source
          :srcset="project.cover"
          media="(min-width: 800px)">
        <img
          :src="project.cover"
          alt=""
        />
      </picture>

      <ul>
        <li
          v-for="(photoURL, index) in project.gallery"
          :key="index"
        >
          <img :src="photoURL" alt="" class="max-h-52">
        </li>
      </ul>

      <nuxt-content :document="project" />

      <prev-next :prev="prev" :next="next" />
    </article>
  </main>
</template>

<script>
import PrevNext from "~/components/global/PrevNext";
export default {
  components: {PrevNext},
  async asyncData({ $content, params, app, error }) {
    const project =  await $content(app.i18n.locale, 'projects', params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Project does not exists" });
      })

    const [prev, next] = await $content(app.i18n.locale, 'projects')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      project,
      prev: {
        ...prev,
        path: prev?.path.replace(`/${app.i18n.locale}`, '')
      },
      next: {
        ...next,
        path: next?.path.replace(`/${app.i18n.locale}`, '')
      }
    }
  },
}
</script>

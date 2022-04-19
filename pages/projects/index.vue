<template>
  <main>
    <pre>{{ projects }}</pre>
    <!--    <section v-if="posts" class="w-full max-w-5xl mx-auto">
          <h1 class="title">Projects</h1>
          <posts post-type="projects" :amount="10" />
        </section>-->
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const projects =  await $content("projects")
      .fetch()
      .catch(() => {
        error({ message: "Project Page not found" });
      })

    return { projects };
  },
}
</script>

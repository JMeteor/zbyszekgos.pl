<template>
<div>
  <pre>{{ aboutData }}</pre>
</div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let aboutData;
    try {
      aboutData = await $content("site/about").fetch();
    } catch (e) {
      error({ message: "Project not found" });
    }
    return { aboutData };
  }
}
</script>

<style scoped>

</style>

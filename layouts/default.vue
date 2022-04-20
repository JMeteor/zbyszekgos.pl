<template>
  <div class="wrapper">
    <Header />
    <nuxt />
  </div>
</template>
<script>
import LanguageSwitcher from "~/components/global/LanguageSwitcher";
export default {
  components: {LanguageSwitcher}
}
</script>

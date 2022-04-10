<template>
  <div class="wrapper">
    <Header />
    <nuxt />
    <LanguageSwitcher />
    <ColorModePicker />
  </div>
</template>
<script>
import LanguageSwitcher from "~/components/global/LanguageSwitcher";
export default {
  components: {LanguageSwitcher}
}
</script>

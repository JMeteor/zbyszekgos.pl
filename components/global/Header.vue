<template>
  <header class="container d-flex">
    <nav class="scrim-bg fixed z-40 top-0 inset-x-0 pt-3 px-3" aria-label="Main Menu">
      <ul class="flex">
        <li class="flex-1">
          <nuxt-link class="btn block" :to="localePath('/')">{{ $t("navigation.home")}}</nuxt-link>
        </li>
        <li class="flex-1 ml-2">
          <nuxt-link class="btn block" :to="localePath('/about')">{{ $t("navigation.about")}}</nuxt-link>
        </li>
        <li class="flex-1 ml-2">
          <nuxt-link class="btn block" :to="localePath('/projects')">{{ $t("navigation.projects")}}</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="d-flex">
      <LanguageSwitcher />
      <ColorModePicker />
    </div>

  </header>
</template>

<script>
import LanguageSwitcher from "~/components/global/LanguageSwitcher";
import ColorModePicker from "~/components/global/ColorModePicker";
export default {
  name: 'Header',
  components: {ColorModePicker, LanguageSwitcher}
}
</script>

<style lang="scss" scoped>
header {
  nav {
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      > li {
        margin: 0 1rem;
      }
    }
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}


.scrim-bg {
  &::before {
    content: '';
    z-index: -1;
    background-color: var(--bg);
  }
  &::after {
    content: '';
    z-index: -1;
    opacity: 1;
    animation: fadeIn1 500ms ease-in-out;
    background: linear-gradient(to bottom, #111827, cubic-bezier(0.15, 0, 0.45, 1), transparent);
  }
}

.light {
  & .scrim-bg {
    &::after {
      animation-name: fadeIn2;
      background: linear-gradient(to bottom, #e5e7eb, cubic-bezier(0.15, 0, 0.45, 1), transparent);
    }
  }
  & .nuxt-link-exact-active {
  }
}

/* Need two because of smoother switching between color modes */
@keyframes fadeIn1 {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeIn2 {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>

<template>
  <nav class="nav-main row a-between a-items-center">
    <div class="row a-items-center">
      <a class="logo" href="https://ufa.planeta-mall.ru">
        <img width="96" height="72" src="@/assets/images/logo.png" alt="логотип «планеты»">
      </a>
      <div class="row">
        <div class="nav-main__link" v-for="link in links" :key="link.href">
          <a :href="link.href">{{ link.label }}</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          href: '#about',
          label: 'О проекте',
        },
        {
          href: '#activities',
          label: 'Активности',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.nav-main {
  width: 100%;

  &__link {
    margin-right: 25px;

    a {
      text-decoration: none;
      color: var(--fLight);
      font-weight: 700;
    }
  }
}

.logo {
  width: 96px;
  margin-right: 50px;
  img {
    height: auto;
  }
}
</style>

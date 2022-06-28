<template>
  <nav class="nav-main row a-between">
    <div class="row a-grow a-items-center">
      <div class="nav-main__link" v-for="link in links" :key="link.href">
        <a :href="link.href">{{ link.label }}</a>
      </div>
    </div>

    <div class="nav-main__link">
      <a href="#">Личный кабинет</a>
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
          href: '#gift',
          label: 'Призы',
        },
        {
          href: '#terms',
          label: 'Условия участия',
        },
        {
          href: '#info',
          label: 'Информация',
        },
        {
          href: '#partners',
          label: 'Партнеры',
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
</style>

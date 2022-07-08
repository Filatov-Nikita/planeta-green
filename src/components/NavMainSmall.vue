<template>
  <div>
    <div class="row a-between">
      <button class="nav-btn" @click="toggle"></button>
      <img class="logo" width="96" height="72" src="@/assets/images/logo.png" alt="логотип «планеты»">
    </div>

    <div class="menu" :class="{ 'menu--show': show }">
      <div class="wrapper">
        <button class="nav-close a-mb-30" @click="toggle"></button>
        <nav>
          <a @click="toggle" href="#about" class="link">О проекте</a>
          <a @click="toggle" href="#gift" class="link">Призы</a>
          <a @click="toggle" href="#terms" class="link">Условия участия</a>
          <a @click="toggle" href="#info" class="link">Информация</a>
          <a @click="toggle" href="#partners" class="link">Партнеры</a>
          <a @click="toggle" href="#" class="link">Личный кабинет</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
  width: 70px;
  height: auto;
}

.nav-btn,
.nav-close {
  width: 32px;
  height: 32px;
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;

  &::after {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    left: 0;
  }
}

.nav-close {
  &::after {
    content: url(@/assets/images/nav-close.svg);
  }
}

.nav-btn {
  &::after {
    content: url(@/assets/images/nav-btn.svg);
  }
}

.menu {
  display: none;
  background: var(--greenLight);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 20px;

  &--show {
    display: block;
  }
}

.link {
  display: block;
  font-weight: 700;
  text-decoration: none;
  color: var(--fDark);

  & + & {
    margin-top: 15px;
  }
}
</style>

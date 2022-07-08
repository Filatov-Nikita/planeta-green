<template>
  <div class="screen-main">
    <div class="wrapper">
      <NavMain class="desctop" />
      <NavMainSmall class="mobile" />
      <div class="content a-between">
        <div class="left">
          <h1 class="title a-mb-30">{{ title }}</h1>
          <p class="a-mb-30 a-text-semiBold">С 12 июля по 30 сентября</p>
          <a class="button-green btn" href="#">Участвовать в акции</a>
        </div>
        <div class="right">
          <CounterTree class="tree" />
          <CounterVisits class="visits" />
        </div>
      </div>
    </div>
  </div>
  <div class="counters-mobile">
    <CounterTree class="a-mb-20" />
    <CounterVisits />
  </div>
</template>

<script>
import NavMain from './NavMain.vue';
import NavMainSmall from './NavMainSmall.vue';
import CounterTree from './CounterTree.vue';
import CounterVisits from './CounterVisits.vue';

export default {
  data() {
    return {
      title:
        'Стань участником акции «Зелёная Планета» и получи гарантированный приз!',
    };
  },
  components: {
    NavMain,
    NavMainSmall,
    CounterTree,
    CounterVisits,
  },
};
</script>

<style scoped lang="scss">
.screen-main {
  min-height: 100vh;
  background-image: url(@/assets/images/main-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 55px;
  color: var(--fLight);

  @include screen($md) {
    padding-top: 20px;
    padding-bottom: 114px;
    min-height: auto;
  }

   @media screen and (max-width: 480px) {
    background-image: url(@/assets/images/main-bg-sm.jpg);
    background-size: cover;
    background-position: center;
   }
}

.content {
  display: flex;

  @include screen($md) {
    flex-wrap: wrap;
  }
}

.left {
  padding-top: 107px;
  flex-basis: 678px;

  @include screen($lg) {
    flex-basis: 558px;
  }

  @include screen($xs) {
    flex-basis: 316px;
    padding-top: 22px;
  }
}

.right {
  padding-top: 63px;
  flex-basis: 448px;

  @include screen($md) {
    display: none;
  }
}

.title {
  font-size: 42px;
  line-height: 57px;
  font-weight: 700;

  @include screen($xs) {
    font-size: 24px;
    line-height: 33px;
  }
}

.btn {
  display: block;
  text-align: center;
  padding: 20px 40px;
  font-weight: 600;
  text-decoration: none;
  color: var(--fLight);
  max-width: 295px;
}

.tree {
  max-width: 280px;
  margin-left: auto;
  margin-bottom: 25px;
}

.visits {
  width: 100%;
}

.desctop {
  @include screen($md) {
    display: none;
  }
}

.mobile {
  display: none;
  @include screen($md) {
    display: block;
  }
}

.counters-mobile {
  display: none;
  margin-top: -74px;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  @include screen($md) {
    display: block;
  }
}
</style>

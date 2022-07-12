<template>
  <div class="screen-main">
    <div class="wrapper overlay">
      <NavMain class="desctop" />
      <NavMainSmall class="mobile" />
      <div class="content a-between">
        <div class="left">
          <h1 class="title a-mb-30">{{ title }}</h1>
          <p class="subtitle" v-html="subtitle"></p>
          <p class="period">С 12 июля по 30 сентября</p>
          <a class="button-green btn" href="https://id.mall.tech/4/promos/48">Участвовать в акции</a>
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
      title: 'Зелёная Планета',
      subtitle: 'Станьте участником акции и получите гарантированный приз. Каждый визит в&nbsp;Планету - ваш вклад в Зелёное Будущее!'
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
  padding-top: 30px;
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

.overlay {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 310px;
    left: 0;
    width: 371px;
    height: 311px;
    background: rgba(0, 0, 0, 0.2);
    filter: blur(300px);

    @include screen($xs) {
      display: none;
    }
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
  width: 100%;
  max-width: 520px;

  @include screen($xs) {
    max-width: 375px;
    padding-top: 22px;
  }
}

.right {
  padding-top: 63px;
  width: 100%;
  max-width: 437px;

  @include screen($lg) {
    max-width: 407px;
  }

  @include screen($md) {
    display: none;
  }
}

.title {
  font-size: 52px;
  line-height: 71px;
  font-weight: 700;

  @include screen($xs) {
    font-size: 36px;
    line-height: 40px;
  }
}

.subtitle {
  font-weight: 600;
  font-size: 24px;
  line-height: 35px;
  margin-bottom: 40px;

  @include screen($xs) {
    font-size: 18px;
    line-height: 1.4;
  }
}

.period {
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 30px;

  @include screen($xs) {
    font-size: 16px;
    line-height: 1.4;
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

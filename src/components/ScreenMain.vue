<template>
  <div class="screen-main">
    <div class="wrapper">
      <NavMain class="desctop" />
      <NavMainSmall class="mobile" />
      <div class="content a-between">
        <div class="left">
          <h1 class="title a-mb-30">{{ title }}</h1>
          <p class="subtitle" v-html="subtitle"></p>
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
      subtitle: 'Каждый визит в Планету - ваш вклад в&nbsp;Зелёное Будущее!'
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
  background-position-y: bottom;
  background-position-x: center;
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
  text-transform: uppercase;

  @include screen($xs) {
    font-size: 30px;
    line-height: 40px;
  }
}

.subtitle {
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  margin-bottom: 40px;

  @include screen($xs) {
    font-size: 18px;
    line-height: 1.4;
  }
}

.period {
  font-weight: 500;
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

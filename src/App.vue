<template>
  <MainFinal />
  <!-- <Main /> -->
</template>

<script>
// import Main from './components/Main.vue';
import MainFinal from './components/MainFinal.vue';

export default {
  name: 'App',
  provide() {
    return {
      counter: this.counter
    }
  },
  created() {
    this.getCounter();
  },
  data() {
    return {
      counter: {
        value: null
      }
    }
  },
  methods: {
    async getCounter() {
      try {
        const response = await fetch('https://ufa.planeta-mall.ru/api/trees/count');
        if(response.status !== 200) throw 'ответ не 200';
        this.counter.value = await response.json();
      } catch(e) {
        console.error('не удалось получить данные счетчика');
      }
    }
  },
  components: {
    // Main,
    MainFinal
  }
}
</script>

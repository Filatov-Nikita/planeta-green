<template>
  <div class="counter counter--pb-18">
    <div class="counter__title">Высажено деревьев</div>
    <div class="counter__cells">
      <div class="counter__cell" v-for="i in numbers" :key="i">
        <span class="counter__value">{{ i }}</span>
      </div>
    </div>
    <div class="counter__caption">САЖАЕМ ДЕРЕВО <br> ЗА КАЖДЫЕ <br> 100 000 ВИЗИТОВ</div>
  </div>
</template>

<script>
import counetr from '@/mixins/counter';

export default {
  data() {
    return {
      len: 2,
      key: 'trees'
    }
  },
  mixins: [counetr]
}
</script>

<style>

</style>

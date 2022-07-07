<template>
  <div class="counter counter--pb-25">
    <div class="counter__title">Количество визитов</div>
    <div class="counter__cells">
      <div class="counter__cell" v-for="i in numbers" :key="i">
        <span class="counter__value counter__value--xs-small">{{ i }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import counetr from '@/mixins/counter';

export default {
  data() {
    return {
      len: 6,
      key: 'guests'
    }
  },
  mixins: [counetr]
}
</script>

<style>

</style>

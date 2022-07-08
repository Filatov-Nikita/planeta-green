<template>
  <div class="counter counter--pb-25">
    <div class="counter__title">Количество визитов гостей ТРЦ</div>
    <div class="counter__cells">
      <div class="counter__cell" v-for="(num, i) in numbers" :key="i">
        <span class="counter__value counter__value--xs-small">{{ num }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import counetr from '@/mixins/counter';

export default {
  data() {
    return {
      len: 7,
      key: 'guests'
    }
  },
  mixins: [counetr]
}
</script>

<style>

</style>

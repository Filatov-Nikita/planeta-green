<template>
  <div class="counter counter--pb-18">
    <div class="counter__title">Высажено деревьев</div>
    <div class="counter__cells">
      <div class="counter__cell" v-for="(num, i) in numbers" :key="i">
        <span class="counter__value">{{ num }}</span>
      </div>
    </div>
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

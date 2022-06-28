<template>
  <div class="counter counter--pb-25">
    <div class="counter__title">Количество визитов</div>
    <div class="counter__cells">
      <div class="counter__cell" v-for="i in 6" :key="i">
        <span class="counter__value counter__value--xs-small">0</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

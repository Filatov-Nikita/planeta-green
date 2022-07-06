<template>
  <div class="counter counter--pb-18">
    <div class="counter__title">Высажено деревьев</div>
    <div class="counter__cells">
      <div class="counter__cell" v-for="i in 2" :key="i">
        <span class="counter__value">0</span>
      </div>
    </div>
    <div class="counter__caption">САЖАЕМ ДЕРЕВО <br> ЗА КАЖДЫЕ <br> 100 000 ВИЗИТОВ</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

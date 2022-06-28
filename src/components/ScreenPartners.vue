<template>
  <section class="partners" id="partners">
    <div class="wrapper fields">
      <h2 class="h2 a-text-center a-mb-20">Наши партнеры</h2>
      <div class="items">
        <div class="item">
          <img
            width="339"
            height="133"
            class="logo"
            src="@/assets/images/bst.png"
            alt=""
          />
          <p class="name">Телеканал БСТ</p>
        </div>
        <div class="item">
          <img
            width="181"
            height="181"
            class="logo"
            src="@/assets/images/energy.png"
            alt=""
          />
          <p class="name">Радио ENERGY</p>
        </div>
        <div class="item">
          <img
            width="339"
            height="159"
            class="logo"
            src="@/assets/images/fitness.svg"
            alt=""
          />
          <p class="name">Фитнес-центр Mendeleef Fitness</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.partners {
  padding-top: 120px;
  padding-bottom: 120px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  @include screen($xs) {
    align-items: flex-start;
  }
}

.item {
  width: 33.3%;
  text-align: center;

  @include screen($xs) {
    width: 100%;

    & + & {
      margin-top: 30px;
    }
  }
}

.name {
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  margin-top: 12px;
}

.logo {
  margin: 0 auto;
  height: auto;
}
</style>

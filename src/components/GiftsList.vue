<template>
  <div class="items row">
    <div class="item">
      <div class="giftPicture">
        <img
          width="228"
          height="228"
          src="@/assets/images/umbrella.png"
          alt="приз - зонт"
        />
      </div>
      <div class="label">Зонты</div>
      <div class="value">50 шт</div>
    </div>
    <div class="item">
      <div class="giftPicture">
        <img
          width="228"
          height="228"
          src="@/assets/images/sport.png"
          alt="приз - абонемент в фитнес-клуб"
        />
      </div>
      <div class="label">Абонементы в фитнес-клуб на 1 месяц</div>
      <div class="value">50 шт</div>
    </div>
    <div class="item">
      <div class="giftPicture">
        <img
          width="228"
          height="228"
          src="@/assets/images/bottle.png"
          alt="приз - бутылки"
        />
      </div>
      <div class="label">Бутылки</div>
      <div class="value">50 шт</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.items {
  justify-content: space-between;
  text-align: center;

  @include screen($md) {
    justify-content: center;
  }
}

.item {
  width: 276px;

  @include screen($md) {
    margin: 30px;
  }
}

.giftPicture {
  padding: 12px 24px;
  background: var(--greenLight);
  border-radius: 50px 0 50px 0;
  height: 251px;
  margin-bottom: 20px;

  img {
    width: 100%;
  }
}

.label {
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 10px;
}
</style>

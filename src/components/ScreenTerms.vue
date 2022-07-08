<template>
  <section class="terms" id="terms">
    <div class="wrapper fields">
      <h2 class="h2 a-text-center a-mb-50">Условия участия</h2>
      <div class="items row">
        <div class="item">
          <div class="index">01</div>
          <div class="text">
            Совершите одну или несколько покупок¹
            <span class="a-text-semiBold">с 10:00 12 июля 2022 г. по 22:00 29 сентября 2022 г.</span>
            на сумму² от 100 рублей в ТРЦ «Планета»
          </div>
        </div>
        <div class="item">
          <div class="index">02</div>
          <div class="text">
            Регистрируйте чек(и) в
            <a class="a-text-primary" href="https://id.mall.tech/4/promos/48">личном кабинете</a>
            в период <span class="a-text-semiBold">с 10:00 12 июля 2022 г. по 23:00 29 сентября 2022 г.</span> и
            участвуйте в розыгрыше одного из абонементов в фитнес-клуб
            «Менделееф фитнес», фирменных зонтов или бутылочки для воды
          </div>
        </div>
        <div class="item">
          <div class="index">03</div>
          <div class="text">
            Розыгрыш призов³ состоится
            <span class="a-text-semiBold">22 июля, 5 и 19 августа, 2, 16 и 30 сентября 2022 г.</span>
            на сайте
            <a class="a-text-primary" href="http://promoufa.planeta-mall.ru/"
              >promoufa.planeta-mall.ru</a
            >
            Каждый участник акции получит гарантированный подарок на стойке
            акции в ТРЦ
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.terms {
  padding-top: 120px;
  @include screen($xs) {
    padding-top: 60px;
  }
}

.items {
  margin-left: -60px;
}

.item {
  padding-left: 60px;
  width: 33.3%;

  @include screen($xs) {
    width: 100%;

    & + & {
      margin-top: 20px;
    }
  }
}

.index {
  font-weight: 700;
  font-size: 42px;
  line-height: 49px;
  color: var(--primary);
  margin-bottom: 15px;
}
</style>

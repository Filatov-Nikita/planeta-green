<template>
  <section class="get-priz">
    <div class="wrapper fields">
      <h3 class="h2 a-text-center a-mb-50 a-text-primary">Порядок получения призов</h3>
      <div class="items row">
        <div class="item">
          <div class="index">01</div>
          <div class="text">
            Вручение призов победителям акции «Зеленая Планета» осуществляется на стойке информации до <span class="a-text-semiBold">10.10.2022</span>
          </div>
        </div>
        <div class="item">
          <div class="index">02</div>
          <div class="text">
           Необходимо назвать ваш <span class="a-text-semiBold">номер телефона</span> на стойке информации, чтобы получить приз
          </div>
        </div>
        <div class="item">
          <div class="index">03</div>
          <div class="text">
            Подробная информация об организаторе акции, о правилах ее проведения, количестве призов, сроках и порядке их получения в правилах акции
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
.get-priz {
  background: var(--greenLight);
  padding-top: 50px;
  padding-bottom: 40px;
  margin-bottom: 50px;
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
  color: var(--fLight);
  margin-bottom: 15px;
  text-shadow: 2px 0 0 var(--primary), -2px 0 0 var(--primary), 0 2px 0 var(--primary), 0 -2px 0 var(--primary), 1px 1px var(--primary), -1px -1px 0 var(--primary), 1px -1px 0 var(--primary), -1px 1px 0 var(--primary);
}
</style>

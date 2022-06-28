<template>
  <section class="info" id="info">
    <div class="wrapper">
      <h2 class="h2 a-text-center a-mb-40">Информация</h2>
      <div class="items">
        <div class="btns">
          <a class="btn btn--tl" href="#">Правила акции</a>
          <a class="btn btn--tr" href="#">Вопросы-ответы</a>
          <a class="btn btn--tr" href="#">Видео-инструкция</a>
          <a class="btn btn--tl" href="#"
            >Соглашение на обработку персональных данных</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.info {
  padding-top: 120px;
}

.items {
  border-radius: 20px;
  background: var(--greenLight);
  padding: 67px 15px;
  display: flex;
  justify-content: center;

  @include screen($xs) {
    margin: 0 -15px;
  }
}

.btns {
  max-width: 555px;
  display: flex;
  flex-wrap: wrap;
  margin-top: -15px;
  margin-left: -15px;

  @include screen($xs) {
    margin-top: -7px;
    margin-left: -7px;
  }
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 66px;
  background: var(--primary);
  flex-basis: calc(270px - 15px);
  margin-left: 15px;
  margin-top: 15px;
  color: var(--fLight);
  font-weight: 600;
  text-decoration: none;
  text-align: center;

  @include screen($xs) {
    margin-left: 7px;
    margin-top: 7px;
    flex-basis: calc(50% - 7px);
    font-size: 12px;
    text-align: left;
    padding-left: 20px;
    padding-right: 10px;
    justify-content: flex-start;
  }

  &--tl {
    border-radius: 0 50px 0 50px;
  }

  &--tr {
    border-radius: 50px 0 50px 0;
  }
}
</style>

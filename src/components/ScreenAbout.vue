<template>
  <section class="about" id="about">
    <div class="wrapper">
      <div class="a-text-center">
        <h2 class="h2 a-mb-30">О проекте</h2>
        <p class="text">{{ text }}</p>
      </div>
      <div class="features">
        <div class="features__items">
          <div class="features__item">
            <div class="features__title">Привлекаем внимание</div>
            <p>
              Привлекаем внимание общества к вопросам экологии и сохранению
              природных ресурсов.
            </p>
          </div>
          <div class="features__item">
            <div class="features__title">Сохраняем экосистему</div>
            <p>
              Сохраняем хрупкую экосистему и поддерживаем её в благоприятном
              состоянии для здоровой жизни
            </p>
          </div>
        </div>
        <div class="features__items">
          <div class="features__item">
            <div class="features__title">Защищаем окружающую среду</div>
            <p>Защищаем окружающую среду и улучшаем экологическую обстановку</p>
          </div>
          <div class="features__item">
            <div class="features__title">Озеленяем территории</div>
            <p>
              Озеленяем городские территории и участвуем в восстановлении лесных
              массивов
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text: 'За каждого 100 000 посетителя пришедшего в Планету, торговый центр высадит одно дерево. Воплощая в жизнь очень простую идею посадки деревьев, мы объединяем всех разумных жителей нашего города, чтобы сохранить хрупкую экосистему и поддерживать её в благоприятном состоянии для счастливой и здоровой жизни',
    };
  },
};
</script>

<style scoped lang="scss">
.about {
  padding-top: 90px;
  background: url(@/assets/images/about.png) no-repeat;
  background-position: bottom center;
  min-height: 1026px;

  @include screen($xs) {
    min-height: auto;
    background-position: center;
    background-size: 340px;
  }
}

.text {
  max-width: 938px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 20px;
  line-height: 152%;
}

.features {
  position: relative;
  top: 360px;
  padding: 0 59px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @include screen($lg) {
    padding: 0;
  }

  @include screen($xs) {
    top: auto;
    margin-top: 340px;
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 10px;
  }

  &__items {
    flex-basis: 414px;

    @include screen($lg) {
      flex-basis: 386px;
    }

    @include screen($sm) {
      flex-basis: 250px;
    }

    @include screen($xs) {
      flex-basis: 100%;
      margin-top: 25px;
    }
  }

  &__item {
    & + & {
      margin-top: 58px;

      @include screen($xs) {
        margin-top: 25px;
      }
    }
  }
}
</style>

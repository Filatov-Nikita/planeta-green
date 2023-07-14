<template>
  <section class="activities" id="activities">
    <div class="wrapper">
      <h2 class="h2 a-text-center a-mb-40">Активности</h2>
      <div class="a-mb-60">
        <h3 class="head3 a-mb-15">Мастер-классы для детей</h3>
        <p class="content a-mb-30">Кроме того, в рамках акции, Детский клуб «Планеты», который работает каждые выходные июля с 14:00 до 17:00 на -2 уровне в зоне фуд-корта, организует тематические мастер-классы, посвященные природе. Юные гости смогут узнать новое о растениях, научиться выращивать их и ухаживать за ними.</p>
        <div class="grid1">
          <div class="grid1__item">
            <img class="image" width="857" height="572" src="@/assets/images/activities/1.jpg" alt="Фото мастер класса" loading="lazy">
          </div>
          <div class="grid1__item">
            <img class="image" width="857" height="572" src="@/assets/images/activities/2.jpg" alt="Фото мастер класса" loading="lazy">
          </div>
        </div>
      </div>
      <div>
        <h3 class="head3 a-mb-15">Креативная фотозона</h3>
        <p class="content a-mb-30">А на крыше ТРЦ, около фотозоны, можно будет сфотографироваться рядом с предметами уличного искусства, созданными уфимскими художниками также на тему защиты окружающей среды.</p>
        <div class="grid2">
          <div class="grid2__item">
            <img class="image" width="571" height="560" src="@/assets/images/activities/3.jpg" alt="Фото стрит арта" loading="lazy">
          </div>
          <div class="grid2__item">
            <img class="image" width="571" height="560" src="@/assets/images/activities/4.jpg" alt="Фото стрит арта" loading="lazy">
          </div>
          <div class="grid2__item">
            <img class="image" width="571" height="560" src="@/assets/images/activities/5.jpg" alt="Фото стрит арта" loading="lazy">
          </div>
        </div>
      </div>

      <p class="bottom-text">Приходите в «Планету» – сделаем наш город еще более зеленым!</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .activities {
    padding-top: 90px;
  }

  .grid1 {
    display: flex;
    flex-wrap: wrap;
    margin-left: -78px;
    margin-top: -20px;
  }

  .content {
    font-size: 20px;

    @include screen($xs) {
      font-size: 16px;
    }
  }

  .head3 {
    font-size: 24px;
    color: var(--fDark);

    @include screen($xs) {
      font-size: 20px;
    }
  }

  .grid1__item {
    margin-left: 78px;
    margin-top: 20px;
    width: calc(50% - 78px);
    @include screen($xs) {
      width: calc(100% - 78px);
    }
  }

  .image {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.12);
  }

  .grid2 {
    display: flex;
    flex-wrap: wrap;
    margin-left: -40px;
    margin-top: -20px;
  }

  .grid2__item {
    margin-left: 40px;
    margin-top: 20px;
    width: calc(33.3% - 40px);
    @include screen($xs) {
      width: calc(100% - 40px);
    }
  }

  .bottom-text {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    color: #0F870C;
    padding: 100px 0;

    @include screen($lg) {
      max-width: 600px;
      margin: 0 auto;
    }

    @include screen($xs) {
      max-width: 300px;
      font-size: 20px;
      padding: 60px 0;
    }
  }
</style>

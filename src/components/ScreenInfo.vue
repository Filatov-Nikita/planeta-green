<template>
  <section class="info" id="info">
    <div class="wrapper">
      <h2 class="h2 a-text-center a-mb-40">Информация</h2>
      <div class="items">
        <div class="btns">
          <a class="btn btn--tl" href="/documents/100240/view">Правила акции</a>
          <a class="btn btn--tr" href="/documents/100241/view">Вопросы-ответы</a>
          <a @click.prevent="showInstruct = true" class="btn btn--tr" href="#">Видеоинструкция</a>
          <a class="btn btn--tl" href="https://id.mall.tech/pd">
            Соглашение на обработку персональных данных
          </a>
        </div>
      </div>
    </div>
    <Dialog v-model="showInstruct">
      <video class="video" src="/instruct.mp4" controls autoplay></video>
    </Dialog>
  </section>
</template>

<script>
import Dialog from './Dialog.vue';

export default {
  data() {
    return {
      showInstruct: false,
    };
  },
  components: {
    Dialog,
  },
};
</script>

<style scoped lang="scss">
.video {
  width: 100%;
  max-height: calc(100vh - 120px);
}

.info {
  padding-top: 120px;
  @include screen($xs) {
    padding-top: 60px;
  }
}

.items {
  border-radius: 20px;
  background: var(--greenLight);
  padding: 67px 15px;
  display: flex;
  justify-content: center;

  @include screen($xs) {
    margin: 0 -15px;
    border-radius: 0;
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
    line-height: 1;
    text-align: left;
    padding-left: 20px;
    padding-right: 10px;
    min-height: 80px;
  }

  &--tl {
    border-radius: 0 50px 0 50px;
  }

  &--tr {
    border-radius: 50px 0 50px 0;
  }
}
</style>

<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="address">
        <p>ТРЦ «Планета», Уфа, Энтузиастов, 20</p>
      </div>

      <div class="soc">
        <a href="https://vk.com/trc_planeta_ufa" class="icon icon--vk"></a>
        <a href="https://t.me/trc_planeta_ufa" class="icon icon--tg"></a>
        <a href="https://rutube.ru/channel/24694861/" class="icon icon--rut"></a>
        <a href="https://www.youtube.com/channel/UCwQ9kwTOFChkJKrMOMqJ-pg" class="icon icon--youtube"></a>
        <a href="http://ok.ru/group/57048741838907" class="icon icon--ok"></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  padding: 40px 0;
  background: rgba(195, 230, 190, 0.6);
}

.text {
  p + p {
    margin-top: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 10px 0;
  }

  li {
    &::before {
      content: '- '
    }
  }
}

.address {
  max-width: 154px;
  font-weight: 700;
  font-size: 14px;
}

.soc {
  margin-top: 20px;
  display: flex;
}

.icon {
  width: 32px;
  height: 32px;

  & + & {
    margin-left: 15px;
  }

  &::before {
    display: block;
    width: 100%;
    height: 100%;
  }

  &--vk {
    content: url(@/assets/images/vk.svg);
  }

  &--ok {
    content: url(@/assets/images/ok.svg);
  }

  &--rut {
    content: url(@/assets/images/rut.svg);
  }

  &--youtube {
    content: url(@/assets/images/yt.svg);
  }

  &--tg {
    content: url(@/assets/images/tg.svg);
  }
}
</style>

<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="text">
        <p>
          1.За исключением гипермаркета «О’КЕЙ» и арендаторов на его территории. Участник Акции может зарегистрировать неограниченное количество чеков за весь период Акции, но:
        </p>
        <ul>
          <li>не более 5 (пяти) чеков из одного магазина ТРЦ «Планета» в день</li>
          <li>не более 10 (десяти) чеков от приобретения подарочных карт ТРЦ «Планета» за весь период Акции</li>
          <li>не более 10 (десяти) чеков из одного магазина ТРЦ «Планета» за весь период акции.</li>
        </ul>
        <p>
          2.Сумма чеков из одной и/или нескольких торговых точек между собой не суммируется. Чеки от приобретения подарочных сертификатов в любой торговой точке ТРЦ «Планета» не подлежат обмену на купоны и не дают право участвовать, кроме чеков от приобретения подарочных карт ТРЦ «Планета». Покупатель ТРЦ «Планета» может иметь неограниченное количество регистрационных купонов.
        </p>
        <p>
          3.Внешний вид призов, комплектация, цветовое изображение могут отличаться от указанного в настоящем рекламном макете и интернете. Количество призов ограничено. Гарантированный приз выдается  Участнику акции 1 (один) раз при регистрации первого чека. рекламном макете и интернете.Количество призов ограничено.
        </p>
      </div>

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
  margin-top: 25px;
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

<template>
  <section class="gifts" id="gift">
    <div class="wrapper fields">
      <h2 class="h2 a-text-center a-mb-50">{{ coupons !== undefined ? 'Призы и победители' : 'Призы'}}</h2>
      <GiftsDates class="a-mb-60" v-bind="{ labelDates, coupons }" />
      <GiftsList class="a-mb-50" v-bind="{ coupons: coupons && coupons[from], from }" />
    </div>

    <GiftsGet v-if="coupons !== undefined" />

    <div class="wrapper fields">
      <div class="gar-gift">
        <div class="gar-gift__content">
          <p class="gar-gift__title">
            Гарантированный приз каждому участнику акции
          </p>
          <p>
            Семена для выращивания в домашних условиях - мяты, мелиссы и многого
            другого
          </p>
        </div>
        <img
          width="283"
          height="283"
          class="gar-gift__img"
          src="@/assets/images/gift-for-all.png"
          alt="гарантированный приз"
        />
      </div>
    </div>
  </section>
</template>

<script>
import GiftsDates from './GiftsDates.vue';
import GiftsList from './GiftsList.vue';
import GiftsGet from './GiftsGet.vue';

export default {
  props: {
    coupons: {
      default: undefined,
      type: Object
    },
    from: {
      default: undefined,
      type: String
    }
  },
  data() {
    return {
      labelDates: {
        '22.07.2022': '22 июля',
        '05.08.2022': '5 августа',
        '19.08.2022': '19 августа',
        '02.09.2022': '2 сентября',
        '16.09.2022': '16 сентября',
        '30.09.2022': '30 сентября',
      },
    }
  },
  components: {
    GiftsDates,
    GiftsList,
    GiftsGet
  },
};
</script>

<style scoped lang="scss">
.gifts {
  padding-top: 90px;

  @include screen($xs) {
    padding-top: 60px;
  }
}

.gar-gift {
  background: var(--greenLight);
  padding-right: 11px;
  padding-left: 25px;
  text-align: center;
  display: flex;
  max-width: 712px;
  border-radius: 50px 0 50px 0;

  @include screen($xs) {
    flex-wrap: wrap;
    padding-bottom: 30px;
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 20px;
  }

  &__img {
    transform: translateY(-10px);

    @include screen($xs) {
      transform: none;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__content {
    padding-right: 35px;
    padding-top: 50px;

    @include screen($xs) {
      padding-right: 0;
    }
  }
}
</style>

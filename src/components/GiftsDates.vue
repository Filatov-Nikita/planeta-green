<template>
  <div class="row a-items-center">
    <div class="title">Розыгрыш призов</div>
    <div class="items row">
      <div
        class="item"
        :class="{ 'item--clickable': coupons && coupons[label] }"
        v-for="(value, label) in labelDates"
        :key="label"
        @click="show(label)"
      >
        {{ value }}
      </div>
    </div>
    <Dialog :modelValue="showed" @update:modelValue="show">
      <div class="dialog__title">Выигравшие купоны</div>
      <div class="dialog__items">
        <div class="dialog__item">
          <div class="dialog__label">Зонты</div>
          <div class="dialog__date">Купоны от {{ current }}</div>
          <div class="dialog__coupons">
            <div class="dialog__coupon" v-for="(coupon, i) in coupons[current].umbrella" :key="i">
              {{ coupon }}
            </div>
          </div>
        </div>
        <div class="dialog__item">
          <div class="dialog__label">Абонементы в фитнес-клуб на 1 месяц</div>
          <div class="dialog__date">Купоны от {{ current }}</div>
          <div class="dialog__coupons">
            <div class="dialog__coupon" v-for="(coupon, i) in coupons[current].fitness" :key="i">
              {{ coupon }}
            </div>
          </div>
        </div>
        <div class="dialog__item">
          <div class="dialog__label">Бутылки</div>
          <div class="dialog__date">Купоны от {{ current }}</div>
          <div class="dialog__coupons">
            <div class="dialog__coupon" v-for="(coupon, i) in coupons[current].bottle" :key="i">
              {{ coupon }}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script>
import Dialog from './Dialog.vue';

export default {
  props: {
    labelDates: {
      default: undefined,
      type: Object
    },
    coupons: {
      default: undefined,
      type: Object
    }
  },
  data() {
    return {
      current: null
    }
  },
  computed: {
    showed() {
      return this.current !== null
    }
  },
  methods: {
    show(date) {
      if(date === false) return this.current = null;

      if(!this.coupons || !this.coupons[date]) return;
      this.current = date;
    }
  },
  components: {
    Dialog,
  },
};
</script>

<style scoped lang="scss">
.title {
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
  margin-right: 40px;

  @include screen($lg) {
    margin-bottom: 20px;
  }
}

.items {
  margin-left: -29px;

  @include screen($md) {
    margin-left: -10px;
  }

  @include screen($xs) {
    margin-left: -35px;
  }
}

.item {
  margin-left: 29px;
  padding: 10px 20px;
  border: 2px solid var(--primary);
  border-radius: 5px;
  font-weight: 600;
  text-align: center;

  &--clickable {
    cursor: pointer;
  }

  @include screen($md) {
    margin-left: 10px;
  }

  @include screen($sm) {
    margin-top: 10px;
  }

  @include screen($xs) {
    width: calc(50% - 35px);
    margin-left: 35px;
  }
}

.dialog {
  &__title {
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 35px;
  }

  &__label {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 20px;
    min-height: 60px;

    @include screen($sm) {
      min-height: auto;
    }
  }

  &__date {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 15px;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -30px;

    @include screen($md) {
      margin: 0 -15px;
    }
  }

  &__item {
    width: 33.3%;
    padding: 0 30px;

    @include screen($md) {
      width: 33.3%;
      padding: 0 15px;
    }

    @include screen($sm) {
      width: 100%;

      & + & {
        margin-top: 35px;
      }
    }
  }

  &__coupons {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;
    max-width: 200px;
  }

  &__coupon {
    width: 50%;
    padding: 5px 12px;
  }
}
</style>

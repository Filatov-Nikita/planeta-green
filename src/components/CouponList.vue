<template>
  <div class="coupons">
    <p class="coupons__label">Купоны от {{ from }}</p>
    <div class="row coupons__list">
      <div
        class="coupons__value"
        v-for="(coupon, i) in coupons"
        :key="i"
      >
        {{ coupon }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coupons: {
      default: undefined,
      type: Object,
    },
    from: {
      default: undefined,
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.coupons {
  margin-top: 48px;
  text-align: center;

  @include screen($md) {
    margin-top: 24px;
  }

  &__label {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 7px;
  }

  &__value {
    width: 50%;
    padding: 5px 8px;
  }

  &__list {
    max-width: 192px;
    margin: 0 auto;
  }
}
</style>

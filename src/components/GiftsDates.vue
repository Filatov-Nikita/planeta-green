<template>
  <div class="row a-items-center">
    <div class="title">Розыгрыш призов</div>
    <div class="items row">
      <div class="item" v-for="item in dates" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dates: {
      required: true,
      type: Array
    }
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
</style>

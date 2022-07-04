<template>
  <main>
    <ScreenMain />
    <ScreenAbout />
    <ScreenGifts :coupons="coupons" from="22.07.2022" />
    <ScreenTerms />
    <ScreenInfo />
    <ScreenPartners />
    <ScreenFooter />
  </main>
</template>

<script>
import ScreenMain from './ScreenMain.vue';
import ScreenAbout from './ScreenAbout.vue';
import ScreenGifts from './ScreenGifts.vue';
import ScreenTerms from './ScreenTerms.vue';
import ScreenInfo from './ScreenInfo.vue';
import ScreenPartners from './ScreenPartners.vue';
import ScreenFooter from './ScreenFooter.vue';

export default {
  data() {
    return {
      coupons: {
        umbrella: [
          '5K1A7KD',
          '5K1A7KD',
          '5K1A7KD',
          '5K1A7KD',
          '5K1A7KD',
        ],
        fitness: [
          '6K2A7KD',
          '6K2A7KD',
          '6K2A7KD',
          '6K2A7KD',
          '6K2A7KD',
          '6K2A7KD',
          '6K2A7KD',
        ],
        bottle: [
          '9K1A7KD',
          '9K1A7KD',
          '9K1A7KD',
          '9K1A7KD',
          '9K1A7KD',
          '9K1A7KD',
          '9K1A7KD',
          '9K1A7KD',
          '9K1A7KD',
        ]
      }
    }
  },
  components: {
    ScreenMain,
    ScreenAbout,
    ScreenGifts,
    ScreenTerms,
    ScreenInfo,
    ScreenPartners,
    ScreenFooter
  }
};
</script>

<style>
</style>

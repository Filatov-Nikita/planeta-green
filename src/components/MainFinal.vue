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

const c1 = {
  umbrella: [ '5K1A7KD', '5K1A7KD', '5K1A7KD', '5K1A7KD', '5K1A7KD', '5K1A7KD', '5K1A7KD' ],
  fitness: [ '6K2A7KD' ],
  bottle: [ '9K1A7KD' ]
};

export default {
  data() {
    return {
      coupons: {
        '22.07.2022': c1,
        '05.08.2022': c1,
        // '19.08.2022': c1,
        // '02.09.2022': c1,
        // '16.09.2022': c1,
        // '30.09.2022': c1,
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

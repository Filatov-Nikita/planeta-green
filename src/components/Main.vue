<template>
  <main>
    <ScreenMain />
    <ScreenAbout />
    <ScreenGifts />
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

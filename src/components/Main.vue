<template>
  <main>
    <ScreenMain />
    <ScreenAbout />
    <ScreenActivities />
    <ScreenFooter />
  </main>
</template>

<script>
import ScreenMain from './ScreenMain.vue';
import ScreenAbout from './ScreenAbout.vue';
import ScreenActivities from './ScreenActivities.vue';
import ScreenFooter from './ScreenFooter.vue';

export default {
  components: {
    ScreenMain,
    ScreenActivities,
    ScreenAbout,
    ScreenFooter
  }
};
</script>

<style>
</style>

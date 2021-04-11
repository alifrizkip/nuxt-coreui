<template>
  <div class="c-app">
    <TheSidebar />
    <CWrapper>
      <TheHeader />
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <!-- <router-view :key="$route.path"></router-view> -->
              <Nuxt />
            </transition>
          </CContainer>
        </main>
      </div>
      <TheFooter />
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from '~/components/layouts/default/sidebar';
import TheHeader from '~/components/layouts/default/header';
import TheFooter from '~/components/layouts/default/footer';

export default {
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

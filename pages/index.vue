<template>
  <div class="container">
    <h1 class="title">
      <a
        href="https://github.com/alifrizkip/nuxt-coreui"
        target="_blank"
        rel="noopener noreferrer"
        class="button--grey"
      >
        nuxt-coreui
      </a>
    </h1>
    <div class="subtitle">
      By <a href="https://github.com/alifrizkip">alifrizkip</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: '100%';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 5rem;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 3rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

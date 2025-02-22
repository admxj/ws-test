<script setup></script>

<template>
  <div style="width: 100%">
    <header style="width: 50%">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Go to Home</RouterLink>
          <RouterLink to="/hello">Go to Hello</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

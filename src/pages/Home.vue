<template>
  <div class="myClass">
    <h1>Home page</h1>
    <router-link to="/work">Go to Work</router-link>
  </div>
</template>

<style scoped>
.myClass {
  width: 100%;
  height: 100%;
  background-color: crimson;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  position: absolute;
}
</style>

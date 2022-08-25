<template>
  <div class="full-size">
    <router-view v-slot="{ Component }">
      <Transition name="slide-fade" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  display: inline-block;
  margin: 5px;
  padding: 1em 1.8em;
  background-color: white;
  border: 5px solid black;
  border-radius: 1rem;
  color: black;
  text-decoration: none;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 800ms linear;
}

.slide-fade-enter-from{
  transform: translateX(calc(100% + 200px));
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(calc(-100% - 200px));
  opacity: 0;
}
</style>

<style scoped>
.full-size {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
</style>

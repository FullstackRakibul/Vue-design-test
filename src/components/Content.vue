
<script setup>
  const props = defineProps(['textColor'])
</script>

<template>
    <div>
      <h1>- 😣😣 -</h1>
      <p>Amar kichu valolagena</p>
    </div>
</template>



<style scoped>
  div{
    color: v-bind(props.textColor);
  }
  h1 {
    font-size: calc(5vw + 30px);
    font-weight: bold;
    white-space: pre;
  }
  p{
    text-align: center;
  }
</style>

<script setup>
const props = defineProps({
  content: {
    type: String,
    default: "No content found!",
  },
});
</script>

<template>
  <div>
    <slot></slot>
    <p>{{ content }} - File component</p>
  </div>
</template>

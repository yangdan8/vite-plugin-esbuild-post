<template>
  <div>result: {{ b }},{{ c }}</div>
</template>

<script setup lang="ts">
declare global {
  interface Window {
    a?: {
      b: string
    }
  }
}
const b = window.a?.b;
const c = window.a ?? 666;
</script>

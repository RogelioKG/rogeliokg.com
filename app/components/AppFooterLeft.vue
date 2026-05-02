<script setup>
const site = useSiteConfig()
</script>

<template>
  <div class="text-sm text-muted">
    <NuxtLink
      to="https://creativecommons.org/licenses/by-nc-sa/4.0/"
      target="_blank"
    >
      CC BY-NC-SA 4.0
    </NuxtLink>
    2025-PRESENT © {{ site.name }}
  </div>
</template>

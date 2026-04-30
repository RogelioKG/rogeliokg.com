<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue'
import VanillaTilt from 'vanilla-tilt'
import { useMediaQuery } from '@vueuse/core'

defineProps({
  frontImage: {
    type: String,
    default: '/business-card-front.png',
  },
  backImage: {
    type: String,
    default: '/business-card-back.png',
  },
})

const cardRef = useTemplateRef<HTMLElement>('card')
const isFlipped = ref(false)

const isTouchDevice = useMediaQuery('(hover: none)')

const toggleFlip = () => {
  if (isTouchDevice.value) {
    isFlipped.value = !isFlipped.value
  }
}

onMounted(() => {
  if (cardRef.value) {
    VanillaTilt.init(cardRef.value, {
      'max': 10,
      'speed': 2000,
      'perspective': 500,
      'glare': true,
      'max-glare': 0.2,
      'gyroscope': true,
      'gyroscopeMinAngleX': -45,
      'gyroscopeMaxAngleX': 45,
      'gyroscopeMinAngleY': -45,
      'gyroscopeMaxAngleY': 45,
    })
  }
})

onUnmounted(() => {
  if (cardRef.value) {
    const tiltInstance = Reflect.get(cardRef.value, 'vanillaTilt')
    if (tiltInstance) {
      tiltInstance.destroy()
    }
  }
})
</script>

<template>
  <div
    ref="card"
    class="group relative cursor-pointer aspect-4/7"
    @click="toggleFlip"
  >
    <!-- 正面 -->
    <div
      class="absolute inset-0 h-full w-full transition-transform duration-500 backface-hidden"
      :class="{
        'transform-[rotateY(180deg)]': isFlipped && isTouchDevice,
        'transform-[rotateY(0)]': !(isFlipped && isTouchDevice),
        'group-hover:transform-[rotateY(180deg)]': !isTouchDevice,
      }"
    >
      <NuxtImg
        :src="frontImage"
        alt="Business Card Front"
        class="h-full w-full select-none object-cover shadow-[20px_20px_20px_0px_rgba(0,0,0,0.2)]"
      />
    </div>

    <!-- 背面 -->
    <div
      class="absolute inset-0 h-full w-full transition-transform duration-500 backface-hidden"
      :class="{
        'transform-[rotateY(0)]': isFlipped && isTouchDevice,
        'transform-[rotateY(-180deg)]': !(isFlipped && isTouchDevice),
        'group-hover:transform-[rotateY(0)]': !isTouchDevice,
      }"
    >
      <NuxtImg
        :src="backImage"
        alt="Business Card Back"
        class="h-full w-full select-none object-cover shadow-[20px_20px_20px_0px_rgba(0,0,0,0.2)]"
      />
    </div>
  </div>
</template>

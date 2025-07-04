export const react = `import { Slider } from '@ark-ui/react/slider'
import { useState } from 'react'
  
export const MySlider = () => {
  const [value, setValue] = useState([30])
    
  return (
    <Slider.Root
      min={-50}
      max={50}
      value={value}
      onValueChange={(e) => setValue(e.value)}
    >
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText>{value}</Slider.ValueText>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0} />
      </Slider.Control>
    </Slider.Root>
  )
}`

export const solid = `import { Slider } from '@ark-ui/solid/slider'
import { createSignal } from 'solid-js'

export const MySlider = () => {
  const [value, setValue] = createSignal([30])

  return (
    <Slider.Root
      min={-50}
      max={50}
      value={value()}
      onValueChange={(e) => setValue(e.value)}
    >
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText>{value}</Slider.ValueText>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0} />
      </Slider.Control>
    </Slider.Root>
  )
}`

export const vue = `<script setup lang="ts">
import { Slider } from '@ark-ui/vue/slider'
import { ref } from 'vue'

const value = ref([30])
</script>

<template>
  <Slider.Root :min="-50" :max="50" v-model="value">
    <Slider.Label>Label</Slider.Label>
    <Slider.ValueText>{{ value }}</Slider.ValueText>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb :index="0" />
    </Slider.Control>
  </Slider.Root>
</template>`

export const svelte = `<script lang="ts">
  import { Slider } from '@ark-ui/svelte/slider'

  let value = $state([30])
</script>

<Slider.Root bind:value>
  <Slider.Label>Label</Slider.Label>
  <Slider.ValueText />
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb index={0} />
  </Slider.Control>
</Slider.Root>`

<template>
<div>
  <HeaderFut/>
  <router-view></router-view>
</div>
</template>

<script>
import HeaderFut from '@/components/HeaderFut.vue'
export default {
    components: {
    HeaderFut
  }
}
</script>

<style>

</style>
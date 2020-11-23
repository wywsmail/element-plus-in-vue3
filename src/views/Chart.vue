<template>
  <h1>Chart</h1>
  <ChartContent />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ChartContent from '@/components/ChartContent.vue'; // @ is an alias to /src

@Options({
  components: {
    ChartContent,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>

</style>
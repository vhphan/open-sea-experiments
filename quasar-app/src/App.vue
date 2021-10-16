<template>
  <router-view/>
</template>
<script>
import {defineComponent} from 'vue';
import {loadScript} from "src/utils";

loadScript('assets/jsontree.js')

export default defineComponent({
  name: 'App'
})
</script>
<style>
@import "assets/jsontree.css";
</style>

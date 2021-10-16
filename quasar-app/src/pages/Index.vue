<template>
  <q-page class="flex flex-center" style="height: 100%;">
    <AssetsTable/>
  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue';
import AssetsTable from "components/AssetsTable";

export default defineComponent({
  name: 'PageIndex',
  components: {AssetsTable},
  setup() {

  }
})
</script>

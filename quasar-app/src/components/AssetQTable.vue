<template>
  <q-table
    title="Assets"
    :rows="assetsData"
    row-key="id"
    :columns="tableColumnsAuto"

  />
</template>

<script>
import {useStore} from "vuex";
import {computed, ref} from "vue";

export default {
  name: "AssetQTable",
  setup() {
    const store = useStore();



    const assetsData = computed(() => store.state.openSea.collectionData.assets || []);

    const tableColumnsAuto = computed(() => {
      if (assetsData.value.length) {
        const firstRow = assetsData.value[0];
        const columns = Object.keys(firstRow);
        return columns.map(c => {
          return {
            name: c,
            label: c,
            required: false,
            align: 'left',
            field: row => {
              {
                return isObject(row[c])? 'object': row[c];
              }
            },
            sortable: true
          }
        })
      }
      return [];
    })
    const tableColumns = [
      {
        name: 'id',
        label: 'id',
        required: true,
        align: 'left',
        field: row => row.id,
        sortable: true,
      },
      {
        name: 'token_id',
        label: 'token_id',
        required: true,
        align: 'left',
        field: row => row.token_id,
        sortable: true
      },
    ]
    return {
      assetsData,
      tableColumns,
      tableColumnsAuto
    }
  }
}
</script>

<style scoped>

</style>

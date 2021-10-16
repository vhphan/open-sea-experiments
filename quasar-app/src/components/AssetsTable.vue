<template>
  <div ref="table" style="height: 100%; width:100%;">
  </div>
</template>

<script>
import Tabulator from 'tabulator-tables';
import {useStore} from "vuex";
import {ref, computed, onMounted, watch} from "vue";


export default {
  name: "AssetsTable",
  setup: function () {
    const store = useStore();
    let tabulator = ref(null);

    function changeUrlColumns(tabObj) {
      let columns = tabObj.getColumnDefinitions();
      columns.forEach(column => {
        if (column.field === 'image_url') {
          column.formatter = function (cell, formatterParams, onRendered) {
            //cell - the cell component
            //formatterParams - parameters set for the column
            //onRendered - function to call when the formatter has been rendered
            onRendered(function () {
              console.log('onRendered');
            });
            return 'test';
          };
        }
      });
    }

    const tableOptions = {
      paginationSize: 20,
      paginationInitialPage: 1,
      maxHeight: '90vh',
      ajaxLoader: false,
    };
    const table = ref(null);
    const tableData = computed(() => store.state.openSea.collectionData);
    const assetsData = computed(() => {
      return store.getters['openSea/assetsData'];
    });

    const tableColumns = computed(() => {
      if (assetsData.value.length > 0) {
        const firstRow = assetsData.value[0];
        const detectedColumns = Object.keys(firstRow);
        const filteredColumns = detectedColumns.filter(d => {
          return !d.includes('_url');
        })
        return filteredColumns.map(c => {
          const base = {title: c, field: c, hozAlign: "left"}
          if (c === 'permalink') {
            return {
              ...base, formatter: function (cell, formatterParams, onRendered) {
                return `<a href="${cell.getValue()}" target="_blank">View</a>`;
              }
            }
          }
          // if (c === 'last_sale') {
          //   return {
          //     ...base, formatter: function (cell, formatterParams, onRendered) {
          //       const jsonObj = cell.getValue();
          //       return JSONTree.create(jsonObj);
          //     }
          //   }
          // }
          return base;
        })
      }
      return [];
    })

    onMounted(() => {

    })
    watch(assetsData, () => {
      console.log('watcher', assetsData);
      console.log('watcher', assetsData.value.length);
      tabulator.value = new Tabulator(table.value,
        {
          data: assetsData.value, //link data to table
          reactiveData: true, //enable data reactivity
          ...tableOptions,
          columns: tableColumns.value,
          // renderStarted: function () {
          //   changeUrlColumns(this);
          // }
        });
      tabulator.value.setData(assetsData.value);
    }, {deep: true});

    // watch(() => [...assetsData.value], (newData, oldData) => {
    //   console.log('assetsData', assetsData.value)
    //   console.log('newData', newData.value)
    //   console.log('oldData', oldData.value)
    //   tabulator.value.replaceData(newData.value)
    // },)
    return {
      table,
      tabulator,
      tableOptions,
      tableData,
      assetsData,
      tableColumns,
    }
  }
}
</script>

<style lang="scss">
@import "~vue-tabulator/dist/scss/tabulator_modern";
</style>

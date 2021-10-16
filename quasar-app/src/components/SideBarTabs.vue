<template>
  <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 100%;"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab name="mails" icon="mail"/>
          <q-tab name="alarms" icon="alarm"/>
          <q-tab name="movies" icon="movie"/>
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="mails">
            <div class="text-h4 q-mb-md">Mails</div>

            <q-input outlined v-model="collectionName" label="Collection Name"/>
            <q-btn @click="getCollectionData">Get Collection Details</q-btn>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md">Alarms</div>

          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h4 q-mb-md">Movies</div>

          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>
<script>
import {ref, onMounted, computed} from "vue";
import { openSeaApi } from 'boot/axios'
import {useStore} from "vuex";
export default {
  name: 'SideBarTabs',
  props: {},
  setup() {
    const store= useStore();
    // const collectionName = computed({ get: ()=>  store.state.openSea.collectionName });

    const collectionName = computed({
      get: () => store.state.openSea.collectionName,
      set: (val) => {
        store.dispatch("openSea/setCollectionName", val);
      }
    })
    const getCollectionData = async function (e) {
      console.log(e);
      const url = `assets?order_by=sale_price&order_direction=asc&offset=0&limit=20&collection=${collectionName.value}`
      const collectionData = (await openSeaApi.get(url)).data;
      await store.dispatch('openSea/setCollectionData', collectionData)
      console.log(collectionData);
    };
    onMounted(()=>{
      getCollectionData()
    });
    return {
      tab: ref('mails'),
      splitterModel: ref(20),
      collectionName,
      getCollectionData
    }
  }
}
</script>

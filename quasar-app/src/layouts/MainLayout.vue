<template>
  <q-layout view="lHh Lpr lFf" style="height: 100vh;">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <SideBarTabs/>
    </q-drawer>

    <q-page-container style="height: 100%;">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>
<script>
import {ref} from 'vue'
import SideBarTabs from "components/SideBarTabs";

export default {
  name: 'MainLayout',
  components: {SideBarTabs},
  setup() {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<script setup>
import myTrackSrc from "@assets/mp3/champions-league-anthem.mp3";
import useTeamsUefa from "@composables/clubs/useTeamsUefa";
import { onMounted } from "vue";

defineProps({
  msg: String,
});

const { teams, translatePotName } = useTeamsUefa();

const playMusicChampions = () => {
  const myTrack = new Audio(myTrackSrc);

  myTrack.play();
};

onMounted(() => {});
</script>

<template>
    <q-toolbar class="bg-grey-9 text-white">
      <q-btn flat round dense>
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        Toolbar
      </q-toolbar-title>
      <q-btn flat round dense>
        <q-icon name="more_vert" />
      </q-btn>
    </q-toolbar>

  <h3>{{ msg }}</h3>

  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col bg-primary">.col</div>
      <div class="col bg-primary">.col</div>
    </div>

    <div class="row">
      <div class="col bg-secondary ">.col</div>
      <div class="col bg-primary">.col</div>
      <div class="col bg-primary">.col</div>
    </div>
  </div>

  <ul v-for="(group, index) in teams" :key="index">
    <li>{{ translatePotName(index) }}</li>
    <ul v-for="(groupItem, index) in group" :key="index">
      <li>
        {{ groupItem.name }}
        <img v-if="groupItem?.logo" :src="groupItem.logo" width="50" />
      </li>
    </ul>
  </ul>

  <div class="card">
    <button type="button" @click="playMusicChampions">Entre no clima</button>
  </div>

  <p class="read-the-docs">Clique no botão para testar</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

</style>

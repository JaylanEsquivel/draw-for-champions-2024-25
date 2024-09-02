<script setup>
import myTrackSrc from "@assets/mp3/champions-league-anthem.mp3";
import useTeamsUefa from "@composables/clubs/useTeamsUefa";

defineProps({
  msg: String,
});

const { teams, translatePotName } = useTeamsUefa();

const playMusicChampions = () => {
  const myTrack = new Audio(myTrackSrc);

  myTrack.play();
};
</script>

<template>
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
    <q-btn type="button" class="q-btn bg-primary" @click="playMusicChampions">Entre no clima</q-btn>
  </div>

  <p class="read-the-docs">Clique no botão para testar</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

</style>

<script setup>
import { ref, onMounted } from 'vue'
import myTrackSrc from '@assets/mp3/champions-league-anthem.mp3'
import useTeamsUefa from '@composables/clubs/useTeamsUefa'

defineProps({
  msg: String,
})

const { teams, translatePotName } = useTeamsUefa()

const playMusicChampions = () => {
  const myTrack = new Audio(myTrackSrc)
  
  myTrack.play()
}

onMounted(async () => {

});

</script>

<template>
  <h1>{{ msg }}</h1>
  <ul v-for="(group, index) in teams">
    <li>{{ translatePotName(index) }}</li>
    <ul v-for="groupItem in group">
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

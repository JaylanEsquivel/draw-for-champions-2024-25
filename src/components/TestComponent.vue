<script setup>
import myTrackSrc from "@assets/mp3/champions-league-anthem.mp3";
import logoChampions from "@assets/img/utils/logo-champions.png";
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
  <section>
    <div class="q-pa-md example-row-equal-width">
      <header>
        <div class="row justify-center">
          <div class="col-md-2 text-center">
            <div class="q-mt-sm"> 
              <img :src="logoChampions" width="150" />
            </div>
            <div class="q-mt-sm"> 
              <span class="text-white text-overline">Simulador de Sorteio</span>
            </div>
          </div>
          <div class="col-md-10 rounded-borders">
            <div class="q-pa-xs row items-start q-gutter-md">

              <q-card v-for="(group, index) in teams" :key="index" class="text-center" flat style="width: 280px; background-color: transparent;">
                <q-card-section>
                  <div class="text-h6 text-uppercase text-white">{{ translatePotName(index) }}</div>
                </q-card-section>

                <q-card-section class="bg-white q-pa-none rounded-borders	">
                  <q-list bordered separator>
                    <q-item v-for="(groupItem, index) in group" :key="index" clickable v-ripple :class="groupItem?.opponents.length ? 'bg-grey' : ''">
                      <q-item-section avatar>
                        <q-avatar rounded>
                          <img v-if="groupItem?.logo" :src="groupItem.logo" >
                        </q-avatar>
                      </q-item-section>
                      <q-item-section>{{ groupItem.name }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
              
            </div>
          </div>
        </div>
      </header>
      <main>

        <div class="row q-mt-lg">
          <div class="col bg-secondary">.col</div>
          <div class="col bg-primary">.col</div>
          <div class="col bg-primary">.col</div>
        </div>

      </main>
      <footer>
        <div class="row justify-center q-mt-lg">
          <div class="col-12 text-center">
            <q-btn type="button" class="q-btn bg-primary" @click="playMusicChampions">Entre no clima</q-btn>
            <p class="read-the-docs q-mt-md">Clique no botão para testar</p>
          </div>
        </div>
      </footer>
    </div>
  </section>
  <section class="row fixed-buttons">
    <div class="q-pa-lg q-gutter-md">
      <q-btn 
        round 
        size="20px"
        color="primary" 
        icon="check_circle">
          <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
            <strong>Selecionar Time</strong>
          </q-tooltip>        
      </q-btn>
      <q-btn 
        round 
        size="20px"
        color="secondary" 
        icon="lan">
          <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
            <strong>Selecionar Adversarios</strong>
          </q-tooltip>        
      </q-btn>
    </div>
  </section>
</template>

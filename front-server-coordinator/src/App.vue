<!-- App.vue -->
<template>
  <v-app>
    <v-app-bar app dense color="primary" dark>
      <v-spacer></v-spacer>
      <TimeDisplay/>
    </v-app-bar>

    <v-main>
      <v-container class="d-flex justify-center align-center" > 
        <ButtonPanel/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ButtonPanel from './components/ButtonPanel.vue';
import TimeDisplay from './components/Clock.vue'; // Actualiza el nombre del archivo según tu estructura

export default {
  name: 'App',
  components: {
    ButtonPanel,
    TimeDisplay,
  }
}
</script>

<style>
#app {
  margin-top: 10px;
  padding: 10px;
  margin-left: 30px;
}
</style>

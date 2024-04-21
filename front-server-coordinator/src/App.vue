<template>
  <div id="app">
    <!-- Header with Time Display, Title, and Button Panel -->
    <div class="header">
      <div class="left-section"> 
        <TimeDisplay />
      </div>
      <h2>Berkeley's Algorithm</h2>
      <div class="center-section">
        <ButtonPanel />
      </div>
    </div>

    <!-- Main Section with Server List -->
    <div class="main">
      <ServerList />
    </div>
  </div>
</template>

<script>
import ButtonPanel from './components/ButtonPanel.vue';
import TimeDisplay from './components/Clock.vue';
import ServerList from './components/ServerList.vue';

export default {
  name: 'App',
  components: {
    ButtonPanel,
    TimeDisplay,
    ServerList,
  },
};
</script>

<style scoped>
/* Estilos para la cabecera */
.header {
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  background-color: #eef2fd;
  margin: 35px 5%;
  border-radius: 20px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.left-section {
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
}

.center-section {
  flex-grow: 1;
  text-align: center;
}

h2 {
  text-align: center;
  margin-top: 1%;
}

.main {
  padding: 10px;
  margin: 10%;
  margin-top: 0%;
}
</style>

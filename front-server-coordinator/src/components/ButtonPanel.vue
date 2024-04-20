<template>
    <v-container class="pa-4">
        <h2>Berkeley's Algorithm</h2>
        <v-row align="center" justify="center">
            <v-col cols="auto"> 
                <v-btn class="my-btn" @click="newClient">
                    Add Client Node
                </v-btn>
            </v-col>
            <v-col cols="auto"> <!-- Mismo enfoque para el segundo botón -->
                <v-btn class="my-btn" @click="runBerkeleyAlgorithm">
                    Start Synchronization
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ButtonPanel',
    methods: {
        newClient() {
            console.log("New client created");
            // Aquí es donde agregarías la lógica para crear un nuevo cliente
        },
        runBerkeleyAlgorithm() {
            console.log("Berkeley Algorithm running");
            // Aquí es donde agregarías la lógica para ejecutar el algoritmo de Berkeley
        },
    },
};
</script>

<style scoped>
h2 {
    font-weight: 600;
    text-align: center;
    margin-bottom: 3%;
}

.pa-4 {
    width: 415px;
    height: 100px;
}

.my-btn {
    background-color: #1c1d74;
    color: white;
    margin-left: 10px;
    text-transform: none;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 6px;
    transition: background-color 0.3s ease;
}

.my-btn:hover {
    background-color: #d2dcfc;
    color: #1c1d74;
    font-weight: bold;
}
</style>
<template>
    <div class="panel">
        <div class="row" style="justify-content: center; align-items: center;">
            <div class="col-auto">
                <button class="my-btn" @click="newClient">
                    Add Client Node
                </button>
            </div>
            <div class="col-auto">
                <button class="my-btn" @click="runBerkeleyAlgorithm">
                    Start Synchronization
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ButtonPanel',
    methods: {
        async newClient() { // Marcar la función como async
            console.log("New client created");
            // Lógica para crear un nuevo cliente
            try {
                const response = await axios.get('http://localhost:3000/run-script');
                console.log(response.data);
                // Aquí puedes manejar la respuesta del servidor si es necesario
            } catch (error) {
                console.error('Error al ejecutar el script:', error.message);
                // Aquí puedes manejar el error si es necesario
            }
        },
        async runBerkeleyAlgorithm() { // Marcar la función como async
            console.log("Berkeley Algorithm running");
            try {
                // Realizar la solicitud al endpoint /run-script
                const response = await axios.post('http://localhost:3000/start-berkeley');
                console.log(response.data);
                // Manejar la respuesta del servidor si es necesario
            } catch (error) {
                console.error('Error al iniciar el algoritmo de Berkeley:', error.message);
                // Manejar el error si ocurre algún problema con la solicitud
            }
        },
    },
};
</script>

<style scoped>
.panel {
    padding: 1px;
    width: 90%;
    height: auto;
    margin: 2%;
    margin-left: 50px;
}

.row {
    display: flex;
}

.col-auto {
    margin-right: 10px;
    /* Ajusta según tu diseño */
}

.my-btn {
    background-color: #1c1d74;
    color: white;
    text-transform: none;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.my-btn:hover {
    background-color: #eef2fd;
    color: #1c1d74;
    font-weight: bold;
}
</style>
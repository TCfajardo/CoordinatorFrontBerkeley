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
export default {
    name: 'ButtonPanel',
    methods: {
        newClient() {
            console.log("New client created");
            // Lógica para crear un nuevo cliente
        },
        runBerkeleyAlgorithm() {
            console.log("Berkeley Algorithm running");
            // Lógica para ejecutar el algoritmo de Berkeley
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
<template>
    <v-container class="pa-4">
        <h3>Current coordinator time</h3>
        <v-row>
            <v-col cols="auto" class="clock-container"> <!-- Contenedor del reloj posicionado a la derecha -->
                <v-chip class="clock-chip">
                    {{ formattedTime }}
                </v-chip>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'TimeDisplay',
    data() {
        return {
            time: new Date(),
        };
    },
    computed: {
        formattedTime() {
            const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
            return new Intl.DateTimeFormat('en-US', options).format(this.time);
        },
    },
    mounted() {
        this.updateTime();
    },
    methods: {
        updateTime() {
            this.time = new Date();
            setTimeout(this.updateTime, 1000);
        },
    },
};
</script>

<style scoped>

.pa-4{
    padding: 50%;

}
.clock-chip {
    font-size: 3rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.clock-chip:hover {
    transform: scale(1.1);
}

</style>
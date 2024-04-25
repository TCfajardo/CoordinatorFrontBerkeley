<template>
    <div class="event-log-list">
        <h3>Event Log</h3>
        <div class="event-log-container">
            <table class="event-log-table">
                <thead>
                    <tr>
                        <th>Date & Time</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="event in getSortedEvents()" :key="event.id">
                        <td>{{ formatTimestamp(event.timestamp) }}</td>
                        <td>{{ event.description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client';

export default {
    name: 'EventLogList',
    data() {
        return {
            socket: null,
            events: [],
        };
    },
    methods: {
        getSortedEvents() {
            // Ordenar eventos para que el más reciente esté arriba
            return [...this.events].sort((a, b) => b.timestamp - a.timestamp);
        },
        formatTimestamp(timestamp) {
            const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            return new Intl.DateTimeFormat('en-US', options).format(timestamp);
        },
    },
    mounted() {
        this.socket = io('http://localhost:3000');

        this.socket.on('connect', () => {
            console.log('Connected to coordinator server');

            // Solicita unirte a la sala 'vue-clients'
            this.socket.emit('join_vue_clients');
        });

        this.socket.on('disconnect', () => {
            console.log('Disconnected from coordinator server');
            const event = {
                id: this.events.length + 1,
                timestamp: new Date(),
                description: "Deconnected",
            };
            this.events.unshift(event);
        });

        this.socket.on('system_log', (message) => {
            const event = {
                id: this.events.length + 1,
                timestamp: new Date(),
                description: message,
            };
            this.events.unshift(event);
        });
    },
};
</script>


<style scoped>
.event-log-list {
    padding: 20px;
    width: 48%;
    border: 2px solid rgb(241, 242, 248);
    border-radius: 10px;
    background-color: #1c1d74;
    color: white;
}

.event-log-container {
    max-height: 350px;
    overflow-y: auto;
}

.event-log-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9em;
}

.event-log-table th,
.event-log-table td {
    border: 1px solid #1c1d74;
    padding: 10px;
    text-align: left;
}

.event-log-table th {
    background-color: #eef2fd;
    color: #1c1d74;
}

.event-log-table tbody tr:hover {
    background-color: #eef2fd;
    color: #0d0e51;
}

.event-log-container::-webkit-scrollbar {
    width: 8px;
}

.event-log-container::-webkit-scrollbar-thumb {
    background-color: #eef2fd;
    border-radius: 8px;
}

.event-log-container::-webkit-scrollbar-track {
    background: #1c1d74;
}

td {
    font-size: 12px;
}
</style>

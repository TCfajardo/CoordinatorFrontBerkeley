<template>
    <div class="server-status">
        <h3>Client Nodes Status</h3>
        <h5 v-if="!isConnected" class="warning">Connection to WebSocket lost</h5>

        <div class="server-table">
            <div class="server-row server-header">
                <div class="server-cell">Node (Port)</div>
                <div class="server-cell">IP</div>
                <div class="server-cell">Status</div>
                <div class="server-cell">Logs</div>
            </div>

            <div v-for="server in servers" :key="server.ip" class="server-row">
                <div class="server-cell">{{ getPort(server.ip) }}</div>
                <div class="server-cell">{{ getHost(server.ip) }}</div>
                <div class="server-cell">
                    <div :style="getStatusStyle(server.isActive)" class="status-indicator"
                        :aria-label="server.isActive ? 'Active' : 'Inactive'" role="status"></div>
                </div>
                <div class="server-cell">
                    <a v-if="server.isActive" :href="getLogUrl(server)" target="_blank" rel="noopener noreferrer">View
                        Logs</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client';

export default {
    name: 'ServerList',
    data() {
        return {
            servers: [],
            socket: null,
            isConnected: true,
        };
    },
    methods: {
        getStatusStyle(isActive) {
            return {
                backgroundColor: isActive ? 'green' : 'red',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: '1px solid white',
            };
        },
        getPort(ip) {
            try {
                const url = new URL(ip);
                return url.port;
            } catch (e) {
                console.error(`Error extracting port from ${ip}:`, e);
                return 'Unknown';
            }
        },
        getHost(ip) {
            try {
                const url = new URL(ip);
                return url.hostname;
            } catch (e) {
                console.error(`Error extracting host from ${ip}:`, e);
                return 'Unknown';
            }
        },
        getLogUrl(server) {
            const port = this.getPort(server.ip);
            // Mapear el puerto de origen al puerto de destino
            let mappedPort = port;

            // Puedes cambiar el mapeo según tus necesidades
            switch (port) {
                case '5001':
                    mappedPort = '8081';
                    break;
                case '5002':
                    mappedPort = '8082';
                    break;
                case '5003':
                    mappedPort = '8083';
                    break;
                case '5004':
                    mappedPort = '8084';
                    break;
                default:
                    mappedPort = port;
                    break;
            }

            // Construir la URL con el puerto mapeado
            return `http://localhost:${mappedPort}`;
        },
    },
    mounted() {
        this.socket = io('http://localhost:3000');

        this.socket.on('connect', () => {
            console.log('Connected to coordinator server');
            this.isConnected = true;
        });

        this.socket.on('node_status', (nodeStatus) => {
            const existingServer = this.servers.find((server) => server.ip === nodeStatus.ip);

            if (existingServer) {
                existingServer.isActive = nodeStatus.isActive;
            } else {
                this.servers.push({
                    ip: nodeStatus.ip,
                    isActive: nodeStatus.isActive,
                    url: nodeStatus.ip,
                });
            }
        });

        this.socket.on('disconnect', () => {
            console.log('Disconnected from coordinator server');
            this.isConnected = false;
            this.servers = [];
        });
    },
};
</script>

<style scoped>
/* Estilos del componente */
.server-status {
    border: 2px solid rgb(241, 242, 248);
    padding: 20px;
    border-radius: 10px;
    background-color: #fffffe;
    height: 290px;
}

.server-table {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 200px;
}

.server-row {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid white;
}

.server-header {
    font-weight: bold;
    color: #1c1d74;
}

.server-cell {
    flex: 1;
    text-align: center;
}

.status-indicator {
    margin: auto;
}

.server-row:hover {
    background-color: #eef2fd;
}
</style>
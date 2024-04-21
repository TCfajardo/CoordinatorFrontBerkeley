<template>
    <div class="server-status">
        <h3>Client Nodes Status</h3>
        <div class="server-table">
            <div class="server-row server-header">
                <div class="server-cell">Node</div>
                <div class="server-cell">IP</div>
                <div class="server-cell">Status</div>
                <div class="server-cell">Logs</div>
            </div>

            <div v-for="server in servers" :key="server.ip" class="server-row">
                <div class="server-cell">{{ server.name }}</div>
                <div class="server-cell">{{ server.ip }}</div>
                <div class="server-cell">
                    <div :style="getStatusStyle(server.isActive)" class="status-indicator"
                        :aria-label="server.isActive ? 'Active' : 'Inactive'" role="status">
                    </div>
                </div>
                <div class="server-cell">
                    <a :href="server.url" target="_blank" rel="noopener noreferrer">View Logs</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServerList',
    data() {
        return {
            servers: [
                { name: 'Node 1', ip: '192.168.0.1', isActive: true, url: 'http://localhost:5001/' },
                { name: 'Node 2', ip: '192.168.0.2', isActive: false, url: 'http://localhost:5002/' },
                { name: 'Node 3', ip: '192.168.0.3', isActive: true, url: 'http://localhost:5003/' },
                { name: 'Node 4', ip: '192.168.0.4', isActive: false, url: 'http://localhost:5004/' },
            ],
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
    },
};
</script>

<style scoped>
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

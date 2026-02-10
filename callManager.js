// callManager.js

class CallManager {
    constructor() {
        this.calls = {};
    }

    handleOutboundCall(to, from) {
        // Initialize call state
        const callId = this.generateCallId();
        this.calls[callId] = { to, from, state: 'initiated' };
        console.log(`Outbound call initiated from ${from} to ${to}`);

        // Simulate call state changes
        setTimeout(() => this.updateCallState(callId, 'ringing'), 5000);
        setTimeout(() => this.updateCallState(callId, 'in-progress'), 10000);
        setTimeout(() => this.updateCallState(callId, 'completed'), 20000);
    }

    updateCallState(callId, newState) {
        if (this.calls[callId]) {
            this.calls[callId].state = newState;
            console.log(`Call ${callId} state updated to ${newState}`);
        }
    }

    generateCallId() {
        return `call_${Date.now()}`;
    }
}

// Example usage
const callManager = new CallManager();
callManager.handleOutboundCall('+1234567890', '+0987654321');
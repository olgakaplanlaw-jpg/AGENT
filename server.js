const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Twilio Voice Callback Endpoint for Incoming Calls
app.post('/incoming-call', (req, res) => {
    const twiml = new twilio.twiml.VoiceResponse();
    twiml.say('Hello! You have an incoming call.');
    twiml.pause({ length: 2 });
    twiml.say('Please leave a message after the beep.');
    twiml.record();

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

// Twilio Voice Callback Endpoint for Outgoing Calls
app.post('/outgoing-call', (req, res) => {
    const { to } = req.body;
    const twiml = new twilio.twiml.VoiceResponse();
    twiml.say(`Calling ${to}`);
    twiml.dial(to);

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

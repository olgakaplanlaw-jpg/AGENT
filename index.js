const twilio = require('twilio');
const OpenAI = require('openai');

const accountSid = 'your_account_sid'; // Your Twilio account SID
const authToken = 'your_auth_token'; // Your Twilio auth token
const client = twilio(accountSid, authToken);

const openai = new OpenAI({
  apiKey: 'your_openai_api_key', // Your OpenAI API key
});

const callTo = '+9720526833334'; // Andrey's phone number

async function initiateCall() {
  try {
    const call = await client.calls.create({
      url: 'http://demo.twilio.com/docs/voice.xml', // Replace with your TwiML URL
      to: callTo,
      from: 'your_twilio_phone_number', // Your Twilio phone number
    });
    console.log(`Call initiated: ${call.sid}`);
  } catch (error) {
    console.error(`Error initiating call: ${error.message}`);
  }
}

async function manageConversation(message) {
  try {
    const response = await openai.Completion.create({
      model: 'text-davinci-003',
      prompt: message,
      max_tokens: 150,
    });
    console.log('AI Response:', response.choices[0].text.trim());
  } catch (error) {
    console.error(`Error during conversation: ${error.message}`);
  }
}

// Example usage
initiateCall();
manageConversation('שלום, איך אני יכול לעזור לך היום?');
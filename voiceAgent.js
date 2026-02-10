// voiceAgent.js

const OpenAI = require('openai');

// Initialize OpenAI API Client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Function to detect the language of the input
function detectLanguage(input) {
    // Simple language detection logic here
    // For advanced detection, consider using an ML model
    if (/^[א-ת]+$/.test(input)) {
        return 'he'; // Hebrew
    }
    return 'en'; // Defaulting to English
}

// Function to determine gender based on name (this is a simplified example)
function detectGender(name) {
    const maleNames = ['יוסי', 'מאיר', 'אברהם']; // Example male names
    const femaleNames = ['שרה', 'מיכל', 'רחלי']; // Example female names
    if (maleNames.includes(name)) return 'male';
    if (femaleNames.includes(name)) return 'female';
    return 'unknown'; // Gender could not be determined
}

// Function to manage Hebrew conversation flow
async function handleHebrewConversation(input) {
    const language = detectLanguage(input);
    if (language !== 'he') {
        throw new Error('Input is not in Hebrew');
    }

    // Generate a GPT response in Hebrew
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
        language: 'he'
    });
    return response;
}

// Function to pitch debt relief
async function pitchDebtRelief() {
    const pitchMessage = 'שלום! האם אתה מתמודד עם קשיים כלכליים? אנחנו כאן כדי לעזור לך למצוא פתרונות...';
    return pitchMessage;
}

// Exporting functions for external use
module.exports = {
    detectLanguage,
    detectGender,
    handleHebrewConversation,
    pitchDebtRelief
};
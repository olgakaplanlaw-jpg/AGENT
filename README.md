# Hebrew Voice Agent

## Installation Instructions
1. **Clone the repository:**  
   ```bash
   git clone https://github.com/olgakaplanlaw-jpg/AGENT.git
   cd AGENT
   ```  
2. **Install dependencies:**  
   ```bash
   npm install
   ```  

## Configuration Guide
- Create a `.env` file in the root directory and input your configuration settings:
   ```plaintext
   API_KEY=your_api_key
   LANGUAGE=he
   ```

## Usage Examples
1. **Starting the Agent:**  
   ```bash
   node index.js
   ```  
2. **Making a voice call:**  
   ```javascript
   const agent = require('./agent');  
   agent.call('Hello, how can I assist you?');
   ```

## API Documentation
- **GET /api/voice:**  
   - Returns the voice data.
   - **Parameters:**
        - `text`: Text to be converted to speech.
   - **Response:** Speech audio file.

- **POST /api/configure:**  
   - Configures the agent with new settings.
   - **Request Body:**
        - `config`: New configuration object.
   - **Response:** Confirmation message.  

For further details, refer to the [API documentation](link-to-additional-docs).

const core = require('@actions/core');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function run() {
  try {
    // Get the input parameters
    const filePath = core.getInput('file-path') || './openapi.json';
    const apiUrl = core.getInput('api-url') || 'https://vibranium-api-guard.onrender.com/api/endpoints/ingest';    // Resolve the file path
    const absoluteFilePath = path.resolve(filePath);

    // Read the JSON file
    const fileData = fs.readFileSync(absoluteFilePath, 'utf8');
    const jsonData = JSON.parse(fileData);

    // Make the API call
    const response = await axios.post(apiUrl, jsonData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Log the response
    console.log(`Response Status: ${response.status}`);
    console.log(`Response Data: ${JSON.stringify(response.data)}`);
    
    // Set the output
    core.setOutput('response-status', response.status);
    core.setOutput('response-data', JSON.stringify(response.data));
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();
import { getInput, setOutput, setFailed } from '@actions/core';
import { post } from 'axios';
import { readFileSync } from 'fs';
import { resolve } from 'path';

async function run() {
  try {
    // Get the input parameters
    const filePath = getInput('file-path') || './openapi.json';
    const apiUrl = getInput('api-url') || 'https://vibranium-api-guard.onrender.com/api/endpoints/ingest';    // Resolve the file path
    const absoluteFilePath = resolve(filePath);

    // Read the JSON file
    const fileData = readFileSync(absoluteFilePath, 'utf8');
    const jsonData = JSON.parse(fileData);

    // Make the API call
    const response = await post(apiUrl, jsonData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Log the response
    console.log(`Response Status: ${response.status}`);
    console.log(`Response Data: ${JSON.stringify(response.data)}`);
    
    // Set the output
    setOutput('response-status', response.status);
    setOutput('response-data', JSON.stringify(response.data));
  } catch (error) {
    setFailed(`Action failed with error: ${error.message}`);
  }
}

run();
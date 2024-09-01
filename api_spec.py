import os
import requests
import json

# Get environment variables
file_path = os.getenv('FILE_PATH') or 'openapi.json'
api_url = os.getenv('API_URL') or 'http://localhost:4000/api/endpoints/ingest'
api_key = os.getenv('API_KEY')

# Check if the file exists
if not os.path.isfile(file_path):
    raise FileNotFoundError(f"The file {file_path} does not exist.")

# Read the file and send it to the API
with open(file_path, 'rb') as file:
    data = json.load(file)
    headers = {'Authorization': f'Bearer {api_key}'}
    response = requests.post(api_url, headers=headers, json=data)

# Check the response
if response.status_code == 200:
    print('File sent successfully!')
else:
    print(f'Failed to send file. Status code: {response.status_code}')
    print(f'Response: {response.text}')
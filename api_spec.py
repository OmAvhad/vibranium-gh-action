import os
import requests

# Get environment variables
file_path = os.getenv('FILE_PATH')
api_url = os.getenv('API_URL')
api_key = os.getenv('API_KEY')

# Check if the file exists
if not os.path.isfile(file_path):
    raise FileNotFoundError(f"The file {file_path} does not exist.")

# Read the file and send it to the API
with open(file_path, 'rb') as file:
    files = {'file': file}
    headers = {'Authorization': f'Bearer {api_key}'}
    response = requests.post(api_url, headers=headers, files=files)

# Check the response
if response.status_code == 200:
    print('File sent successfully!')
else:
    print(f'Failed to send file. Status code: {response.status_code}')
    print(f'Response: {response.text}')

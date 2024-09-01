# Vibranium Action
## Description

**Vibranium Action** is a GitHub Action that reads a JSON file from your repository and makes an API call to a specified endpoint.

## Inputs

- **`file-path`**: Path to the JSON file in the repository (Required).
- **`api-url`**: The API endpoint to call (Required).

## Usage

```yaml
name: Vibranium Action

on: [push]

jobs:
  call-api:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      
      - name: Call API with JSON Data
        uses: OmAvhad/vibranium-action@v1
        with:
          file-path: 'openapi.json'
          api-url: 'https://api.example.com/endpoint'
          api-key: ${{ secrets.API_KEY }}

# vibranium-gh-action

This GitHub Action scans code and generates OpenAPI specification from your repository to Vibranium.

## Usage

### 1. Add Secrets

Add the following secrets to your repository:

- `API_URL`: The URL of the API to which the file will be sent.
- `API_KEY`: The API key for authentication.

### 2. Example Workflow

```yaml
name: Vibranium API specification transfer

on:
  push:
    branches:
      - main

jobs:
  send_file_job:
    runs-on: ubuntu-latest

    steps:
      - name: Vibranium API specification transfer
        uses: your-username/your-action-repo@main
        with:
          file_path: 'path/to/your/file.txt'
          api_url: ${{ secrets.API_URL }}
          api_key: ${{ secrets.API_KEY }}
```	
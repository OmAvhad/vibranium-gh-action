# Use the official Python image from the Docker Hub
FROM python:3.9

# Set the working directory in the container
WORKDIR /action

# Copy the Python script into the container
COPY api_spec.py /action/

# Install any Python dependencies
RUN pip install requests

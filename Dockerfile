FROM python:3.11-slim

WORKDIR /docs

# Install git
RUN apt-get update && \
    apt-get install -y git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

ENTRYPOINT ["mkdocs"]
CMD ["serve", "-a", "0.0.0.0:8000"]

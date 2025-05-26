FROM python:3.11-slim

WORKDIR /docs

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

ENTRYPOINT ["mkdocs"]
CMD ["serve", "-a", "0.0.0.0:8000"]

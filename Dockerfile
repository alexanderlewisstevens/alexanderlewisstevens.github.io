FROM ruby:3.2

# Install dependencies for Jekyll and native gem extensions.
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    ca-certificates \
    git \
    nodejs \
    && rm -rf /var/lib/apt/lists/*

RUN groupadd -g 1000 vscode && \
    useradd -m -u 1000 -g vscode -s /bin/bash vscode

WORKDIR /usr/src/app

COPY Gemfile ./

RUN bundle install && \
    chown -R vscode:vscode /usr/src/app /usr/local/bundle

USER vscode

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "-H", "0.0.0.0", "-P", "4000", "-w", "--force_polling", "--config", "_config.yml,_config_docker.yml"]

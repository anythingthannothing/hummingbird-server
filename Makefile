#!make
ENV_FILE = ./.env.development

sql-up:
	docker compose --env-file $(ENV_FILE) up -d mysql

mongo-up:
	docker compose --env-file $(ENV_FILE) up -d mongo
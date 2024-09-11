up:
	npx sequelize-cli db:migrate && npm run dev
seed:
	npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
	
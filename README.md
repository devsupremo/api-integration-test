# Teste Técnico
teste tecnico de integração

# Como usar
## Clone o repositório
```bash
git clone https://github.com/devsupremo/api-integration-test.git
```
## Instale as dependências
```bash
yarn
```
## Adicione as apikeys e db_string no .env
renomeie o arquivo .env.example para .env e adicione as keys necessarias

## Inicie no modo dev
```bash
yarn dev
```

## Endpoints
GET /pipedrive-orders
retorna todos os negócios com status 'ganho' do pipedrive

GET /orders
retorna todos os negócios salvos no mongoDB

GET /total-orders
retorna o valor total de todos os negócios no momento da integração

GET /integration
inicia uma integração entre a api do pipedrive e bling, pegando todos os negócios com status 'ganho' e inserindo como pedido na plataforma Bling, armazenando os negócios no mongoDB



# star-wars
Projeto frontend Star Wars criado com ReactJS

## Rodando a aplicação:

+ **Instale as dependências**
  ```
  yarn
  ```

+ **Então rode o comando para startar o servidor**
  ```
  yarn dev
  ```
A aplicação rodará na porta [3002](http://localhost:3002)

## Rodando build para produção:
  ```
  yarn
  ```
  ```
  yarn build
  ```

---

## Testes:
+ ### Testes unitários
  ```
  yarn test
  ```

+ ### Cobertura dos testes
  ```
  yarn test:coverage
  ```

*Obs: Ainda em implementação*

---

## Decisões técnicas:
Utilizei a estrutura fractal no projeto, facilitando a assim componentização.
[Aqui](https://blog.taller.net.br/um-ensaio-sobre-arquitetura-fractal-usando-webpack-e-react/) um artigo sobre arquitetura fractal.

Me preocupei com os possíveis erros que podem ocorrer devido as requisições para a api backend. Todos os componentes que fazem requisição tem cards de erro com botão de retentativa e/ou toasters de erro.
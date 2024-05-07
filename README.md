# Dogs-Origamid

Este projeto é uma rede social dedicada aos cachorros. Desenvolvido como parte do curso de React da Origamid, oferece aos usuários a oportunidade de compartilhar fotos de seus queridos pets, interagir com outros donos de cachorros e explorar uma comunidade amigável e dedicada aos animais de estimação.

## Aprendizados 📗

Durante o desenvolvimento deste projeto, foram adquiridos diversos aprendizados em relação ao desenvolvimento de aplicações web com React. Alguns desafios enfrentados incluíram o gerenciamento de estado da aplicação, o uso de TailwindCSS para estilização eficiente e a integração com uma API externa para obtenção e manipulação de dados relacionados aos usuários, fotos e interações na plataforma.

## Stack utilizada 💻

- React
- React Router
- React Hook Form
- Tailwind CSS
- Victory

## Documentação da API

A seguir, estão listados os endpoints principais da API utilizada neste projeto, juntamente com uma breve descrição de suas funcionalidades:

### Autenticação 🔒

#### Obter token JWT

```http
POST /jwt-auth/v1/token
```

**Corpo da requisição (body):**

```json
{
  "username": "string",
  "password": "string"
}
```

**Headers:**

* Content-Type: application/json

**Resposta:**

* Sucesso: Retorna um objeto contendo o token JWT.
* Erro: Retorna um objeto contendo o erro.

#### Validar token JWT

```http
POST /jwt-auth/v1/token/validate
```

**Headers:**

* Authorization: Bearer <token> (onde `<token>` é o token JWT obtido anteriormente)

**Resposta:**

* Sucesso: Retorna `true`.
* Erro: Retorna `false`.

### Usuários 😉

#### Obter informações do usuário logado

```http
GET /api/user
```

**Headers:**

* Authorization: Bearer <token> (onde `<token>` é o token JWT obtido anteriormente)

**Resposta:**

* Sucesso: Retorna um objeto contendo os dados do usuário.
* Erro: Retorna um objeto contendo o erro.

#### Criar um novo usuário

```http
POST /api/user
```

**Corpo da requisição (body):**

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Headers:**

* Content-Type: application/json

**Resposta:**

* Sucesso: Retorna um objeto contendo os dados do usuário criado.
* Erro: Retorna um objeto contendo o erro.

### Fotos 📷

#### Enviar uma nova foto

```http
POST /api/photo
```

**Corpo da requisição (multipart/form-data):**

* image: Arquivo de imagem.

**Headers:**

* Authorization: Bearer <token> (onde `<token>` é o token JWT obtido anteriormente)

**Resposta:**

* Sucesso: Retorna um objeto contendo os dados da foto enviada.
* Erro: Retorna um objeto contendo o erro.

#### Obter lista de fotos

```http
GET /api/photo/?_page=${page}&_total=${total}&_user=${user}
```

**Parâmetros:**

* page: Número da página (opcional).
* total: Quantidade de itens por página (opcional).
* user: ID do usuário para filtrar por fotos (opcional).

**Headers:**

* Cache: no-store (para evitar cache na navegação)

**Resposta:**

* Sucesso: Retorna um array contendo objetos com dados das fotos.
* Erro: Retorna um objeto contendo o erro.

#### Obter detalhes de uma foto

```http
GET /api/photo/${id}
```

**Parâmetros:**

* id: ID da foto.

**Headers:**

* Cache: no-store (para evitar cache na navegação)

**Resposta:**

* Sucesso: Retorna um objeto contendo os detalhes da foto.
* Erro: Retorna um objeto contendo o erro.

#### Deletar uma foto

```http
DELETE /api/photo/${id}
```

**Parâmetros:**

* id: ID da foto.

**Headers:**

* Authorization: Bearer <token> (onde `<token>` é o token JWT obtido anteriormente)

**Resposta:**

* Sucesso: Retorna um objeto vazio.
* Erro: Retorna um objeto contendo o erro.

### Comentários 💬

#### Enviar um comentário para uma foto

```http
POST /api/comment/${id}
```

**Parâmetros:**

* id: ID da foto.

**Corpo da requisição (body):**

```json
{
  "comment": "string"
}
```

**Headers:**

* Content-Type: application/json
* Authorization: Bearer <token> (onde `<token>` é o token JWT obtido anteriormente)

**Resposta:**

* Sucesso: Retorna um objeto contendo os dados do comentário enviado.
* Erro: Retorna um objeto contendo o erro.

### Senha 🔑

#### Recuperar senha

```http
POST /api/password/lost
```

**Corpo da requisição (body):**

```json
{
  "email": "string"
}
```

**Headers:**

* Content-Type: application/json

**Resposta:**

* Sucesso: Retorna um objeto vazio (indica que o email de recuperação de senha foi enviado para o email do usuário.)
* Erro: Retorna um objeto contendo o erro.

#### Resetar senha

```http
POST /api/password/reset
```

**Corpo da requisição (body):**

```json
{
  "token": "string",
  "password": "string"
}
```

**Headers:**

* Content-Type: application/json

**Resposta:**

* Sucesso: Retorna um objeto vazio (indica que a senha foi resetada com sucesso).
* Erro: Retorna um objeto contendo o erro.

### Estatísticas 📁

#### Obter estatísticas do usuário logado

```http
GET /api/stats
```

**Headers:**

* Authorization: Bearer <token> (onde `<token>` é o token JWT obtido anteriormente)

**Resposta:**

* Sucesso: Retorna um objeto contendo as estatísticas do usuário.
* Erro: Retorna um objeto contendo o erro.

**Observações:**

* Todos os endpoints que exigem autenticação retornam um objeto de erro em caso de falha na autenticação.
* Os endpoints que retornam uma lista de fotos podem ser paginados utilizando os parâmetros `page` e `total`.
* O endpoint para deletar uma foto só pode ser utilizado pelo usuário que a enviou.
* O endpoint para enviar um comentário requer que o usuário esteja logado.
* O endpoint para recuperar senha envia um email para o usuário com um link para resetar a senha.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <h1 align="center">I-Love-Coffee</h1>
  <p align="center">A project from the NestJS Foundamentals official course.</p>

## Requirements

* [Node.js](https://nodejs.org/en) v12.0.0 or later
* [yarn](https://yarnpkg.com/getting-started/install) or npm (Node Package Manager)
* [Docker](https://www.docker.com/get-started)
* [Nest CLI](https://docs.nestjs.com/cli/overview)

## Getting Started

1. Clone the repo in your machine.
```bash
git clone https://github.com/nicolasbracigliano/ilovecoffee.git
```

2. Install the dependencies.
```bash
$ yarn install
```

3. Create a `.env` file in the root of the project with the following environment variables.
```bash
DATABASE_USER=<db_user>
DATABASE_PASSWORD=<db_password>
DATABASE_NAME=<db_name>
DATABASE_PORT=<db_port>
DATABASE_HOST=<db_host>
```

## Running the app

1. Spin the DB using docker

```bash
docker compose up db -d
```

2. Start the development server in watch mode.
```bash
yarn run start:dev
```

3. Visit http://localhost:3000/ to access the running application.

4. Use the Postman Collection to interact with the API.

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Navigating the code

The project is structured such that each chapter has its own branch. This allows for easy access to the chapter of interest and retrieval of the final chapter code. Moreover, every topic within a chapter is accompanied by a corresponding commit.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

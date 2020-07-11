# Database Entities

[![code style: eslint](https://img.shields.io/badge/code_style-eslint-8080F2.svg?style=flat-square)](https://github.com/eslint/eslint)

## Generating Migrations

1. Create ormconfig.production and fill out database credentials. (Do not submit.)

2. > ```bash
   > npm run typeorm migration:generate -- --name initialize --connection patreon --config ormconfig.production
   > ```

3. Commit the migration.

## Running Migrations

```bash
npm run typeorm migration:run -- --connection patreon --config ormconfig.production
```

## Setting up NPM

```.npmrc
@flashflashrevolution:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=TOKEN_WITH_PACKAGE_PERMS
```

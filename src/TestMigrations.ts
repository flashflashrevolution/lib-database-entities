// import { addExpiresAtColumn1594360198754 } from "./migration/1594360198754-addExpiresAtColumn";
// import { ImportEnvironmentVariables } from "./Config";
// ImportEnvironmentVariables();

// import { Initialize } from "./Database";
// import { Connection, getConnection } from 'typeorm';

// const DB_PATREON: string = process.env.DB_PATREON as string;

// const DB_HOST: string = process.env.DB_HOST as string;
// const DB_PATREON: string = process.env.DB_PATREON as string;
// const DB_PATREON_USER: string = process.env.DB_PATREON_USER as string;
// const DB_PATREON_PASS: string = process.env.DB_PATREON_PASS as string;

// const connectionOptions: ConnectionOptions =
// {
//     name: DB_PATREON,
//     type: "mysql",
//     host: DB_HOST,
//     port: 3306,
//     username: DB_PATREON_USER,
//     password: DB_PATREON_PASS,
//     database: DB_PATREON,
//     entities: ["src/entity/**/*.ts"]
// };

// Initialize(connectionOptions);

// const migration: addExpiresAtColumn1594360198754 = new addExpiresAtColumn1594360198754();
// const connection: Connection = getConnection(DB_PATREON);

// if (!connection.isConnected)
// {
//     connection.connect()
//         .catch(error => 
//         {
//             console.log(error);
//         });
// }
// migration.up(connection.createQueryRunner())
//     .catch(error =>
//     {
//         console.log(error);
//     });

// import { addExpiresAtColumn1594360198754 } from "./migration/1594360198754-addExpiresAtColumn";
// import { ImportEnvironmentVariables } from "./Config";
// ImportEnvironmentVariables();

// import { Initialize } from "./Database";
// import { Connection, getConnection } from 'typeorm';

// const DB_PATREON: string = process.env.DB_PATREON as string;

// Initialize();

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

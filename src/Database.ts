/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { createConnection } from 'typeorm';

const DB_HOST: string = process.env.DB_HOST as string;
const DB_PATREON: string = process.env.DB_PATREON as string;
const DB_PATREON_USER: string = process.env.DB_PATREON_USER as string;
const DB_PATREON_PASS: string = process.env.DB_PATREON_PASS as string;

function Initialize(): boolean
{
    let success = true;

    createConnection({
        name: DB_PATREON,
        type: "mysql",
        host: DB_HOST,
        port: 3306,
        username: DB_PATREON_USER,
        password: DB_PATREON_PASS,
        database: DB_PATREON,
        entities: ["src/entity/**/*.ts"]
    })
        .catch(error =>
        {
            console.error(error);
            success = false;
        });

    return success;
}

export { Initialize };

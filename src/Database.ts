/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { createConnection, ConnectionOptions, Connection } from 'typeorm';

async function Initialize(connectionOptions: ConnectionOptions): Promise<Connection>
{
    return await createConnection(connectionOptions)
        .then((value: Connection) =>
        {
            return Promise.resolve(value);
        })
        .catch(() =>
        {
            return Promise.reject("Unable to connect to database.");
        });
}

export { Initialize };

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { createConnection, ConnectionOptions } from 'typeorm';

function Initialize(connectionOptions: ConnectionOptions): boolean
{
    let success = true;

    createConnection(connectionOptions)
        .catch(error =>
        {
            console.error(error);
            success = false;
        });

    return success;
}

export { Initialize };

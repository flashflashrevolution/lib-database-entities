import * as dotenv from 'dotenv';

function ImportEnvironmentVariables(): void
{
    dotenv.config({ path: "./.env" });
}

export { ImportEnvironmentVariables };

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { MysqlErrorCodes } from 'mysql-error-codes';
import { PatreonLink } from '../entity/PatreonLink';
import { AccessToken } from 'simple-oauth2';
import { Connection } from 'typeorm';

enum Result
{
    SUCCESS,
    DUPLICATE,
}

function BindUserData(accessToken: AccessToken, ffrUserId: number): PatreonLink
{
    const link: PatreonLink = new PatreonLink();
    link.access_token = accessToken.token.access_token;
    link.access_token = JSON.stringify(accessToken.token);
    link.ffr_userid = ffrUserId;
    link.expires_at = accessToken.token.expires_at;
    return link;
}

async function WriteLinkData(connection: Connection, accessToken: AccessToken, ffrUserId: number): Promise<Result>
{
    let result: Result = Result.SUCCESS;

    const link: PatreonLink = BindUserData(accessToken, ffrUserId);

    await connection.manager.save(link)
        .catch((error) =>
        {
            switch (error.errno)
            {
                case MysqlErrorCodes.ER_DUP_ENTRY:
                    console.log(`PatreonLink with ffr_userid ${link.ffr_userid} already exists.`);
                    result = Result.DUPLICATE;
                    return Promise.resolve();
                    break;
                default:
                    return Promise.reject(error);
            }
        });
    
    return result;
}

async function ReadLinkData(connection: Connection, ffrUserId: number): Promise<PatreonLink[]>
{
    return await connection.getRepository(PatreonLink)
        .find({ where: { ffr_userid: ffrUserId } });
}

export { ReadLinkData, WriteLinkData, Result };

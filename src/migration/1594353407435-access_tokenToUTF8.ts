import { MigrationInterface, QueryRunner } from "typeorm";

export class accessTokenToUTF81594353407435 implements MigrationInterface
{
    name = 'accessTokenToUTF81594353407435';

    public async up(queryRunner: QueryRunner): Promise<any>
    {
        await queryRunner.query("ALTER TABLE `patreon_links` CHANGE `access_token` `access_token` text CHARACTER SET \"utf8\" NOT NULL DEFAULT ''", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any>
    {
        await queryRunner.query("ALTER TABLE `patreon_links` CHANGE `access_token` `access_token` text CHARACTER SET \"utf8\" COLLATE \"utf8_general_ci\" NOT NULL", undefined);
    }
}

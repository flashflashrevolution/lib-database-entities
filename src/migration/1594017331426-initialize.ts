import { MigrationInterface, QueryRunner } from "typeorm";

export class initialize1594017331426 implements MigrationInterface
{
    name = 'initialize1594017331426';

    public async up(queryRunner: QueryRunner): Promise<any>
    {
        await queryRunner.query(
            "CREATE TABLE `patreon_links`\
            (`id` int NOT NULL AUTO_INCREMENT,\
            `access_token` text CHARACTER SET \"utf8\" NOT NULL DEFAULT '',\
            `ffr_userid` int(10) UNSIGNED NOT NULL DEFAULT 0,\
            UNIQUE INDEX `IDX_ae5c79e37af1086df97e9508ff` (`ffr_userid`),\
            PRIMARY KEY (`id`))\
            ENGINE=InnoDB",
            undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any>
    {
        await queryRunner.query(
            "DROP INDEX `IDX_ae5c79e37af1086df97e9508ff` ON `patreon_links`",
            undefined);

        await queryRunner.query(
            "DROP TABLE `patreon_links`",
            undefined);
    }

}

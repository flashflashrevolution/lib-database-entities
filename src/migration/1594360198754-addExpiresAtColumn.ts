import { MigrationInterface, QueryRunner, Repository } from "typeorm";
import { PatreonLink } from "../entity/PatreonLink";

export class addExpiresAtColumn1594360198754 implements MigrationInterface
{
    name = 'addExpiresAtColumn1594360198754';

    public async up(queryRunner: QueryRunner): Promise<any>
    {
        await queryRunner.query("ALTER TABLE `patreon_links` ADD `expires_at` datetime NOT NULL");

        try
        {
            var linkRepository: Repository<PatreonLink> =
                await queryRunner.manager.getRepository(PatreonLink);

            var linkCount: number = await linkRepository.count();

            if (linkCount > 0)
            {
                const PAGE: number = 1000;
                var index: number = 0;
                while (index < linkCount)
                {
                    var links: PatreonLink[] = await linkRepository.find({ skip: index, take: PAGE });

                    try
                    {
                        for (let link of links)
                        {
                            const result = JSON.parse(link.access_token);
                            link.expires_at = result.expires_at;
                            queryRunner.manager.save(link);
                        }
                    }
                    catch (err)
                    {
                        await queryRunner.rollbackTransaction();
                    }

                    index += PAGE;
                }
            }
        }
        catch
        {
            await queryRunner.rollbackTransaction();
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any>
    {
        await queryRunner.query("ALTER TABLE `patreon_links` DROP COLUMN `expires_at`");
    }
}

import
{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

import { String } from 'typescript-string-operations';

@Entity({ name: "patreon_links" })
export class PatreonLink
{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column(
        {
            charset: "utf8",
            default: String.Empty,
            type: "text",
        })
    access_token!: string;

    @Column(
        {
            default: 0,
            type: "int",
            unique: true,
            unsigned: true,
            width: 10,
        })
    ffr_userid!: number;

    @Column()
    expires_at!: Date;
}

import { type MigrationInterface, type QueryRunner, Table } from "typeorm";

export class CreateTableTags1712008377739 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tags",

                columns: [
                    {
                        name: "id",
                        type: "INT",
                        isPrimary: true,
                        isGenerated: true,
                        isUnique: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "tags",
                        type: "varchar",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}

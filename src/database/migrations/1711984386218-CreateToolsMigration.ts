import { Table, type MigrationInterface, type QueryRunner } from "typeorm";

export class CreateToolsMigration1711984386218 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tools",
                columns: [
                    {
                        name: "tittle",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        isUnique: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "link",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropDatabase("tools");
    }
}

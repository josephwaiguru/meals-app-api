import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class MealCategories1652701163851 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "meal_categories_category",
                columns: [
                    {
                        name: "meal_id",
                        type: "int"
                    },
                    {
                        name: "category_id",
                        type: "int"
                    },
                ],
            }),
            true,
        )

        await queryRunner.createForeignKey(
            "meal_categories_category",
            new TableForeignKey({
                columnNames: ["meal_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "meals",
                onDelete: "CASCADE",
            }),
        )

        await queryRunner.createForeignKey(
            "meal_categories_category",
            new TableForeignKey({
                columnNames: ["category_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "categories",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Todo: Drop foreign keys
        await queryRunner.dropTable("meal_categories_category");
    }

}

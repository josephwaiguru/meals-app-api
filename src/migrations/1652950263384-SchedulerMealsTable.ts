import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class SchedulerMealsTable1652950263384 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "schedule_meals_meal",
                columns: [                    
                    {
                        name: "schedule_id",
                        type: "int"
                    },
                    {
                        name: "meal_id",
                        type: "int"
                    },
                ],
            }),
            true,
        )

        await queryRunner.createForeignKey(
            "schedule_meals_meal",
            new TableForeignKey({
                columnNames: ["schedule_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "schedule",
                onDelete: "CASCADE",
            }),
        )

        await queryRunner.createForeignKey(
            "schedule_meals_meal",
            new TableForeignKey({
                columnNames: ["meal_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "meals",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Todo: Drop foreign keys
        await queryRunner.dropTable("schedule_meals_meal");
    }

}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRentals1617235820842 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "rentals",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "car_id",
            type: "uuid",
          },
          {
            name: "start_date",
            type: "varchar",
            default: "now()",
          },
          {
            name: "end_date",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "total",
            type: "numeric",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("rentals");
  }
}

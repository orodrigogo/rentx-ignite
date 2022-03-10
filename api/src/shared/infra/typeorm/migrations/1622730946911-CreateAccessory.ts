import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAccessory1622730946911 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "accessories",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "car_id",
            type: "uuid",            
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "type",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("accessories");
  }
}

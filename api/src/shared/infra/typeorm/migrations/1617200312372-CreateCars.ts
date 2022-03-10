import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCars1617200312372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cars",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "brand",
            type: "varchar",
          },
          {
            name: "about",
            type: "varchar",
          },
          {
            name: "period",
            type: "varchar",
          },
          {
            name: "price",
            type: "numeric",
          },   
          {
            name: "fuel_type",
            type: "varchar",
          }, 
          {
            name: "thumbnail",
            type: "varchar",
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
    await queryRunner.dropTable("cars");
  }
}

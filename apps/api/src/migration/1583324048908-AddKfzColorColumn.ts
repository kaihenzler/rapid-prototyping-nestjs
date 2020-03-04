import {MigrationInterface, QueryRunner} from "typeorm";

export class AddKfzColorColumn1583324048908 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "kfz" ADD "farbe" varchar(50)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}

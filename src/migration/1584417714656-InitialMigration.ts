import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1584417714656 implements MigrationInterface {
    name = 'InitialMigration1584417714656'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "message" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "createdAt" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "song" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "firstPlayed" character varying, "lastPlayed" character varying, "currentGap" integer, "timesPlayed" integer NOT NULL, CONSTRAINT "PK_baaa977f861cce6ff954ccee285" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "song_instance" ("id" SERIAL NOT NULL, "setNumber" integer NOT NULL, "position" integer NOT NULL, "description" character varying NOT NULL, "jamChart" boolean NOT NULL, "songId" integer, "showId" integer, CONSTRAINT "PK_173ca4b3bb6f9b5687480bba29d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "venue" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "timesPlayed" integer NOT NULL, CONSTRAINT "PK_c53deb6d1bcb088f9d459e7dbc0" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "show" ("id" SERIAL NOT NULL, "date" character varying NOT NULL, "rating" integer NOT NULL, "venueId" integer, CONSTRAINT "PK_e9993c2777c1d0907e845fce4d1" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_446251f8ceb2132af01b68eb593" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "song_instance" ADD CONSTRAINT "FK_3b0ba6d7a58ae8bdf79ca4ce7fb" FOREIGN KEY ("songId") REFERENCES "song"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "song_instance" ADD CONSTRAINT "FK_c1707354c956db1a63170a0ea8d" FOREIGN KEY ("showId") REFERENCES "show"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "show" ADD CONSTRAINT "FK_d1049cd4f595c023d3eb2701bdb" FOREIGN KEY ("venueId") REFERENCES "venue"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "show" DROP CONSTRAINT "FK_d1049cd4f595c023d3eb2701bdb"`, undefined);
        await queryRunner.query(`ALTER TABLE "song_instance" DROP CONSTRAINT "FK_c1707354c956db1a63170a0ea8d"`, undefined);
        await queryRunner.query(`ALTER TABLE "song_instance" DROP CONSTRAINT "FK_3b0ba6d7a58ae8bdf79ca4ce7fb"`, undefined);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_446251f8ceb2132af01b68eb593"`, undefined);
        await queryRunner.query(`DROP TABLE "show"`, undefined);
        await queryRunner.query(`DROP TABLE "venue"`, undefined);
        await queryRunner.query(`DROP TABLE "song_instance"`, undefined);
        await queryRunner.query(`DROP TABLE "song"`, undefined);
        await queryRunner.query(`DROP TABLE "message"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}

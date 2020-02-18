import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        nullable: true
    })
    firstPlayed: string;

    @Column({
        nullable: true
    })
    lastPlayed: string;

    @Column({
        nullable: true
    })
    currentGap: number;

    @Column()
    timesPlayed: number;
}
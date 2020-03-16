import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Show } from "./Show";

@Entity()
export class Venue extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    timesPlayed: number;

    @OneToOne(() => Show, show => show.id)
    firstTime: Show;

    @OneToOne(() => Show, show => show.id)
    lastTime: Show;
}
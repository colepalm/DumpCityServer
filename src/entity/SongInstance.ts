import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Show } from "./Show";
import { Song } from "./Song";

@Entity()
export class SongInstance extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    song: Song;

    @Column()
    setNumber: number;

    @Column()
    position: number;

    @Column()
    show: Show;

    @Column()
    description: string;

    @Column()
    jamChart: boolean;
}
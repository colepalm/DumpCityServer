import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Show } from "./Show";
import { Song } from "./Song";

@Entity()
export class SongInstance extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Song, song => song.id)
    song: Song;

    @Column()
    setNumber: number;

    @Column()
    position: number;

    @ManyToOne(() => Show, show => show.id)
    show: Show;

    @Column()
    description: string;

    @Column()
    jamChart: boolean;
}
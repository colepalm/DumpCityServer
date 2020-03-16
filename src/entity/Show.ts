import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';

import { SongInstance } from "./SongInstance";
import { Venue } from "./Venue";

@Entity()
export class Show extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @ManyToOne(() => Venue, venue => venue.id)
    venue: Venue;

    @Column()
    rating: number;

    @OneToMany(() => SongInstance, songInstance => songInstance.id)
    setlist: SongInstance[];
}
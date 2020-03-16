import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';

import { SongInstance } from "./SongInstance";

@Entity()
export class Show extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    venueId: number;

    @Column()
    rating: number;

    @OneToMany(() => SongInstance, songInstance => songInstance.id)
    setlist: SongInstance[];
}
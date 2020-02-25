import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column()
    setlist: SongInstance[];
}
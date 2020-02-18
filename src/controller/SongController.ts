import { Controller, Mutation } from "vesper";
import { EntityManager } from 'typeorm';

import { Song } from "../entity/Song";
import { SongArgs } from "../args/SongArgs";

@Controller()
export class SongController {
    constructor(private manager: EntityManager) { }

    @Mutation()
    createSong(args: SongArgs) {
        console.log('here');
        args.timesPlayed = 1;
        const song = this.manager.create(Song, args);

        return this.manager.save(Song, song);
    }
}
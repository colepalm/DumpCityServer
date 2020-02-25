import { Controller, Mutation } from "vesper";
import { EntityManager } from 'typeorm';
import { SongInstance } from "../entity/SongInstance";

@Controller()
export class SongInstanceController {
    constructor(private manager: EntityManager) { }

    @Mutation()
    createSongInstance(args) {
        const songInstance = this.manager.create(SongInstance, args);
        return this.manager.create(SongInstance, songInstance);
    }

}
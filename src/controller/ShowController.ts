import { EntityManager } from 'typeorm';
import { Mutation, Query } from "vesper";

import { Show } from "../entity/Show";

export class ShowController {
    constructor(private manager: EntityManager) { }

    @Query()
    shows() {
        return this.manager.find(Show)
    }

    @Mutation()
    createShow({ date, venue, rating }) {
        const show = this.manager.create(Show, { date, venue, rating });
        return this.manager.save(show);
    }
}
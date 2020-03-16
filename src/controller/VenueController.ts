import { Controller, Mutation, Query } from "vesper";
import { EntityManager } from 'typeorm';
import { Venue } from "../entity/Venue";

@Controller()
export class VenueController {
    constructor(private manager: EntityManager) { }

    @Query()
    venue({ venue }) {
        return this.manager.findOne(venue)
    }

    @Query()
    venues() {
        return this.manager.find(Venue)
    }

    @Mutation()
    createVenue({ name, city, state, country }) {
        const venue = this.manager.create(Venue, { name, city, state, country });
        venue.timesPlayed = 0;
        return this.manager.save(Venue, venue);
    }
}
import { Controller, Query } from "vesper";
import { EntityManager } from 'typeorm';

@Controller()
export class MessageController {
    constructor(private manager: EntityManager) { }
}
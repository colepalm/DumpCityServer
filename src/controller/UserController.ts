import "reflect-metadata";
import { Controller, Mutation, Query } from 'vesper';
import { EntityManager } from 'typeorm';
import { User } from '../entity/User';

@Controller()
export class UserController {
  constructor(private entityManager: EntityManager) { }

  @Query()
  users() {
    return this.entityManager.find(User);
  }

  @Query()
  user({ id }) {
    return this.entityManager.findOne(User, id);
  }

  @Mutation()
  signUp(args) {
    const user = this.entityManager.create(User, args);
    return this.entityManager.save(User, user);
  }

  @Mutation()
  signIn(args) {
    return this.entityManager.find(User, args)
  }

  @Mutation()
  async deleteUser({ id }) {
    await this.entityManager.remove(User, { id: id });
    return true;
  }
}

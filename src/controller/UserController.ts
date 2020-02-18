import { Controller, Mutation, Query } from 'vesper';
import { EntityManager } from 'typeorm';
import { User } from '../entity/User';
import { SignUp } from "../args/UserArgs";

@Controller()
export class UserController {
  constructor(private manager: EntityManager) { }

  @Query()
  users() {
    return this.manager.find(User);
  }

  @Query()
  user({ id }) {
    return this.manager.findOne(User, id);
  }

  @Mutation()
  signUp(args) {
    const user = this.manager.create(User, args);
    return this.manager.save(User, user);
  }

  @Mutation()
  signIn(args) {
    return this.manager.find(User, args)
  }

  // @Mutation()
  // async deleteUser({ id }) {
  //   const user = await this.manager.remove(User, { id: id });
  //   return true;
  // }
}

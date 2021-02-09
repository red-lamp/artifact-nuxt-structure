import { FooBackstage } from './backstages/foo.backstage';
import { UsersResultDTO } from './dto/users.result.dto';
import { PortOBRepository } from './ports/port.ob.repository';
import { UserRepository } from './repositories/user.repository';

export class FooService extends FooBackstage implements PortOBRepository {
  private userRepository = new UserRepository(this.$axios, this);

  /**
   * Search users service function
   */
  async searchUsers(): Promise<UsersResultDTO> {
    let usersResultDTO = new UsersResultDTO();
    try {
      usersResultDTO =  await this.userRepository.searchUser(this.buildUserRequestModel([536, 537]));
    } catch(err) {
      console.log(err, err.stack, FooService.name);
    }

    return usersResultDTO;
  }

  saveUserToStore(usersResultDTO: UsersResultDTO): void {
    // save user result to store
    this.saveUsersResult(usersResultDTO);
  }
}

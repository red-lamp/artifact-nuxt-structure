import { FooBackstage } from './backstages/foo.backstage';
import { UsersResultDTO } from './dto/users.result.dto';
import { UserRepository } from './repositories/user.repository';

export class FooService extends FooBackstage {
  private userRepository = new UserRepository(this.$axios);

  async searchUsers(): Promise<UsersResultDTO> {
    const usersResult = new UsersResultDTO();
    try {
      const usersSearchResult = await this.userRepository.searchUser(this.buildUserRequestModel([536, 537]));

      usersResult.users = usersSearchResult.users;
  
      this.saveUsersResult(usersResult);
    } catch(err) {
      console.log(err, err.stack, FooService.name);
    }

    return usersResult;
  }
}
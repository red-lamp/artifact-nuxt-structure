import { SearchUsersDTO } from "../dto/search.users.dto";
import { UsersResultDTO } from "../dto/users.result.dto";

export class UserRepository {
  private $axios: any;

  constructor($axios: any) {
    this.$axios = $axios;
  }

  searchUser(searchUsersDTO: SearchUsersDTO): Promise<any> {
    return this.$axios.$post('/users/search', searchUsersDTO);
  }
}

import { SearchUsersDTO } from '../dto/search.users.dto';
import { PortOBRepository } from '../ports/port.ob.repository';

export class UserRepository implements PortOBRepository {
  private $axios: any;

  constructor($axios: any) {
    this.$axios = $axios;
  }

  /**
   * @searchUsersDTO DTO of searchUsers contains ids, ETC.
   * axios search user APIs
   */
  searchUser(searchUsersDTO: SearchUsersDTO): Promise<any> {
    return this.$axios.$post('/users/search', searchUsersDTO);
  }
}

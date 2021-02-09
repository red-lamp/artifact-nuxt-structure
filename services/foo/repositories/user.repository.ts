import { SearchUsersDTO } from '../dto/search.users.dto';
import { UsersResultDTO } from '../dto/users.result.dto';
import { PortOBRepository } from '../ports/port.ob.repository';

export class UserRepository {
  private $axios: any;
  private portOBRepository: PortOBRepository;

  constructor($axios: any, portOBRepository: PortOBRepository) {
    this.$axios = $axios;
    this.portOBRepository = portOBRepository;
  }

  /**
   * @searchUsersDTO DTO of searchUsers contains ids, ETC.
   * axios search user APIs
   */
  async searchUser(searchUsersDTO: SearchUsersDTO): Promise<UsersResultDTO> {
    const usersSearchResult = await this.$axios.$post('/users/search', searchUsersDTO);

    const usersResultDTO = new UsersResultDTO();
    usersResultDTO.users = usersSearchResult.users;

    this.portOBRepository.saveUserToStore(usersResultDTO);

    return usersResultDTO;
  }
}

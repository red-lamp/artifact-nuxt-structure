import { SearchUsersDTO } from '../dto/search.users.dto'

export interface PortOBRepository {
  buildUserRequestModel(usersId: []): SearchUsersDTO;  
}

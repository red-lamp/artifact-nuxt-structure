import { SearchUsersDTO } from '../dto/search.users.dto'

export interface PortOBRepository {
  searchUser(searchUsersDTO: SearchUsersDTO): Promise<any>;
}

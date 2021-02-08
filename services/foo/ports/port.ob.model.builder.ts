import { SearchUsersDTO } from '../dto/search.users.dto'

export interface PortOBModelBuilder {
  buildUserRequestModel(usersId: []): SearchUsersDTO;
}

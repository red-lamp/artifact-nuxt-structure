import { SearchUsersDTO } from '../dto/search.users.dto'

export interface PortIBModelBuilder {
  buildUserRequestModel(usersId: []): SearchUsersDTO;
}

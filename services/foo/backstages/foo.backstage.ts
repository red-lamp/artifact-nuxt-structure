import { BaseService } from '../../base/base.service';
import { PortIBStore } from '../ports/port.ib.store';
import { PortOBRepository } from '../ports/port.ob.repository';
import { SearchUsersDTO } from '../dto/search.users.dto';
import { UsersResultDTO } from '../dto/users.result.dto';

export class FooBackstage extends BaseService implements PortIBStore, PortOBRepository {
  // private userResultDTO: UsersResultDTO = new UsersResultDTO();
  
  saveUsersResult(usersResultDTO: UsersResultDTO) {
    this.store.commit('setUsersResultDTO', usersResultDTO);
    // this.userResultDTO = usersResultDTO;
  }

  getUsersResult(): UsersResultDTO {
    return this.store.state.User.usersResultDTO;
  }

  buildUserRequestModel(usersId: number[]): SearchUsersDTO {
    const searchUserDTO = new SearchUsersDTO();
    searchUserDTO.usersId = usersId;

    return searchUserDTO;
  };
}

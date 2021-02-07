import { BaseService } from '../../base/base.service';
import { PortIBStore } from '../ports/port.ib.store';
import { PortOBRepository } from '../ports/port.ob.repository';
import { SearchUsersDTO } from '../dto/search.users.dto';
import { UsersResultDTO } from '../dto/users.result.dto';
import { getModule } from 'vuex-module-decorators';
import userstoremodule from '../../../store/user.store.module';

export class FooBackstage extends BaseService implements PortIBStore, PortOBRepository {
  private userStore = getModule(userstoremodule, this.store);

  saveUsersResult(usersResultDTO: UsersResultDTO) {
    this.userStore.setUsersResultDTO(usersResultDTO);
  }

  getUsersResult(): UsersResultDTO {
    return this.userStore.userResultDTO;
  }

  buildUserRequestModel(usersId: number[]): SearchUsersDTO {
    const searchUserDTO = new SearchUsersDTO();
    searchUserDTO.usersId = usersId;

    return searchUserDTO;
  };
}

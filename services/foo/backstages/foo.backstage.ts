import { BaseService } from '../../base/base.service';
import { PortIBUserStore } from '../ports/port.ib.user.store';
import { PortOBModelBuilder } from '../ports/port.ob.model.builder';
import { SearchUsersDTO } from '../dto/search.users.dto';
import { UsersResultDTO } from '../dto/users.result.dto';
import { getModule } from 'vuex-module-decorators';
import userstoremodule from '../../../store/user.store.module';

export class FooBackstage extends BaseService implements PortIBUserStore, PortOBModelBuilder {
  private userStore = getModule(userstoremodule, this.store);

  /**
   * @usersResultDTO DTO of users result for store data
   */
  saveUsersResult(usersResultDTO: UsersResultDTO) {
    this.userStore.setUsersResultDTO(usersResultDTO);
  }

  /**
   * get users result from store
   */
  getUsersResult(): UsersResultDTO {
    return this.userStore.userResultDTO;
  }

  /**
   * @usersId id of users
   * build DTO for send with APIs request
   */
  buildUserRequestModel(usersId: number[]): SearchUsersDTO {
    const searchUserDTO = new SearchUsersDTO();
    searchUserDTO.usersId = usersId;

    return searchUserDTO;
  };
}

import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { UsersResultDTO } from "~/services/foo/dto/users.result.dto";

@Module({
  name: 'userstoremodule',
  stateFactory: true,
  namespaced: true,
})
export default class UserStoreModule extends VuexModule {
  private usersResultDTO: UsersResultDTO = new UsersResultDTO();

  @Mutation
  setUsersResultDTO(usersResultDTO: UsersResultDTO) {
    this.usersResultDTO = usersResultDTO;
  }

  get userResultDTO(): UsersResultDTO {
    return this.usersResultDTO
  }
}
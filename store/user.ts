import { UsersResultDTO } from "~/services/foo/dto/users.result.dto";

export const state = () => ({
  usersResultDTO: UsersResultDTO,
});

export const mutations = {
  setUsersResultDTO(state: any, usersResultDTO: UsersResultDTO) {
    state.usersResultDTO = usersResultDTO;
  }
}

export default {
  state,
  mutations,
};

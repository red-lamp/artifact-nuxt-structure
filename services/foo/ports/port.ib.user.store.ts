import { UsersResultDTO } from "../dto/users.result.dto";

export interface PortIBUserStore {
  saveUsersResult(usersResultDTO: UsersResultDTO): void;
  getUsersResult(): UsersResultDTO;
}

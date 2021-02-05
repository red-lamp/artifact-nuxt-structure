import { UsersResultDTO } from "../dto/users.result.dto";

export interface PortIBStore {
  saveUsersResult(usersResultDTO: UsersResultDTO): void;
  getUsersResult(): UsersResultDTO;
}

import { UsersResultDTO } from '../dto/users.result.dto';

export interface PortOBUserStore {
  saveUsersResultDTO(usersResultDTO: UsersResultDTO): void;
}

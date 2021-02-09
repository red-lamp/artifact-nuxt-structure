import { UsersResultDTO } from '../dto/users.result.dto';

export interface PortOBUserStore {
  saveUsersResult(usersResultDTO: UsersResultDTO): void;
}

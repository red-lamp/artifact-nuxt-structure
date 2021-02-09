import { UsersResultDTO } from '../dto/users.result.dto';

export interface PortIBUserStore {
  getUsersResultDTO(): UsersResultDTO;
}

import { UsersResultDTO } from '../dto/users.result.dto';

export interface PortOBRepository {
  saveUserToStore(usersResultDTO: UsersResultDTO): void;
}

import { UserRoleModel } from './user-roles.model';

export interface UserModel {
    id_?: string;
    name: string;
    password: string;
    role: UserRoleModel;
    surename?: string;
    token?: string;
}

import Users from './Iuser';

export default interface UsersModel {
  findOne(email: Users['email']): Promise<Users | null>
}

import {UserType} from '../common';

export interface IUserSlice {
  isLoggedIn: boolean;
  userName: string;
  userData: Array<UserType>;
}

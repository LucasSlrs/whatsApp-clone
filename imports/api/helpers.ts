import { User } from './models';
import { Accounts } from 'meteor/accounts-base';

export const createUsers = (users: User[]):void => {
    users.forEach(user => {
        const {username, profile, password} = user;
        Accounts.createUser({
            username,
            password,
            profile
        });
    });
}
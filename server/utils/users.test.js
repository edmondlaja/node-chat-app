const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'A'
        }, {
            id: '2',
            name: 'John',
            room: 'B'
        }, {
            id: '3',
            name: 'James',
            room: 'A'
        }]
    });

    it('should add new user', () => {
        let users = new Users();

        let user = {
            id: '123',
            name: 'Edmond',
            room: 'A'
        }

        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        let userId = '99';
        let user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let userId = '1'
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        let userId = '99'
        let user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for room A', () => {
        let userList = users.getUserList('A');

        expect(userList).toEqual(['Mike', 'James'])
    });

    it('should return names for room B', () => {
        let userList = users.getUserList('B');

        expect(userList).toEqual(['John'])
    });
});
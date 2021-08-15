import {User} from '../interfaces/Contacts.Interface';

const usersSeedData: User[] = [
    {
        id: 1,
        firstName: 'abc',
        lastName: 'doe',
        email: 'abc@doe.com',
        department: 'it',
        gender: 'm',
        avatar: 'https://via.placeholder.com/150',
        contribution: '89,000',
        active: true        
    },
    {
        id: 2,
        firstName: 'abc1',
        lastName: 'doe1',
        email: 'abc1@doe.com',
        department: 'marketing',
        gender: 'm',
        avatar: 'https://via.placeholder.com/150',
        contribution: '81,000',
        active: true        
    },
    {
        id: 3,
        firstName: 'abc2',
        lastName: 'doe',
        email: 'abc2@doe.com',
        department: 'sales',
        gender: 'm',
        avatar: 'https://via.placeholder.com/150',
        contribution: '109,000',
        active: true        
    },{
        id: 4,
        firstName: 'abc4',
        lastName: 'jane',
        email: 'abc4@jane.com',
        department: 'sales',
        gender: 'f',
        avatar: 'https://via.placeholder.com/150',
        contribution: '49,000',
        active: true        
    },
    {
        id: 5,
        firstName: 'abc5',
        lastName: 'jane',
        email: 'abc5@jane.com',
        department: 'marketing',
        gender: 'f',
        avatar: 'https://via.placeholder.com/150',
        contribution: '69,000',
        active: false        
    }
]

export default usersSeedData;
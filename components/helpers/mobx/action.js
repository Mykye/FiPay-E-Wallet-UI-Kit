import {action} from 'mobx';
import State from './store';

export const addUser = action((payload) => {
    State.push(payload)
    console.log(State)
    console.log(payload)
});

export const changePassword = action((payload) => {
    const newState = State.map(obj => {
        if (obj.email === State[0].emailForNewPassword) {
            return {...obj, password: payload};
        }
        return obj;
    });
    State.replace(newState);
});

export const setEmailForNewPassword = action((payload) => {
    const newState = State.map(obj => {
        if (obj.emailForNewPassword === '') {
            return {...obj, emailForNewPassword: payload};
        }
        return obj;
    });
    State.replace(newState);
});

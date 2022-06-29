import { observable } from 'mobx';

const defaultState = [
    {emailForNewPassword: ''},
    {name: 'Victor', email: 'Victorexample@mail.com', password: '000000000'},
 ];

const State = observable(defaultState);

export default State;

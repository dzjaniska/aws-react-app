import {Record} from 'immutable'

const ProfileInitialState = Record({
    first_name: "",
    last_name: "",
    email: "",
    signedIn: false
});

export default ProfileInitialState;

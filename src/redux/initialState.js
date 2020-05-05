import ProfileInitialState from "./profile/ProfileInitialState";
import RdvInitialState from "./rdv/RdvInitialState";

const initialState = {
    profile: new ProfileInitialState(),
    rdv: new RdvInitialState()
};

export default initialState;

export default function updateYourProjects(state, payload) {
    //console.log("state:", state);
    //console.log("payload:", payload);
    return {
    ...state,
    yourProjects: {
        ...state.yourProjects,
        ...payload
    },
    };
}
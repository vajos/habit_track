import {atom} from "recoil";

export const category_state = atom({
    key: 'category_state', // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
});


export const evaluate_state = atom({
    key: 'evaluate_state', // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
});

export const habit_name_state = atom({
    key: 'habit_name_state', // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
});
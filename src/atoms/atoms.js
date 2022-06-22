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

export const time_table_state = atom({
    key: 'time_table_state', // unique ID (with respect to other atoms/selectors)
    default: "",
});

export const deadline_state = atom({
    key: 'deadline_state', // unique ID (with respect to other atoms/selectors)
    default: {
        start_date: null,
        target_date: null,
        reminder_time: null,
        priority: null
    }, // default value (aka initial value)
});

export const user_meta_data_state = atom({
    key: 'user_meta_data_state', // unique ID (with respect to other atoms/selectors)
    default: null,
});

export const old_marked_state = atom({
    key: 'old_marked_state', // unique ID (with respect to other atoms/selectors)
    default: [],
});



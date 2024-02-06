// types.ts
export type Todo = {
    readonly id: string; //cannot be modified
    label: string;
    completed: boolean;
};

// types.ts
// export type Todo = {
//     [key: string]: {
//         id: string;
//         label: string;
//         completed: boolean;
//     }
// };
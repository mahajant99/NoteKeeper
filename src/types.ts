export type Note = {
    title: string;
    description: string;
}

export enum TaskPriority {
    High = 'High',
    Medium = 'Medium',
    Low = 'Low'
}

export enum TaskStatus {
    Pending = 'Pending',
    Completed = 'Completed'
}

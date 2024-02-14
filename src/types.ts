export type Note = {
    id: number;
    title: string;
    description: string;
    priority: TaskPriority;
    status: TaskStatus;
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

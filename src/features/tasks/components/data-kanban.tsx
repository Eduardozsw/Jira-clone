import React, { useCallback, useEffect, useState } from "react";

import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult
} from "@hello-pangea/dnd"

import { Task, TaskStatus } from "../types";

const boards: TaskStatus[] = [
    TaskStatus.BACKLOG,
    TaskStatus.TODO,
    TaskStatus.IN_PROGRESS,
    TaskStatus.IN_REVIEW,
    TaskStatus.DONE,
]

type TasksState = {
    [key in TaskStatus]: Task[]
}

interface DataKanbanProps {
    data: Task[];
}

export const DataKanban = ({ data }: DataKanbanProps) => {
    const [tasks, setTasks] = useState<TasksState>(() => {
        const initialTasks: TasksState = {}
    })

    return (
        <div>
            Data Kanban
            teste
        </div>
    )
}
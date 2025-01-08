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
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.IN_REVIEW,
]

interface DataKanbanProps {
    data: Task[];
}

export const DataKanban = ({ data }: DataKanbanProps) => {
    return (
        <div>
            Data Kanban
        </div>
    )
}
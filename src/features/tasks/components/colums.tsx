"use client"

import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table"

import { Task } from "../types";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: "Task Name",
  },
];
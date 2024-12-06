"use client";

import { RiAddCircleFill } from "react-icons/ri"
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspace";

export const WorkspaceSwitcher = () => {
    const { data } = useGetWorkspaces();

    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
                <p>Workspaces</p>
                <RiAddCircleFill />
            </div>
        </div>
    )
}
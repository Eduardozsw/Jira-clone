import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";

const WorkspaceIdJoinPage = async () => {
  const user = await getCurrent()
  if (!user) redirect("/sign-in")

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm 
      initialValues={initialValues} />
    </div>
  )
}

export default WorkspaceIdJoinPage;
interface AnalyticsProps {
  data?: {
    taskCount: number,
    taskDifference: number,
    projectCount?: number,
    projectDifference?: number,
    incompleteTaskCount?: number,
    incompleteTaskDifference?: number,
    assignedTaskCount: number,
    assignedTaskDifference: number,
    completedTaskCount: number,
    completedTaskDifference: number,
    overdueTaskCount: number,
    overdueTaskDifference: number,
  }
}
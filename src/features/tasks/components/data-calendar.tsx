import {
  format,
  getDay,
  parse,
  startOfWeek,
  addMonths,
  subMonths
} from "date-fns";

import { enUS } from "date-fns/locale"
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import { Task } from "../types";

const locales = {
  "en-US": enUS
}

interface DataCalendarProps {
  data: Task[]
}

export const DataCalendar = ({
  data
}: DataCalendarProps) => {
  return (
    <div>
      Data Calendar
    </div>
  )
}
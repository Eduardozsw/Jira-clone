import { SettingsIcon, UsersIcon } from "lucide-react"
import Link from "next/link"
import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill } from "react-icons/go"

const routes = [
    {
        labe: "Home",
        href: "",
        icon: GoHome,
        activeIcon: GoHomeFill,
    },
    {
        labe: "My Tasks",
        href: "/tasks",
        icon: GoCheckCircle,
        activeIcon: GoCheckCircleFill,
    },
    {
        labe: "Settings",
        href: "/settings",
        icon: SettingsIcon,
        activeIcon: SettingsIcon,
    },
    {
        labe: "Members",
        href: "/members",
        icon: UsersIcon,
        activeIcon: UsersIcon,
    }
]

export const Navigation = () => {
    return (
        <div className="flex flex-col">
            {routes.map((item) => {
                const isActive = false;

                return (
                <Link>
                
                </Link>
                )
            })}
        </div>
    )
}
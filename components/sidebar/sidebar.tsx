'use client'

import { ProfileInfo } from "./profile-info"
import { QuickActions } from "./quick-actions"
import { ServiceMenu } from "./service-menu"
import { cn } from "@/lib/utils"

interface SidebarProps {
  showProfile?: boolean
  showActions?: boolean
  showServices?: boolean
  className?: string
  children?: React.ReactNode
}

export function Sidebar({
  showProfile = true,
  showActions = true,
  showServices = true,
  className = "",
  children
}: SidebarProps) {
  return (
    <aside 
      className={cn(
        "w-[335px] bg-white border border-[#e0e4ea] rounded-lg p-0 overflow-y-auto",
        className
      )}
    >
      {showProfile && <ProfileInfo />}
      {showActions && <QuickActions />}
      {showServices && <ServiceMenu />}
      {children}
    </aside>
  )
}

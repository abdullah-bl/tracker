import *  as React from "react"

export interface SplitViewProps {
  children?: React.ReactNode;
  className?: string;
  list?: React.ReactNode;
}


export default function SplitView({ list, children }: SplitViewProps) {
  return (
    <div className="flex gap-2 h-screen">
      <ul className="flex w-1/4 flex-col items-center gap-2">
        {list}
      </ul>
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}
'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeButton } from "@/components/uitripled/native-button-shadcnui";
import { appInfo, Column, Task } from "@/config/ConfigData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Search, Filter, Clock } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

export function KanbanBoard() {
  const [tasks] = useState<Task[]>(appInfo.initialTasks);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = useMemo(() => {
    if (!searchQuery) return tasks;
    return tasks.filter((task) =>
      task.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [tasks, searchQuery]);

  return (
    <div className="relative h-full min-h-screen w-full bg-background flex flex-col pt-10">
      {/* Glassmorphism background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px]" />
      </div>
      <div className="flex flex-col gap-6 items-center">
        {/* Header */}
        <div className="relative md:min-w-7xl flex flex-col gap-4 rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.1] via-transparent to-transparent opacity-60" />
          <div className="relative z-10">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              产品路线图
            </h1>
            <p className="text-foreground/60">
              查看版本新功能 & 新功能预告
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-foreground/40" />
              <Input
                placeholder="搜索任务..."
                className="w-[200px] pl-9 bg-background/60 border-border/50 backdrop-blur-md focus:bg-background/80 focus:border-border/70 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="bg-background/60 border-border/50 backdrop-blur-md hover:bg-background/80"
            >
              <Filter className="h-4 w-4 text-foreground/70" />
            </Button>
          </div>
        </div>

        {/* Board */}
        <div className="h-full gap-6 overflow-x-auto p-10 grid grid-cols-4">
          {appInfo.initialColumns.map((col) => (
            <BoardColumn
              key={col.id}
              column={col}
              tasks={filteredTasks.filter((task) => task.columnId === col.id)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

interface BoardColumnProps {
  column: Column;
  tasks: Task[];
  isOverlay?: boolean;
}

function BoardColumn({ column, tasks }: BoardColumnProps) {

  return (
    <div
      className={cn(
        "group/column relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/50 backdrop-blur-xl shadow-lg",
        "shadow-xl cursor-grabbing bg-background/70"
      )}
    >
      {/* Gradient overlay for column */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] dark:from-foreground/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/column:opacity-100" />

      {/* Column Header */}
      <div
        className="relative z-10 flex items-center justify-between border-b border-border/30 bg-background/30 p-4 backdrop-blur-sm cursor-grab active:cursor-grabbing"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary shadow-sm shadow-primary/20 backdrop-blur-sm">
            {tasks.length}
          </div>
          <h3 className="font-semibold text-foreground">{column.title}</h3>
        </div>
        {/* <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-foreground/40 hover:text-foreground hover:bg-background/50"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button> */}
      </div>

      {/* Column Content */}
      <div className="relative z-10 flex flex-1 flex-col gap-3 p-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

interface TaskCardProps {
  task: Task;
  isOverlay?: boolean;
}

function TaskCard({ task }: TaskCardProps) {
  const priorityColors = {
    low: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    medium:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    high: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  };

  const priorityTexts = {
    low: "低",
    medium:
      "中等",
    high: "高",
  };

  return (
    <div
      className={cn(
        "group relative flex cursor-grab flex-col gap-3 overflow-hidden rounded-xl border border-border/40 bg-background/70 p-4 shadow-lg backdrop-blur-xl transition-all hover:border-border/60 hover:shadow-xl hover:-translate-y-1 active:cursor-grabbing",
        "scale-105 shadow-xl cursor-grabbing opacity-100 bg-background/90 backdrop-blur-xl z-50"
      )}
    >
      {/* Gradient overlay for card */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] dark:from-foreground/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header / Tags */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex flex-wrap gap-1.5">
          <Badge
            variant="outline"
            className={cn(
              "border px-1.5 py-0.5 text-[10px] uppercase tracking-wider backdrop-blur-sm",
              priorityColors[task.priority]
            )}
          >
            {priorityTexts[task.priority]}
          </Badge>
          {task.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-secondary/50 text-secondary-foreground/80 px-1.5 py-0.5 text-[10px] backdrop-blur-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
        {/* <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <MoreHorizontal className="h-3 w-3" />
        </Button> */}
      </div>

      {/* Content */}
      <p className="relative z-10 text-sm font-medium text-foreground leading-relaxed">
        {task.content}
      </p>

      {/* Footer */}
      {
        task.dueDate || task.link ?
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center justify-between w-full gap-3 text-xs text-foreground/50">
              {task.dueDate && (
                <div
                  className={cn(
                    "flex items-center gap-1",
                    task.priority === "high" && "text-red-500/80"
                  )}
                >
                  <Clock className="h-3 w-3" />
                  <span>{task.dueDate}</span>
                </div>
              )}

              {
                task.link &&
                <NativeButton variant="ghost" className="h-8 rounded-md px-3 text-xs group/btn">
                  <Link href={task.link}>
                    了解更多
                    <motion.span
                      className="ml-1 inline-block"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </NativeButton>
              }
              {/* {(task.comments > 0 || task.attachments > 0) && (
            <div className="flex items-center gap-2">
              {task.comments > 0 && (
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  <span>{task.comments}</span>
                </div>
              )}
              {task.attachments > 0 && (
                <div className="flex items-center gap-1">
                  <Paperclip className="h-3 w-3" />
                  <span>{task.attachments}</span>
                </div>
              )}
            </div>
          )} */}
            </div>
          </div>
          : <></>
      }
    </div>
  );
}
'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NativeButton } from '@/components/uitripled/native-button-shadcnui';
import { appInfo, Column, Task } from '@/config/ConfigData';
import { cn } from '@/lib/utils';
import { Search, Filter, Clock } from 'lucide-react';
import Link from 'next/link';
import { memo, useDeferredValue, useMemo, useState } from 'react';

const PRIORITY_COLORS = {
  low: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  medium:
    'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  high: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
} as const;

const PRIORITY_TEXTS = {
  low: '低',
  medium: '中等',
  high: '高',
} as const;

const COLUMNS = appInfo.initialColumns;
const TASKS = appInfo.initialTasks;

export function KanbanBoard() {
  const [searchQuery, setSearchQuery] = useState('');
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const filteredTasks = useMemo(() => {
    if (!deferredSearchQuery) return TASKS;
    const query = deferredSearchQuery.trim().toLowerCase();
    if (!query) return TASKS;
    return TASKS.filter((task) => task.content.toLowerCase().includes(query));
  }, [deferredSearchQuery]);

  const tasksByColumn = useMemo(() => {
    const grouped: Record<string, Task[]> = {};
    for (const col of COLUMNS) {
      grouped[col.id] = [];
    }
    for (const task of filteredTasks) {
      const bucket = grouped[task.columnId];
      if (bucket) {
        bucket.push(task);
      }
    }
    return grouped;
  }, [filteredTasks]);

  return (
    <section className="px-6 py-10 overflow-x-hidden bg-background ">
      <div className="relative h-full w-full my-30 flex flex-col justify-center ">
        {/* Keep accents lightweight to avoid costly blur compositing */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-foreground/[0.03]" />
          <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-foreground/[0.02]" />
        </div>
        <div className="flex flex-col gap-6 items-center *:w-full">
          {/* Header */}
          <div className="relative md:min-w-7xl flex flex-col gap-4 rounded-2xl border border-border/40 bg-background p-6 md:flex-row md:items-center md:justify-between">
            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.06] via-transparent to-transparent opacity-50" />
            <div className="relative z-10">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                完成进度
              </h1>
              <p className="text-foreground/60">查看版本新功能 & 新功能预告</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-foreground/40" />
                <Input
                  placeholder="搜索任务..."
                  className="w-[200px] pl-9 bg-background border-border/50 focus:bg-background focus:border-border/70 transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="bg-background/80 border-border/50 hover:bg-background"
              >
                <Filter className="h-4 w-4 text-foreground/70" />
              </Button>
            </div>
          </div>

          {/* Board */}
          <div className="h-full gap-6 overflow-x-auto grid md:grid-cols-4 grid-cols-1">
            {COLUMNS.map((col) => (
              <BoardColumn
                key={col.id}
                column={col}
                tasks={tasksByColumn[col.id] ?? []}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface BoardColumnProps {
  column: Column;
  tasks: Task[];
  isOverlay?: boolean;
}

const BoardColumn = memo(function BoardColumn({
  column,
  tasks,
}: BoardColumnProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-background shadow-sm transition-colors hover:border-border/55">
      {/* Column Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-border/30 bg-background p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary shadow-sm shadow-primary/20">
            {tasks.length}
          </div>
          <h3 className="font-semibold text-foreground">{column.title}</h3>
        </div>
      </div>

      {/* Column Content */}
      <div className="max-h-[400px] overflow-y-auto ">
        <div className="relative z-10 flex flex-1 flex-col gap-3 p-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
});

interface TaskCardProps {
  task: Task;
  isOverlay?: boolean;
}

const TaskCard = memo(function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border/40 bg-background p-4 shadow-sm transition-colors hover:border-border/60 hover:bg-accent/15">
      {/* Header / Tags */}
      <div className="flex items-start justify-between">
        <div className="flex flex-wrap gap-1.5">
          <Badge
            variant="outline"
            className={cn(
              'border px-1.5 py-0.5 text-[10px] uppercase tracking-wider',
              PRIORITY_COLORS[task.priority],
            )}
          >
            {PRIORITY_TEXTS[task.priority]}
          </Badge>
          {task.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-secondary/50 text-secondary-foreground/80 px-1.5 py-0.5 text-[10px]"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Content */}
      <p className="text-sm font-medium text-foreground leading-relaxed">
        {task.content}
      </p>

      {/* Footer */}
      {(task.dueDate || task.link) && (
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full gap-3 text-xs text-foreground/50">
            {task.dueDate && (
              <div
                className={cn(
                  'flex items-center gap-1',
                  task.priority === 'high' && 'text-red-500/80',
                )}
              >
                <Clock className="h-3 w-3" />
                <span>{task.dueDate}</span>
              </div>
            )}

            {task.link && (
              <NativeButton
                variant="ghost"
                className="h-8 rounded-md px-3 text-xs"
              >
                <Link href={task.link}>
                  了解更多
                  <span className="ml-1 inline-block">→</span>
                </Link>
              </NativeButton>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

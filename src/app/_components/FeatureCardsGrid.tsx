import { Card } from '@/components/ui/card';
import { appInfo } from '@/config/ConfigData';

// Feature Cards Grid
export function FeatureCardsBlock() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-5 text-center">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            为什么选择我们？
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            不做复杂功能堆砌，只专注于训练记录与数据分析，让你把注意力留在训练本身。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {appInfo.features.map((feature, index) => (
            <Card
              key={index}
              className="group cursor-pointer border border-border/50 bg-background/50 p-10 backdrop-blur-xl transition-all duration-500 hover:border-border"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/[0.04] transition-all duration-300 group-hover:scale-110 group-hover:bg-foreground/[0.08]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
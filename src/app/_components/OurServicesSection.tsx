'use client'
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { appInfo } from "@/config/ConfigData";
import { motion, Variants } from "framer-motion";

export function OurServicesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-background px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge className="mb-4">Our Services</Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            我们提供的服务
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            专注于力量训练记录与数据分析，用简单、高效的方式，帮助你持续进步。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {appInfo.services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="group relative h-full border-2 p-6 transition-all hover:border-primary hover:shadow-xl">
                  {service.badge && (
                    <Badge className="absolute -right-2 -top-2">
                      {service.badge}
                    </Badge>
                  )}
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {service.description}
                  </p>
                  {/* <Button variant="ghost" size="sm" className="group/btn">
                    Learn More
                    <motion.span
                      className="ml-1 inline-block"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </Button> */}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
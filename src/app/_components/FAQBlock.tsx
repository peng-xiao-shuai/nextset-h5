'use client'
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { NativeButton } from "@/components/uitripled/native-button-shadcnui";
import { appInfo } from "@/config/ConfigData";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function FAQAccordionBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/30 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <Badge className="mb-4" variant="secondary">
            <HelpCircle className="mr-1 h-3 w-3" />
            FAQ
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            常见问题解答
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            有疑问？我们有答案。如果您找不到所需信息，请随时联系我们。
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {appInfo.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Card className="overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-md">
                  <motion.button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-4 text-left md:p-6"
                    whileHover={{
                      backgroundColor: "rgba(var(--primary), 0.03)",
                    }}
                  >
                    <span className="pr-4 text-base font-semibold md:text-lg">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/50 p-4 md:p-6">
                          <motion.p
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            className="text-sm text-muted-foreground md:text-base"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center md:mt-16"
        >
          <Card className="border-border/50 bg-gradient-to-br from-card to-muted/30 p-6 md:p-8">
            <MessageCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              还有其他问题吗？
            </h3>
            <p className="mb-6 text-sm text-muted-foreground md:text-base">
              我们的团队随时为您提供帮助。请与我们联系，我们会尽快回复。
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <NativeButton size="lg">
                <Link href={appInfo.email.href}>
                  联系支持
                </Link>
              </NativeButton>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
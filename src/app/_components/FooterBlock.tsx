'use client'
import { Button } from "@/components/ui/button";
import { appInfo } from "@/config/ConfigData";
import { useReducedMotion, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export function FooterBlock() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shouldReduceMotion = useReducedMotion();

  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative w-full overflow-hidden border-t border-border bg-card/90 backdrop-blur-xl"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.2, 0.45, 0.2], scale: [0.9, 1.05, 0.95] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute -bottom-36 right-0 h-96 w-96 rounded-full bg-[hsl(var(--primary)_/_0.18)] blur-[200px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.18, 0.4, 0.18], rotate: [0, 25, 0] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 16, repeat: Infinity, ease: "linear" }
          }
        />
      </div>
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex gap-4 items-center justify-center">
          {appInfo.footerLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="no-underline text-sm transition-all duration-200 hover:scale-105"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            {[appInfo.github].map((social, index) => (
              <motion.div
                key={social.href}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.05,
                }}
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9 rounded-full border border-border/60 bg-white/5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  aria-label={social.href}
                >
                  <Link target="_blank" href={social.href}>
                    <motion.div
                      transition={{ duration: shouldReduceMotion ? 0.25 : 0.3 }}
                    >
                      <social.icon className="h-4 w-4" aria-hidden />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            &copy; 2025 彭帅 All rights reserved.{' '}
            <Link href="https://beian.miit.gov.cn/">粤ICP备2025487708号</Link>
          </motion.div>

          {/* Scroll to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              size="icon"
              variant="outline"
              className="h-9 w-9 rounded-full border-border/60"
              onClick={scrollToTop}
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { repeat: Infinity, duration: 1.5 }
                }
              >
                <ArrowUp className="h-4 w-4" aria-hidden />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
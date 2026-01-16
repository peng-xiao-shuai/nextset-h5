'use client'
import { motion, } from 'framer-motion'
import { ArrowDown, ShoppingBag } from 'lucide-react'
import { appInfo } from '@/config/ConfigData';
import Image from 'next/image';
import { NativeButton } from '@/components/uitripled/native-button-shadcnui';
import { QrCodeButton } from './QrCodeButton';
import Link from 'next/link';

// Hero Block
export default function HeroBlock() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-background min-h-screen w-full">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-block"
          >
            <div className="overflow-hidden mx-auto h-24 w-24 rounded-full border-4 border-background bg-gradient-to-br from-primary to-muted shadow-lg">
              <Image
                src={appInfo.appLogo}
                width={96}
                height={96}
                alt={appInfo.appName + ' Logo'}
                className='opacity-90'
              ></Image>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-5xl font-bold text-foreground md:text-7xl"
          >
            {appInfo.appName} / {appInfo.appNameEn}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground md:text-2xl"
          >
            {appInfo.appDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <NativeButton className="text-[#fef0f0] font-bold cursor-pointer"
              style={{
                background: 'linear-gradient(45deg, #fc2c4e, #fc5668)',
              }}>
              <Link href={appInfo.downloadUrl} className='flex gap-2 items-center'>
                <ShoppingBag className="size-04" />
                AppGallery 下载
              </Link>
            </NativeButton>
            <QrCodeButton></QrCodeButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            {[
              appInfo.github,
              appInfo.email,
            ].map((social, index) => (
              <motion.a
                key={index}
                target="_blank"
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
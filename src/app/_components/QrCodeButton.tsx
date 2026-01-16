'use client';

import { NativeButton } from "@/components/uitripled/native-button-shadcnui";
import {
  NativeDialog,
  NativeDialogContent,
  NativeDialogDescription,
  NativeDialogFooter,
  NativeDialogHeader,
  NativeDialogTitle,
  NativeDialogTrigger,
} from "@/components/uitripled/native-dialog-shadcnui";
import { QrCode } from "lucide-react";
import Image from "next/image";

export function QrCodeButton() {
  return (
    <NativeDialog>
      <NativeDialogTrigger asChild>
        <NativeButton variant="outline" className="gap-2 font-bold cursor-pointer">
          二维码
          <QrCode className="size-04" />
        </NativeButton>
      </NativeDialogTrigger>
      <NativeDialogContent className="sm:max-w-[425px]">
        <NativeDialogHeader>
          <NativeDialogTitle>扫码下载应用</NativeDialogTitle>
          <NativeDialogDescription>
            使用手机扫描二维码即可下载应用
          </NativeDialogDescription>
        </NativeDialogHeader>
        <div
          className="rounded-2xl p-6 max-w-sm w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center">
            <div className="mb-4">
              <Image
                src="/harmony-down-qrcode.png"
                width={200}
                height={200}
                alt="下载二维码"
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
        <NativeDialogFooter>
          <NativeButton variant="outline" size="sm" onClick={() => { }}>
            关闭
          </NativeButton>
        </NativeDialogFooter>
      </NativeDialogContent>
    </NativeDialog>
  );
}

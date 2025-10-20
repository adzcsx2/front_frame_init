import type { Metadata } from "next";
import "./globals.css";
import AntdConfigProvider from "@/components/AntdConfigProvider";
import FOUCPrevention from "@/components/FOUCPrevention";
import { env } from "@/config/env";
import { Layout as AntdLayout, Typography, Button } from "antd";
export const metadata: Metadata = {
  title: env.appTitle,
};

function MainHeader({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <AntdLayout className="w-full min-h-screen flex flex-col">
      <AntdLayout.Header className="!bg-white h-16 flex items-center">
        <div className="flex items-center gap-4">
          <Typography.Title level={3} className="m-0">
            Stake质押平台
          </Typography.Title>
          <Typography.Title level={1} className="m-0">
            安全、透明的以太坊质押服务
          </Typography.Title>
          <Button type="primary">连接钱包</Button>
        </div>
      </AntdLayout.Header>
      <div className="!flex-1 !w-full mt-0.5">
        {/* 侧边栏  */}
        <AntdLayout className="h-full flex flex-col">
          {/* 内容区  */}
          <AntdLayout.Content className="p-10 h-full flex flex-col flex-1">
            {/* 标题  */}
            <div className="rounded-lg p-5 bg-white mt-5 h-full">
              {children}
            </div>
          </AntdLayout.Content>
        </AntdLayout>
      </div>
    </AntdLayout>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="m-0 p-0 min-h-screen">
        <AntdConfigProvider>
          {children}
          <FOUCPrevention />
        </AntdConfigProvider>
      </body>
    </html>
  );
}

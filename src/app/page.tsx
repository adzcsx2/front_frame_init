"use client";
import { Layout as AntdLayout, Image, Typography } from "antd";

import t from "@/i18n/lang/zh/common";
import React from "react";

import { Button } from "antd";

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
export default function Home() {
  return MainHeader({ children: <div>欢迎来到Stake质押平台</div> });
}

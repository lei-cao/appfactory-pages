import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { MacShell } from "@/components/sites/popline/mac/shell";

// Popline for Mac (APPFA2-3) lives beside the iOS pages, in its own layout:
// the iOS pages sit in the (ios) route group with the iOS shell, so neither
// shell wraps the other's pages. English only for now; /zh-cn/mac and
// /zh-tw/mac are 404 (no reviewed translation yet).
export default async function MacLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<unknown>;
}) {
  const { locale } = (await params) as { locale: string };
  if (locale !== "en") notFound();
  return <MacShell>{children}</MacShell>;
}

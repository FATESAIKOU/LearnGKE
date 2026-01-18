'use client';

import { revalidateUrl } from "@/actions/revalidatetest";
import { useTransition } from "react";

interface RevalidateTestBtnProps {
  url: string;
}

export function RevalidateTestBtn({ url }: RevalidateTestBtnProps) {
  const [isPending, startTransition] = useTransition();

  const handleRevalidate = () => {
    startTransition(async () => {
      await revalidateUrl(url);
    });
  };

  return (
      <button
        onClick={handleRevalidate}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Do Revalidate { url }
      </button>
  );
}
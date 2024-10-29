import { cn } from "@/lib/utils";
import React from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  style?: string;
};

const Container = ({ children, style }: Props) => {
  return (
    <div
      className={cn(
        "container mx-auto px-8 max-w-screen-2xl overflow-hidden",
        style
      )}
    >
      {children}
    </div>
  );
};

export default Container;

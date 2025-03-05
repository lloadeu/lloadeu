import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

const LinkButton = ({ href, children, className = "" }: Props) => {
  return (
    <a
      // className={`bg-white p-2 rounded-sm text-black font-semibold ${className}`}
      className={cn("font-semibold hover:underline", className)}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};
export default LinkButton;

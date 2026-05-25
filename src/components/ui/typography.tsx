import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const h1Variants = cva(
  "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
  {
    variants: {
      variant: {
        default: false,
        primary: "text-primary",
      },
    },
  },
);

export function H1({
  children,
  className,
  variant = "default",
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof h1Variants>) {
  return (
    <h1
      data-variant={variant}
      className={cn(h1Variants({ variant, className }))}
      {...props}
    >
      {children}
    </h1>
  );
}

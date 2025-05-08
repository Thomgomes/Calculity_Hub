import type React from "react";
import { cn } from "../../lib/utils";

type CardProps = {
  cardClassName?: string;
  cardProps?: React.HTMLAttributes<HTMLDivElement>;
  cardHeaderClassName?: string;
  cardHeaderProps?:React.HTMLAttributes<HTMLDivElement> ;
  cardTitleClassName?: string;
  cardTitleProps?: React.HTMLAttributes<HTMLDivElement>;
  Title: string;
  cardContentClassName?: string;
  cardContentProps?: React.HTMLAttributes<HTMLDivElement>;
  children: React.ReactNode;
}

const Te: React.FC<CardProps> = ({cardClassName,
  cardProps,
  cardHeaderClassName,
  cardHeaderProps,
  cardTitleClassName,
  cardTitleProps,
  Title,
  cardContentClassName,
  cardContentProps,
  children,}) => {
  return (
    <section>
      {/* Card */}
      <div
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          cardClassName
        )}
        {...cardProps}
      >
        {/* Card Header */}
        <header
          className={cn("flex flex-col space-y-1.5 p-6", cardHeaderClassName)}
          {...cardHeaderProps}
        >
          {/* Card Title */}
          <h3
            className={cn(
              "text-2xl font-semibold leading-none tracking-tight text-center",
              cardTitleClassName
            )}
            {...cardTitleProps}
          >{Title}</h3>
        </header>
        {/* Card Content */}
        <div className={cn("p-6 pt-0", cardContentClassName)} {...cardContentProps}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Te;

import { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  content: ReactNode;
}

export default function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <div className="p-4 md:p-8 bg-foreground flex md:flex-col md:text-center items-center gap-6 md:gap-4 lg:gap-6">
      <div className="text-primary text-4xl md:text-5xl">{icon}</div>
      <div>
        <h3 className="text-xl lg:text-2xl font-playfair-display font-semibold mb-1">
          {title}
        </h3>
        {content}
      </div>
    </div>
  );
}

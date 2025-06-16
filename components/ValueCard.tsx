interface ValueCardProps {
  title: string;
  description: string;
  color?: "primary" | "accent" | "creative";
}

export default function ValueCard({ title, description, color = "primary" }: ValueCardProps) {
  const colorClasses = {
    primary: "bg-primary",
    accent: "bg-accent", 
    creative: "bg-creative"
  };

  return (
    <div className="flex items-start gap-4">
      <div className={`w-3 h-3 ${colorClasses[color]} rounded-full mt-2 flex-shrink-0 shadow-sm`}></div>
      <div className="flex-1 min-w-0">
        <h5 className="font-semibold text-gray-900 mb-3 text-lg sm:text-xl">
          {title}
        </h5>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
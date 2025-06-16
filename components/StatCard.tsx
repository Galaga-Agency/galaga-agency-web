interface StatCardProps {
  value: string;
  label: string;
  color?: "primary" | "accent" | "creative";
}

export default function StatCard({
  value,
  label,
  color = "primary",
}: StatCardProps) {
  const colorClasses = {
    primary: {
      gradient: "from-primary/5 to-primary/10",
      border: "border-primary/10",
      text: "text-primary",
      hover: "hover:from-primary/10 hover:to-primary/15",
    },
    accent: {
      gradient: "from-accent/5 to-accent/10",
      border: "border-accent/10",
      text: "text-accent",
      hover: "hover:from-accent/10 hover:to-accent/15",
    },
    creative: {
      gradient: "from-creative/5 to-creative/10",
      border: "border-creative/10",
      text: "text-creative",
      hover: "hover:from-creative/10 hover:to-creative/15",
    },
  };

  const classes = colorClasses[color];

  return (
    <div
      className={`bg-gradient-to-br ${classes.gradient} ${classes.hover} p-8 sm:p-10 lg:p-12 rounded-3xl text-center border ${classes.border} hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out group`}
    >
      <div
        className={`text-4xl sm:text-5xl lg:text-6xl font-black ${classes.text} mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {value}
      </div>
      <p className="text-gray-700 font-medium text-base sm:text-lg leading-relaxed">
        {label}
      </p>
    </div>
  );
}

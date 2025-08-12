// /components/ui/TechItem.tsx

import Image from "next/image";

interface TechItemProps {
  tech: {
    id: string;
    name: string;
    logo: string;
  };
}

export default function TechItem({ tech }: TechItemProps) {
  return (
    <div className="tech-card px-8">
      <div className="w-20 h-20 md:w-28 md:h-28 relative">
        <div 
          className="w-full h-full bg-teal"
          style={{
            mask: `url(${tech.logo}) center/contain no-repeat`,
            WebkitMask: `url(${tech.logo}) center/contain no-repeat`,
            backgroundColor: '#176161'
          }}
        />
      </div>
    </div>
  );
}
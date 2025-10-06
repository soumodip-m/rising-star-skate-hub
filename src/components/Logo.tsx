import rsaLogo from "@/assets/rsa-logo.jpg";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-12 w-auto", 
    lg: "h-16 w-auto",
    xl: "h-24 w-auto"
  };

  return (
    <img 
      src={rsaLogo}
      alt="RSA-Rising Stars Academy Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default Logo;
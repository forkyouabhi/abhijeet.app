export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-transparent relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto text-center space-y-3 md:space-y-4">
        <p className="text-muted-foreground text-sm md:text-base">
          Built with React, TypeScript, and Tailwind CSS
        </p>
        <p className="text-xs md:text-sm text-muted-foreground">
          © {currentYear} Abhijeet. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

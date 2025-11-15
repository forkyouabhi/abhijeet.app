export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-muted-foreground">
          Built with React, TypeScript, and Tailwind CSS
        </p>
        <p className="text-sm text-muted-foreground">
          © {currentYear} Abhijeet. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

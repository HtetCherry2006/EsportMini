import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { cn } from "../utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Path not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-black text-primary/20">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Page not found</h2>
          <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
        </div>
        
        <Link 
          to="/" 
          className={cn(
            "inline-block px-8 py-4 bg-primary text-white rounded-2xl font-bold",
            "active:scale-95 transition-all shadow-lg hover:opacity-90"
          )}
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
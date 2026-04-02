import { Link, Navigate } from "react-router-dom";
import { LoginForm } from "@/components/auth/LoginForm";
import { OAuthButtons } from "@/components/auth/OAuthButtons";
import { useAuth } from "@/providers/AuthProvider";

export function LoginPage() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (user) return <Navigate to="/" replace />;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-6 rounded-lg border border-border bg-card p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">Metin2 Idle</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Melde dich an um zu spielen
          </p>
        </div>
        <LoginForm />
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">oder</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <OAuthButtons />
        <p className="text-center text-sm text-muted-foreground">
          Noch kein Account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Registrieren
          </Link>
        </p>
      </div>
    </div>
  );
}

import { Link, Navigate } from "react-router-dom";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { useAuth } from "@/providers/AuthProvider";

export function RegisterPage() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (user) return <Navigate to="/" replace />;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-6 rounded-lg border border-border bg-card p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">Account erstellen</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Erstelle deinen Metin2 Idle Account
          </p>
        </div>
        <RegisterForm />
        <p className="text-center text-sm text-muted-foreground">
          Bereits einen Account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Einloggen
          </Link>
        </p>
      </div>
    </div>
  );
}

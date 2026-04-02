import { Navigate } from "react-router-dom";
import { GameShell } from "@/components/layout/GameShell";
import { useAuth } from "@/providers/AuthProvider";

export function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;

  return (
    <GameShell>
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary">
          Willkommen in der Welt von Metin2
        </h2>
        <p className="text-muted-foreground">
          Charaktererstellung folgt in Phase 2.
        </p>
      </div>
    </GameShell>
  );
}

import { useAuth } from "@/providers/AuthProvider";
import { useSocket } from "@/hooks/useSocket";

export function TopBar() {
  const { user, logout } = useAuth();
  const { connected } = useSocket();

  return (
    <header className="flex items-center justify-between border-b border-border bg-card px-6 py-3">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-bold text-primary">Metin2 Idle</h1>
        <span
          className={`h-2 w-2 rounded-full ${connected ? "bg-green-500" : "bg-red-500"}`}
          title={connected ? "Verbunden" : "Nicht verbunden"}
        />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">{user?.email}</span>
        <button
          onClick={logout}
          className="rounded-md border border-border px-3 py-1 text-sm text-muted-foreground hover:bg-secondary"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

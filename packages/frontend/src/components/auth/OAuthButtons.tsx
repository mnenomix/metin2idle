export function OAuthButtons() {
  return (
    <div className="space-y-2">
      <a
        href="/api/auth/signin/google"
        className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-foreground hover:bg-secondary/80"
      >
        Google
      </a>
      <a
        href="/api/auth/signin/discord"
        className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-foreground hover:bg-secondary/80"
      >
        Discord
      </a>
    </div>
  );
}

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#0D0D0D]">
      <div className="hero-glow glow-breathe pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(91,191,26,0.24),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(125,214,58,0.14),transparent_40%)]" />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}

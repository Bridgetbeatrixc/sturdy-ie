"use client";

export function CopyGuard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="contents"
      onContextMenu={(e) => e.preventDefault()}
      style={{ WebkitUserSelect: "none", userSelect: "none" }}
    >
      {children}
    </div>
  );
}
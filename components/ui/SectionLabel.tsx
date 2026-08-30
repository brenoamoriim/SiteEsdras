export default function SectionLabel({
  children,
  align = "left",
}: {
  children: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span className="h-px w-8 bg-gold/60" />
      <span className="font-accent text-xs uppercase tracking-widest2 text-gold-light">
        {children}
      </span>
    </div>
  );
}

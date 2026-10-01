interface SectionHeadingProps {
  heading: string;
  intro?: string;
  align?: "center" | "left";
  onDark?: boolean;
}

export function SectionHeading({
  heading,
  intro,
  align = "center",
  onDark = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const boxColor = onDark ? "border-cloud text-cloud" : "border-ink text-ink";
  const introColor = onDark ? "text-muted-dark" : "text-muted";

  return (
    <div className={`flex flex-col ${alignment} gap-5`}>
      <h2
        className={`border-2 px-6 py-3 font-display text-sm font-bold tracking-[0.35em] sm:text-base ${boxColor}`}
      >
        {heading.toUpperCase()}
      </h2>
      {intro ? (
        <p
          className={`max-w-xl text-sm leading-relaxed sm:text-base ${introColor}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

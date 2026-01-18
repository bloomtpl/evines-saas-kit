export function AuthTestimonial({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <blockquote className="space-y-4">
      <p className="text-3xl font-medium tracking-tight text-zinc-200 italic">
        &quot;{quote}&quot;
      </p>
      <div className="text-sm font-mono uppercase tracking-widest text-zinc-500">
        — {author}, {role}
      </div>
    </blockquote>
  );
}

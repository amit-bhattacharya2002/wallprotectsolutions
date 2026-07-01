import Link from "next/link";
import { getResourceArticle } from "@/app/data/resources";

interface RelatedHealthcareResourcesProps {
  slugs: string[];
  title?: string;
  intro?: string;
  dark?: boolean;
  className?: string;
}

export default function RelatedHealthcareResources({
  slugs,
  title = "Related Healthcare Resources",
  intro = "Field-informed guidance for healthcare wall protection, hygienic surfaces, and specification decisions.",
  dark = false,
  className = "",
}: RelatedHealthcareResourcesProps) {
  const articles = slugs
    .map((slug) => getResourceArticle(slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));

  if (articles.length === 0) return null;

  return (
    <div className={`${dark ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-[#f8fafc] text-[#0f172a]"} border p-6 lg:p-8 ${className}`}>
      <div className="mb-5 max-w-2xl">
        <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-[#9BCB4A]" : "text-[#64A70B]"}`}>
          Knowledge Centre
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        {intro ? (
          <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-white/68" : "text-slate-600"}`}>
            {intro}
          </p>
        ) : null}
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/resources/${article.slug}`}
            className={`group border p-4 transition-colors ${
              dark
                ? "border-white/10 bg-white/5 hover:border-[#9BCB4A]/45 hover:bg-white/8"
                : "border-slate-200 bg-white hover:border-[#64A70B]/40"
            }`}
          >
            <div className={`mb-2 flex flex-wrap gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] ${dark ? "text-white/42" : "text-slate-400"}`}>
              {article.tags.slice(0, 2).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <h4 className={`font-semibold leading-snug transition-colors ${dark ? "text-white group-hover:text-[#9BCB4A]" : "text-[#0f172a] group-hover:text-[#64A70B]"}`}>
              {article.title}
            </h4>
            <p className={`mt-2 line-clamp-2 text-sm leading-relaxed ${dark ? "text-white/58" : "text-slate-600"}`}>
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

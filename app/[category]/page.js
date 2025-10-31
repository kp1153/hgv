import { getPostsByCategory } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";

export const dynamic = "force-dynamic";

const getCategoryDisplayName = (route) => {
  const displayNames = {
    "current-affairs": "करेंट अफेयर्स",
    "political-discourse": "राजनीतिक विमर्श",
    "women-discourse": "स्त्री विमर्श",
    literature: "साहित्य-जगत",
    veterinary: "पशु चिकित्सा",
    misc: "विविध",
  };
  return displayNames[route] || route;
};

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const safeCategory = decodeURIComponent(category);

  const validCategories = [
    "current-affairs",
    "political-discourse",
    "women-discourse",
    "literature",
    "veterinary",
    "misc",
  ];

  if (!validCategories.includes(safeCategory)) {
    return (
      <main className="bg-zinc-600 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6 text-white">गलत श्रेणी</h1>
          <p className="text-zinc-300 text-lg">यह श्रेणी मौजूद नहीं है।</p>
          <Link
            href="/"
            className="inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold hover:underline"
          >
            ← होम पेज पर वापस जाएं
          </Link>
        </div>
      </main>
    );
  }

  const posts = await getPostsByCategory(safeCategory);
  const categoryDisplayName = getCategoryDisplayName(safeCategory);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("hi-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (!posts || posts.length === 0) {
    return (
      <main className="bg-zinc-600 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-6">
            <Link
              href="/"
              className="text-blue-400 hover:text-blue-300 font-medium hover:underline mb-2 inline-block"
            >
              ← वापस
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-6 text-white">
            {categoryDisplayName} की खबरें
          </h1>
          <div className="text-center py-12 bg-zinc-700 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">
              कोई खबर नहीं मिली
            </h2>
            <p className="text-zinc-300 text-lg">
              इस श्रेणी में अभी तक कोई खबर प्रकाशित नहीं हुई है।
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-zinc-600 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 font-medium hover:underline mb-2 inline-block"
          >
            ← वापस
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-white">
          {categoryDisplayName} की खबरें
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-zinc-700 rounded-xl shadow-lg overflow-hidden border border-zinc-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {post.mainImage && (
                <div className="w-full flex justify-center bg-zinc-800">
                  <Image
                    src={post.mainImage}
                    alt={post.mainImageAlt || post.title}
                    width={800}
                    height={600}
                    className="object-contain w-auto max-h-52 rounded-t-xl"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-blue-700 text-white px-3 py-1 rounded-full font-semibold">
                    {post.category?.name || "सामान्य"}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {formatDate(post.publishedAt)}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-4 text-white leading-tight">
                  <Link
                    href={`/${safeCategory}/${post.slug.current}`}
                    className="hover:underline hover:text-blue-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/${safeCategory}/${post.slug.current}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm hover:underline transition-colors"
                  >
                    पूरी खबर पढ़ें
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  <div className="flex items-center gap-1 text-zinc-400 text-sm">
                    <Eye size={16} />
                    <span>{(post.views || 0).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
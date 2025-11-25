import React from "react";
import { getAllPosts } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Page() {
  const posts = await getAllPosts();

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">कोई पोस्ट उपलब्ध नहीं है।</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("hi-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Get popular posts (top 3 by views)
  const popularPosts = [...posts]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 3);

  // Get all categories with post counts
  const categoryCount = posts.reduce((acc, post) => {
    const catName = post.category?.name || "सामान्य";
    acc[catName] = (acc[catName] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      {/* Header */}
      <header className="bg-[#006680] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-pink-600">
            हमारा मोर्चा
          </h1>
          <p className="text-center mt-2">मजदूर वर्ग की आवाज़</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content - Left Side (8 columns) */}
          <div className="lg:col-span-8 space-y-6">
            {posts.map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                {post.mainImageUrl && (
                  <div className="h-80 relative bg-gray-100">
                    <Image
                      src={post.mainImageUrl}
                      alt={post.mainImageAlt || post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm font-semibold">
                      {post.category?.name || "सामान्य"}
                    </span>
                    <span className="text-sm text-gray-500">
                      • {formatDate(post.publishedAt)}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold mb-3 hover:text-blue-600 cursor-pointer">
                    <Link
                      href={`/${post.category?.slug?.current}/${post.slug?.current}`}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {post.mainImageCaption && (
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.mainImageCaption.slice(0, 200)}
                      {post.mainImageCaption.length > 200 ? "..." : ""}
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>👁️ {post.views || 0} views</span>
                    </div>
                    <Link
                      href={`/${post.category?.slug?.current}/${post.slug?.current}`}
                      className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 font-semibold"
                    >
                      पढ़ें
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar - Right Side (4 columns) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Search Box */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">खोजें</h3>
              <input
                type="text"
                placeholder="पोस्ट खोजें..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 border-b pb-3">
                श्रेणियाँ
              </h3>
              <ul className="space-y-3">
                {Object.entries(categoryCount).map(([catName, count]) => (
                  <li
                    key={catName}
                    className="flex justify-between items-center hover:text-blue-600 cursor-pointer"
                  >
                    <span className="font-medium">{catName}</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                      {count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 border-b pb-3">
                लोकप्रिय पोस्ट
              </h3>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <Link
                    key={post._id}
                    href={`/${post.category?.slug?.current}/${post.slug?.current}`}
                    className={`flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded ${
                      index < popularPosts.length - 1 ? "pb-4 border-b" : ""
                    }`}
                  >
                    {post.mainImageUrl && (
                      <div className="w-20 h-20 relative rounded flex-shrink-0 bg-gray-100">
                        <Image
                          src={post.mainImageUrl}
                          alt={post.mainImageAlt || post.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold mb-1 text-sm leading-tight">
                        {post.title.slice(0, 50)}
                        {post.title.length > 50 ? "..." : ""}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">न्यूज़लेटर</h3>
              <p className="text-sm mb-4 opacity-90">
                नवीनतम पोस्ट्स की जानकारी पाने के लिए सब्सक्राइब करें
              </p>
              <input
                type="email"
                placeholder="आपका ईमेल"
                className="w-full px-4 py-3 rounded-lg mb-3 text-gray-800 focus:outline-none"
              />
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100">
                सब्सक्राइब करें
              </button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-red-800 text-center mb-12">
          योगदान
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
          <div className="border-l-4 border-red-600 pl-6">
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              योगदान करने के लिए कृपया दिए गए नंबरों पर संपर्क करें।
            </p>
            <p className="text-sm text-gray-600 italic">
              अभी के लिए इतना ही, बाद में इसे अपडेट करेंगे।
            </p>
          </div>

          <div className="border-l-4 border-red-600 pl-6">
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              संपर्क नंबर
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="tel:8383841789"
                className="flex items-center gap-3 bg-red-50 hover:bg-red-100 p-4 rounded-lg transition"
              >
                <span className="text-2xl">📞</span>
                <span className="text-lg text-gray-800 font-semibold">
                  8383841789
                </span>
              </a>
              <a
                href="tel:9868340494"
                className="flex items-center gap-3 bg-red-50 hover:bg-red-100 p-4 rounded-lg transition"
              >
                <span className="text-2xl">📞</span>
                <span className="text-lg text-gray-800 font-semibold">
                  9868340494
                </span>
              </a>
              <a
                href="tel:9560299369"
                className="flex items-center gap-3 bg-red-50 hover:bg-red-100 p-4 rounded-lg transition"
              >
                <span className="text-2xl">📞</span>
                <span className="text-lg text-gray-800 font-semibold">
                  9560299369
                </span>
              </a>
              <a
                href="tel:9868483444"
                className="flex items-center gap-3 bg-red-50 hover:bg-red-100 p-4 rounded-lg transition"
              >
                <span className="text-2xl">📞</span>
                <span className="text-lg text-gray-800 font-semibold">
                  9868483444
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-red-800 text-center mb-12">
          संपर्क
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
          <div className="border-l-4 border-red-600 pl-6">
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              संपादक मंडल
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                सत्यवीर सिंह
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                राकेश भदौरिया
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                रणवीर सिंह
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                नरेश
              </span>
            </div>
          </div>

          <div className="border-l-4 border-red-600 pl-6">
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              संपादकीय कार्यालय
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              1917, आजाद नगर, सेक्टर-24,
              <br />
              फरीदाबाद-121005, हरियाणा
            </p>
          </div>

          <div className="border-l-4 border-red-600 pl-6">
            <h2 className="text-2xl font-bold text-red-700 mb-4">फोन</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a
                href="tel:8383841789"
                className="text-lg text-gray-800 hover:text-red-600"
              >
                📞 8383841789
              </a>
              <a
                href="tel:9868340494"
                className="text-lg text-gray-800 hover:text-red-600"
              >
                📞 9868340494
              </a>
              <a
                href="tel:9560299369"
                className="text-lg text-gray-800 hover:text-red-600"
              >
                📞 9560299369
              </a>
              <a
                href="tel:9868483444"
                className="text-lg text-gray-800 hover:text-red-600"
              >
                📞 9868483444
              </a>
            </div>
          </div>

          <div className="border-l-4 border-red-600 pl-6">
            <h2 className="text-2xl font-bold text-red-700 mb-4">ई-मेल</h2>
            <a
              href="mailto:kmm-faridabad@gmail.com"
              className="text-lg text-gray-800 hover:text-red-600 underline"
            >
              kmm-faridabad@gmail.com
            </a>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <p className="text-gray-800 font-semibold">
              <span className="text-red-700">नोट:</span> पूर्ण रूप से
              गैर-व्यावसायिक एवं केवल निजी वितरण हेतु
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

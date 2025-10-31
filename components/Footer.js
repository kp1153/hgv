export default function Footer() {
  return (
    <footer className="bg-sky-200 border-t border-blue-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-600">
              डॉ. सत्यवान सौरभ
            </h3>
            <p className="text-pink-700">
              सामाजिक न्याय से जुड़े मामलों के लेखक
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-blue-600">त्वरित लिंक</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="/" className="hover:text-blue-600">
                  होम
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-600">
                  हमारे बारे में
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-600">
                  संपर्क करें
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-blue-600">सोशल मीडिया</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Facebook
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Twitter
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-300 mt-8 pt-6 text-center text-gray-700">
          <p>
            © 2025, All Rights Reserved to Dr. Satyawan Saurabh. Design by{" "}
            <a
              href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-700 hover:text-blue-600 font-semibold hover:underline"
            >
              क्रिएटिव सॉल्यूशंस
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

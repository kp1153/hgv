export default function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              डॉ. सत्यवान सौरभ
            </h3>
            <p className="text-zinc-400">
              सामाजिक न्याय से जुड़े मामलों के लेखक
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">त्वरित लिंक</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="/" className="hover:text-white">
                  होम
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  हमारे बारे में
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  संपर्क करें
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">सोशल मीडिया</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-zinc-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-zinc-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-700 mt-8 pt-6 text-center text-zinc-400">
          <p>
            © 2025, All Rights Reserved to Dr. Satyawan Saurabh. Design by{" "}
            <a
              href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold hover:underline"
            >
              क्रिएटिव सॉल्यूशंस
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

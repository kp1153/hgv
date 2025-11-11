export default function Footer() {
  return (
    <footer className="bg-red-800 border-t border-red-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center text-white space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/about" className="hover:text-yellow-300">
              हमारे बारे में
            </a>
            <span>|</span>
            <a href="/editors" className="hover:text-yellow-300">
              संपादक मंडल
            </a>
            <span>|</span>
            <a href="/contribute" className="hover:text-yellow-300">
              योगदान
            </a>
          </div>
          <p className="text-sm">
            © 2025, All Rights Reserved to मशाल. Design by{" "}
            <a
              href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-400 font-semibold hover:underline"
            >
              क्रिएटिव सॉल्यूशंस
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

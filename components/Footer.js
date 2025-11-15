import { Youtube, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center text-white space-y-4">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://youtube.com/@mashaal1234?si=szJucQDKQsQwiq3W"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/17aB7Ua6d3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
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

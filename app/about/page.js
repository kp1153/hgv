export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-red-800 text-center mb-12">
          हमारे बारे में
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-l-4 border-red-600">
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            <span className="text-2xl font-bold text-red-700">मशाल</span> शासक
            सरमाएदार वर्ग के हितों के लिए समर्पित, सरकारी दरबारी मीडिया के
            ढोल-नगाड़ों के शोर के बीच, मजदूरों, मेहनतकशों की आवाज को बुलंद रखने
            का विनम्र प्रयास है।
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            यह क्रांतिकारी उर्जा को बिखरने से रोकने और सर्वहारा वर्ग की एकजुटता
            की जमीन तैयार करने के लिए समर्पित है।
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            <span className="font-semibold text-red-700">मशाल</span>{" "}
            शोषण-उत्पीड़न, जुल्म-ओ-जबर का अंत हो, पूंजी की गुलामी नहीं, श्रम का
            सम्मान हो, इसके लिए प्रतिबद्ध है।
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            यह इंसाफ और प्रेम पर आधारित, समाजवादी समाज बनाने के लक्ष्य के लिए
            समर्पित है।
          </p>

          <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded">
            <p className="text-xl font-bold text-red-800 text-center">
              नया समाज बनाने निकले हैं, आओ हमारे साथ चलो।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

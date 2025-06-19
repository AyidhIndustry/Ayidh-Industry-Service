import {
  CheckCircle,
  Settings,
  Cloud,
  HardHat,
  Zap,
  ShieldCheck,
  FastForward,
  Handshake,
  Headset,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div id="about-us">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-orange-500 font-medium text-sm uppercase tracking-wide">
              — About Our Buisness
            </p>
            <h1 className="heading">
              Powering Industries with Precision and Reliability
            </h1>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <p className="text-gray-600 leading-relaxed text-justify">
            At <b>AYIDH MOHAMMED AYIDH AL-DOSSARY INDUSTRIAL WORKSHOP</b>, we
            specialize in delivering expert solutions in motor rewinding,
            generator repair, pump overhauling, and more. With a commitment to
            quality and customer satisfaction, our workshop has become a trusted
            partner for industries across Jubail and beyond. Backed by
            experienced technicians and top-grade equipment.
          </p>

          <div className="space-y-4 w-full">
            <div className="flex items-start gap-3 w-full">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-gray-700 font-medium">
                Leading industrial solutions with best machinery
              </h4>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-gray-700 font-medium">
                Trusted by major clients like The Red Sea, Tamimi Company, and
                Sepco.
              </h4>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-gray-700 font-medium">
                From rewinding to electrical testing, welding, and control
                panels.
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Features */}
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className=" space-y-4 md:max-w-56 group">
            <h2 className="text-orange-500 text-4xl font-bold">01</h2>
            <div className="flex justify-center items-center">
              <ShieldCheck className="w-16 h-16 text-[var(--secondary)] stroke-1" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
                Quality Assurance
              </h3>
              <div className="w-16 group-hover:w-full transition-all duration-300 h-1 bg-orange-500 mx-auto"></div>
            </div>
          </div>
          <div className=" space-y-4 md:max-w-56 group">
            <h2 className="text-orange-500 text-4xl font-bold">02</h2>
            <div className="flex justify-center items-center">
              <FastForward className="w-16 h-16 text-[var(--secondary)] stroke-1" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
                Fast Turnaround
              </h3>
              <div className="w-16 group-hover:w-full transition-all duration-300 h-1 bg-orange-500 mx-auto"></div>
            </div>
          </div>
          <div className=" space-y-4 md:max-w-56 group">
            <h2 className="text-orange-500 text-4xl font-bold">03</h2>
            <div className="flex justify-center items-center">
              <Handshake className="w-16 h-16 text-[var(--secondary)] stroke-1" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
                Trusted Clients
              </h3>
              <div className="w-16 group-hover:w-full transition-all duration-300 h-1 bg-orange-500 mx-auto"></div>
            </div>
          </div>
          <div className=" space-y-4 md:max-w-56 group">
            <h2 className="text-orange-500 text-4xl font-bold">04</h2>
            <div className="flex justify-center items-center">
              <Headset  className="w-16 h-16 text-[var(--secondary)] stroke-1" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
                Dedicated Support
              </h3>
              <div className="w-16 group-hover:w-full transition-all duration-300 h-1 bg-orange-500 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

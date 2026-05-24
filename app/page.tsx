import Image from "next/image";
import {Mail, MapPin } from "lucide-react";

export default function Home() {
  const researchItems = [
  {
    label1: "Nonlinear",
    label2: "control systems",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12 Q6 4 10 12 Q14 20 18 12 Q20 8 22 12"/>
      </svg>
    ),
  },
  {
    label1: "Safety-critical",
    label2: "robotics",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    label1: "Control Barrier",
    label2: "Functions",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h7v7H3z"/>
        <path d="M10 10 Q18 10 21 21"/>
        <path d="M14 3h7v7h-7z"/>
      </svg>
    ),
  },
  {
    label1: "Motion planning",
    label2: "& autonomous navigation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/>
        <path d="M12 8a4 4 0 0 1 4 4"/>
      </svg>
    ),
  },
  {
    label1: "Quantum computing",
    label2: "for dynamical systems",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2a10 10 0 0 1 0 20A10 10 0 0 1 12 2"/>
        <ellipse cx="12" cy="12" rx="10" ry="4"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    label1: "Robot learning",
    label2: "& simulation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2v2H10V4a2 2 0 0 1 2-2z"/>
        <path d="M8 6h8a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4z"/>
        <circle cx="9" cy="11" r="1" fill="currentColor"/>
        <circle cx="15" cy="11" r="1" fill="currentColor"/>
        <path d="M9 15h6"/>
        <path d="M4 14H2M22 14h-2"/>
      </svg>
    ),
  },
];

  return (
    <main className="min-h-screen bg-[#eef4fb] text-[#183b6b]">
      <nav className="fixed top-0 w-full z-50 bg-[#f8fbff]/90 backdrop-blur-md border-b border-[#dbe7f5]">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

          {/* LOGO */}
          <h1 className="text-2xl font-semibold text-[#183b6b] font-[family-name:var(--font-playfair)]">
            Luisa Chavez
          </h1>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8">

            {/* LINKS */}
            <div className="flex gap-8 text-[#355070] text-sm font-medium">
              <a href="#about" className="hover:text-[#355070] transition border-b-2 border-blue-500 pb-1">
                About
              </a>
              <a href="#research" className="hover:text-[#355070] transition">
                Research
              </a>
              <a href="#projects" className="hover:text-[#355070] transition">
                Projects
              </a>
              <a href="/Luisa_Chavez_CV.pdf" target="_blank" className="hover:text-[#355070] transition">
                CV
              </a>
            </div>

            {/* ICONS */}
            <div className="flex items-center gap-5 text-[#355070]">

              {/* GitHub */}
              <a href="https://github.com/Posheyla" target="_blank" className="hover:text-[#355070] transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/luisa-ch%C3%A1vez-v%C3%A1squez/" target="_blank" className="hover:text-[#355070] transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </nav>

      <section
        className="h-[85vh] flex items-center justify-center px-6 bg-cover bg-top relative overflow-hidden"
        style={{
          backgroundImage: "url('/mountains.png')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#eef4fb]/55"></div>

        {/* CONTENT */}
        <div className="max-w-5xl text-center relative z-10 pt-20">

          {/* TOP TEXT */}
          <p className="text-[0.82rem] font-semibold uppercase tracking-[0.45em] text-[#445d8d] mb-6">
            Electrical Engineering · Robotics · Control
          </p>

          {/* NAME */}
          <h1
            className="
              text-6xl
              md:text-8xl
              tracking-[-0.03em]
              font-[family-name:var(--font-playfair)]
              font-medium
              mb-8
              text-[#162554]
            "
          >
            Luisa Chavez Vasquez
          </h1>

          {/* DESCRIPTION */}
          <p className="text-xl md:text-2xl text-[#243b63] mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
            M.S. Electrical Engineering student at North Carolina State University
            interested in robotics, nonlinear control, safety-critical autonomy,
            and quantum approaches for dynamical systems.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center gap-4 flex-wrap mb-10">
            <a
              href="#projects"
              className="
                bg-[#5b7db1]
                hover:bg-[#4a6a99]
                text-white
                px-8
                py-4
                rounded-full
                font-medium
                transition
                shadow-md
              "
            >
              View Projects
            </a>

            <a
              href="/Luisa_Chavez_CV.pdf"
              target="_blank"
              className="
                border
                border-[#7d9cc3]
                text-[#243b63]
                px-8
                py-4
                rounded-full
                font-medium
                hover:bg-[#5b7db1]
                hover:text-white
                transition
              "
            >
              Download CV
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex justify-center items-center gap-6 text-[#243b63] mt-2">

            {/* GITHUB */}
            <a
              href="https://github.com/Posheyla"
              target="_blank"
              className="flex items-center gap-2 hover:text-[#162554] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.95c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.2-3.08-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18A11.2 11.2 0 0 1 12 6.8c1 0 2 .13 2.93.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.75.8 1.2 1.83 1.2 3.08 0 4.41-2.69 5.39-5.25 5.67.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>

              <span className="text-sm font-medium">
                GitHub
              </span>
            </a>

            {/* DIVIDER */}
            <div className="w-px h-5 bg-[#9bb0cc]"></div>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/luisa-ch%C3%A1vez-v%C3%A1squez/"
              target="_blank"
              className="flex items-center gap-2 hover:text-[#162554] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>

              <span className="text-sm font-medium">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-5xl font-[family-name:var(--font-playfair)] text-[#183b6b] mb-2">
              About
            </h2>

            <div className="text-[#8aa4c7] text-2xl mb-8">~~</div>

            <p className="text-[#355070] text-lg leading-relaxed mb-8">
              I am a master&apos;s student in Electrical Engineering at North Carolina
              State University, building a research path at the intersection of robotics,
              nonlinear control, safety-critical autonomy, and quantum computing.
            </p>

            <p className="text-[#355070] text-lg leading-relaxed">
              My current interests include control barrier functions, autonomous
              navigation, nonlinear dynamical systems, and the potential role of
              quantum algorithms in simulation and control. I am especially interested
              in developing rigorous, safe, and intelligent robotic systems that can
              operate in complex environments.
            </p>
          </div>

          {/* RIGHT IMAGE + QUOTE */}
          <div className="grid md:grid-cols-[1.35fr_1fr] gap-10 items-center">
            <Image
              src="/escala.JPEG"
              alt="Luisa climbing at New River Gorge"
              width={460}
              height={540}
              className="rounded-3xl object-cover shadow-lg"
            />

            <div>
              <p className="text-5xl text-[#8aa4c7] mb-4 leading-none">“</p>

              <p className="italic text-[#355070] text-2xl leading-relaxed font-light">
                Sometimes the things we enjoy most
                are waiting on the other side of fear.
              </p>

              <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#8aa4c7]">
                Luisa Chavez Vasquez
              </p>

              <div className="mt-8 flex items-center gap-3 text-[#5f7aa3] text-sm">
                <MapPin size={18} />
                <span>New River Gorge, West Virginia</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="research" className="px-6 py-24 bg-[#eef4fb]">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-0 items-start">
          {researchItems.map(({ icon, label1, label2 }, index) => (
            <div key={label1} className="relative flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 rounded-full bg-white border border-[#dbe7f5] shadow-sm flex items-center justify-center text-[#5b7db1] mb-5">
                {icon}
              </div>
              <p className="text-[#183b6b] font-semibold leading-snug">{label1}</p>
              <p className="text-[#355070] text-sm leading-snug">{label2}</p>
              {index !== 5 && (
                <div className="hidden md:block absolute right-0 top-6 h-14 w-px bg-[#dbe7f5]" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-[family-name:var(--font-playfair)] text-[#183b6b] mb-14">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* PROJECT 1 */}
            <div className="bg-[#f7fbff] border border-[#dbe7f5] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover"
              >
                <source src="/quadrotor.mp4" type="video/mp4" />
              </video>

              <div className="p-7">

                <h3 className="text-2xl font-semibold text-[#183b6b] mb-4">
                  Obstacle-Aware Quadrotor Navigation
                </h3>

                <p className="text-[#355070] leading-relaxed mb-6">
                  Developed an obstacle-aware quadrotor navigation system integrating
                  3D RRT* path planning with CLF-CBF-QP safety-critical control.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "MATLAB",
                    "CoppeliaSim",
                    "RRT*",
                    "CLF-CBF-QP",
                    "Control Systems",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#e5f1ff] text-[#355070] px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Posheyla/quadrotor-rrt-clf-cbf-control"
                  target="_blank"
                  className="text-[#355070] font-medium hover:text-blue-900 transition"
                >
                  View project →
                </a>

              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="bg-[#f7fbff] border border-[#dbe7f5] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover"
              >
                <source src="/delta.mp4" type="video/mp4" />
              </video>

              <div className="p-7">

                <h3 className="text-2xl font-semibold text-[#183b6b] mb-4">
                  AI-Based Recycling Sorting System
                </h3>

                <p className="text-[#355070] leading-relaxed mb-6">
                  Designed an automated recycling sorting system using an ABB IRB360
                  delta robot integrated with computer vision and real-time material
                  classification.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Python",
                    "CNN",
                    "Computer Vision",
                    "CoppeliaSim",
                    "ABB IRB360",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#e5f1ff] text-[#355070] px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Posheyla/waste-sorting-system-ROS-Coppelia"
                  target="_blank"
                  className="text-[#355070] font-medium hover:text-blue-900 transition"
                >
                  View project →
                </a>

              </div>
            </div>

            {/* PROJECT 3 */}
            <div className="bg-[#f7fbff] border border-[#dbe7f5] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <img
                src="/wearable.png"
                alt="SenseAhead Smart Shirt Poster"
                className="w-full h-64 object-contain bg-white"
              />

              <div className="p-7">

                <h3 className="text-2xl font-semibold text-[#183b6b] mb-4">
                  SenseAhead Smart Shirt
                </h3>

                <p className="text-[#355070] leading-relaxed mb-6">
                  Developed a wearable health monitoring system integrating ECG,
                  SpO2, temperature, and IMU sensors with real-time visualization
                  and motion segmentation.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Arduino",
                    "Sensors",
                    "Wearables",
                    "Signal Processing",
                    "IoT",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#e5f1ff] text-[#355070] px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Posheyla/SenseAhead--Smart-T-shirt-for-Vital-Sign-Monitoring"
                  target="_blank"
                  className="text-[#355070] font-medium hover:text-blue-900 transition"
                >
                  View project →
                </a>

              </div>
            </div>

            {/* PROJECT 4 */}
            <div className="bg-[#f7fbff] border border-[#dbe7f5] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <img
                src="/quantum.png"
                alt="Quantum Computing Project"
                className="w-full h-64 object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-semibold text-[#183b6b] mb-4">
                  Generalized Quantum Signal Processing
                </h3>

                <p className="text-[#355070] leading-relaxed mb-6">
                  Implemented Generalized Quantum Signal Processing (GQSP) for
                  Hamiltonian simulation and analyzed approximation accuracy and
                  complexity scaling.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Python",
                    "Qiskit",
                    "Quantum Computing",
                    "Optimization",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#e5f1ff] text-[#355070] px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Posheyla/generalized-qsp-hamiltonian-simulation/tree/main"
                  target="_blank"
                  className="text-[#355070] font-medium hover:text-blue-900 transition"
                >
                  View project →
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>
      <footer
        className="relative overflow-hidden px-6 py-12 text-[#183b6b] bg-cover bg-center"
        style={{
          backgroundImage: "url('/footer-mountains.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#eef4fb]/75"></div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-12">

          {/* LEFT */}
          <div className="md:max-w-md">
            <p className="text-2xl font-[family-name:var(--font-playfair)] leading-snug">
              Let&apos;s build intelligent,
              <br />
              safe, and meaningful
              <br />
              systems.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 text-[#355070] md:min-w-[320px]">

            <a
              href="mailto:lpchavez@ncsu.edu"
              className="flex items-center gap-3 hover:text-[#183b6b] transition"
            >
              <Mail size={18} />
              <span>lpchavez@ncsu.edu</span>
            </a>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Morrisville, North Carolina</span>
            </div>

            <p className="text-sm text-[#7d93b2] mt-4 italic">
              Photography by{" "}
              <a
                href="https://www.instagram.com/jaychaisuksiri/"
                target="_blank"
                className="hover:text-[#355070] transition"
              >
                @jaychaisuksiri
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
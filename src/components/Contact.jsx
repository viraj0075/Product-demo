import { useEffect, useRef } from 'react';

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    const idle = requestIdleCallback(() => {
      import('gsap').then(({ gsap }) => {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          const ctx = gsap.context(() => {
            gsap.from(".contact-header", {
              y: 20,
              opacity: 0,
              duration: 0.6,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                once: true
              }
            });

            gsap.from(".form-field", {
              y: 15,
              opacity: 0,
              duration: 0.5,
              stagger: 0.1,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                once: true
              }
            });
          }, containerRef);

          return () => ctx.revert();
        });
      });
    });

    return () => cancelIdleCallback(idle);
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      id="contact"
    >
      <div className="max-w-2xl mx-auto">

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">

          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="contact-header text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Send us a message
            </h2>
            <p className="contact-header text-gray-400 text-sm sm:text-base max-w-md mx-auto">
              Have a question or want to work with us? Let’s talk.
            </p>
          </div>

          {/* Form */}
          <form
            className="flex flex-col gap-5 sm:gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted");
            }}
          >

            {/* Email */}
            <div className="form-field flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs sm:text-sm">
                Email Address
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="example@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
              />
            </div>

            {/* Name */}
            <div className="form-field flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs sm:text-sm">
                Name
              </label>
              <input
                type="text"
                required
                autoComplete="name"
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
              />
            </div>

            {/* Message */}
            <div className="form-field flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs sm:text-sm">
                Message
              </label>
              <textarea
                rows="4"
                required
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition resize-none"
              />
            </div>

            {/* Button */}
            <div className="form-field mt-2 sm:mt-4">
              <button className="w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                Send Message
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
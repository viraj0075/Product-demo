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
    <section ref={containerRef} className="layout-container py-16 lg:py-24" id="contact">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="contact-header text-3xl md:text-5xl font-bold text-white mb-4">
            Send us a message
          </h2>
          <p className="contact-header text-gray-400 text-sm md:text-base px-4 max-w-lg mx-auto">
            Have a question or want to work with us? Let’s talk.
          </p>
        </div>

        {/* Form */}
        <form
          className="contact-form flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted (connect backend)");
          }}
        >

          <div className="form-field flex flex-col gap-2">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              placeholder="example@email.com"
              className="input"
            />
          </div>

          <div className="form-field flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="John Doe"
              className="input"
            />
          </div>

          <div className="form-field flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Your message..."
              className="input resize-none"
            />
          </div>

          <div className="form-field mt-4">
            <button className="btn-primary">
              Submit
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}
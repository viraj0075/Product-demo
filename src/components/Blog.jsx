import { useEffect, useRef } from 'react';
import { posts } from '../constants/Post';

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Run animation ONLY when browser is idle
    const idle = requestIdleCallback(() => {
      import('gsap').then(({ gsap }) => {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          const ctx = gsap.context(() => {
            gsap.from(".blog-title", {
              y: 20,
              opacity: 0,
              duration: 0.5
            });

            gsap.from(".blog-card", {
              y: 20,
              opacity: 0,
              duration: 0.4,
              stagger: 0.1,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
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
    <section ref={containerRef} className="layout-container py-8 lg:py-14" id="blog">
      
      <div className="text-center mb-12 blog-title">
        <span className="text-brand-primary text-base lg:text-xl font-bold uppercase mb-4 block">
          Blog
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          In the spotlight
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover the latest industry trends...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="blog-card group cursor-pointer">
            
            <div className="rounded-2xl overflow-hidden mb-6 aspect-video bg-brand-surface">
              <img
                src={post.img}
                alt={post.title}
                loading="lazy"
                decoding="async"
                width="400"
                height="225"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <span className="text-xs text-gray-500 uppercase mb-2 block">
              {post.tag}
            </span>

            <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors line-clamp-2">
              {post.title}
            </h3>

          </div>
        ))}
      </div>
    </section>
  );
}
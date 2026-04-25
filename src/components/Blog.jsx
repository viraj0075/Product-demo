import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { posts } from '../constants/Post';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true
        }
      });

      tl.from(".blog-title", { y: 20, opacity: 0, duration: 0.6 })
        .from(".blog-card", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out"
        }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={containerRef} className="layout-container text-center lg:text-left py-8 lg:py-14">
      <div className="text-center mb-12 blog-title">
        <span className="empower-tag text-brand-primary text-base lg:text-xl font-bold tracking-wider uppercase mb-4 block">Blog</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">In the spotlight</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Discover the latest industry trends, expert insights, and success stories to stay ahead of the curve.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="blog-card group cursor-pointer">
            <div className="rounded-2xl overflow-hidden mb-6 aspect-video bg-brand-surface">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">{post.tag}</span>
            <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

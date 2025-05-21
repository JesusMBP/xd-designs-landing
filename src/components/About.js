export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">About Us</h2>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl"></div>
            <p className="text-lg text-slate-600 leading-relaxed relative z-10">
              Based in the heart of Miami, XD Design is driven by a passion for innovation and a commitment to excellence. 
              We specialize in delivering cutting-edge tech solutions tailored to meet the evolving needs of our clients. 
              Whether it's web development, automation, or digital strategy, our goal is to empower businesses through 
              reliable, forward-thinking technology that performs seamlessly and elevates their brand.
            </p>
          </div>
          <div className="mt-12 flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">100+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
export default function Hero() {
    return (
      <section className="pt-20 pb-10 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bringing Your Digital Ideas to Life
            </h1>
            <p className="text-xl mb-8">
              XD Designs creates powerful software applications and stunning websites that help businesses grow.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300">
                Our Services
              </button>
              <button className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/hero-image.svg" 
              alt="Software development illustration" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    )
  }
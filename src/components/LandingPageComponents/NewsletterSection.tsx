

export const NewsletterSection = () => {
return (
  /* Newsletter Section */
  <div className="bg-gradient-to-r from-blue-600 to-purple-600">
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-4xl mx-auto text-center">
    <h3 className="mb-4 text-2xl font-bold text-white">
      Join Our Newsletter
    </h3>
    <p className="mb-6 text-white/80">
      Stay updated with the latest events, hackathons, and opportunities!
    </p>
    <div className="flex flex-col justify-center max-w-lg gap-4 mx-auto sm:flex-row">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-grow px-4 py-3 text-white border rounded-xl bg-white/10 backdrop-blur-sm border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
      />
      <button className="px-6 py-3 font-semibold text-blue-600 transition-colors bg-white rounded-xl hover:bg-gray-100 whitespace-nowrap">
        Subscribe Now
      </button>
    </div>
  </div>
</div>
</div>
  )
}

export default NewsletterSection;

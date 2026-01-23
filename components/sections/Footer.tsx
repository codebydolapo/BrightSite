import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 px-6 md:px-20 py-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
    {/* BRAND */}
    <div>
      <h3 className="text-2xl font-extrabold text-white mb-4">
        Bright
      </h3>
      <p className="text-slate-400 max-w-sm">
        We build fast, modern websites for Nigerian businesses
        that want to look credible and grow online.
      </p>
    </div>

    {/* LINKS */}
    <div>
      <h4 className="text-lg font-bold text-white mb-4">
        Quick Links
      </h4>
      <ul className="space-y-3 text-slate-400">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h4 className="text-lg font-bold text-white mb-4">
        Get in Touch
      </h4>
      <ul className="space-y-3 text-slate-400">
        <li>Email: hello@brightsite.com</li>
        <li>WhatsApp available</li>
        <li>Nigeria 🇳🇬</li>
      </ul>
    </div>
  </div>

  <div className="mt-16 text-center text-sm text-slate-500">
    © {new Date().getFullYear()} BrightSite. All rights reserved.
  </div>
</footer>

  )
}

export default Footer

import {WaitlistForm} from "@/components/WaitlistForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reuniting People With Lost Items",
  description: "The trusted platform connecting finders of lost items with their rightful owners through secure verification.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-gray-900 dark:via-purple-950/30 dark:to-blue-950/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-70 dark:opacity-30" aria-hidden="true">
        <div className="absolute top-10 left-[10%] w-72 h-72 bg-purple-200 dark:bg-purple-700/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-[30%] right-[10%] w-80 h-80 bg-blue-200 dark:bg-blue-700/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-[20%] w-60 h-60 bg-indigo-200 dark:bg-indigo-700/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <header className="mb-12">
          <div className="inline-flex items-center justify-center p-1.5 px-4 mb-4 rounded-full bg-white/70 backdrop-blur dark:bg-white/10 shadow-sm border border-gray-200 dark:border-gray-800">
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
              Coming Soon
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-primary to-secondary dark:from-white dark:via-primary/90 dark:to-secondary/90 bg-clip-text text-transparent mb-4">
            <span className="sr-only">iLost - </span>
            <span className="relative">
              iLost
              <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </span>
            <span className="sr-only"> - </span>
            Reuniting People With Lost Items
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            The trusted platform connecting finders of lost items with their rightful owners through secure verification.
          </p>
        </header>
        
        <main className="flex flex-col gap-8 items-center text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Join our waitlist to be the first to know when we launch.
            </p>

            {/* Features section */}
            <section aria-labelledby="features-heading" className="mt-16">
              <h2 id="features-heading" className="sr-only">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="group flex flex-col items-center p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 dark:border-gray-700/50 hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/40 dark:from-primary/30 dark:to-primary/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary dark:text-primary/90">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Easy Reporting</h3>
                  <p className="mt-2 text-center text-gray-600 dark:text-gray-300">Simple process for good Samaritans to report and submit details of found items they want to return.</p>
                </article>
              
              <div className="group flex flex-col items-center p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 dark:border-gray-700/50 hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/40 dark:from-secondary/30 dark:to-secondary/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-secondary dark:text-secondary/90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Owner Verification</h3>
                <p className="mt-2 text-center text-gray-600 dark:text-gray-300">Reliable verification system ensures items are returned only to their rightful owners with proof of ownership.</p>
              </div>
              
              <div className="group flex flex-col items-center p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 dark:border-gray-700/50 hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/40 dark:from-accent/30 dark:to-accent/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent dark:text-accent/90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Connection</h3>
                <p className="mt-2 text-center text-gray-600 dark:text-gray-300">Bringing together finders and owners in a trusted environment with safe meetup options and coordination support.</p>
              </div>
            </div>
            </section>
            
            {/* Waitlist Form Section */}
            <div className="mt-12 relative max-w-md mx-auto">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-50 blur-xl"></div>
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">Join Our Waitlist</h2>
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Stats Section */}
        <section className="py-16 mt-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Why Choose iLost?</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Our platform helps reunite people with their belongings efficiently</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-white/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex h-12 w-12 rounded-full bg-primary/20 dark:bg-primary/30 items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">%</span>
                </div>
                <p className="text-4xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">98%</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">Recovery rate</p>
              </div>
              
              <div className="text-center p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-white/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex h-12 w-12 rounded-full bg-secondary/20 dark:bg-secondary/30 items-center justify-center mb-4">
                  <span className="text-xl font-bold text-secondary">⏱️</span>
                </div>
                <p className="text-4xl font-bold bg-gradient-to-br from-secondary to-secondary/70 bg-clip-text text-transparent">24h</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">Average recovery time</p>
              </div>
              
              <div className="text-center p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-white/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex h-12 w-12 rounded-full bg-accent/20 dark:bg-accent/30 items-center justify-center mb-4">
                  <span className="text-xl font-bold text-accent">👥</span>
                </div>
                <p className="text-4xl font-bold bg-gradient-to-br from-accent to-accent/70 bg-clip-text text-transparent">10k+</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">Happy customers</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-400">© 2025 iLost. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

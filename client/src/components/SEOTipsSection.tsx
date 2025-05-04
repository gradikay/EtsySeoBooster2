import React from "react";

const SEOTipsSection: React.FC = () => {
  return (
    <section className="card-gradient mb-8">
      <div className="flex items-center mb-6">
        <div className="w-1 h-8 bg-primary rounded-full mr-3"></div>
        <h2 className="text-2xl font-semibold text-foreground">Etsy SEO Tips</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card bg-card/50 hover:bg-card transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="9" x2="20" y2="9"></line>
                <line x1="4" y1="15" x2="20" y2="15"></line>
                <line x1="10" y1="3" x2="8" y2="21"></line>
                <line x1="16" y1="3" x2="14" y2="21"></line>
              </svg>
            </div>
            <h3 className="text-foreground font-semibold ml-3">Use all 13 tags</h3>
          </div>
          <p className="text-muted-foreground">
            Always utilize all available tag slots to maximize your visibility in search results. Each tag is an opportunity to get found.
          </p>
        </div>

        <div className="card bg-card/50 hover:bg-card transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 7 4 4 20 4 20 7"></polyline>
                <line x1="9" y1="20" x2="15" y2="20"></line>
                <line x1="12" y1="4" x2="12" y2="20"></line>
              </svg>
            </div>
            <h3 className="text-foreground font-semibold ml-3">Match title & tags</h3>
          </div>
          <p className="text-muted-foreground">
            Include your most important keywords in both your title and tags for better ranking. This alignment signals relevance to Etsy's algorithm.
          </p>
        </div>

        <div className="card bg-card/50 hover:bg-card transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
            </div>
            <h3 className="text-foreground font-semibold ml-3">Use multi-word tags</h3>
          </div>
          <p className="text-muted-foreground">
            Tags can include multiple words (up to 20 characters). Use specific phrases that potential buyers would search for.
          </p>
        </div>

        <div className="card bg-card/50 hover:bg-card transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
            <h3 className="text-foreground font-semibold ml-3">Be specific</h3>
          </div>
          <p className="text-muted-foreground">
            Use specific descriptors rather than generic terms. Instead of "necklace," try "silver pendant necklace" to target interested buyers.
          </p>
        </div>

        <div className="card bg-card/50 hover:bg-card transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
            </div>
            <h3 className="text-foreground font-semibold ml-3">Long-tail keywords</h3>
          </div>
          <p className="text-muted-foreground">
            Long-tail keywords are specific phrases with less competition but higher conversion rates. They help you stand out in niche markets.
          </p>
        </div>

        <div className="card bg-card/50 hover:bg-card transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3 className="text-foreground font-semibold ml-3">Update seasonally</h3>
          </div>
          <p className="text-muted-foreground">
            Refresh your tags periodically to include seasonal terms and trending keywords. Holiday-specific terms can boost visibility during peak seasons.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOTipsSection;

import React from "react";

const SEOTipsSection: React.FC = () => {
  return (
    <section className="glass-card rounded-2xl p-6 md:p-8 mb-8">
      <h2 className="text-2xl font-medium text-white mb-4">Etsy SEO Tips</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 text-primary-400 mt-0.5">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="ml-3">
              <h3 className="text-white font-medium">Use all 13 tags</h3>
              <p className="text-gray-400 text-sm">
                Always utilize all available tag slots to maximize your
                visibility.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 text-primary-400 mt-0.5">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="ml-3">
              <h3 className="text-white font-medium">Match tags to title</h3>
              <p className="text-gray-400 text-sm">
                Include your most important keywords in both your title and tags.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 text-primary-400 mt-0.5">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="ml-3">
              <h3 className="text-white font-medium">Use multi-word tags</h3>
              <p className="text-gray-400 text-sm">
                Tags can include multiple words (up to 20 characters). Utilize
                this for more specific phrases.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 text-primary-400 mt-0.5">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="ml-3">
              <h3 className="text-white font-medium">Be specific</h3>
              <p className="text-gray-400 text-sm">
                Use specific descriptors rather than generic terms to target
                interested buyers.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 text-primary-400 mt-0.5">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="ml-3">
              <h3 className="text-white font-medium">
                Consider long-tail keywords
              </h3>
              <p className="text-gray-400 text-sm">
                These are more specific phrases with less competition but higher
                conversion rates.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 text-primary-400 mt-0.5">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="ml-3">
              <h3 className="text-white font-medium">Update seasonally</h3>
              <p className="text-gray-400 text-sm">
                Refresh your tags periodically to include seasonal terms and
                trending keywords.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOTipsSection;

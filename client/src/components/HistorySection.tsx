import React from "react";
import { SavedSearch } from "@/lib/tagGenerator";
import { useToast } from "@/hooks/use-toast";

interface HistorySectionProps {
  savedSearches: SavedSearch[];
  onSelectSearch: (search: SavedSearch) => void;
  onDeleteSearch: (index: number) => void;
  onClearHistory: () => void;
}

const HistorySection: React.FC<HistorySectionProps> = ({
  savedSearches,
  onSelectSearch,
  onDeleteSearch,
  onClearHistory,
}) => {
  const { toast } = useToast();

  const handleClearHistory = () => {
    if (savedSearches.length > 0) {
      onClearHistory();
      toast({
        title: "History cleared",
        description: "All saved searches have been removed.",
        variant: "success",
      });
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <section className="card-gradient mb-10">
      <div className="flex items-center mb-6">
        <div className="w-1 h-8 bg-accent rounded-full mr-3"></div>
        <h2 className="text-2xl font-semibold text-foreground">Saved Searches</h2>

        <button
          id="clearHistoryBtn"
          className="ml-auto btn-outline flex items-center text-sm px-4"
          onClick={handleClearHistory}
          disabled={savedSearches.length === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          Clear All
        </button>
      </div>

      {savedSearches.length === 0 && (
        <div id="no-history" className="text-center py-12 px-4 border border-dashed border-border rounded-lg bg-card/30">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-muted-foreground mb-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v8L22 8V2z"></path>
            <rect x="2" y="2" width="8" height="8" rx="1"></rect>
            <path d="M17 22v-8l-5 3-5-3v8"></path>
          </svg>
          <p className="text-foreground font-medium mb-2">No saved searches yet</p>
          <p className="text-muted-foreground text-sm">
            Your saved searches will appear here after you save them
          </p>
        </div>
      )}

      {savedSearches.length > 0 && (
        <div id="history-list" className="space-y-3">
          {savedSearches.map((search, index) => {
            // Get category display name (capitalize first letter)
            const categoryDisplay =
              search.category.charAt(0).toUpperCase() + search.category.slice(1);
            
            // Get formatted date
            const formattedDate = formatDate(search.date);

            return (
              <div
                key={index}
                className="card flex flex-col md:flex-row md:justify-between md:items-center gap-4 hover:bg-card/80 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="text-foreground font-medium truncate text-lg">
                      {search.productTitle}
                    </h3>
                    <span className="ml-2 tag-pill text-xs px-2 py-0.5">
                      {categoryDisplay}
                    </span>
                  </div>
                  
                  <div className="flex items-center mt-1">
                    <span className="text-muted-foreground text-xs inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {formattedDate}
                    </span>
                    <span className="text-muted-foreground text-xs mx-2">•</span>
                    <span className="text-muted-foreground text-xs inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                        <line x1="7" y1="7" x2="7.01" y2="7"></line>
                      </svg>
                      {search.tags.length} tags
                    </span>
                  </div>
                  
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {search.tags.slice(0, 5).map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag-pill text-xs px-2 py-0.5 bg-muted/50">
                        {tag}
                      </span>
                    ))}
                    {search.tags.length > 5 && (
                      <span className="tag-pill text-xs px-2 py-0.5 bg-muted/30">
                        +{search.tags.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2 ml-auto">
                  <button
                    className="btn-primary text-sm px-4 py-2"
                    onClick={() => onSelectSearch(search)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1 4 1 10 7 10"></polyline>
                      <polyline points="23 20 23 14 17 14"></polyline>
                      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                    </svg>
                    Load
                  </button>
                  <button
                    className="btn-outline text-sm px-2"
                    onClick={() => onDeleteSearch(index)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default HistorySection;

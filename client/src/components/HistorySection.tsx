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

  return (
    <section className="glass-card rounded-2xl p-6 md:p-8 mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium text-white">Saved Searches</h2>

        <button
          id="clearHistoryBtn"
          className="px-3 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg flex items-center"
          onClick={handleClearHistory}
          disabled={savedSearches.length === 0}
        >
          <i className="fas fa-trash-alt mr-2"></i> Clear All
        </button>
      </div>

      {savedSearches.length === 0 && (
        <div id="no-history" className="text-center py-8">
          <p className="text-white font-medium">No saved searches yet</p>
          <p className="text-gray-300 text-sm mt-2">
            Your saved searches will appear here
          </p>
        </div>
      )}

      {savedSearches.length > 0 && (
        <div id="history-list" className="space-y-3">
          {savedSearches.map((search, index) => {
            // Get category display name (capitalize first letter)
            const categoryDisplay =
              search.category.charAt(0).toUpperCase() + search.category.slice(1);

            return (
              <div
                key={index}
                className="history-item glass-card-dark rounded-lg p-4 flex justify-between items-center"
              >
                <div className="flex-1">
                  <h3 className="text-white font-medium truncate">
                    {search.productTitle}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Category: {categoryDisplay}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-2 bg-primary-700 hover:bg-primary-600 text-white text-sm rounded-lg"
                    onClick={() => onSelectSearch(search)}
                  >
                    <i className="fas fa-sync-alt mr-1"></i> Load
                  </button>
                  <button
                    className="px-2 py-2 bg-dark-700 hover:bg-dark-600 text-white text-sm rounded-lg"
                    onClick={() => onDeleteSearch(index)}
                  >
                    <i className="fas fa-times"></i>
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

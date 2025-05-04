import React from "react";
import { copyTextToClipboard } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ResultsSectionProps {
  tags: string[];
  keywords: string[];
  isLoading: boolean;
  onSave: () => void;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({
  tags,
  keywords,
  isLoading,
  onSave,
}) => {
  const { toast } = useToast();

  const handleCopyAllTags = () => {
    const tagsText = tags.join(", ");
    copyTextToClipboard(tagsText)
      .then(() => {
        toast({
          title: "Tags copied to clipboard!",
          description: "All tags have been copied successfully.",
          variant: "success",
        });
      })
      .catch((err) => {
        toast({
          title: "Failed to copy",
          description: "There was an error copying to clipboard.",
          variant: "destructive",
        });
      });
  };

  const handleCopySingleTag = (tag: string) => {
    copyTextToClipboard(tag)
      .then(() => {
        toast({
          title: "Tag copied",
          description: `"${tag}" copied to clipboard`,
          variant: "success",
        });
      })
      .catch((err) => {
        toast({
          title: "Failed to copy",
          description: "There was an error copying to clipboard.",
          variant: "destructive",
        });
      });
  };

  return (
    <section className="lg:w-1/2 glass-card rounded-2xl p-6 md:p-8" id="results-section">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium text-white">Generated Tags</h2>

        <div className="flex gap-2">
          <button
            id="copyBtn"
            className="px-3 py-2 bg-primary-700 hover:bg-primary-600 text-white rounded-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleCopyAllTags}
            disabled={tags.length === 0 || isLoading}
          >
            <i className="fas fa-copy mr-2"></i> Copy All
          </button>

          <button
            id="saveBtn"
            className="px-3 py-2 bg-secondary-700 hover:bg-secondary-600 text-white rounded-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onSave}
            disabled={tags.length === 0 || isLoading}
          >
            <i className="fas fa-save mr-2"></i> Save
          </button>
        </div>
      </div>

      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-12 h-12 border-4 border-primary-300 border-t-primary-600 rounded-full animate-spin mb-4"></div>
          <p className="text-white font-medium">Generating optimized tags...</p>
        </div>
      )}

      {!isLoading && tags.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <i className="fas fa-tags text-5xl text-gray-300 mb-4"></i>
          <p className="text-white font-medium mb-2">No tags generated yet</p>
          <p className="text-gray-300 text-sm">Fill out the form and click "Generate Tags"</p>
        </div>
      )}

      {!isLoading && tags.length > 0 && (
        <div id="tags-container">
          <div className="mb-4 pb-2 border-b border-dark-700">
            <p className="text-sm text-white mb-2">
              Etsy allows up to 13 tags per listing. Here are your optimized tags:
            </p>
          </div>

          <div id="tags-grid" className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="tag-card glass-card-dark rounded-lg p-3 flex justify-between items-center"
              >
                <span className="text-white text-sm truncate">{tag}</span>
                <button
                  className="text-gray-200 hover:text-white"
                  onClick={() => handleCopySingleTag(tag)}
                >
                  <i className="fas fa-copy"></i>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-dark-700">
            <h3 className="text-lg font-medium text-white mb-3">
              Additional Keyword Suggestions
            </h3>
            <p className="text-sm text-white mb-2">
              Consider using these keywords in your title and description:
            </p>

            <div id="keywords-container" className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-dark-700 text-white rounded-full text-xs"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResultsSection;

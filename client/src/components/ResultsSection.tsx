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
    <section className="lg:w-1/2 card-gradient" id="results-section">
      <div className="flex items-center mb-6">
        <div className="w-1 h-8 bg-secondary rounded-full mr-3"></div>
        <h2 className="text-2xl font-semibold text-foreground">Generated Tags</h2>
        
        <div className="ml-auto flex gap-2">
          <button
            id="copyBtn"
            className="btn-outline flex items-center text-sm px-4"
            onClick={handleCopyAllTags}
            disabled={tags.length === 0 || isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Copy All
          </button>

          <button
            id="saveBtn"
            className="btn-secondary flex items-center text-sm px-4"
            onClick={onSave}
            disabled={tags.length === 0 || isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            Save
          </button>
        </div>
      </div>

      {isLoading && (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-muted border-t-primary rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-transparent border-t-secondary rounded-full animate-spin"></div>
            </div>
          </div>
          <p className="text-foreground font-medium mt-6">Generating optimized tags...</p>
        </div>
      )}

      {!isLoading && tags.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 flex items-center justify-center border-2 border-dashed border-muted rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
          </div>
          <p className="text-foreground font-medium mb-2">No tags generated yet</p>
          <p className="text-muted-foreground text-sm">Fill out the form and click "Generate Tags"</p>
        </div>
      )}

      {!isLoading && tags.length > 0 && (
        <div id="tags-container">
          <div className="mb-4 pb-2 border-b border-border">
            <p className="text-sm text-foreground mb-2">
              Etsy allows up to 13 tags per listing. Here are your optimized tags:
            </p>
          </div>

          <div id="tags-grid" className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="tag-pill flex justify-between items-center bg-muted hover:bg-muted/80 transition-colors p-3"
              >
                <span className="text-foreground text-sm truncate">{tag}</span>
                <button
                  className="text-muted-foreground hover:text-foreground ml-2"
                  onClick={() => handleCopySingleTag(tag)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center mb-3">
              <h3 className="text-lg font-medium text-foreground">
                Keyword Suggestions
              </h3>
              <div className="ml-2 rounded-full bg-secondary/20 px-2 py-0.5 text-xs text-secondary-foreground">
                For Titles & Descriptions
              </div>
            </div>

            <div id="keywords-container" className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="tag-pill bg-muted/50 text-foreground"
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

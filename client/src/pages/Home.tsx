import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import InputForm from "@/components/InputForm";
import ResultsSection from "@/components/ResultsSection";
import HistorySection from "@/components/HistorySection";
import SEOTipsSection from "@/components/SEOTipsSection";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import {
  FormData,
  generateTags,
  SavedSearch,
  saveSearch,
  getSavedSearches,
  saveSavedSearches,
} from "@/lib/tagGenerator";

const Home: React.FC = () => {
  // State declarations
  const [formData, setFormData] = useState<FormData>({
    productTitle: "",
    category: "",
    description: "",
  });
  const [generatedTags, setGeneratedTags] = useState<string[]>([]);
  const [generatedKeywords, setGeneratedKeywords] = useState<string[]>([]);
  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  // Load saved searches from localStorage on component mount
  useEffect(() => {
    const savedSearchesData = getSavedSearches();
    setSavedSearches(savedSearchesData);
  }, []);

  // Handler for form submission
  const handleGenerateTags = (data: FormData) => {
    // Validate form data
    if (!data.productTitle || !data.category) {
      toast({
        title: "Missing information",
        description: "Please provide both a product title and category.",
        variant: "destructive",
      });
      return;
    }

    // Show loading state
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      try {
        const result = generateTags(data);
        setGeneratedTags(result.tags);
        setGeneratedKeywords(result.keywords);
        toast({
          title: "Tags generated!",
          description: `Generated ${result.tags.length} tags for your listing.`,
          variant: "success",
        });
      } catch (error) {
        toast({
          title: "Error generating tags",
          description: "There was a problem generating your tags. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }, 1200);
  };

  // Handler to save current search
  const handleSaveSearch = () => {
    if (generatedTags.length === 0) return;

    const search = saveSearch(formData, generatedTags, generatedKeywords);
    const updatedSearches = [search, ...savedSearches];
    setSavedSearches(updatedSearches);
    saveSavedSearches(updatedSearches);

    toast({
      title: "Search saved",
      description: "Your search has been saved successfully.",
      variant: "success",
    });
  };

  // Handler to select a saved search
  const handleSelectSearch = (search: SavedSearch) => {
    setFormData({
      productTitle: search.productTitle,
      category: search.category,
      description: search.description,
    });
    setGeneratedTags(search.tags);
    setGeneratedKeywords(search.keywords);

    // Scroll to top
    window.scrollTo(0, 0);

    toast({
      title: "Search loaded",
      description: "Saved search has been loaded.",
      variant: "success",
    });
  };

  // Handler to delete a saved search
  const handleDeleteSearch = (index: number) => {
    const updatedSearches = [...savedSearches];
    updatedSearches.splice(index, 1);
    setSavedSearches(updatedSearches);
    saveSavedSearches(updatedSearches);

    toast({
      title: "Search deleted",
      description: "The saved search has been removed.",
      variant: "success",
    });
  };

  // Handler to clear all saved searches
  const handleClearHistory = () => {
    setSavedSearches([]);
    saveSavedSearches([]);
  };

  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <Header />

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Input Form */}
          <InputForm
            onSubmit={handleGenerateTags}
            formData={formData}
            setFormData={setFormData}
          />

          {/* Results Section */}
          <ResultsSection
            tags={generatedTags}
            keywords={generatedKeywords}
            isLoading={isLoading}
            onSave={handleSaveSearch}
          />
        </div>

        {/* Saved Searches History */}
        <HistorySection
          savedSearches={savedSearches}
          onSelectSearch={handleSelectSearch}
          onDeleteSearch={handleDeleteSearch}
          onClearHistory={handleClearHistory}
        />

        {/* SEO Tips */}
        <SEOTipsSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;

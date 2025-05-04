import React from "react";
import { FormData } from "@/lib/tagGenerator";

interface InputFormProps {
  onSubmit: (formData: FormData) => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const InputForm: React.FC<InputFormProps> = ({
  onSubmit,
  formData,
  setFormData,
}) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleClearForm = () => {
    setFormData({
      productTitle: "",
      category: "",
      description: "",
    });
  };

  return (
    <section className="lg:w-1/2 card-gradient">
      <div className="flex items-center mb-6">
        <div className="w-1 h-8 bg-primary rounded-full mr-3"></div>
        <h2 className="text-2xl font-semibold text-foreground">Generate Tags</h2>
      </div>

      <form id="seoForm" className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label
            htmlFor="productTitle"
            className="block text-sm font-medium text-foreground"
          >
            Product Title
          </label>
          <input
            type="text"
            id="productTitle"
            name="productTitle"
            className="input-field"
            placeholder="Enter your product title"
            required
            value={formData.productTitle}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-foreground"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="input-field"
            required
            value={formData.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="jewelry">Jewelry</option>
            <option value="clothing">Clothing</option>
            <option value="homeDecor">Home Decor</option>
            <option value="art">Art</option>
            <option value="craft">Craft Supplies</option>
            <option value="toys">Toys & Games</option>
            <option value="vintage">Vintage</option>
            <option value="wedding">Wedding</option>
            <option value="gifts">Gifts</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-foreground"
          >
            Product Description (Optional)
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="input-field"
            placeholder="Enter a brief description of your product"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="pt-2 flex gap-3">
          <button
            type="submit"
            className="flex-1 btn-primary flex justify-center items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            Generate Tags
          </button>

          <button
            type="button"
            className="btn-outline"
            onClick={handleClearForm}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
};

export default InputForm;

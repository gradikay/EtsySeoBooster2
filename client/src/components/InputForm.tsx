import React, { useState } from "react";
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
    <section className="lg:w-1/2 glass-card rounded-2xl p-6 md:p-8">
      <h2 className="text-2xl font-medium mb-6 text-white">Generate Tags</h2>

      <form id="seoForm" className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label
            htmlFor="productTitle"
            className="block text-sm font-medium text-gray-300"
          >
            Product Title
          </label>
          <input
            type="text"
            id="productTitle"
            name="productTitle"
            className="w-full px-4 py-3 bg-dark-800 text-white border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 input-transition"
            placeholder="Enter your product title"
            required
            value={formData.productTitle}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-300"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-4 py-3 bg-dark-800 text-white border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 input-transition"
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
            className="block text-sm font-medium text-gray-300"
          >
            Product Description (Optional)
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="w-full px-4 py-3 bg-dark-800 text-white border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 input-transition"
            placeholder="Enter a brief description of your product"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="pt-2 flex gap-3">
          <button
            type="submit"
            className="flex-1 btn-gradient text-white font-medium py-3 px-6 rounded-lg shadow-lg"
          >
            <i className="fas fa-tags mr-2"></i> Generate Tags
          </button>

          <button
            type="button"
            className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg"
            onClick={handleClearForm}
          >
            <i className="fas fa-undo"></i>
          </button>
        </div>
      </form>
    </section>
  );
};

export default InputForm;

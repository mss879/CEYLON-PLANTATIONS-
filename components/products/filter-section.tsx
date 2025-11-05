"use client";

import { useState } from "react";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSectionProps {
  onFilterChange?: (filters: any) => void;
}

export default function FilterSection({ onFilterChange }: FilterSectionProps) {
  const [category, setCategory] = useState("");
  const [typeOfTea, setTypeOfTea] = useState("");
  const [flavour, setFlavour] = useState("");
  const [herbsSpices, setHerbsSpices] = useState("");
  const [teaGrade, setTeaGrade] = useState("");
  const [packingForm, setPackingForm] = useState("");

  const categories: FilterOption[] = [
    { value: "bottle-tin-collection", label: "Bottle Tin Collection" },
    { value: "culture-collection", label: "Culture Collection" },
    { value: "envelope-tea-bag-collection", label: "Envelope Tea Bag Collection" },
    { value: "flavour-envelope-tea-bag-collection", label: "Flavour Envelope Tea Bag Collection" },
    { value: "fruit-tea-collection", label: "Fruit Tea Collection" },
    { value: "gift-tea-collection", label: "Gift Tea Collection" },
    { value: "herbal-tea-collection", label: "Herbal Tea Collection" },
    { value: "seasonal-collection", label: "Seasonal Collection" },
    { value: "organic-tea-collection", label: "Organic Tea Collection" },
  ];

  const teaTypes: FilterOption[] = [
    { value: "black-tea", label: "Black Tea" },
    { value: "green-tea", label: "Green Tea" },
    { value: "herbal-tea", label: "Herbal Tea" },
    { value: "flavoured-black-tea", label: "Flavoured Black Tea" },
    { value: "flavoured-green-tea", label: "Flavoured Green Tea" },
    { value: "organic-black-tea", label: "Organic Black Tea" },
    { value: "organic-green-tea", label: "Organic Green Tea" },
    { value: "pure-ceylon-black-tea", label: "Pure Ceylon Black Tea" },
    { value: "pure-ceylon-green-tea", label: "Pure Ceylon Green Tea" },
  ];

  const flavours: FilterOption[] = [
    { value: "earl-grey", label: "Earl Grey" },
    { value: "jasmine", label: "Jasmine" },
    { value: "lemon", label: "Lemon" },
    { value: "strawberry", label: "Strawberry" },
    { value: "mango", label: "Mango" },
    { value: "peach", label: "Peach" },
    { value: "mint", label: "Mint" },
    { value: "cinnamon", label: "Cinnamon" },
    { value: "vanilla", label: "Vanilla" },
    { value: "berries", label: "Berries" },
  ];

  const herbsSpicesOptions: FilterOption[] = [
    { value: "ginger", label: "Ginger" },
    { value: "cinnamon", label: "Cinnamon" },
    { value: "cardamom", label: "Cardamom" },
    { value: "chamomile", label: "Chamomile" },
    { value: "peppermint", label: "Peppermint" },
    { value: "lemongrass", label: "Lemongrass" },
    { value: "hibiscus", label: "Hibiscus" },
    { value: "moringa", label: "Moringa" },
  ];

  const teaGrades: FilterOption[] = [
    { value: "bop1", label: "BOP1 – Broken Orange Pekoe 1" },
    { value: "fbop", label: "FBOP – Flowery Broken Orange Pekoe" },
    { value: "op", label: "OP - Orange Pekoe" },
    { value: "pek", label: "PEK – Pekoe" },
    { value: "gp1", label: "GP1 – Gun Powder 1" },
  ];

  const packingForms: FilterOption[] = [
    { value: "loose-tea", label: "Loose Tea" },
    { value: "tea-bags", label: "String & Tag Tea Bags" },
    { value: "pyramid-tea-bags", label: "Pyramid Tea Bags" },
    { value: "metal-tin", label: "Metal Tin" },
    { value: "paper-carton", label: "Paper Carton" },
    { value: "foil-envelope", label: "Foil Envelope" },
  ];

  return (
    <div className="space-y-6">
      {/* Product Categories */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="text-black font-semibold mb-3 text-sm tracking-tight">
          Product categories
        </h3>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-black text-sm focus:outline-none focus:border-gray-500 transition-colors"
        >
          <option value="">Select all</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Type of Tea */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="text-black font-semibold mb-3 text-sm tracking-tight">
          Type of Tea
        </h3>
        <select
          value={typeOfTea}
          onChange={(e) => setTypeOfTea(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-black text-sm focus:outline-none focus:border-gray-500 transition-colors"
        >
          <option value="">Select all</option>
          {teaTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Flavour of Tea */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="text-black font-semibold mb-3 text-sm tracking-tight">
          Flavour of Tea
        </h3>
        <select
          value={flavour}
          onChange={(e) => setFlavour(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-black text-sm focus:outline-none focus:border-gray-500 transition-colors"
        >
          <option value="">Select all</option>
          {flavours.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </div>

      {/* Herbs & Spices */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="text-black font-semibold mb-3 text-sm tracking-tight">
          Herbs &amp; Spices
        </h3>
        <select
          value={herbsSpices}
          onChange={(e) => setHerbsSpices(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-black text-sm focus:outline-none focus:border-gray-500 transition-colors"
        >
          <option value="">Select all</option>
          {herbsSpicesOptions.map((herb) => (
            <option key={herb.value} value={herb.value}>
              {herb.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tea Grade */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="text-black font-semibold mb-3 text-sm tracking-tight">
          Tea Grade
        </h3>
        <select
          value={teaGrade}
          onChange={(e) => setTeaGrade(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-black text-sm focus:outline-none focus:border-gray-500 transition-colors"
        >
          <option value="">Select all</option>
          {teaGrades.map((grade) => (
            <option key={grade.value} value={grade.value}>
              {grade.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tea Packing Form */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="text-black font-semibold mb-3 text-sm tracking-tight">
          Tea Packing Form
        </h3>
        <select
          value={packingForm}
          onChange={(e) => setPackingForm(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-black text-sm focus:outline-none focus:border-gray-500 transition-colors"
        >
          <option value="">Select all</option>
          {packingForms.map((form) => (
            <option key={form.value} value={form.value}>
              {form.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

const KeywordGenerator = () => {
  const [baseKeyword, setBaseKeyword] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [displayedKeywords, setDisplayedKeywords] = useState([]);
  const [usedKeywords, setUsedKeywords] = useState(new Set());
  const [filterType, setFilterType] = useState("default");

  // Original modifiers plus organized categories
  const modifiers = {
    prefix: [
      "best", "top", "cheap", "affordable", "premium", "professional", "ultimate", "easy", "quick", "simple",
      "local", "expert", "trusted", "reliable", "popular", "new", "innovative", "advanced", "effective", "proven",
      "custom", "unique", "specialized", "comprehensive", "complete", "high-quality", "low-cost", "value", "exclusive",
      "leading", "recommended", "essential", "insider", "expert", "safe", "secure", "guaranteed", "certified", "official",
      "verified", "authentic", "local", "international", "global", "fast", "flexible", "convenient", "on-demand", "tailored"
    ],
    suffix: [
      "near me", "online", "services", "company", "guide", "tips", "reviews", "for beginners", "for experts", "in 2023",
      "best practices", "resources", "examples", "checklist", "strategies", "tricks", "secrets", "insights", "tutorial",
      "solutions", "methods", "tools", "ideas", "approaches", "recommendations", "comparisons", "pros and cons", "statistics",
      "myths", "facts", "trends", "updates", "news", "case studies", "directories", "platforms", "forums", "insider tips",
      "webinars", "events", "meetups", "workshops", "conferences", "summits", "webcasts", "podcasts", "articles"
    ],
    questions: [
      "how to", "what is"
    ],
    related: [
      "vs", "alternatives", "comparison", "reviews", "similar", "related", "opposing", "counterparts", "substitutes",
      "equivalents", "competitors", "options", "choices", "variations", "types", "brands", "models", "categories",
      "styles", "versions", "methods", "approaches", "solutions", "techniques", "strategies", "tactics", "insights",
      "perspectives", "views", "angles", "factors", "elements", "components", "features", "benefits", "drawbacks", "pros",
      "cons", "considerations"
    ],
    // Additional organized categories
    commercial: [
      "buy", "price", "cost", "cheap", "affordable", "premium", "discount", "deal", "offer", "sale",
      "purchase", "shop", "store", "marketplace", "wholesale", "retail", "subscription", "package"
    ],
    informational: [
      "guide", "tutorial", "learn", "basics", "introduction", "understanding", "explained", "101", 
      "fundamentals", "overview", "complete guide", "step by step", "beginners guide"
    ],
    location: [
      "near me", "local", "online", "remote", "worldwide", "national", "regional", "city", 
      "domestic", "international", "global", "nationwide"
    ]
  };

  // Shuffle an array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Prepare base keyword
  const prepareBaseKeyword = (keyword) => {
    return keyword.toLowerCase().trim();
  };

  // Generate keywords
  const generateKeywords = () => {
    if (!baseKeyword.trim()) return;

    const prepared = prepareBaseKeyword(baseKeyword);
    const newKeywords = new Set();
    
    // Generate from all modifier categories
    Object.keys(modifiers).forEach(category => {
      const categoryModifiers = shuffleArray(modifiers[category]);
      
      categoryModifiers.forEach(modifier => {
        // For prefix-style modifiers
        if (["prefix", "questions", "commercial", "informational"].includes(category)) {
          newKeywords.add(`${modifier} ${prepared}`);
        }
        // For suffix-style modifiers
        if (["suffix", "related", "location"].includes(category)) {
          newKeywords.add(`${prepared} ${modifier}`);
        }
      });
    });

    // Convert to array and shuffle
    const finalKeywords = shuffleArray(Array.from(newKeywords));
    setKeywords(finalKeywords);
    shuffleDisplayedKeywords(finalKeywords);
  };

  const shuffleDisplayedKeywords = (newKeywords) => {
    const remainingKeywords = newKeywords.filter(
      (keyword) => !usedKeywords.has(keyword)
    );

    const shuffled = shuffleArray(remainingKeywords);
    const nextBatch = shuffled.slice(0, 20);

    setDisplayedKeywords(nextBatch);
    setUsedKeywords((prevUsed) => new Set([...prevUsed, ...nextBatch]));
  };

  const renderKeywords = () => {
    if (filterType === "hashtags") {
      return displayedKeywords.map((keyword, index) => (
        <Badge
          key={index}
          variant="secondary"
          className="text-sm py-1 px-2 cursor-pointer hover:bg-gray-900"
          onClick={() => navigator.clipboard.writeText(`#${keyword.replace(/\s+/g, "")}`)}
        >
          #{keyword.replace(/\s+/g, "")}
        </Badge>
      ));
    }
    
    return displayedKeywords.map((keyword, index) => (
      <Badge
        key={index}
        variant="secondary"
        className="text-sm py-1 px-2 cursor-pointer hover:bg-gray-900"
        onClick={() => navigator.clipboard.writeText(keyword)}
      >
        {keyword}
      </Badge>
    ));
  };

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">SEO Keyword Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex space-x-4">
            <Input
              type="text"
              placeholder="Enter your base keyword"
              value={baseKeyword}
              onChange={(e) => setBaseKeyword(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={generateKeywords} disabled={!baseKeyword.trim()}>
              Generate
            </Button>
          </div>

          <div className="flex justify-end">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-black border border-gray-300 text-white text-sm rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">Default</option>
              <option value="hashtags">Hashtags</option>
            </select>
          </div>

          {!displayedKeywords.length && baseKeyword && (
            <div className="flex items-center space-x-2 text-blue-500">
              <AlertCircle size={16} />
              <span>Click generate to create keyword variations</span>
            </div>
          )}

          {displayedKeywords.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Suggested Keywords:</h3>
              <div className="flex flex-wrap gap-2">{renderKeywords()}</div>
              <p className="text-sm text-yellow-100">
                Click on any keyword to copy to clipboard
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default KeywordGenerator;
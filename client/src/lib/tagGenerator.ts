// Keyword data organized by category
export const keywordData: Record<string, { tags: string[], keywords: string[] }> = {
  jewelry: {
    tags: [
      'handmade jewelry',
      'unique jewelry',
      'gift for her',
      'statement piece',
      'beaded jewelry',
      'bohemian style',
      'boho necklace',
      'handcrafted jewelry',
      'jewelry gifts',
      'artisan jewelry',
      'personalized jewelry',
      'custom jewelry',
      'minimalist jewelry'
    ],
    keywords: [
      'artisan made',
      'handcrafted',
      'unique design',
      'statement piece',
      'boho chic',
      'festival jewelry',
      'ethnic inspired',
      'everyday jewelry',
      'trendy jewelry',
      'fashion jewelry',
      'jewelry maker',
      'gifts for her'
    ]
  },
  clothing: {
    tags: [
      'handmade clothing',
      'boho fashion',
      'sustainable fashion',
      'eco friendly',
      'custom made',
      'unique apparel',
      'bohemian style',
      'womens clothing',
      'mens clothing',
      'casual wear',
      'linen clothing',
      'cotton clothes',
      'vintage inspired'
    ],
    keywords: [
      'slow fashion',
      'ethical clothing',
      'handcrafted apparel',
      'artisan clothing',
      'unique design',
      'made to order',
      'sustainable wardrobe',
      'capsule collection',
      'minimalist clothing',
      'timeless style',
      'handmade garments',
      'artisan fashion'
    ]
  },
  homeDecor: {
    tags: [
      'home decor',
      'handmade decor',
      'rustic decor',
      'farmhouse style',
      'wall art',
      'unique home goods',
      'housewarming gift',
      'modern home decor',
      'minimalist decor',
      'boho home',
      'home accents',
      'decorative items',
      'home accessories'
    ],
    keywords: [
      'interior design',
      'home accent',
      'decorative item',
      'living room decor',
      'modern rustic',
      'scandinavian style',
      'bohemian home',
      'home styling',
      'rustic charm',
      'cozy home',
      'hygge decor',
      'home styling'
    ]
  },
  art: {
    tags: [
      'wall art',
      'original artwork',
      'handmade art',
      'modern art',
      'art print',
      'abstract art',
      'home decor',
      'canvas art',
      'fine art',
      'contemporary art',
      'minimalist art',
      'nature art',
      'digital prints'
    ],
    keywords: [
      'gallery wall',
      'art collection',
      'limited edition',
      'signed artwork',
      'artist original',
      'contemporary art',
      'home gallery',
      'wall decor',
      'art lover gift',
      'collectible art',
      'visual art',
      'decorative art'
    ]
  },
  craft: {
    tags: [
      'craft supplies',
      'diy materials',
      'jewelry making',
      'beading supplies',
      'art supplies',
      'crafting kit',
      'creative supplies',
      'scrapbooking',
      'paper crafts',
      'sewing supplies',
      'embroidery kit',
      'knitting supplies',
      'craft tools'
    ],
    keywords: [
      'diy project',
      'handmade supplies',
      'crafting materials',
      'artisan supplies',
      'creative hobby',
      'craft tools',
      'maker supplies',
      'creative crafting',
      'art materials',
      'craft essentials',
      'craft shop',
      'hobby supplies'
    ]
  },
  toys: {
    tags: [
      'handmade toy',
      'wooden toys',
      'educational toy',
      'kids gift',
      'montessori toy',
      'eco friendly toy',
      'unique toy',
      'baby toys',
      'plush toy',
      'children toys',
      'toddler gift',
      'learning toy',
      'natural toys'
    ],
    keywords: [
      'children gift',
      'sustainable toy',
      'nursery decor',
      'baby shower gift',
      'waldorf inspired',
      'natural materials',
      'developmental toys',
      'open ended play',
      'kids room',
      'non toxic toys',
      'imagination play',
      'tactile toys'
    ]
  },
  vintage: {
    tags: [
      'vintage item',
      'antique',
      'retro',
      'collectible',
      'mid century',
      'vintage gift',
      'nostalgic item',
      'vintage home',
      'antique decor',
      'retro style',
      'vintage fashion',
      'vintage kitchenware',
      'vintage collection'
    ],
    keywords: [
      'one of a kind',
      'rare find',
      'vintage collectible',
      'antique item',
      'retro style',
      'classic design',
      'vintage lover',
      'retro home',
      'collector item',
      'nostalgic gift',
      'vintage shop',
      'timeless vintage'
    ]
  },
  wedding: {
    tags: [
      'wedding gift',
      'bridal accessory',
      'wedding decor',
      'bridesmaid gift',
      'wedding favor',
      'rustic wedding',
      'custom wedding',
      'wedding sign',
      'bridal shower',
      'wedding keepsake',
      'personalized wedding',
      'wedding invitation',
      'bridal gift'
    ],
    keywords: [
      'bridal shower',
      'wedding memento',
      'unique wedding',
      'personalized wedding',
      'wedding keepsake',
      'bride gift',
      'wedding planning',
      'destination wedding',
      'wedding celebration',
      'bridal party',
      'wedding theme',
      'engagement gift'
    ]
  },
  gifts: {
    tags: [
      'unique gift',
      'gift for her',
      'gift for him',
      'personalized gift',
      'birthday gift',
      'holiday gift',
      'handmade gift',
      'custom gift',
      'gift set',
      'gift basket',
      'thank you gift',
      'anniversary gift',
      'thoughtful gift'
    ],
    keywords: [
      'thoughtful gift',
      'special occasion',
      'gift idea',
      'curated gift',
      'meaningful present',
      'custom gift',
      'gift shop',
      'gift giving',
      'gift guide',
      'perfect present',
      'luxury gift',
      'commemorative gift'
    ]
  }
};

export interface FormData {
  productTitle: string;
  category: string;
  description: string;
}

export interface GenerationResult {
  tags: string[];
  keywords: string[];
}

export function generateTags(formData: FormData): GenerationResult {
  const { productTitle, category, description } = formData;
  
  // Get keywords based on category
  const categoryKeywords = keywordData[category] || { tags: [], keywords: [] };
  
  // Get all words from title and description
  const titleWords = productTitle.toLowerCase().split(/\s+/).filter(word => word.length > 2);
  const descWords = description ? description.toLowerCase().split(/\s+/).filter(word => word.length > 2) : [];
  
  // Combine category tags with title-based tags
  let generatedTags = [...categoryKeywords.tags];
  const generatedKeywords = [...categoryKeywords.keywords];
  
  // Add title-based tags if we have room (Etsy allows 13 max)
  if (titleWords.length >= 2) {
    for (let i = 0; i < titleWords.length - 1; i++) {
      const potentialTag = `${titleWords[i]} ${titleWords[i+1]}`;
      if (!generatedTags.includes(potentialTag) && generatedTags.length < 13) {
        generatedTags.push(potentialTag);
      }
    }
  }
  
  // Add description-based tags if we have room
  if (descWords.length >= 2 && generatedTags.length < 13) {
    for (let i = 0; i < descWords.length - 1; i++) {
      const potentialTag = `${descWords[i]} ${descWords[i+1]}`;
      if (!generatedTags.includes(potentialTag) && generatedTags.length < 13) {
        generatedTags.push(potentialTag);
      }
      
      // Also try combinations with title words
      if (titleWords.length > 0) {
        for (const titleWord of titleWords) {
          const potentialTag = `${titleWord} ${descWords[i]}`;
          if (!generatedTags.includes(potentialTag) && generatedTags.length < 13) {
            generatedTags.push(potentialTag);
          }
        }
      }
    }
  }
  
  // Ensure we don't exceed 13 tags
  generatedTags = generatedTags.slice(0, 13);
  
  return {
    tags: generatedTags,
    keywords: generatedKeywords
  };
}

export interface SavedSearch extends FormData {
  tags: string[];
  keywords: string[];
  date: string;
}

export function saveSearch(formData: FormData, tags: string[], keywords: string[]): SavedSearch {
  const search: SavedSearch = {
    ...formData,
    tags,
    keywords,
    date: new Date().toISOString()
  };
  
  return search;
}

// Helper to get saved searches from localStorage
export function getSavedSearches(): SavedSearch[] {
  const savedSearches = localStorage.getItem('etsySEOSavedSearches');
  return savedSearches ? JSON.parse(savedSearches) : [];
}

// Helper to save searches to localStorage
export function saveSavedSearches(searches: SavedSearch[]): void {
  localStorage.setItem('etsySEOSavedSearches', JSON.stringify(searches));
}

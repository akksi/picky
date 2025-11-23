export interface Cat {
  id: string;
  name: string;
  breed?: string;
  age?: number;
  imageUrl?: string;
}

export interface Food {
  id: string;
  name: string;
  brand: string;
  type: string; // wet, dry, treat, etc.
}

export interface Rating {
  id: string;
  catId: string;
  foodId: string;
  liked: boolean;
  notes?: string;
  date: string;
}

export interface FoodStats {
  food: Food;
  likes: number;
  dislikes: number;
  total: number;
}


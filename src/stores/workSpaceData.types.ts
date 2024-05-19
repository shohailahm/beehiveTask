export interface IWorkSpaceResponse {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: null;
  rules: null;
  amenities: string[];
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name: string;
  facilities: null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: { [key: string]: DayPassDiscountsPercentage };
  manager_id: null;
}

export interface DayPassDiscountsPercentage {
  value: number;
  message: string;
}

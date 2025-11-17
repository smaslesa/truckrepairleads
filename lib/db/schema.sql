-- Truck Repair Shops Directory Schema
-- Western US States: NV, CA, AZ, UT, ID, OR, WA, HI, AK

-- Main shops table
CREATE TABLE IF NOT EXISTS shops (
  id SERIAL PRIMARY KEY,
  google_place_id VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  
  -- Location
  address VARCHAR(500),
  city VARCHAR(100),
  state VARCHAR(2),
  zip VARCHAR(10),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  
  -- Contact
  phone VARCHAR(20),
  website VARCHAR(500),
  email VARCHAR(255),
  
  -- Business Info
  rating DECIMAL(2, 1),
  review_count INTEGER DEFAULT 0,
  price_level INTEGER, -- Google's $ rating (1-4)
  
  -- Hours (stored as JSON)
  hours_json JSONB,
  
  -- Services & Features
  services TEXT[], -- Array of services
  certifications TEXT[], -- I-CAR, ASE, etc.
  insurance_partners TEXT[], -- Insurance companies they work with
  
  -- Lead Intelligence
  has_website BOOLEAN DEFAULT false,
  website_quality_score INTEGER, -- 1-100 score
  runs_google_ads BOOLEAN DEFAULT false,
  social_media_presence JSONB, -- Facebook, Instagram, etc.
  
  -- Metadata
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_scraped TIMESTAMP,
  data_source VARCHAR(50) DEFAULT 'google_places'
);

-- Index for fast lookups
CREATE INDEX idx_shops_state_city ON shops(state, city);
CREATE INDEX idx_shops_slug ON shops(slug);
CREATE INDEX idx_shops_has_website ON shops(has_website);
CREATE INDEX idx_shops_rating ON shops(rating DESC);

-- Shop photos table
CREATE TABLE IF NOT EXISTS shop_photos (
  id SERIAL PRIMARY KEY,
  shop_id INTEGER REFERENCES shops(id) ON DELETE CASCADE,
  photo_reference VARCHAR(500),
  photo_url VARCHAR(1000),
  caption VARCHAR(500),
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews snapshot table
CREATE TABLE IF NOT EXISTS shop_reviews (
  id SERIAL PRIMARY KEY,
  shop_id INTEGER REFERENCES shops(id) ON DELETE CASCADE,
  author_name VARCHAR(255),
  rating INTEGER,
  text TEXT,
  time_posted TIMESTAMP,
  google_review_id VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cities for SEO pages
CREATE TABLE IF NOT EXISTS cities (
  id SERIAL PRIMARY KEY,
  city VARCHAR(100),
  state VARCHAR(2),
  slug VARCHAR(255) UNIQUE,
  population INTEGER,
  shop_count INTEGER DEFAULT 0,
  avg_rating DECIMAL(2, 1),
  metro_area VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(city, state)
);

-- Lead tracking
CREATE TABLE IF NOT EXISTS lead_interactions (
  id SERIAL PRIMARY KEY,
  shop_id INTEGER REFERENCES shops(id),
  interaction_type VARCHAR(50), -- 'view', 'click_website', 'request_quote', 'email_sent'
  user_ip VARCHAR(45),
  user_agent TEXT,
  referrer VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Western states data
INSERT INTO cities (city, state, slug, population) VALUES
-- Nevada
('Las Vegas', 'NV', 'las-vegas-nv', 641903),
('Henderson', 'NV', 'henderson-nv', 317610),
('Reno', 'NV', 'reno-nv', 264165),
('North Las Vegas', 'NV', 'north-las-vegas-nv', 262527),
('Sparks', 'NV', 'sparks-nv', 108445),

-- California (top cities)
('Los Angeles', 'CA', 'los-angeles-ca', 3898747),
('San Diego', 'CA', 'san-diego-ca', 1386932),
('San Jose', 'CA', 'san-jose-ca', 1013240),
('San Francisco', 'CA', 'san-francisco-ca', 873965),
('Fresno', 'CA', 'fresno-ca', 542107),
('Sacramento', 'CA', 'sacramento-ca', 524943),
('Long Beach', 'CA', 'long-beach-ca', 466742),
('Oakland', 'CA', 'oakland-ca', 440646),
('Bakersfield', 'CA', 'bakersfield-ca', 383579),
('Anaheim', 'CA', 'anaheim-ca', 346824),

-- Arizona
('Phoenix', 'AZ', 'phoenix-az', 1608139),
('Tucson', 'AZ', 'tucson-az', 548073),
('Mesa', 'AZ', 'mesa-az', 504258),
('Chandler', 'AZ', 'chandler-az', 275987),
('Scottsdale', 'AZ', 'scottsdale-az', 255310),

-- Washington
('Seattle', 'WA', 'seattle-wa', 737015),
('Spokane', 'WA', 'spokane-wa', 228989),
('Tacoma', 'WA', 'tacoma-wa', 219346),
('Vancouver', 'WA', 'vancouver-wa', 190915),
('Bellevue', 'WA', 'bellevue-wa', 151854),

-- Oregon
('Portland', 'OR', 'portland-or', 652503),
('Eugene', 'OR', 'eugene-or', 176654),
('Salem', 'OR', 'salem-or', 177432),
('Gresham', 'OR', 'gresham-or', 114247),
('Hillsboro', 'OR', 'hillsboro-or', 109128),

-- Utah
('Salt Lake City', 'UT', 'salt-lake-city-ut', 200133),
('West Valley City', 'UT', 'west-valley-city-ut', 140230),
('West Jordan', 'UT', 'west-jordan-ut', 116961),
('Provo', 'UT', 'provo-ut', 115162),
('Sandy', 'UT', 'sandy-ut', 96904),

-- Idaho
('Boise', 'ID', 'boise-id', 235684),
('Meridian', 'ID', 'meridian-id', 117635),
('Nampa', 'ID', 'nampa-id', 100200),
('Idaho Falls', 'ID', 'idaho-falls-id', 64818),
('Pocatello', 'ID', 'pocatello-id', 56637),

-- Hawaii
('Honolulu', 'HI', 'honolulu-hi', 345064),
('Pearl City', 'HI', 'pearl-city-hi', 47698),
('Hilo', 'HI', 'hilo-hi', 43263),
('Kailua', 'HI', 'kailua-hi', 40514),
('Waipahu', 'HI', 'waipahu-hi', 38216),

-- Alaska
('Anchorage', 'AK', 'anchorage-ak', 291247),
('Fairbanks', 'AK', 'fairbanks-ak', 32113),
('Juneau', 'AK', 'juneau-ak', 32255),
('Sitka', 'AK', 'sitka-ak', 8493),
('Ketchikan', 'AK', 'ketchikan-ak', 8289)
ON CONFLICT (city, state) DO NOTHING;

# Truck Repair Shop Leads - Scraping Strategy & Notes

## 📊 Current Status (as of Sept 15, 2025)

### States Completed:
- **Nevada**: ✅ Complete (920 shops, 10 cities) - Deep coverage strategy
- **California**: ⚠️ Partial (2,804 shops, 20 cities) - Surface coverage only

### Other States:
- **Texas**: Not started
- **Florida**: Not started

---

## 🎯 Scraping Strategies

### Strategy A: "Nevada Deep Coverage" ✅
- **Approach**: Scrape ALL configured cities completely
- **Result**: 920 shops across 10 cities
- **Quality**: 97% have ratings, 72% have websites
- **Coverage**: Even small cities like Elko (117 shops), Fernley (48 shops)

### Strategy B: "California Surface Coverage" ❌ 
- **Approach**: Only major cities, incomplete coverage
- **Result**: 2,804 shops across 20 cities
- **Quality**: 97% have ratings, 65% have websites  
- **Problem**: Missing 53+ major cities/suburbs

---

## 🔧 California Expansion Plan

### Current California Cities (20):
```
Los Angeles (227), Anaheim (176), Sacramento (175), San Diego (165), 
San Jose (158), Long Beach (153), Fremont (142), Bakersfield (140), 
San Francisco (139), Fresno (138), Riverside (134), Oxnard (128), 
Stockton (128), Santa Ana (123), Chula Vista (122), Modesto (119), 
San Bernardino (119), Fontana (117), Oakland (107), Irvine (94)
```

### Missing Major Cities (53+ cities with 0 shops):
```
HIGH PRIORITY (Major suburbs/cities):
- Huntington Beach, Santa Clarita, Glendale, Torrance, Pasadena
- Oceanside, Garden Grove, Fullerton, Costa Mesa, Burbank
- Escondido, El Cajon, Carlsbad, Thousand Oaks, Simi Valley

MEDIUM PRIORITY:
- Antioch, Concord, Hayward, Richmond, Vallejo, Fairfield
- Corona, Moreno Valley, Murrieta, Temecula, Rancho Cucamonga
- Lancaster, Palmdale, Victorville, Santa Maria, Salinas

LOWER PRIORITY:
- Smaller suburbs and cities under 100k population
```

### Estimated Impact:
- **Current**: 2,804 shops across 20 cities
- **After expansion**: ~5,000-6,000 shops across 70+ cities
- **API Cost**: ~$150-200 additional (worth it for 2x coverage)

---

## 🚀 Recommended Action Plan

### Phase 1: High Priority Cities (15-20 cities)
Target major suburbs that definitely have collision shops:
- Huntington Beach, Santa Clarita, Glendale, Torrance, Pasadena
- Oceanside, Garden Grove, Fullerton, Costa Mesa, Burbank
- Escondido, El Cajon, Carlsbad, Thousand Oaks, Simi Valley

**Expected**: +1,500-2,000 shops

### Phase 2: Medium Priority Cities (20-25 cities)  
Expand to mid-size cities and suburbs:
- All the medium priority cities listed above

**Expected**: +1,000-1,500 shops

### Phase 3: Complete Coverage (All remaining cities)
Finish with smaller cities for 100% coverage

**Expected**: +500-1,000 shops

---

## 📝 Scraping Log

### September 15, 2025
- **Nevada**: Complete scrape - 920 shops across 10 cities (DEEP STRATEGY)
- **California**: Partial scrape - 2,804 shops across 20 cities (SURFACE STRATEGY)
- **Quality**: Both states have 97%+ phone/rating coverage
- **Next**: Expand California to missing cities

### Current Session Plan (CA + TX Expansion):
1. ✅ Update California city configuration (add 50 missing cities)
2. ✅ Add Texas to scraper configuration (50 cities)
3. 🎯 Run California expansion + Texas complete scrape
4. 📊 Monitor API usage and quality (~36,900 requests, ~$184)
5. 🔄 Next: Florida expansion

---

## 🔧 Technical Notes

### Current Configuration Issues:
- California scraper config only has 20 cities
- Missing 53+ major cities that are in database but have 0 shops
- Need to update `lib/scraper/google-places.ts` line 9

### API Usage:
- Current: ~9,794 requests used
- Nevada deep scrape: ~3,000-4,000 requests  
- California surface scrape: ~6,000 requests
- Estimated for CA expansion: ~4,000-6,000 additional requests

### Success Metrics:
- Shop count per city (aim for Nevada-level coverage)
- Data quality (phone %, website %, rating %)
- Geographic coverage (no major cities with 0 shops)

---

## 🎯 Long-term Vision

**Goal**: Become the most comprehensive truck repair directory in the US

**Target Coverage**:
- California: 9,800+ shops (currently 2,804 → expanding to 70 cities)
- Nevada: 920+ shops ✅ (complete)
- Texas: 7,000+ shops (adding 50 cities) 🎯 IN PROGRESS
- Florida: 7,000+ shops (50 cities planned)

**Total Goal**: 24,000+ truck repair shops across 4 major states

**Current Session Impact**:
- Before: 3,724 shops (CA: 2,804, NV: 920)
- After CA+TX: ~17,500 shops (CA: 9,800, NV: 920, TX: 7,000)
- Growth: 4.7x increase! 🚀

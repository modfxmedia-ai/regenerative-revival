export interface Location {
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
  lat: number;
  lng: number;
  population: string;
  metro: string;
  areaCode: string;
}

export const locations: Location[] = [
  { city: "New York", state: "New York", stateAbbr: "NY", slug: "new-york-ny", lat: 40.7128, lng: -74.006, population: "8.3M", metro: "New York Metro", areaCode: "212" },
  { city: "Los Angeles", state: "California", stateAbbr: "CA", slug: "los-angeles-ca", lat: 34.0522, lng: -118.2437, population: "3.9M", metro: "Greater Los Angeles", areaCode: "213" },
  { city: "Chicago", state: "Illinois", stateAbbr: "IL", slug: "chicago-il", lat: 41.8781, lng: -87.6298, population: "2.7M", metro: "Chicagoland", areaCode: "312" },
  { city: "Houston", state: "Texas", stateAbbr: "TX", slug: "houston-tx", lat: 29.7604, lng: -95.3698, population: "2.3M", metro: "Greater Houston", areaCode: "713" },
  { city: "Phoenix", state: "Arizona", stateAbbr: "AZ", slug: "phoenix-az", lat: 33.4484, lng: -112.074, population: "1.6M", metro: "Phoenix Metro", areaCode: "602" },
  { city: "Philadelphia", state: "Pennsylvania", stateAbbr: "PA", slug: "philadelphia-pa", lat: 39.9526, lng: -75.1652, population: "1.6M", metro: "Greater Philadelphia", areaCode: "215" },
  { city: "San Antonio", state: "Texas", stateAbbr: "TX", slug: "san-antonio-tx", lat: 29.4241, lng: -98.4936, population: "1.5M", metro: "San Antonio Metro", areaCode: "210" },
  { city: "San Diego", state: "California", stateAbbr: "CA", slug: "san-diego-ca", lat: 32.7157, lng: -117.1611, population: "1.4M", metro: "San Diego Metro", areaCode: "619" },
  { city: "Dallas", state: "Texas", stateAbbr: "TX", slug: "dallas-tx", lat: 32.7767, lng: -96.797, population: "1.3M", metro: "Dallas-Fort Worth", areaCode: "214" },
  { city: "Austin", state: "Texas", stateAbbr: "TX", slug: "austin-tx", lat: 30.2672, lng: -97.7431, population: "1.0M", metro: "Greater Austin", areaCode: "512" },
  { city: "Jacksonville", state: "Florida", stateAbbr: "FL", slug: "jacksonville-fl", lat: 30.3322, lng: -81.6557, population: "950K", metro: "Jacksonville Metro", areaCode: "904" },
  { city: "San Jose", state: "California", stateAbbr: "CA", slug: "san-jose-ca", lat: 37.3382, lng: -121.8863, population: "1.0M", metro: "Silicon Valley", areaCode: "408" },
  { city: "Fort Worth", state: "Texas", stateAbbr: "TX", slug: "fort-worth-tx", lat: 32.7555, lng: -97.3308, population: "935K", metro: "Dallas-Fort Worth", areaCode: "817" },
  { city: "Columbus", state: "Ohio", stateAbbr: "OH", slug: "columbus-oh", lat: 39.9612, lng: -82.9988, population: "905K", metro: "Columbus Metro", areaCode: "614" },
  { city: "Charlotte", state: "North Carolina", stateAbbr: "NC", slug: "charlotte-nc", lat: 35.2271, lng: -80.8431, population: "875K", metro: "Charlotte Metro", areaCode: "704" },
  { city: "Indianapolis", state: "Indiana", stateAbbr: "IN", slug: "indianapolis-in", lat: 39.7684, lng: -86.1581, population: "880K", metro: "Indianapolis Metro", areaCode: "317" },
  { city: "San Francisco", state: "California", stateAbbr: "CA", slug: "san-francisco-ca", lat: 37.7749, lng: -122.4194, population: "875K", metro: "Bay Area", areaCode: "415" },
  { city: "Seattle", state: "Washington", stateAbbr: "WA", slug: "seattle-wa", lat: 47.6062, lng: -122.3321, population: "740K", metro: "Seattle Metro", areaCode: "206" },
  { city: "Denver", state: "Colorado", stateAbbr: "CO", slug: "denver-co", lat: 39.7392, lng: -104.9903, population: "715K", metro: "Denver Metro", areaCode: "303" },
  { city: "Nashville", state: "Tennessee", stateAbbr: "TN", slug: "nashville-tn", lat: 36.1627, lng: -86.7816, population: "690K", metro: "Nashville Metro", areaCode: "615" },
  { city: "Oklahoma City", state: "Oklahoma", stateAbbr: "OK", slug: "oklahoma-city-ok", lat: 35.4676, lng: -97.5164, population: "680K", metro: "OKC Metro", areaCode: "405" },
  { city: "Washington", state: "District of Columbia", stateAbbr: "DC", slug: "washington-dc", lat: 38.9072, lng: -77.0369, population: "690K", metro: "DC Metro", areaCode: "202" },
  { city: "Las Vegas", state: "Nevada", stateAbbr: "NV", slug: "las-vegas-nv", lat: 36.1699, lng: -115.1398, population: "645K", metro: "Las Vegas Valley", areaCode: "702" },
  { city: "Portland", state: "Oregon", stateAbbr: "OR", slug: "portland-or", lat: 45.5152, lng: -122.6784, population: "650K", metro: "Portland Metro", areaCode: "503" },
  { city: "Memphis", state: "Tennessee", stateAbbr: "TN", slug: "memphis-tn", lat: 35.1495, lng: -90.049, population: "630K", metro: "Memphis Metro", areaCode: "901" },
  { city: "Louisville", state: "Kentucky", stateAbbr: "KY", slug: "louisville-ky", lat: 38.2527, lng: -85.7585, population: "625K", metro: "Louisville Metro", areaCode: "502" },
  { city: "Baltimore", state: "Maryland", stateAbbr: "MD", slug: "baltimore-md", lat: 39.2904, lng: -76.6122, population: "585K", metro: "Baltimore Metro", areaCode: "410" },
  { city: "Milwaukee", state: "Wisconsin", stateAbbr: "WI", slug: "milwaukee-wi", lat: 43.0389, lng: -87.9065, population: "575K", metro: "Milwaukee Metro", areaCode: "414" },
  { city: "Albuquerque", state: "New Mexico", stateAbbr: "NM", slug: "albuquerque-nm", lat: 35.0844, lng: -106.6504, population: "560K", metro: "Albuquerque Metro", areaCode: "505" },
  { city: "Tucson", state: "Arizona", stateAbbr: "AZ", slug: "tucson-az", lat: 32.2226, lng: -110.9747, population: "545K", metro: "Tucson Metro", areaCode: "520" },
  { city: "Fresno", state: "California", stateAbbr: "CA", slug: "fresno-ca", lat: 36.7378, lng: -119.7871, population: "540K", metro: "Fresno Metro", areaCode: "559" },
  { city: "Sacramento", state: "California", stateAbbr: "CA", slug: "sacramento-ca", lat: 38.5816, lng: -121.4944, population: "525K", metro: "Sacramento Metro", areaCode: "916" },
  { city: "Mesa", state: "Arizona", stateAbbr: "AZ", slug: "mesa-az", lat: 33.4152, lng: -111.8315, population: "505K", metro: "Phoenix Metro", areaCode: "480" },
  { city: "Kansas City", state: "Missouri", stateAbbr: "MO", slug: "kansas-city-mo", lat: 39.0997, lng: -94.5786, population: "500K", metro: "Kansas City Metro", areaCode: "816" },
  { city: "Atlanta", state: "Georgia", stateAbbr: "GA", slug: "atlanta-ga", lat: 33.749, lng: -84.388, population: "500K", metro: "Metro Atlanta", areaCode: "404" },
  { city: "Omaha", state: "Nebraska", stateAbbr: "NE", slug: "omaha-ne", lat: 41.2565, lng: -95.9345, population: "490K", metro: "Omaha Metro", areaCode: "402" },
  { city: "Colorado Springs", state: "Colorado", stateAbbr: "CO", slug: "colorado-springs-co", lat: 38.8339, lng: -104.8214, population: "480K", metro: "Colorado Springs Metro", areaCode: "719" },
  { city: "Raleigh", state: "North Carolina", stateAbbr: "NC", slug: "raleigh-nc", lat: 35.7796, lng: -78.6382, population: "475K", metro: "Research Triangle", areaCode: "919" },
  { city: "Long Beach", state: "California", stateAbbr: "CA", slug: "long-beach-ca", lat: 33.7701, lng: -118.1937, population: "465K", metro: "Greater Los Angeles", areaCode: "562" },
  { city: "Virginia Beach", state: "Virginia", stateAbbr: "VA", slug: "virginia-beach-va", lat: 36.8529, lng: -75.978, population: "460K", metro: "Hampton Roads", areaCode: "757" },
  { city: "Miami", state: "Florida", stateAbbr: "FL", slug: "miami-fl", lat: 25.7617, lng: -80.1918, population: "440K", metro: "South Florida", areaCode: "305" },
  { city: "Oakland", state: "California", stateAbbr: "CA", slug: "oakland-ca", lat: 37.8044, lng: -122.2712, population: "430K", metro: "Bay Area", areaCode: "510" },
  { city: "Minneapolis", state: "Minnesota", stateAbbr: "MN", slug: "minneapolis-mn", lat: 44.9778, lng: -93.265, population: "425K", metro: "Twin Cities", areaCode: "612" },
  { city: "Tampa", state: "Florida", stateAbbr: "FL", slug: "tampa-fl", lat: 27.9506, lng: -82.4572, population: "400K", metro: "Tampa Bay", areaCode: "813" },
  { city: "Tulsa", state: "Oklahoma", stateAbbr: "OK", slug: "tulsa-ok", lat: 36.154, lng: -95.9928, population: "400K", metro: "Tulsa Metro", areaCode: "918" },
  { city: "Arlington", state: "Texas", stateAbbr: "TX", slug: "arlington-tx", lat: 32.7357, lng: -97.1081, population: "395K", metro: "Dallas-Fort Worth", areaCode: "682" },
  { city: "New Orleans", state: "Louisiana", stateAbbr: "LA", slug: "new-orleans-la", lat: 29.9511, lng: -90.0715, population: "385K", metro: "Greater New Orleans", areaCode: "504" },
  { city: "Wichita", state: "Kansas", stateAbbr: "KS", slug: "wichita-ks", lat: 37.6872, lng: -97.3301, population: "395K", metro: "Wichita Metro", areaCode: "316" },
  { city: "Cleveland", state: "Ohio", stateAbbr: "OH", slug: "cleveland-oh", lat: 41.4993, lng: -81.6944, population: "370K", metro: "Greater Cleveland", areaCode: "216" },
  { city: "Bakersfield", state: "California", stateAbbr: "CA", slug: "bakersfield-ca", lat: 35.3733, lng: -119.0187, population: "400K", metro: "Bakersfield Metro", areaCode: "661" },
  { city: "Aurora", state: "Colorado", stateAbbr: "CO", slug: "aurora-co", lat: 39.7294, lng: -104.8319, population: "390K", metro: "Denver Metro", areaCode: "303" },
  { city: "Honolulu", state: "Hawaii", stateAbbr: "HI", slug: "honolulu-hi", lat: 21.3069, lng: -157.8583, population: "350K", metro: "Honolulu Metro", areaCode: "808" },
  { city: "Anaheim", state: "California", stateAbbr: "CA", slug: "anaheim-ca", lat: 33.8366, lng: -117.9143, population: "350K", metro: "Greater Los Angeles", areaCode: "714" },
  { city: "Santa Ana", state: "California", stateAbbr: "CA", slug: "santa-ana-ca", lat: 33.7455, lng: -117.8677, population: "310K", metro: "Greater Los Angeles", areaCode: "714" },
  { city: "Riverside", state: "California", stateAbbr: "CA", slug: "riverside-ca", lat: 33.9533, lng: -117.3962, population: "315K", metro: "Inland Empire", areaCode: "951" },
  { city: "Corpus Christi", state: "Texas", stateAbbr: "TX", slug: "corpus-christi-tx", lat: 27.8006, lng: -97.3964, population: "320K", metro: "Corpus Christi Metro", areaCode: "361" },
  { city: "Lexington", state: "Kentucky", stateAbbr: "KY", slug: "lexington-ky", lat: 38.0406, lng: -84.5037, population: "320K", metro: "Lexington Metro", areaCode: "859" },
  { city: "Pittsburgh", state: "Pennsylvania", stateAbbr: "PA", slug: "pittsburgh-pa", lat: 40.4406, lng: -79.9959, population: "300K", metro: "Pittsburgh Metro", areaCode: "412" },
  { city: "St. Louis", state: "Missouri", stateAbbr: "MO", slug: "st-louis-mo", lat: 38.627, lng: -90.1994, population: "295K", metro: "St. Louis Metro", areaCode: "314" },
  { city: "Cincinnati", state: "Ohio", stateAbbr: "OH", slug: "cincinnati-oh", lat: 39.1031, lng: -84.512, population: "310K", metro: "Cincinnati Metro", areaCode: "513" },
  { city: "Anchorage", state: "Alaska", stateAbbr: "AK", slug: "anchorage-ak", lat: 61.2181, lng: -149.9003, population: "290K", metro: "Anchorage Metro", areaCode: "907" },
  { city: "Stockton", state: "California", stateAbbr: "CA", slug: "stockton-ca", lat: 37.9577, lng: -121.2908, population: "320K", metro: "Stockton Metro", areaCode: "209" },
  { city: "St. Paul", state: "Minnesota", stateAbbr: "MN", slug: "st-paul-mn", lat: 44.9537, lng: -93.09, population: "310K", metro: "Twin Cities", areaCode: "651" },
  { city: "Newark", state: "New Jersey", stateAbbr: "NJ", slug: "newark-nj", lat: 40.7357, lng: -74.1724, population: "280K", metro: "New York Metro", areaCode: "973" },
  { city: "Greensboro", state: "North Carolina", stateAbbr: "NC", slug: "greensboro-nc", lat: 36.0726, lng: -79.792, population: "300K", metro: "Piedmont Triad", areaCode: "336" },
  { city: "Buffalo", state: "New York", stateAbbr: "NY", slug: "buffalo-ny", lat: 42.8864, lng: -78.8784, population: "275K", metro: "Buffalo Metro", areaCode: "716" },
  { city: "Plano", state: "Texas", stateAbbr: "TX", slug: "plano-tx", lat: 33.0198, lng: -96.6989, population: "290K", metro: "Dallas-Fort Worth", areaCode: "972" },
  { city: "Lincoln", state: "Nebraska", stateAbbr: "NE", slug: "lincoln-ne", lat: 40.8136, lng: -96.7026, population: "290K", metro: "Lincoln Metro", areaCode: "402" },
  { city: "Orlando", state: "Florida", stateAbbr: "FL", slug: "orlando-fl", lat: 28.5383, lng: -81.3792, population: "310K", metro: "Greater Orlando", areaCode: "407" },
  { city: "Irvine", state: "California", stateAbbr: "CA", slug: "irvine-ca", lat: 33.6846, lng: -117.8265, population: "310K", metro: "Greater Los Angeles", areaCode: "949" },
  { city: "Norfolk", state: "Virginia", stateAbbr: "VA", slug: "norfolk-va", lat: 36.8508, lng: -76.2859, population: "245K", metro: "Hampton Roads", areaCode: "757" },
  { city: "Durham", state: "North Carolina", stateAbbr: "NC", slug: "durham-nc", lat: 35.994, lng: -78.8986, population: "280K", metro: "Research Triangle", areaCode: "919" },
  { city: "Madison", state: "Wisconsin", stateAbbr: "WI", slug: "madison-wi", lat: 43.0731, lng: -89.4012, population: "270K", metro: "Madison Metro", areaCode: "608" },
  { city: "Chandler", state: "Arizona", stateAbbr: "AZ", slug: "chandler-az", lat: 33.3062, lng: -111.8413, population: "275K", metro: "Phoenix Metro", areaCode: "480" },
  { city: "Baton Rouge", state: "Louisiana", stateAbbr: "LA", slug: "baton-rouge-la", lat: 30.4515, lng: -91.1871, population: "225K", metro: "Baton Rouge Metro", areaCode: "225" },
  { city: "Lubbock", state: "Texas", stateAbbr: "TX", slug: "lubbock-tx", lat: 33.5779, lng: -101.8552, population: "265K", metro: "Lubbock Metro", areaCode: "806" },
  { city: "Scottsdale", state: "Arizona", stateAbbr: "AZ", slug: "scottsdale-az", lat: 33.4942, lng: -111.9261, population: "240K", metro: "Phoenix Metro", areaCode: "480" },
  { city: "Reno", state: "Nevada", stateAbbr: "NV", slug: "reno-nv", lat: 39.5296, lng: -119.8138, population: "265K", metro: "Reno Metro", areaCode: "775" },
  { city: "Boise", state: "Idaho", stateAbbr: "ID", slug: "boise-id", lat: 43.615, lng: -116.2023, population: "235K", metro: "Boise Metro", areaCode: "208" },
  { city: "Richmond", state: "Virginia", stateAbbr: "VA", slug: "richmond-va", lat: 37.5407, lng: -77.436, population: "230K", metro: "Richmond Metro", areaCode: "804" },
  { city: "Des Moines", state: "Iowa", stateAbbr: "IA", slug: "des-moines-ia", lat: 41.5868, lng: -93.625, population: "215K", metro: "Des Moines Metro", areaCode: "515" },
  { city: "Birmingham", state: "Alabama", stateAbbr: "AL", slug: "birmingham-al", lat: 33.5207, lng: -86.8025, population: "200K", metro: "Birmingham Metro", areaCode: "205" },
  { city: "Spokane", state: "Washington", stateAbbr: "WA", slug: "spokane-wa", lat: 47.6588, lng: -117.426, population: "225K", metro: "Spokane Metro", areaCode: "509" },
  { city: "Rochester", state: "New York", stateAbbr: "NY", slug: "rochester-ny", lat: 43.1566, lng: -77.6088, population: "210K", metro: "Rochester Metro", areaCode: "585" },
  { city: "Salt Lake City", state: "Utah", stateAbbr: "UT", slug: "salt-lake-city-ut", lat: 40.7608, lng: -111.891, population: "200K", metro: "Salt Lake Metro", areaCode: "801" },
  { city: "Charleston", state: "South Carolina", stateAbbr: "SC", slug: "charleston-sc", lat: 32.7765, lng: -79.9311, population: "150K", metro: "Charleston Metro", areaCode: "843" },
  { city: "Savannah", state: "Georgia", stateAbbr: "GA", slug: "savannah-ga", lat: 32.0809, lng: -81.0912, population: "145K", metro: "Savannah Metro", areaCode: "912" },
  { city: "Naples", state: "Florida", stateAbbr: "FL", slug: "naples-fl", lat: 26.142, lng: -81.7948, population: "22K", metro: "Naples Metro", areaCode: "239" },
  { city: "Sarasota", state: "Florida", stateAbbr: "FL", slug: "sarasota-fl", lat: 27.3364, lng: -82.5307, population: "57K", metro: "Sarasota Metro", areaCode: "941" },
  { city: "Fort Lauderdale", state: "Florida", stateAbbr: "FL", slug: "fort-lauderdale-fl", lat: 26.1224, lng: -80.1373, population: "185K", metro: "South Florida", areaCode: "954" },
  { city: "West Palm Beach", state: "Florida", stateAbbr: "FL", slug: "west-palm-beach-fl", lat: 26.7153, lng: -80.0534, population: "120K", metro: "South Florida", areaCode: "561" },
  { city: "Knoxville", state: "Tennessee", stateAbbr: "TN", slug: "knoxville-tn", lat: 35.9606, lng: -83.9207, population: "190K", metro: "Knoxville Metro", areaCode: "865" },
  { city: "Chattanooga", state: "Tennessee", stateAbbr: "TN", slug: "chattanooga-tn", lat: 35.0456, lng: -85.3097, population: "185K", metro: "Chattanooga Metro", areaCode: "423" },
  { city: "Little Rock", state: "Arkansas", stateAbbr: "AR", slug: "little-rock-ar", lat: 34.7465, lng: -92.2896, population: "200K", metro: "Little Rock Metro", areaCode: "501" },
  { city: "El Paso", state: "Texas", stateAbbr: "TX", slug: "el-paso-tx", lat: 31.7619, lng: -106.485, population: "680K", metro: "El Paso Metro", areaCode: "915" },
  { city: "Wilmington", state: "North Carolina", stateAbbr: "NC", slug: "wilmington-nc", lat: 34.2257, lng: -77.9447, population: "125K", metro: "Wilmington Metro", areaCode: "910" },
  { city: "Asheville", state: "North Carolina", stateAbbr: "NC", slug: "asheville-nc", lat: 35.5951, lng: -82.5515, population: "95K", metro: "Asheville Metro", areaCode: "828" },
  { city: "Columbia", state: "South Carolina", stateAbbr: "SC", slug: "columbia-sc", lat: 34.0007, lng: -81.0348, population: "135K", metro: "Columbia Metro", areaCode: "803" },
  { city: "Providence", state: "Rhode Island", stateAbbr: "RI", slug: "providence-ri", lat: 41.824, lng: -71.4128, population: "190K", metro: "Providence Metro", areaCode: "401" },
  { city: "Hartford", state: "Connecticut", stateAbbr: "CT", slug: "hartford-ct", lat: 41.7658, lng: -72.6734, population: "120K", metro: "Hartford Metro", areaCode: "860" },
  { city: "Stamford", state: "Connecticut", stateAbbr: "CT", slug: "stamford-ct", lat: 41.0534, lng: -73.5387, population: "135K", metro: "New York Metro", areaCode: "203" },
  { city: "Bridgeport", state: "Connecticut", stateAbbr: "CT", slug: "bridgeport-ct", lat: 41.1865, lng: -73.1952, population: "145K", metro: "New York Metro", areaCode: "203" },
  { city: "Jackson", state: "Mississippi", stateAbbr: "MS", slug: "jackson-ms", lat: 32.2988, lng: -90.1848, population: "155K", metro: "Jackson Metro", areaCode: "601" },
  { city: "Sioux Falls", state: "South Dakota", stateAbbr: "SD", slug: "sioux-falls-sd", lat: 43.5446, lng: -96.7311, population: "195K", metro: "Sioux Falls Metro", areaCode: "605" },
  { city: "Fargo", state: "North Dakota", stateAbbr: "ND", slug: "fargo-nd", lat: 46.8772, lng: -96.7898, population: "125K", metro: "Fargo Metro", areaCode: "701" },
  { city: "Burlington", state: "Vermont", stateAbbr: "VT", slug: "burlington-vt", lat: 44.4759, lng: -73.2121, population: "45K", metro: "Burlington Metro", areaCode: "802" },
  { city: "Portland", state: "Maine", stateAbbr: "ME", slug: "portland-me", lat: 43.6591, lng: -70.2568, population: "68K", metro: "Portland Metro", areaCode: "207" },
  { city: "Manchester", state: "New Hampshire", stateAbbr: "NH", slug: "manchester-nh", lat: 42.9956, lng: -71.4548, population: "115K", metro: "Manchester Metro", areaCode: "603" },
  { city: "Billings", state: "Montana", stateAbbr: "MT", slug: "billings-mt", lat: 45.7833, lng: -108.5007, population: "120K", metro: "Billings Metro", areaCode: "406" },
  { city: "Cheyenne", state: "Wyoming", stateAbbr: "WY", slug: "cheyenne-wy", lat: 41.14, lng: -104.8202, population: "65K", metro: "Cheyenne Metro", areaCode: "307" },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getNearbyLocations(location: Location, count = 4): Location[] {
  return locations
    .filter((l) => l.slug !== location.slug)
    .map((l) => ({
      ...l,
      distance: Math.sqrt(
        Math.pow(l.lat - location.lat, 2) + Math.pow(l.lng - location.lng, 2)
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count);
}

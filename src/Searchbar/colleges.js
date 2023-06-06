// I think I lost the code for the scraper, it might have been on my old computer :(
// Here is the scraper code I found it: https://github.com/Sjviray814/college-scraper
const colleges = [
  { 'STANFORD UNIVERSITY': 398 },
  { 'MASSACHUSETTS INSTITUTE OF TECHNOLOGY': 396 },
  { 'CARNEGIE MELLON UNIVERSITY': 382 },
  { 'UNIVERSITY OF CALIFORNIA-BERKELEY': 375 },
  { 'HARVARD UNIVERSITY': 371 },
  { 'CORNELL UNIVERSITY': 369 },
  { 'COLUMBIA UNIVERSITY': 343 },
  { 'GEORGIA INSTITUTE OF TECHNOLOGY': 339 },
  { 'UNIVERSITY OF PENNSYLVANIA': 337 },
  { 'DUKE UNIVERSITY': 335 },
  { 'UNIVERSITY OF SOUTHERN CALIFORNIA': 329 },
  { 'UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL': 319 },
  { 'UNIVERSITY OF WASHINGTON': 312 },
  { 'UNIVERSITY OF CALIFORNIA-SAN DIEGO': 306 },
  { 'BROWN UNIVERSITY': 300 },
  { 'UNIVERSITY OF CHICAGO': 295 },
  { 'CALIFORNIA INSTITUTE OF TECHNOLOGY': 295 },
  { 'PRINCETON UNIVERSITY': 282 },
  { 'UNIVERSITY OF MARYLAND-COLLEGE PARK': 280 },
  { 'NORTHWESTERN UNIVERSITY': 271 },
  { 'UNIVERSITY OF ILLINOIS AT URBANA-CHAMPAIGN': 270 },
  { 'UNIVERSITY OF MICHIGAN-ANN ARBOR': 262},
  { 'UNIVERSITY OF TEXAS AT AUSTIN': 260 },
  { 'UNIVERSITY OF CALIFORNIA-LOS ANGELES': 248 },
  { 'UNIVERSITY OF ROCHESTER': 237 },
  { 'UNIVERSITY OF MINNESOTA-TWIN CITIES': 236 },
  { 'WASHINGTON UNIVERSITY IN ST. LOUIS': 232 },
  { 'UNIVERSITY OF CALIFORNIA-SANTA BARBARA': 227 },
  { 'TUFTS UNIVERSITY': 225 },
  { 'VANDERBILT UNIVERSITY': 225 },
  { 'DARTMOUTH COLLEGE': 224 },
  { 'UNIVERSITY OF CALIFORNIA-IRVINE': 222 },
  { 'PENNSYLVANIA STATE UNIVERSITY': 213 },
  { 'PURDUE UNIVERSITY': 213 },
  { 'UNIVERSITY OF MASSACHUSETTS AMHERST': 211 },
  { 'BOSTON UNIVERSITY': 208 },
  { 'UNIVERSITY OF WISCONSIN-MADISON': 208 },
  { 'NEW YORK UNIVERSITY': 203 },
  { 'RICE UNIVERSITY': 196 },
  { 'YALE UNIVERSITY': 194 },
  { 'RENSSELAER POLYTECHNIC INSTITUTE': 192 },
  { 'JOHNS HOPKINS UNIVERSITY': 189 },
  { 'OHIO STATE UNIVERSITY': 187 },
  { 'ARIZONA STATE UNIVERSITY': 182 },
  { 'NORTHEASTERN UNIVERSITY': 180 },
  { 'MICHIGAN STATE UNIVERSITY': 176 },
  { 'SUNY STONY BROOK UNIVERSITY': 174},
  { 'HARVEY MUDD COLLEGE': 174 },
  { 'NORTH CAROLINA STATE UNIVERSITY': 174 },
  { 'UNIVERSITY OF VIRGINIA': 168 },
  { 'POMONA COLLEGE': 164 },
  { 'UNIVERSITY OF FLORIDA': 154 },
  { 'LEHIGH UNIVERSITY': 153 },
  { 'BUNKER HILL COMMUNITY COLLEGE': 152 },
  { 'TEXAS A&M UNIVERSITY': 143 },
  { 'COLLEGE OF WILLIAM & MARY': 138 },
  { 'WILLIAMS COLLEGE': 137 },
  { 'RUTGERS UNIVERSITY–NEW BRUNSWICK': 137 },
  { 'AMHERST COLLEGE': 136 },
  { 'EMORY UNIVERSITY': 126 },
  { 'CASE WESTERN RESERVE UNIVERSITY': 124 },
  { 'CARLETON COLLEGE': 122 },
  { 'VIRGINIA POLYTECHNIC INSTITUTE AND STATE UNIVERSITY': 121 },
  { 'UNIVERSITY OF GEORGIA': 119 },
  { 'WORCESTER POLYTECHNIC INSTITUTE': 116 },
  { 'UNIVERSITY OF NOTRE DAME': 107 },
  { 'ROSE-HULMAN INSTITUTE OF TECHNOLOGY': 105 },
  { 'SUNY BUFFALO UNIVERSITY': 104},
  { 'BRANDEIS UNIVERSITY': 104 },
  { 'UNIVERSITY OF UTAH': 103 },
  { 'UNIVERSITY OF CALIFORNIA-DAVIS': 94 },
  { 'IOWA STATE UNIVERSITY': 94 },
  { 'UNIVERSITY OF MARYLAND BALTIMORE COUNTY': 93 },
  { 'UNIVERSITY OF ARIZONA': 90 },
  { 'GRINNELL COLLEGE': 86 },
  { 'TOYOTA TECHNOLOGICAL INSTITUTE AT CHICAGO': 79 },
  { 'UNIVERSITY OF CALIFORNIA-SANTA CRUZ': 77 },
  { 'UNIVERSITY OF CENTRAL FLORIDA': 73 },
  { 'GEORGETOWN UNIVERSITY': 72 },
  {
    'LOUISIANA STATE UNIVERSITY AND AGRICULTURAL AND MECHANICAL COLLEGE': 72
  },
  { 'BOSTON COLLEGE': 71 },
  { 'UNIVERSITY OF SOUTH FLORIDA': 71 },
  { 'UNIVERSITY OF CALIFORNIA-RIVERSIDE': 67 },
  { 'TEXAS A&M UNIVERSITY, COLLEGE STATION': 66 },
  { 'VIRGINIA TECH': 64 },
  { 'UNIVERSITY OF PITTSBURGH': 64 },
  { 'INDIANA UNIVERSITY AT BLOOMINGTON': 63 },
  { 'STEVENS INSTITUTE OF TECHNOLOGY': 63 },
  { 'SAN JOSE STATE UNIVERSITY': 62 },
  { 'UNIVERSITY OF PITTSBURGH PITTSBURGH CAMPUS': 62 },
  { 'VILLANOVA UNIVERSITY': 61 },
  { 'WELLESLEY COLLEGE': 60 },
  { 'COLORADO SCHOOL OF MINES': 60 },
  { 'OREGON STATE UNIVERSITY': 60 },
  { 'MIDDLEBURY COLLEGE': 59 },
  { 'UNIVERSITY OF NEBRASKA – LINCOLN': 59 },
  { 'UNIVERSITY OF CALIFORNIA, DAVIS': 59 },
  { 'BOWDOIN COLLEGE': 57 },
  { 'SWARTHMORE COLLEGE': 54 },
  { 'COLGATE UNIVERSITY': 54 },
  { 'WAKE FOREST UNIVERSITY': 53 },
  { 'UNIVERSITY OF CALIFORNIA, RIVERSIDE': 53 },
  { 'HARVARD MEDICAL SCHOOL': 52 },
  { 'HAVERFORD COLLEGE': 51 },
  { 'ROCHESTER INSTITUTE OF TECHNOLOGY': 51 },
  { 'UNIVERSITY OF COLORADO AT BOULDER': 51 },
  { 'UNIVERSITY OF DELAWARE': 51 },
  { 'UNIVERSITY OF CONNECTICUT': 50 },
  { 'LAGUARDIA COMMUNITY COLLEGE': 49 },
  { 'UNIVERSITY OF CALIFORNIA, MERCED': 47 },
  { 'GEORGIA STATE UNIVERSITY': 46 },
  { 'UNIVERSITY OF PITTSBURGH HEALTH SCIENCES': 46 },
  { 'COLLIN COUNTY COMMUNITY COLLEGE DISTRICT': 45 },
  { 'UNIVERSITY OF TEXAS, DALLAS': 45 },
  { 'FLORIDA INSTITUTE OF TECHNOLOGY': 44 },
  { 'MOUNT HOLYOKE COLLEGE': 43 },
  { 'UNIVERSITY OF TEXAS, SAN ANTONIO': 43 },
  { 'CALIFORNIA POLYTECHNIC STATE UNIVERSITY': 41 },
  { 'UNIVERSITY OF COLORADO BOULDER': 41 },
  { 'NORTH HENNEPIN COMMUNITY COLLEGE': 41 },
  { 'NEW JERSEY INSTITUTE OF TECHNOLOGY': 41 },
  { 'STATE UNIVERSITY OF NEW YORK AT BINGHAMTON': 41 },
  { 'ST OLAF COLLEGE': 40 },
  { 'UNIVERSITY OF ILLINOIS, CHICAGO': 40 },
  { 'NORMANDALE COMMUNITY COLLEGE': 39 },
  { 'WEILL CORNELL MEDICINE': 39 },
  { 'CLAREMONT MCKENNA COLLEGE': 38 },
  { 'FLORIDA STATE UNIVERSITY': 37 },
  { 'NORTHERN VIRGINIA COMMUNITY COLLEGE': 36 },
  { 'UNIVERSITY OF CINCINNATI MAIN CAMPUS': 36 },
  { 'UNIVERSITY OF KENTUCKY': 36 },
  { 'DREXEL UNIVERSITY': 35 },
  { 'TEMPLE UNIVERSITY': 34 },
  { 'BRIGHAM YOUNG UNIVERSITY-PROVO': 33 },
  { 'SOUTHERN METHODIST UNIVERSITY': 32 },
  { 'CONNECTICUT COLLEGE': 31 },
  { 'CLEMSON UNIVERSITY': 31 },
  { 'UNIVERSITY OF HOUSTON': 30 },
  { 'SMITH COLLEGE': 29 },
  { 'UNIVERSITY OF IOWA': 29 },
  { 'GEORGE WASHINGTON UNIVERSITY': 29 },
  { 'UNIVERSITY OF CALIFORNIA, SANTA CRUZ': 29 },
  { 'COLORADO STATE UNIVERSITY': 28 },
  { 'SAINT JOHNS UNIVERSITY': 28 },
  { 'UNIVERSITY OF ILLINOIS AT CHICAGO': 28 },
  { 'INDIANA UNIVERSITY-BLOOMINGTON': 28 },
  { 'DEPAUW UNIVERSITY': 27 },
  { 'UNIVERSITY OF COLORADO, BOULDER': 27 },
  { 'SEATTLE UNIVERSITY': 26 },
  { 'UNIVERSITY OF OKLAHOMA NORMAN CAMPUS': 26 },
  { 'FLORIDA INTERNATIONAL UNIVERSITY': 26 },
{ 'SYRACUSE UNIVERSITY': 25 },
  { 'UNIVERSITY OF PITTSBURGH-PITTSBURGH CAMPUS': 25 },
  { 'GEORGE MASON UNIVERSITY': 25 },
  { 'NORWALK COMMUNITY COLLEGE': 24 },
  { 'QUEENSBOROUGH COMMUNITY COLLEGE': 23 },
  { 'WENTWORTH INSTITUTE OF TECHNOLOGY': 22 },
  { 'OKLAHOMA STATE UNIVERSITY MAIN CAMPUS': 22 },
  { 'AUBURN UNIVERSITY': 21 },
  { 'MICHIGAN TECHNOLOGICAL UNIVERSITY': 20 },
  { 'CITY UNIVERSITY OF NEW YORK GRAD. CENTER': 20 },
  { 'WASHINGTON STATE UNIVERSITY, PULLMAN': 20 },
  { 'UNIVERSITY OF NEBRASKA–LINCOLN': 19 },
  { 'KENT STATE UNIVERSITY MAIN CAMPUS': 19 },
  { 'ILLINOIS INSTITUTE OF TECHNOLOGY': 19 },
  { 'UNIVERSITY OF TENNESSEE, KNOXVILLE': 19 },
  { 'CITY COLLEGE OF NEW YORK': 18 },
  { 'GONZAGA UNIVERSITY': 18 },
  { 'UNIVERSITY OF TENNESSEE': 18 },
  { 'UNIVERSITY OF CONNECTICUT, STORRS': 18 },
  { 'PROVIDENCE COLLEGE': 17 },
  { 'UNIVERSITY OF SOUTH FLORIDA SYSTEM': 17 },
  { 'BRIGHAM YOUNG UNIVERSITY': 15 },
  { 'STONEHILL COLLEGE': 15 },
  { 'UNIVERSITY OF CALIFORNIA, SAN FRANCISCO': 15 },
  { 'CLARKSON UNIVERSITY': 14 },
  { 'CREIGHTON UNIVERSITY': 14 },
  { 'UNIVERSITY OF ARKANSAS': 13 },
  { 'UNIVERSITY OF NORTH CAROLINA, CHARLOTTE': 13 },
  { 'UNIVERSITY OF MIAMI': 12 },
  { 'WASHINGTON STATE UNIVERSITY': 12 },
  { 'VASSAR COLLEGE': 11 },
  { 'LAKE AREA TECHNICAL INSTITUTE': 11 },
  { 'UNIVERSITY OF OREGON': 11 },
  { 'WAYNE STATE UNIVERSITY': 11 },
  { 'UNIVERSITY OF TEXAS AT DALLAS': 9 },
  { 'WHEATON COLLEGE ILLINOIS': 9 },
  { 'UNIVERSITY OF NEW MEXICO MAIN CAMPUS': 9 },
  { 'BINGHAMTON UNIVERSITY': 8 },
  { 'UNIVERSITY OF ST THOMAS MINNESOTA': 7 },
  { 'UNIVERSITY OF ALABAMA': 6 },
  { 'UNIVERSITY OF PORTLAND': 6 },
  { 'TULANE UNIVERSITY': 5 },
  { 'FURMAN UNIVERSITY': 5 },
  { 'UNIVERSITY OF TEXAS AT ARLINGTON': 4 },
  { 'UNIVERSITY OF RHODE ISLAND': 3 },
  { 'UNIVERSITY OF SOUTH CAROLINA COLUMBIA': 2 },
  { 'UNIVERSITY AT BUFFALO': 1 },
  { 'ICAHN SCHOOL OF MEDICINE AT MOUNT SINAI': 1 }
  ];

export default colleges;

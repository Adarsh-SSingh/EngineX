const modificationsData = {
    "bmw-3-series": {
        name: "BMW 3 Series",
        model: "G20 (2019–Present)",
        category: "Luxury Sedan",
        image: "/static/img/CARS/BMW3/P90416620_highRes_the-all-new-bmw-m4-c.jpg",
        modifications: {
            "Performance": [
                { name: "ECU Remap", price: 25000, brand: "RaceChip", description: "Power increase up to 30HP" },
                { name: "Cold Air Intake", price: 15000, brand: "K&N", description: "Improved airflow and sound" },
                { name: "Performance Exhaust", price: 45000, brand: "Akrapovic", description: "Titanium exhaust system" },
                { name: "Brake Upgrade", price: 35000, brand: "Brembo", description: "6-piston caliper kit" }
            ],
            "Suspension": [
                { name: "Coilovers", price: 55000, brand: "KW", description: "Fully adjustable suspension" },
                { name: "Sway Bars", price: 18000, brand: "Eibach", description: "Reduced body roll" }
            ],
            "Wheels/Tires": [
                { name: "19” Alloy Wheels", price: 80000, brand: "BBS", description: "Forged lightweight wheels" },
                { name: "Performance Tires", price: 30000, brand: "Michelin", description: "Pilot Sport 4S" }
            ],
            "Exterior": [
                { name: "Body Kit", price: 65000, brand: "AC Schnitzer", description: "Full aerodynamic kit" },
                { name: "Carbon Fiber Mirrors", price: 12000, brand: "M Performance", description: "Weight reduction" }
            ],
            "Interior": [
                { name: "M-Style Steering Wheel", price: 25000, brand: "M Performance", description: "Alcantara wrapped" },
                { name: "Ambient Lighting", price: 15000, brand: "Bavarian", description: "64-color custom" }
            ]
        }
    },

    "bmw-x5-x6": {
        name: "BMW X5 / X6",
        model: "G05/G06",
        category: "Luxury SUV",
        image: "/static/img/CARS/BMW4/BMW M4 Under Stormy Skies.jpeg",
        modifications: {
            "Performance": [
                { name: "ECU Tuning", price: 28000, brand: "RaceChip", description: "Power and torque boost" },
                { name: "Sport Exhaust", price: 52000, brand: "Remus", description: "Enhanced sound and performance" },
                { name: "Turbo Intercooler Upgrade", price: 45000, brand: "Wagner", description: "Improved cooling" }
            ],
            "Suspension": [
                { name: "Air Suspension Adjustment", price: 35000, brand: "KW", description: "Lowering module" },
                { name: "Performance Coilovers", price: 68000, brand: "Bilstein", description: "Adaptive damping" }
            ],
            "Wheels/Tires": [
                { name: "22” Forged Alloys", price: 120000, brand: "HRE", description: "Custom forged wheels" },
                { name: "All-Season Tires", price: 45000, brand: "Pirelli", description: "Scorpion Zero" }
            ],
            "Exterior": [
                { name: "Carbon Fiber Diffusers", price: 35000, brand: "M Performance", description: "Front and rear" },
                { name: "Roof Spoiler", price: 18000, brand: "AC Schnitzer", description: "Aerodynamic upgrade" }
            ],
            "Lighting": [
                { name: "Laser Headlights", price: 85000, brand: "BMW", description: "Adaptive laser lights" },
                { name: "Ambient LED Customization", price: 22000, brand: "Bavlogic", description: "Full interior" }
            ]
        }
    },

    "mahindra-scorpio": {
        name: "Mahindra Scorpio",
        model: "Classic + N",
        category: "SUV",
        image: "/static/img/CARS/Scorpio/THE GREAT SCORPIO.jpeg",
        modifications: {
            "Suspension & Handling": [
                { name: "2-inch Lift Kit", price: 18000, brand: "Ironman", description: "Increased ground clearance" },
                { name: "Heavy-duty Shocks", price: 22000, brand: "Old Man Emu", description: "Off-road performance" },
                { name: "Coil Spring Upgrade", price: 15000, brand: "Terrain", description: "Heavy-duty springs" }
            ],
            "Wheels & Tires": [
                { name: "Off-road Alloys", price: 45000, brand: "MRF", description: "16-inch rugged design" },
                { name: "All-terrain Tires", price: 32000, brand: "Yokohama", description: "Geolandar A/T" },
                { name: "Mud-terrain Tires", price: 38000, brand: "Maxxis", description: "Bighorn MT" }
            ],
            "Engine & Performance": [
                { name: "ECU Stage 1 Tune", price: 15000, brand: "RaceChip", description: "Power and torque boost" },
                { name: "Performance Air Filter", price: 5000, brand: "K&N", description: "Reusable high-flow" },
                { name: "Free-flow Exhaust", price: 18000, brand: "Fox", description: "Cat-back system" }
            ],
            "Exterior & Off-road": [
                { name: "Bullbar", price: 25000, brand: "ARB", description: "Front protection" },
                { name: "Snorkel", price: 12000, brand: "Safari", description: "Water crossing capability" },
                { name: "Roof Rack", price: 18000, brand: "Thule", description: "Aluminum roof rack" }
            ],
            "Lighting": [
                { name: "LED Headlamp Conversion", price: 18000, brand: "Philips", description: "Brighter visibility" },
                { name: "LED Light Bar", price: 15000, brand: "Nilight", description: "32-inch roof mounted" }
            ]
        }
    },

    "maruti-swift": {
        name: "Maruti Swift",
        model: "2005–2025",
        category: "Hatchback",
        image: "/static/img/CARS/swift/Modified car.jpeg",
        modifications: {
            "Performance": [
                { name: "ECU Remap", price: 12000, brand: "RaceChip", description: "+15HP power gain" },
                { name: "Sport Exhaust", price: 18000, brand: "Fox", description: "Deep sporty sound" },
                { name: "Cold Air Intake", price: 8000, brand: "K&N", description: "Short ram intake" }
            ],
            "Suspension": [
                { name: "Lowering Springs", price: 15000, brand: "Eibach", description: "Improved handling" },
                { name: "Coilovers", price: 35000, brand: "BC Racing", description: "Height adjustable" },
                { name: "Strut Tower Brace", price: 8000, brand: "Ultra Racing", description: "Chassis stiffening" }
            ],
            "Wheels": [
                { name: "16-inch Alloys", price: 30000, brand: "Enkei", description: "Lightweight design" },
                { name: "Performance Tires", price: 20000, brand: "Bridgestone", description: "Potenza RE003" }
            ],
            "Exterior": [
                { name: "Body Kit", price: 25000, brand: "Custom", description: "Front lip and skirts" },
                { name: "Window Tints", price: 8000, brand: "3M", description: "UV protection" }
            ],
            "Interior": [
                { name: "Sport Seats", price: 22000, brand: "Bride", description: "Low max seats" },
                { name: "Steering Wheel", price: 12000, brand: "Momo", description: "Leather sport wheel" }
            ]
        }
    },

    "maruti-baleno": {
        name: "Maruti Baleno",
        model: "2015–2025",
        category: "Premium Hatch",
        image: "/static/img/CARS/Baleno/Baleno.jpeg",
        modifications: {
            "Performance": [
                { name: "ECU Remap", price: 14000, brand: "RaceChip", description: "+12HP power gain" },
                { name: "Sport Exhaust", price: 20000, brand: "Fox", description: "Dual-tip exhaust" },
                { name: "Performance Filter", price: 6000, brand: "BMC", description: "Panel filter" }
            ],
            "Suspension": [
                { name: "Lowering Springs", price: 16000, brand: "Tein", description: "S-tech springs" },
                { name: "Coilovers", price: 38000, brand: "KW", description: "Street comfort" }
            ],
            "Wheels": [
                { name: "16-inch Alloys", price: 32000, brand: "OZ Racing", description: "Ultraleggera" },
                { name: "Low-profile Tires", price: 22000, brand: "Yokohama", description: "Advan Fleva" }
            ],
            "Exterior": [
                { name: "Body Styling", price: 28000, brand: "Custom", description: "Lip kit" },
                { name: "Roof Spoiler", price: 8000, brand: "ABS", description: "OEM style" }
            ],
            "Interior": [
                { name: "Leather Seats", price: 25000, brand: "Custom", description: "Premium leather" },
                { name: "Infotainment Upgrade", price: 18000, brand: "Pioneer", description: "Android Auto" }
            ]
        }
    },

    "honda-city": {
        name: "Honda City",
        model: "Premium Sedan",
        category: "Sedan",
        image: "/static/img/CARS/honda city/Honda City.jpeg",
        modifications: {
            "Performance": [
                { name: "ECU Tuning", price: 15000, brand: "Hondata", description: "Flashpro tuning" },
                { name: "Cold Air Intake", price: 12000, brand: "Injen", description: "Polished intake" },
                { name: "Exhaust System", price: 22000, brand: "Skunk2", description: "Alpha series" }
            ],
            "Suspension": [
                { name: "Coilovers", price: 42000, brand: "Tein", description: "Flex Z coilovers" },
                { name: "Lowering Springs", price: 18000, brand: "Eibach", description: "Pro-kit" }
            ],
            "Wheels": [
                { name: "17-inch Alloys", price: 35000, brand: "Enkei", description: "RPF1" },
                { name: "Performance Tires", price: 28000, brand: "Michelin", description: "Pilot Sport 4" }
            ],
            "Exterior": [
                { name: "Body Kit", price: 32000, brand: "Mugen", description: "Style kit" },
                { name: "LED Conversion", price: 15000, brand: "Morimoto", description: "Projector retrofit" }
            ],
            "Interior": [
                { name: "Leather Upgrade", price: 30000, brand: "Custom", description: "Full leather" },
                { name: "Audio System", price: 25000, brand: "Alpine", description: "Component system" }
            ]
        }
    },

    "honda-civic": {
        name: "Honda Civic",
        model: "Sports Sedan",
        category: "Sedan",
        image: "/static/img/CARS/Civic/download (50).jpeg",
        modifications: {
            "Performance": [
                { name: "ECU Tuning", price: 18000, brand: "Hondata", description: "+25HP gain" },
                { name: "Cold Air Intake", price: 15000, brand: "PRL", description: "Cobra intake" },
                { name: "Downpipe", price: 25000, brand: "RV6", description: "Catted downpipe" }
            ],
            "Suspension": [
                { name: "Coilovers", price: 48000, brand: "BC Racing", description: "BR series" },
                { name: "Sway Bars", price: 18000, brand: "Progress", description: "Anti-roll bars" }
            ],
            "Wheels": [
                { name: "18-inch Alloys", price: 45000, brand: "Volk Racing", description: "TE37" },
                { name: "Track Tires", price: 35000, brand: "Yokohama", description: "AD08R" }
            ],
            "Exterior": [
                { name: "Type R Kit", price: 55000, brand: "Honda", description: "OEM kit" },
                { name: "Carbon Hood", price: 45000, brand: "Seibon", description: "Carbon fiber" }
            ],
            "Interior": [
                { name: "Sport Seats", price: 35000, brand: "Recaro", description: "SR7 seats" },
                { name: "Short Shifter", price: 12000, brand: "Acuity", description: "Precision shifter" }
            ]
        }
    },

    "tata-harrier": {
        name: "Tata Harrier",
        model: "Premium SUV",
        category: "SUV",
        image: "/static/img/CARS/Harrier/Luxury looking black coloured Tata harrier car.jpeg",
        modifications: {
            "Suspension": [
                { name: "Lift Kit", price: 22000, brand: "Custom", description: "1.5-inch lift" },
                { name: "Upgraded Shocks", price: 28000, brand: "KYB", description: "Gas shocks" }
            ],
            "Wheels": [
                { name: "18-inch Alloys", price: 42000, brand: "Plati", description: "Black alloys" },
                { name: "All-terrain Tires", price: 38000, brand: "Apollo", description: "Hawkz" }
            ],
            "Performance": [
                { name: "ECU Remap", price: 18000, brand: "RaceChip", description: "Diesel tuning" },
                { name: "Performance Filter", price: 6000, brand: "K&N", description: "Panel filter" }
            ],
            "Exterior": [
                { name: "Roof Rails", price: 15000, brand: "Tata", description: "OEM rails" },
                { name: "LED Upgrade", price: 22000, brand: "Philips", description: "LED conversion" }
            ],
            "Interior": [
                { name: "Leather Seats", price: 45000, brand: "Custom", description: "Premium leather" },
                { name: "Infotainment", price: 28000, brand: "Pioneer", description: "Wireless CarPlay" }
            ]
        }
    },

    "mahindra-xuv500": {
        name: "Mahindra XUV500",
        model: "Family SUV",
        category: "SUV",
        image: "/static/img/CARS/XUV/download (52).jpeg",
        modifications: {
            "Suspension": [
                { name: "Lift Kit", price: 20000, brand: "Custom", description: "2-inch lift" },
                { name: "Performance Shocks", price: 25000, brand: "Monroe", description: "Gas magnum" }
            ],
            "Wheels": [
                { name: "17-inch Alloys", price: 38000, brand: "Plati", description: "Dual tone" },
                { name: "Highway Tires", price: 32000, brand: "MRF", description: "Wanderer" }
            ],
            "Performance": [
                { name: "ECU Tuning", price: 16000, brand: "RaceChip", description: "Power boost" },
                { name: "Exhaust Upgrade", price: 18000, brand: "Custom", description: "Free-flow" }
            ],
            "Exterior": [
                { name: "Side Steps", price: 15000, brand: "Mahindra", description: "OEM steps" },
                { name: "Window Visors", price: 8000, brand: "WeatherTech", description: "Rain guards" }
            ],
            "Interior": [
                { name: "Seat Covers", price: 18000, brand: "Custom", description: "Premium covers" },
                { name: "Dash Cam", price: 12000, brand: "Viofo", description: "4K recording" }
            ]
        }
    },

    "jeep-compass": {
        name: "Jeep Compass",
        model: "Premium SUV",
        category: "SUV",
        image: "/static/img/CARS/Jeep/download (51).jpeg",
        modifications: {
            "Suspension": [
                { name: "Lift Kit", price: 28000, brand: "Old Man Emu", description: "2-inch lift" },
                { name: "Off-road Shocks", price: 35000, brand: "Bilstein", description: "5100 series" }
            ],
            "Wheels": [
                { name: "18-inch Alloys", price: 45000, brand: "Method", description: "MR701" },
                { name: "All-terrain Tires", price: 42000, brand: "Falken", description: "Wildpeak AT3" }
            ],
            "Performance": [
                { name: "ECU Tuning", price: 22000, brand: "RaceChip", description: "Diesel performance" },
                { name: "Performance Filter", price: 8000, brand: "K&N", description: "High-flow" }
            ],
            "Exterior": [
                { name: "Bull Bar", price: 32000, brand: "ARB", description: "Deluxe bar" },
                { name: "Roof Rack", price: 28000, brand: "Rhino-Rack", description: "Pioneer platform" }
            ],
            "Lighting": [
                { name: "LED Headlights", price: 25000, brand: "JW Speaker", description: "LED conversion" },
                { name: "Light Bar", price: 18000, brand: "Rigid", description: "20-inch bar" }
            ]
        }
    },

    "kia-seltos": {
        name: "Kia Seltos",
        model: "Compact SUV",
        category: "SUV",
        image: "/static/img/CARS/Kia Seltos/Kia carens.jpeg",
        modifications: {
            "Suspension": [
                { name: "Lowering Springs", price: 18000, brand: "Eibach", description: "Pro-kit" },
                { name: "Coilovers", price: 42000, brand: "BC Racing", description: "BR series" }
            ],
            "Wheels": [
                { name: "18-inch Alloys", price: 38000, brand: "Enkei", description: "Raijin" },
                { name: "Performance Tires", price: 28000, brand: "Continental", description: "ExtremeContact" }
            ],
            "Performance": [
                { name: "ECU Tuning", price: 15000, brand: "RaceChip", description: "Petrol tuning" },
                { name: "Exhaust Tips", price: 8000, brand: "Custom", description: "Chrome tips" }
            ],
            "Exterior": [
                { name: "Body Kit", price: 32000, brand: "Custom", description: "Sport kit" },
                { name: "Window Tints", price: 10000, brand: "3M", description: "Ceramic tint" }
            ],
            "Interior": [
                { name: "Ambient Lighting", price: 15000, brand: "Custom", description: "64-color" },
                { name: "Sound System", price: 22000, brand: "JBL", description: "Component speakers" }
            ]
        }
    },

    "mg-hector": {
        name: "MG Hector",
        model: "Connected SUV",
        category: "SUV",
        image: "/static/img/CARS/MG hector/mghectorrightfrontthreequarter.webp",
        modifications: {
            "Suspension": [
                { name: "Lift Kit", price: 22000, brand: "Custom", description: "1.5-inch lift" },
                { name: "Upgraded Shocks", price: 28000, brand: "KYB", description: "Excel-G" }
            ],
            "Wheels": [
                { name: "18-inch Alloys", price: 40000, brand: "Plati", description: "Machine cut" },
                { name: "Comfort Tires", price: 35000, brand: "Bridgestone", description: "Dueler" }
            ],
            "Performance": [
                { name: "ECU Optimization", price: 18000, brand: "Custom", description: "Performance tune" },
                { name: "Air Filter", price: 6000, brand: "K&N", description: "Panel filter" }
            ],
            "Exterior": [
                { name: "Roof Rails", price: 12000, brand: "MG", description: "OEM rails" },
                { name: "Chrome Kit", price: 15000, brand: "Custom", description: "Chrome accents" }
            ],
            "Interior": [
                { name: "Leather Upgrade", price: 38000, brand: "Custom", description: "Premium leather" },
                { name: "Sound System", price: 25000, brand: "Infinity", description: "Reference series" }
            ]
        }
    },

    "toyota-fortuner": {
        name: "Toyota Fortuner",
        model: "Legend SUV",
        category: "SUV",
        image: "/static/img/CARS/Fortuner/download (47).jpeg",
        modifications: {
            "Suspension": [
                { name: "3-inch Lift Kit", price: 45000, brand: "Old Man Emu", description: "Heavy-duty lift" },
                { name: "Performance Shocks", price: 38000, brand: "Bilstein", description: "5100 series" }
            ],
            "Wheels": [
                { name: "18-inch Alloys", price: 55000, brand: "Fuel", description: "Off-road wheels" },
                { name: "Mud-terrain Tires", price: 48000, brand: "BF Goodrich", description: "KM3" }
            ],
            "Performance": [
                { name: "ECU Tuning", price: 25000, brand: "RaceChip", description: "Diesel performance" },
                { name: "Performance Exhaust", price: 32000, brand: "Fox", description: "Stainless steel" }
            ],
            "Exterior": [
                { name: "Bull Bar", price: 45000, brand: "ARB", description: "Deluxe bull bar" },
                { name: "Snorkel", price: 22000, brand: "Safari", description: "Snorkel kit" }
            ],
            "Lighting": [
                { name: "LED Light Bar", price: 25000, brand: "Rigid", description: "40-inch bar" },
                { name: "LED Headlights", price: 32000, brand: "Morimoto", description: "XSB LED" }
            ]
        }
    },

    "tata-nexon": {
        name: "Tata Nexon",
        model: "Compact SUV",
        category: "SUV",
        image: "/static/img/CARS/Nexon/Tata Nexon 2020-2023 XZA Plus DT Roof AMT Diesel On Road Price, Features & Specs, Images.jpeg",
        modifications: {
            "Suspension": [
                { name: "Lowering Springs", price: 15000, brand: "Custom", description: "Sport lowering" },
                { name: "Performance Shocks", price: 22000, brand: "KYB", description: "Gas shocks" }
            ],
            "Wheels": [
                { name: "17-inch Alloys", price: 32000, brand: "Plati", description: "Diamond cut" },
                { name: "Performance Tires", price: 25000, brand: "Apollo", description: "Alnac 4G" }
            ],
            "Performance": [
                { name: "ECU Tuning", price: 14000, brand: "RaceChip", description: "Turbo tuning" },
                { name: "Air Filter", price: 5000, brand: "K&N", description: "Panel filter" }
            ],
            "Exterior": [
                { name: "Body Styling", price: 22000, brand: "Custom", description: "Sport package" },
                { name: "Roof Spoiler", price: 8000, brand: "ABS", description: "OEM style" }
            ],
            "Interior": [
                { name: "Seat Covers", price: 12000, brand: "Custom", description: "Premium covers" },
                { name: "Ambient Lights", price: 8000, brand: "LED", description: "Multi-color" }
            ]
        }
    },

    "mahindra-thar": {
        name: "Mahindra Thar",
        model: "Off-road Legend",
        category: "SUV",
        image: "/static/img/CARS/Thar/Thar (BLACK).jpeg",
        modifications: {
            "Suspension": [
                { name: "4-inch Lift Kit", price: 35000, brand: "Old Man Emu", description: "Extreme lift" },
                { name: "Heavy-duty Shocks", price: 28000, brand: "Terrain", description: "Monotube shocks" }
            ],
            "Wheels": [
                { name: "16-inch Steel Wheels", price: 22000, brand: "MRF", description: "Off-road wheels" },
                { name: "Mud-terrain Tires", price: 42000, brand: "Ceat", description: "Secura drive" }
            ],
            "Performance": [
                { name: "ECU Remap", price: 18000, brand: "RaceChip", description: "Diesel tuning" },
                { name: "Performance Filter", price: 6000, brand: "K&N", description: "High-flow" }
            ],
            "Exterior": [
                { name: "Roll Cage", price: 45000, brand: "Custom", description: "Internal cage" },
                { name: "Winch", price: 35000, brand: "Warn", description: "VR EVO series" }
            ],
            "Lighting": [
                { name: "LED Light Bars", price: 28000, brand: "Nilight", description: "Dual light bars" },
                { name: "LED Headlights", price: 18000, brand: "JW Speaker", description: "LED conversion" }
            ]
        }
    }
};

// Service booking system - har car ke liye alag
let serviceBookings = {};
let currentCar = null;
let currentCarId = null;

// Search and filter state
let activeFilters = {
    search: '',
    price: 'all',
    brand: 'all',
    category: 'all'
};

// Initialize modifications page
document.addEventListener('DOMContentLoaded', function() {
    loadSelectedCar();
    initializeModifications();
    initializeServicesForCurrentCar();
    updateServiceSummary();
    initializeSearchFilters();
    // initializeScrollHide();
});

function loadSelectedCar() {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('car');
    
    if (carId && modificationsData[carId]) {
        currentCar = modificationsData[carId];
        currentCarId = carId;
        displayCarInfo(currentCar);
    } else {
        window.location.href = 'car-selection.html';
    }
}

function initializeServicesForCurrentCar() {
    if (!currentCarId) return;
    
    if (!serviceBookings[currentCarId]) {
        serviceBookings[currentCarId] = [];
    }
    
    loadServicesFromLocalStorage();
}

function displayCarInfo(car) {
    document.getElementById('pageTitle').textContent = `${car.name} Services`;
    document.getElementById('carName').textContent = car.name;
    document.getElementById('carModel').textContent = car.model;
    document.getElementById('carCategory').textContent = car.category;
    document.getElementById('carMainImage').src = car.image;
    document.getElementById('carMainImage').alt = car.name;
}

function initializeModifications() {
    if (!currentCar) return;
    
    displayCategories(currentCar.modifications);
    displayModifications(currentCar.modifications);
    updateStats(currentCar.modifications);
}

function displayCategories(modifications) {
    const categoriesContainer = document.getElementById('categoryFilters');
    const categories = Object.keys(modifications);
    
    categoriesContainer.innerHTML = '';
    
    categories.forEach((category, index) => {
        const button = document.createElement('button');
        button.className = `category-filter ${index === 0 ? 'active' : ''}`;
        button.textContent = category;
        button.addEventListener('click', () => filterByCategory(category, button));
        categoriesContainer.appendChild(button);
    });
}

function displayModifications(modifications) {
    const gridContainer = document.getElementById('modificationsGrid');
    gridContainer.innerHTML = '';
    
    Object.entries(modifications).forEach(([category, items]) => {
        const categoryElement = createCategoryElement(category, items);
        gridContainer.appendChild(categoryElement);
    });
}

function createCategoryElement(category, items) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'mod-category';
    categoryDiv.id = `category-${category.replace(/\s+/g, '-').toLowerCase()}`;
    
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';
    categoryHeader.innerHTML = `<h4>${category}</h4>`;
    
    const modItemsContainer = document.createElement('div');
    modItemsContainer.className = 'mod-items';
    
    items.forEach(item => {
        const modItem = createServiceItem(item, category);
        modItemsContainer.appendChild(modItem);
    });
    
    categoryDiv.appendChild(categoryHeader);
    categoryDiv.appendChild(modItemsContainer);
    
    return categoryDiv;
}

function createServiceItem(item, category) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'mod-item';
    itemDiv.setAttribute('data-price', item.price);
    itemDiv.setAttribute('data-brand', item.brand);
    itemDiv.setAttribute('data-category', category);
    
    const currentServices = getCurrentServices();
    const isSelected = currentServices.some(service => 
        service.name === item.name && service.category === category
    );
    
    itemDiv.innerHTML = `
        <div class="mod-info">
            <div class="mod-name">${item.name}</div>
            <div class="mod-details">${item.brand} - ${item.description}</div>
        </div>
        <div class="mod-actions">
            <span class="mod-price">₹${item.price.toLocaleString()}</span>
            <button class="select-service-btn ${isSelected ? 'selected' : ''}" 
                    onclick="toggleService(this, '${category}', '${item.name.replace(/'/g, "\\'")}', ${item.price}, '${item.brand}', '${item.description}')">
                ${isSelected ? 'Selected ✓' : 'Select Service'}
            </button>
        </div>
    `;
    
    return itemDiv;
}

// Service functions
function getCurrentServices() {
    return serviceBookings[currentCarId] || [];
}

function setCurrentServices(services) {
    if (currentCarId) {
        serviceBookings[currentCarId] = services;
    }
}

function toggleService(button, category, name, price, brand, description) {
    const currentServices = getCurrentServices();
    const service = { category, name, price, brand, description };
    const serviceIndex = currentServices.findIndex(s => 
        s.name === name && s.category === category
    );
    
    if (serviceIndex > -1) {
        currentServices.splice(serviceIndex, 1);
        button.textContent = 'Select Service';
        button.classList.remove('selected');
    } else {
        currentServices.push(service);
        button.textContent = 'Selected ✓';
        button.classList.add('selected');
    }
    
    setCurrentServices(currentServices);
    updateServiceSummary();
    saveServicesToLocalStorage();
    showServiceNotification();
}

function updateServiceSummary() {
    const serviceSummary = document.getElementById('serviceSummary');
    const currentServices = getCurrentServices();
    const totalServices = currentServices.length;
    const totalAmount = currentServices.reduce((sum, service) => sum + service.price, 0);
    
    document.querySelectorAll('.service-count').forEach(el => el.textContent = `${totalServices} services selected`);
    document.querySelectorAll('.service-total').forEach(el => el.textContent = `Total: ₹${totalAmount.toLocaleString()}`);
    
    if (totalServices > 0) {
        serviceSummary.classList.add('active');
    } else {
        serviceSummary.classList.remove('active');
    }
}

function showServiceNotification() {
    const serviceSummary = document.getElementById('serviceSummary');
    serviceSummary.style.transform = 'translateY(0)';
    
    setTimeout(() => {
        const currentServices = getCurrentServices();
        if (currentServices.length === 0) {
            serviceSummary.classList.remove('active');
        }
    }, 3000);
}

function updateStats(modifications) {
    const totalMods = Object.values(modifications).flat().length;
    const totalCategories = Object.keys(modifications).length;
    
    document.getElementById('modsCount').textContent = totalMods;
    document.getElementById('categoriesCount').textContent = totalCategories;
}

// ==================== SEARCH & FILTER FUNCTIONS ====================

function initializeSearchFilters() {
    loadBrandsFilter();
    setupSearchListeners();
}

function loadBrandsFilter() {
    if (!currentCar) return;
    
    const brandFilter = document.getElementById('brandFilter');
    const allBrands = new Set();
    
    Object.values(currentCar.modifications).forEach(category => {
        category.forEach(item => {
            allBrands.add(item.brand);
        });
    });
    
    const sortedBrands = Array.from(allBrands).sort();
    sortedBrands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

function setupSearchListeners() {
    const searchInput = document.getElementById('searchMods');
    
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            activeFilters.search = e.target.value;
            applyAllFilters();
        }, 300);
    });
}

function searchModifications(query) {
    activeFilters.search = query;
    applyAllFilters();
}

function filterByPrice(priceRange) {
    activeFilters.price = priceRange;
    applyAllFilters();
    updateActiveFiltersDisplay();
}

function filterByBrand(brand) {
    activeFilters.brand = brand;
    applyAllFilters();
    updateActiveFiltersDisplay();
}

function filterByCategory(category, button) {
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    
    activeFilters.category = category;
    applyAllFilters();
    updateActiveFiltersDisplay();
    
    const categoryElement = document.getElementById(`category-${category.replace(/\s+/g, '-').toLowerCase()}`);
    if (categoryElement && categoryElement.style.display !== 'none') {
        const headerHeight = document.querySelector('.modifications-header').offsetHeight;
        const navHeight = document.querySelector('.modifications-nav').offsetHeight;
        const totalOffset = headerHeight + navHeight + 20;
        
        const elementPosition = categoryElement.offsetTop - totalOffset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        
        categoryElement.classList.add('highlight');
        setTimeout(() => {
            categoryElement.classList.remove('highlight');
        }, 2000);
    }
}

function applyAllFilters() {
    if (!currentCar) return;
    
    const allMods = document.querySelectorAll('.mod-item');
    let visibleItemsCount = 0;
    let visibleCategories = new Set();
    
    allMods.forEach(mod => {
        const modName = mod.querySelector('.mod-name').textContent.toLowerCase();
        const modDetails = mod.querySelector('.mod-details').textContent.toLowerCase();
        const modPrice = parseInt(mod.getAttribute('data-price'));
        const modBrand = mod.getAttribute('data-brand');
        const modCategory = mod.getAttribute('data-category');
        
        const matchesSearch = !activeFilters.search || 
                            modName.includes(activeFilters.search.toLowerCase()) || 
                            modDetails.includes(activeFilters.search.toLowerCase());
        
        const matchesPrice = activeFilters.price === 'all' || 
                           (activeFilters.price === '0-10000' && modPrice <= 10000) ||
                           (activeFilters.price === '10000-30000' && modPrice > 10000 && modPrice <= 30000) ||
                           (activeFilters.price === '30000-50000' && modPrice > 30000 && modPrice <= 50000) ||
                           (activeFilters.price === '50000+' && modPrice > 50000);
        
        const matchesBrand = activeFilters.brand === 'all' || modBrand === activeFilters.brand;
        const matchesCategory = activeFilters.category === 'all' || modCategory === activeFilters.category;
        
        const shouldShow = matchesSearch && matchesPrice && matchesBrand && matchesCategory;
        
        if (shouldShow) {
            mod.style.display = 'flex';
            visibleItemsCount++;
            visibleCategories.add(modCategory);
        } else {
            mod.style.display = 'none';
        }
    });
    
    const allCategories = document.querySelectorAll('.mod-category');
    allCategories.forEach(category => {
        const categoryName = category.querySelector('h4').textContent;
        const shouldShowCategory = visibleCategories.has(categoryName);
        category.style.display = shouldShowCategory ? 'block' : 'none';
    });
    
    updateResultsCount(visibleItemsCount, visibleCategories.size);
    showNoResultsMessage(visibleItemsCount === 0);
}

function updateResultsCount(itemsCount, categoriesCount) {
    let resultsCountElement = document.getElementById('resultsCount');
    
    if (!resultsCountElement) {
        resultsCountElement = document.createElement('div');
        resultsCountElement.id = 'resultsCount';
        resultsCountElement.className = 'results-count';
        document.querySelector('.modifications-nav').appendChild(resultsCountElement);
    }
    
    const hasActiveFilters = activeFilters.search || activeFilters.price !== 'all' || 
                           activeFilters.brand !== 'all' || activeFilters.category !== 'all';
    
    if (hasActiveFilters) {
        resultsCountElement.innerHTML = `
            Showing <strong>${itemsCount}</strong> services 
            in <strong>${categoriesCount}</strong> categories
            ${getActiveFiltersText()}
        `;
        resultsCountElement.style.display = 'block';
    } else {
        resultsCountElement.style.display = 'none';
    }
}

function getActiveFiltersText() {
    const filters = [];
    
    if (activeFilters.search) {
        filters.push(`Search: "${activeFilters.search}"`);
    }
    if (activeFilters.price !== 'all') {
        filters.push(`Price: ${getPriceRangeText(activeFilters.price)}`);
    }
    if (activeFilters.brand !== 'all') {
        filters.push(`Brand: ${activeFilters.brand}`);
    }
    if (activeFilters.category !== 'all') {
        filters.push(`Category: ${activeFilters.category}`);
    }
    
    return filters.length > 0 ? `<br><small>Filters: ${filters.join(', ')}</small>` : '';
}

function getPriceRangeText(priceRange) {
    switch(priceRange) {
        case '0-10000': return 'Under ₹10,000';
        case '10000-30000': return '₹10,000 - ₹30,000';
        case '30000-50000': return '₹30,000 - ₹50,000';
        case '50000+': return 'Above ₹50,000';
        default: return priceRange;
    }
}

function updateActiveFiltersDisplay() {
    let activeFiltersContainer = document.getElementById('activeFilters');
    
    if (!activeFiltersContainer) {
        activeFiltersContainer = document.createElement('div');
        activeFiltersContainer.id = 'activeFilters';
        activeFiltersContainer.className = 'active-filters';
        document.querySelector('.modifications-nav').insertBefore(
            activeFiltersContainer, 
            document.querySelector('.category-filters')
        );
    }
    
    activeFiltersContainer.innerHTML = '';
    
    if (activeFilters.price !== 'all') {
        addFilterTag(activeFiltersContainer, 'price', `Price: ${getPriceRangeText(activeFilters.price)}`);
    }
    if (activeFilters.brand !== 'all') {
        addFilterTag(activeFiltersContainer, 'brand', `Brand: ${activeFilters.brand}`);
    }
    if (activeFilters.category !== 'all') {
        addFilterTag(activeFiltersContainer, 'category', `Category: ${activeFilters.category}`);
    }
}

function addFilterTag(container, filterType, text) {
    const tag = document.createElement('div');
    tag.className = 'filter-tag';
    tag.innerHTML = `
        ${text}
        <button class="remove-filter" onclick="removeFilter('${filterType}')">
            <i class="fas fa-times"></i>
        </button>
    `;
    container.appendChild(tag);
}

function removeFilter(filterType) {
    switch(filterType) {
        case 'price':
            activeFilters.price = 'all';
            document.getElementById('priceFilter').value = 'all';
            break;
        case 'brand':
            activeFilters.brand = 'all';
            document.getElementById('brandFilter').value = 'all';
            break;
        case 'category':
            activeFilters.category = 'all';
            document.querySelectorAll('.category-filter').forEach(btn => {
                btn.classList.remove('active');
            });
            const firstCategoryBtn = document.querySelector('.category-filter');
            if (firstCategoryBtn) firstCategoryBtn.classList.add('active');
            break;
    }
    
    applyAllFilters();
    updateActiveFiltersDisplay();
}

function clearSearch() {
    document.getElementById('searchMods').value = '';
    activeFilters.search = '';
    applyAllFilters();
}

function resetAllFilters() {
    document.getElementById('searchMods').value = '';
    activeFilters.search = '';
    
    document.getElementById('priceFilter').value = 'all';
    activeFilters.price = 'all';
    
    document.getElementById('brandFilter').value = 'all';
    activeFilters.brand = 'all';
    
    activeFilters.category = 'all';
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    const firstCategoryBtn = document.querySelector('.category-filter');
    if (firstCategoryBtn) firstCategoryBtn.classList.add('active');
    
    applyAllFilters();
    updateActiveFiltersDisplay();
}

function showNoResultsMessage(show) {
    let noResultsElement = document.getElementById('noResults');
    
    if (show && !noResultsElement) {
        noResultsElement = document.createElement('div');
        noResultsElement.id = 'noResults';
        noResultsElement.className = 'no-results';
        noResultsElement.innerHTML = `
            <i class="fas fa-search"></i>
            <h4>No services found</h4>
            <p>Try adjusting your search or filters</p>
            <button class="reset-filters" onclick="resetAllFilters()">
                <i class="fas fa-refresh"></i>
                Reset All Filters
            </button>
        `;
        document.getElementById('modificationsGrid').appendChild(noResultsElement);
    } else if (!show && noResultsElement) {
        noResultsElement.remove();
    }
}

// ==================== SCHEDULE MODAL FUNCTIONS ====================

function openScheduleModal() {
    const currentServices = getCurrentServices();
    if (currentServices.length === 0) {
        showMessage('Please select some services first!', 'error');
        return;
    }
    
    const modal = document.getElementById('scheduleModal');
    loadScheduleModal();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeScheduleModal() {
    const modal = document.getElementById('scheduleModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function loadScheduleModal() {
    const serviceItemsContainer = document.getElementById('modalServiceItems');
    const serviceChargeElement = document.getElementById('modalServiceCharge');
    const totalElement = document.getElementById('modalTotal');
    const confirmBookingTotal = document.getElementById('confirmBookingTotal');
    
    serviceItemsContainer.innerHTML = '';
    
    const currentServices = getCurrentServices();
    
    if (currentServices.length === 0) {
        serviceItemsContainer.innerHTML = '<p class="empty-cart">No services selected</p>';
        return;
    }
    
    currentServices.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.innerHTML = `
            <div class="service-item-info">
                <h4>${service.name}</h4>
                <p>${service.brand} - ${service.category}</p>
            </div>
            <div class="service-item-price">₹${service.price.toLocaleString()}</div>
        `;
        serviceItemsContainer.appendChild(serviceItem);
    });
    
    const serviceCharge = currentServices.reduce((sum, service) => sum + service.price, 0);
    const installationFee = 500;
    const total = serviceCharge + installationFee;
    
    serviceChargeElement.textContent = `₹${serviceCharge.toLocaleString()}`;
    totalElement.textContent = `₹${total.toLocaleString()}`;
    confirmBookingTotal.textContent = total.toLocaleString();
}

// ==================== FORM VALIDATION ====================

document.getElementById('scheduleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    processBooking();
});

function validateScheduleForm() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const date = document.getElementById('installDate').value;
    const timeSlot = document.getElementById('timeSlot').value;
    const location = document.getElementById('serviceLocation').value;
    
    clearAllFieldErrors();
    
    let isValid = true;
    
    if (name.length < 3) {
        showFieldError('customerName', 'Name must be at least 3 characters');
        isValid = false;
    }
    
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
        showFieldError('customerPhone', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }
    
    if (!date) {
        showFieldError('installDate', 'Please select installation date');
        isValid = false;
    }
    
    if (!timeSlot) {
        showFieldError('timeSlot', 'Please select time slot');
        isValid = false;
    }
    
    if (!location) {
        showFieldError('serviceLocation', 'Please select service location');
        isValid = false;
    }
    
    return isValid;
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.style.borderColor = 'var(--secondary)';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function clearAllFieldErrors() {
    const fields = document.querySelectorAll('#scheduleForm input, #scheduleForm select, #scheduleForm textarea');
    fields.forEach(field => {
        field.style.borderColor = '';
        const error = field.parentNode.querySelector('.field-error');
        if (error) error.remove();
    });
}

// ==================== BOOKING PROCESSING ====================

function processBooking() {
    if (!validateScheduleForm()) {
        showMessage('Please fix the errors in the form', 'error');
        return;
    }
    
    const currentServices = getCurrentServices();
    
    if (currentServices.length === 0) {
        showMessage('No services selected!', 'error');
        return;
    }
    
    showLoading(true);
    
    const bookingData = {
        customer: {
            name: document.getElementById('customerName').value.trim(),
            phone: document.getElementById('customerPhone').value.trim(),
            email: document.getElementById('customerEmail').value.trim(),
            date: document.getElementById('installDate').value,
            timeSlot: document.getElementById('timeSlot').value,
            location: document.getElementById('serviceLocation').value,
            instructions: document.getElementById('specialInstructions').value.trim()
        },
        booking: {
            services: [...currentServices],
            serviceCharge: currentServices.reduce((sum, service) => sum + service.price, 0),
            installationFee: 500,
            total: currentServices.reduce((sum, service) => sum + service.price, 0) + 500,
            car: currentCar ? currentCar.name : 'Selected Car',
            carId: currentCarId
        }
    };
    
    // Send to backend
    fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
        showLoading(false);
        
        if (data.success) {
            // Store booking ID in success modal
            bookingData.booking.bookingId = data.booking_id;
            saveBooking(bookingData);
            
            setCurrentServices([]);
            updateServiceSummary();
            saveServicesToLocalStorage();
            
            closeScheduleModal();
            showSuccessModal(bookingData);
            document.getElementById('scheduleForm').reset();
        } else {
            showMessage('Booking failed: ' + data.error, 'error');
        }
    })
    .catch(error => {
        showLoading(false);
        console.error('Error:', error);
        showMessage('Network error. Please try again.', 'error');
    });
}

function generateBookingId() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `BOOK-${timestamp}-${random}`.toUpperCase();
}

function saveBooking(bookingData) {
    const existingBookings = JSON.parse(localStorage.getItem('serviceBookings') || '[]');
    existingBookings.push(bookingData);
    localStorage.setItem('serviceBookings', JSON.stringify(existingBookings));
}

function showSuccessModal(bookingData) {
    const modal = document.getElementById('successModal');
    const bookingDetails = document.getElementById('successBookingDetails');
    
    bookingDetails.innerHTML = `
        <p><strong>Booking ID:</strong> <span>${bookingData.booking.bookingId}</span></p>
        <p><strong>Booking Date:</strong> <span>${bookingData.booking.date}</span></p>
        <p><strong>Installation Date:</strong> <span>${bookingData.customer.date}</span></p>
        <p><strong>Time Slot:</strong> <span>${bookingData.customer.timeSlot}</span></p>
        <p><strong>Location:</strong> <span>${bookingData.customer.location}</span></p>
        <p><strong>Car:</strong> <span>${bookingData.booking.car}</span></p>
        <p><strong>Services:</strong> <span>${bookingData.booking.services.length}</span></p>
        <p><strong>Total Amount:</strong> <span>₹${bookingData.booking.total.toLocaleString()}</span></p>
        <p><strong>Customer:</strong> <span>${bookingData.customer.name}</span></p>
    `;
    
    modal.style.display = 'block';
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
}

function printBooking() {
    window.print();
}

// ==================== UTILITY FUNCTIONS ====================

function showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = show ? 'block' : 'none';
    }
    
    const submitBtn = document.querySelector('.confirm-booking-btn');
    if (submitBtn) {
        submitBtn.disabled = show;
        submitBtn.innerHTML = show ? 
            '<i class="fas fa-spinner fa-spin"></i> Processing...' : 
            '<i class="fas fa-calendar-check"></i> Confirm Booking - ₹<span id="confirmBookingTotal">0</span>';
    }
}

function showMessage(message, type = 'success') {
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 4000);
}

// Real-time form validation
document.querySelectorAll('#scheduleForm input, #scheduleForm select, #scheduleForm textarea').forEach(field => {
    field.addEventListener('input', function() {
        this.style.borderColor = '';
        const error = this.parentNode.querySelector('.field-error');
        if (error) error.remove();
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const scheduleModal = document.getElementById('scheduleModal');
    const successModal = document.getElementById('successModal');
    
    if (event.target === scheduleModal) closeScheduleModal();
    if (event.target === successModal) closeSuccessModal();
});

// Prevent modal close when clicking inside modal content
document.querySelectorAll('.modal-content').forEach(modalContent => {
    modalContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

// Local storage functions
function saveServicesToLocalStorage() {
    if (currentCarId) {
        localStorage.setItem('serviceBookingsData', JSON.stringify(serviceBookings));
    }
}

function loadServicesFromLocalStorage() {
    const savedServices = localStorage.getItem('serviceBookingsData');
    if (savedServices) {
        serviceBookings = JSON.parse(savedServices);
        
        const currentServices = getCurrentServices();
        
        currentServices.forEach(service => {
            const buttons = document.querySelectorAll('.select-service-btn');
            buttons.forEach(button => {
                const modItem = button.closest('.mod-item');
                if (modItem) {
                    const modName = modItem.querySelector('.mod-name').textContent;
                    if (modName === service.name) {
                        button.textContent = 'Selected ✓';
                        button.classList.add('selected');
                    }
                }
            });
        });
        
        updateServiceSummary();
    }
}

// ==================== SCROLL HIDE FUNCTIONALITY ====================

function initializeScrollHide() {
    let lastScrollTop = 0;
    const navElement = document.querySelector('.modifications-nav');
    const headerElement = document.querySelector('.modifications-header');
    const scrollHideThreshold = 100;

    if (!navElement || !headerElement) {
        console.log('Navigation elements not found');
        return;
    }

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Only hide if scrolled down significantly
        if (scrollTop > lastScrollTop && scrollTop > scrollHideThreshold) {
            navElement.classList.add('hidden');
            navElement.classList.remove('visible');
            headerElement.style.transform = 'translateY(-100%)';
        } else {
            navElement.classList.remove('hidden');
            navElement.classList.add('visible');
            headerElement.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    // Throttle scroll events
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Show nav when category filter is clicked
    document.querySelectorAll('.category-filter').forEach(button => {
        button.addEventListener('click', function() {
            navElement.classList.remove('hidden');
            navElement.classList.add('visible');
            headerElement.style.transform = 'translateY(0)';
        });
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSelectedCar();
    initializeModifications();
    initializeServicesForCurrentCar();
    updateServiceSummary();
    initializeSearchFilters();
    initializeScrollHide(); // ✅ YE LINE ADD KARNA HAI
});
// ==================== SERVICE PROVIDERS MARKETPLACE ====================

const serviceProviders = {
    "delhi": [
        {
            id: "speed-hub-delhi",
            name: "Speed Hub Performance",
            rating: 4.8,
            reviews: 127,
            specialties: ["ECU Tuning", "Performance Upgrades", "Turbo Installation"],
            experience: "8+ years",
            priceRange: "₹5,000 - ₹50,000",
            location: "Connaught Place, Delhi",
            contact: "+91-9876543210",
            services: ["ECU Remapping", "Performance Exhaust", "Cold Air Intake"]
        },
        {
            id: "elite-customs-delhi",
            name: "Elite Customs",
            rating: 4.6,
            reviews: 89,
            specialties: ["Body Kits", "Custom Paint", "Wheel Customization"],
            experience: "12+ years", 
            priceRange: "₹10,000 - ₹1,00,000",
            location: "South Extension, Delhi",
            contact: "+91-9876543211",
            services: ["Body Kit Installation", "Custom Painting", "Wheel Upgrades"]
        },
        {
            id: "dyno-tune-delhi",
            name: "Dyno Tune Experts",
            rating: 4.9,
            reviews: 203,
            specialties: ["Dyno Tuning", "Suspension Setup", "Brake Upgrades"],
            experience: "15+ years",
            priceRange: "₹8,000 - ₹80,000",
            location: "Karol Bagh, Delhi",
            contact: "+91-9876543212",
            services: ["Dyno Tuning", "Coilover Installation", "Brake System Upgrade"]
        }
    ],
    "mumbai": [
        {
            id: "mumbai-performance",
            name: "Mumbai Performance Garage",
            rating: 4.7,
            reviews: 156,
            specialties: ["Engine Tuning", "Exhaust Systems", "Suspension"],
            experience: "10+ years",
            priceRange: "₹6,000 - ₹60,000",
            location: "Bandra, Mumbai",
            contact: "+91-9876543213",
            services: ["ECU Tuning", "Exhaust Installation", "Suspension Setup"]
        },
        {
            id: "custom-creations-mumbai",
            name: "Custom Creations",
            rating: 4.5,
            reviews: 78,
            specialties: ["Interior Mods", "Audio Systems", "Lighting"],
            experience: "7+ years",
            priceRange: "₹4,000 - ₹40,000",
            location: "Andheri, Mumbai",
            contact: "+91-9876543214",
            services: ["Interior Upgrades", "Audio System Installation", "LED Lighting"]
        }
    ],
    "bangalore": [
        {
            id: "tech-tune-bangalore",
            name: "Tech Tune Bangalore",
            rating: 4.8,
            reviews: 189,
            specialties: ["ECU Remapping", "Performance Chips", "Software Tuning"],
            experience: "9+ years",
            priceRange: "₹7,000 - ₹70,000",
            location: "Koramangala, Bangalore",
            contact: "+91-9876543215",
            services: ["ECU Remapping", "Performance Chip Installation", "Software Optimization"]
        },
        {
            id: "bangalore-customs",
            name: "Bangalore Customs",
            rating: 4.4,
            reviews: 92,
            specialties: ["Body Styling", "Wheel Upgrades", "Exterior Mods"],
            experience: "6+ years",
            priceRange: "₹8,000 - ₹75,000",
            location: "Indiranagar, Bangalore",
            contact: "+91-9876543216",
            services: ["Body Styling", "Wheel Customization", "Exterior Accessories"]
        }
    ],
    "chennai": [
        {
            id: "madras-performance",
            name: "Madras Performance",
            rating: 4.6,
            reviews: 114,
            specialties: ["Engine Mods", "Transmission Tuning", "Performance Parts"],
            experience: "11+ years",
            priceRange: "₹5,500 - ₹55,000",
            location: "Anna Nagar, Chennai",
            contact: "+91-9876543217",
            services: ["Engine Modifications", "Transmission Tuning", "Performance Parts Installation"]
        }
    ]
};

// Service Provider Modal
function showServiceProviders(location) {
    const providers = serviceProviders[location] || [];
    
    if (providers.length === 0) {
        showMessage('No service providers found in this location', 'error');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'providersModal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2><i class="fas fa-store"></i> Service Providers in ${location.toUpperCase()}</h2>
                <span class="close-modal" onclick="closeProvidersModal()">&times;</span>
            </div>
            <div class="providers-body">
                <div class="providers-list">
                    ${providers.map(provider => `
                        <div class="provider-card" onclick="selectProvider('${provider.id}', '${location}')">
                            <div class="provider-header">
                                <h3>${provider.name}</h3>
                                <div class="provider-rating">
                                    <span class="rating">${provider.rating}</span>
                                    <i class="fas fa-star"></i>
                                    <span class="reviews">(${provider.reviews} reviews)</span>
                                </div>
                            </div>
                            <div class="provider-details">
                                <p><i class="fas fa-map-marker-alt"></i> ${provider.location}</p>
                                <p><i class="fas fa-tools"></i> ${provider.specialties.join(', ')}</p>
                                <p><i class="fas fa-clock"></i> ${provider.experience} experience</p>
                                <p><i class="fas fa-indian-rupee-sign"></i> ${provider.priceRange}</p>
                            </div>
                            <div class="provider-services">
                                <strong>Available Services:</strong>
                                <div class="service-tags">
                                    ${provider.services.map(service => `<span class="service-tag">${service}</span>`).join('')}
                                </div>
                            </div>
                            <div class="provider-contact">
                                <p><i class="fas fa-phone"></i> ${provider.contact}</p>
                            </div>
                            <button class="select-provider-btn">
                                <i class="fas fa-check"></i>
                                Select This Provider
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProvidersModal() {
    const modal = document.getElementById('providersModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        modal.remove();
    }
}

function selectProvider(providerId, location) {
    const providers = serviceProviders[location];
    const provider = providers.find(p => p.id === providerId);
    
    if (provider) {
        // Update the service location with selected provider
        const locationSelect = document.getElementById('serviceLocation');
        const option = locationSelect.querySelector(`option[value="${location}"]`);
        if (option) {
            option.textContent = `${location.toUpperCase()} - ${provider.name}`;
        }
        
        // Show confirmation
        showMessage(`Selected: ${provider.name}`, 'success');
        closeProvidersModal();
        
        // Store selected provider in booking data
        if (window.currentBookingData) {
            window.currentBookingData.provider = provider;
        }
    }
}

// Update the schedule form to show providers
function initializeServiceProviders() {
    const locationSelect = document.getElementById('serviceLocation');
    
    // Add click event to show providers when location is selected
    locationSelect.addEventListener('change', function() {
        if (this.value) {
            setTimeout(() => {
                showServiceProviders(this.value);
            }, 500);
        }
    });
}

// Update booking process to include provider
function updateBookingProcess() {
    const originalProcessOrder = window.processOrder;
    
    window.processOrder = function() {
        if (!validateScheduleForm()) {
            showMessage('Please fix the errors in the form', 'error');
            return;
        }
        
        const currentServices = getCurrentServices();
        const selectedLocation = document.getElementById('serviceLocation').value;
        const providers = serviceProviders[selectedLocation];
        
        if (!providers || providers.length === 0) {
            showMessage('Please select a service provider for this location', 'error');
            return;
        }
        
        // If no provider selected yet, show providers modal
        if (!window.currentBookingData || !window.currentBookingData.provider) {
            showServiceProviders(selectedLocation);
            return;
        }
        
        // Continue with original booking process
        originalProcessOrder.call(this);
    };
}

// Initialize providers system when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeServiceProviders();
    updateBookingProcess();
});

// Close provider modal when clicking outside
window.addEventListener('click', function(event) {
    const providersModal = document.getElementById('providersModal');
    if (event.target === providersModal) {
        closeProvidersModal();
    }
});

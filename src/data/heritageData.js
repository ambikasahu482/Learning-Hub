export const categories = ["All", "Monuments", "Temples", "Culture", "Festivals", "UNESCO"];

export const heritageData = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    category: "Monuments",
    location: "Agra, Uttar Pradesh",
    year: "1632–1653",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Taj_Mahal_%2C_Agra.jpg?width=1400",
    description: "An iconic white-marble monument of love and one of India's most recognized heritage sites.",
    history: "Commissioned by Mughal emperor Shah Jahan in memory of Mumtaz Mahal, the Taj Mahal represents the height of Mughal architecture.",
    architecture: "Its symmetrical plan combines a marble mausoleum, a grand dome, minarets, gardens and intricate pietra dura inlay.",
    facts: ["UNESCO World Heritage Site", "Located on the banks of the Yamuna", "Built primarily from white Makrana marble"],
    quizId: "taj"
  },
  {
    id: "red-fort",
    name: "Red Fort",
    category: "Monuments",
    location: "Delhi",
    year: "1639–1648",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Red_fort_Delhi.jpg?width=1400",
    description: "A magnificent Mughal fort complex and a major symbol of India's history and independence.",
    history: "Shah Jahan commissioned the fort as the palace fort of Shahjahanabad, the Mughal capital.",
    architecture: "The red sandstone complex contains monumental gates, audience halls, gardens and decorative marble work.",
    facts: ["UNESCO World Heritage Site", "Prime Minister addresses the nation here on Independence Day", "Originally called Qila-e-Mubarak"],
    quizId: "red-fort"
  },
  {
    id: "konark-sun-temple",
    name: "Konark Sun Temple",
    category: "Temples",
    location: "Konark, Odisha",
    year: "13th century",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/KONARK_SUN_Temple.jpg?width=1400",
    description: "A spectacular temple conceived as the chariot of the Sun God, Surya.",
    history: "Built in the 13th century under King Narasimhadeva I of the Eastern Ganga dynasty.",
    architecture: "Its stone wheels, horses and sculptural program turn the temple into an architectural representation of a celestial chariot.",
    facts: ["UNESCO World Heritage Site", "Famous for 24 carved stone wheels", "Located on Odisha's coast"],
    quizId: "konark"
  },
  {
    id: "khajuraho",
    name: "Khajuraho Group of Monuments",
    category: "Temples",
    location: "Madhya Pradesh",
    year: "950–1050",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Khajuraho_Temples%2C_MP.jpg?width=1400",
    description: "A celebrated group of temples known for intricate sculpture and extraordinary Nagara architecture.",
    history: "Constructed mainly by the Chandela dynasty between the 10th and 11th centuries.",
    architecture: "Tall shikharas, layered platforms and detailed carvings create a distinctive vertical silhouette.",
    facts: ["UNESCO World Heritage Site", "Famous for detailed stone sculpture", "Western group is the most visited"],
    quizId: "khajuraho"
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal",
    category: "Monuments",
    location: "Jaipur, Rajasthan",
    year: "1799",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/HawaMahal.jpg?width=1400",
    description: "The Palace of Winds, recognized for its honeycomb facade and hundreds of small windows.",
    history: "Built by Maharaja Sawai Pratap Singh and designed by Lal Chand Ustad.",
    architecture: "Its five-storey facade uses jharokhas and perforated screens to encourage natural ventilation.",
    facts: ["Iconic pink sandstone facade", "Part of Jaipur's historic cityscape", "Designed for royal women to observe street life"],
    quizId: "hawa"
  },
  {
    id: "golden-temple",
    name: "Golden Temple",
    category: "Temples",
    location: "Amritsar, Punjab",
    year: "16th–18th century",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Golden_Temple_in_Amritsar.jpg?width=1400",
    description: "A serene spiritual and architectural landmark surrounded by the sacred Amrit Sarovar.",
    history: "The shrine developed around the sacred pool associated with Guru Ram Das and was later enriched under Sikh Gurus.",
    architecture: "The sanctum combines gilded surfaces, marble, inlay and a distinctive central dome.",
    facts: ["Also known as Harmandir Sahib", "Open to visitors of all backgrounds", "Community kitchen serves free meals"],
    quizId: "golden"
  },
  {
    id: "diwali",
    name: "Diwali",
    category: "Festivals",
    location: "Across India",
    year: "Annual",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Diwali_Diyas.jpg?width=1400",
    description: "The festival of lights celebrated with lamps, prayers, family gatherings and cultural traditions.",
    history: "Diwali has layered regional traditions and is associated with themes of light, renewal and the triumph of good over evil.",
    architecture: "Homes, streets and temples become illuminated with diyas and decorative lighting.",
    facts: ["Celebrated across many Indian communities", "Different regions observe different traditions", "Often includes rangoli, sweets and lamps"],
    quizId: "diwali"
  },
  {
    id: "bharatanatyam",
    name: "Bharatanatyam",
    category: "Culture",
    location: "Tamil Nadu",
    year: "Classical tradition",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Bharatanatyam_dancer.jpg?width=1400",
    description: "A classical Indian dance tradition combining rhythm, expression, storytelling and precise movement.",
    history: "The modern performance tradition developed from older temple and court practices in South India.",
    architecture: "Its visual vocabulary includes geometric poses, expressive hand gestures and rhythmic footwork.",
    facts: ["One of India's major classical dance forms", "Strong connection to Tamil cultural history", "Uses mudras and abhinaya"],
    quizId: "bharatanatyam"
  }
];

export const getHeritageById = (id) => heritageData.find((item) => item.id === id);

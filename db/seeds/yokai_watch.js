
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("yokai_watch").del()
    .then(function () {
      // Inserts seed entries
      return knex("yokai_watch").insert([{
        "name": "Pandle",
        "class": "Brave",
        "rank": "E",
        "element": "Fire",
        "favoriteFood": "Rice Balls",
        "evolution": "Lv. 18 → Undy"
      },
      {
        "name": "Undy",
        "class": "Brave",
        "rank": "C",
        "element": "Fire",
        "favoriteFood": "Rice Balls",
        "evolution": null
      },
      {
        "name": "Tanbo",
        "class": "Brave",
        "rank": "B",
        "element": "Earth",
        "favoriteFood": "Rice Balls",
        "evolution": null
      },
      {
        "name": "Cuttanah",
        "class": "Brave",
        "rank": "E",
        "element": "Wind",
        "favoriteFood": "Juice",
        "evolution": "Lv. 20 → Cutta-nah-nah"
      },
      {
        "name": "Cutta-nah-nah",
        "class": "Brave",
        "rank": "C",
        "element": "Wind",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Slacka-slash",
        "class": "Brave",
        "rank": "B",
        "element": "Ice",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Mochismo",
        "class": "Brave",
        "rank": "D",
        "element": "Earth",
        "favoriteFood": "Rice Balls",
        "evolution": null
      },
      {
        "name": "Minochi",
        "class": "Brave",
        "rank": "D",
        "element": "Fire",
        "favoriteFood": "Rice Balls",
        "evolution": null
      },
      {
        "name": "Helmsman",
        "class": "Brave",
        "rank": "D",
        "element": "Thunder",
        "favoriteFood": "Vegetables",
        "evolution": "+ Armsman ↓ Reuknight"
      },
      {
        "name": "Reuknight",
        "class": "Brave",
        "rank": "A",
        "element": "Thunder",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Corptain",
        "class": "Brave",
        "rank": "S",
        "element": "Absorption",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Blazion",
        "class": "Brave",
        "rank": "D",
        "element": "Fire",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Quaken",
        "class": "Brave",
        "rank": "B",
        "element": "Earth",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Siro",
        "class": "Brave",
        "rank": "A",
        "element": "Thunder",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Chansin",
        "class": "Brave",
        "rank": "C",
        "element": "Fire",
        "favoriteFood": "Seafood",
        "evolution": "+ Legendary Blade ↓ Sheen + Cursed Blade ↓ Snee + Holy Blade ↓ Gleam"
      },
      {
        "name": "Sheen",
        "class": "Brave",
        "rank": "A",
        "element": "Wind",
        "favoriteFood": "Seafood",
        "evolution": null
      },
      {
        "name": "Snee",
        "class": "Brave",
        "rank": "A",
        "element": "Absorption",
        "favoriteFood": "Seafood",
        "evolution": null
      },
      {
        "name": "Gleam",
        "class": "Brave",
        "rank": "S",
        "element": "Thunder",
        "favoriteFood": "Seafood",
        "evolution": null
      },
      {
        "name": "Benkei",
        "class": "Brave",
        "rank": "B",
        "element": "Ice",
        "favoriteFood": "Chinese Food",
        "evolution": null
      },
      {
        "name": "B3-NK1",
        "class": "Brave",
        "rank": "B",
        "element": "Thunder",
        "favoriteFood": "Chinese Food",
        "evolution": null
      },
      {
        "name": "Sushiyama",
        "class": "Brave",
        "rank": "B",
        "element": "Ice",
        "favoriteFood": "Soba (YW1: Rice Balls)",
        "evolution": null
      },
      {
        "name": "Kapunki",
        "class": "Brave",
        "rank": "A",
        "element": "Fire",
        "favoriteFood": "Soba (YW1: Rice Balls)",
        "evolution": null
      },
      {
        "name": "Beetler",
        "class": "Brave",
        "rank": "B",
        "element": "Earth",
        "favoriteFood": "Vegetables",
        "evolution": "+ General's Soul ↓ Beetall"
      },
      {
        "name": "Beetall",
        "class": "Brave",
        "rank": "S",
        "element": "Ice",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Cruncha",
        "class": "Brave",
        "rank": "S",
        "element": "Ice",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Zerberker",
        "class": "Brave",
        "rank": "A",
        "element": "Fire",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Snartle",
        "class": "Brave",
        "rank": "S",
        "element": "Ice",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Snotsolong",
        "class": "Mysterious",
        "rank": "E",
        "element": "Water",
        "favoriteFood": "Seafood",
        "evolution": null
      },
      {
        "name": "Duchoo",
        "class": "Mysterious",
        "rank": "D",
        "element": "Ice",
        "favoriteFood": "Seafood",
        "evolution": null
      },
      {
        "name": "Wazzat",
        "class": "Mysterious",
        "rank": "E",
        "element": "Wind",
        "favoriteFood": "Cheap Sweets",
        "evolution": "Lv. 21 → Mezon Dowasure (YW2)"
      },
      {
        "name": "Dummkap",
        "class": "Mysterious",
        "rank": "E",
        "element": "Thunder",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "D'wanna",
        "class": "Mysterious",
        "rank": "E",
        "element": "Recovery",
        "favoriteFood": "Hamburgers",
        "evolution": "Lv. 15 → N'more"
      },
      {
        "name": "N'more",
        "class": "Mysterious",
        "rank": "C",
        "element": "Recovery",
        "favoriteFood": "Hamburgers",
        "evolution": null
      },
      {
        "name": "Q'wit",
        "class": "Mysterious",
        "rank": "C",
        "element": "Earth",
        "favoriteFood": "Hamburgers",
        "evolution": null
      },
      {
        "name": "Lafalotta",
        "class": "Mysterious",
        "rank": "D",
        "element": "Absorption",
        "favoriteFood": "Hamburgers",
        "evolution": null
      },
      {
        "name": "Blips",
        "class": "Mysterious",
        "rank": "C",
        "element": "Absorption",
        "favoriteFood": "Hamburgers",
        "evolution": null
      },
      {
        "name": "Tattletell",
        "class": "Mysterious",
        "rank": "D",
        "element": "Restoration",
        "favoriteFood": "Noodles",
        "evolution": "+ Lafalotta ↓ Tattlecast"
      },
      {
        "name": "Tattlecast",
        "class": "Mysterious",
        "rank": "B",
        "element": "Restoration",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Skranny",
        "class": "Mysterious",
        "rank": "B",
        "element": "Restoration",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Cupistol",
        "class": "Mysterious",
        "rank": "D",
        "element": "Wind",
        "favoriteFood": "Bread",
        "evolution": "+ Lovebuster ↓ Casanuva"
      },
      {
        "name": "Casanuva",
        "class": "Mysterious",
        "rank": "A",
        "element": "Wind",
        "favoriteFood": "Sweets",
        "evolution": null
      },
      {
        "name": "Casanono",
        "class": "Mysterious",
        "rank": "A",
        "element": "Fire",
        "favoriteFood": "Sweets",
        "evolution": null
      },
      {
        "name": "Signibble",
        "class": "Mysterious",
        "rank": "D",
        "element": "Thunder",
        "favoriteFood": "Snacks (YW1: Rice Balls)",
        "evolution": " + GHz Orb ↓ Signiton"
      },
      {
        "name": "Signiton",
        "class": "Mysterious",
        "rank": "A",
        "element": "Thunder",
        "favoriteFood": "Oden (YW1: Rice Balls)",
        "evolution": null
      },
      {
        "name": "Statiking",
        "class": "Mysterious",
        "rank": "S",
        "element": "Thunder",
        "favoriteFood": "Oden (YW1: Rice Balls)",
        "evolution": null
      },
      {
        "name": "Mirapo",
        "class": "Mysterious",
        "rank": "C",
        "element": "Absorption",
        "favoriteFood": "Chinese Food",
        "evolution": null
      },
      {
        "name": "Mircle",
        "class": "Mysterious",
        "rank": "A",
        "element": "Absorption",
        "favoriteFood": "Chinese Food",
        "evolution": null
      },
      {
        "name": "Illoo",
        "class": "Mysterious",
        "rank": "C",
        "element": "Water",
        "favoriteFood": "Chinese Food",
        "evolution": null
      },
      {
        "name": "Elloo",
        "class": "Mysterious",
        "rank": "C",
        "element": "Ice",
        "favoriteFood": "Chinese Food",
        "evolution": null
      },
      {
        "name": "Alloo",
        "class": "Mysterious",
        "rank": "B",
        "element": "Thunder",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Espy",
        "class": "Mysterious",
        "rank": "B",
        "element": "Earth",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Infour",
        "class": "Mysterious",
        "rank": "B",
        "element": "Absorption",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Tengu",
        "class": "Mysterious",
        "rank": "S",
        "element": "Wind",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Flengu",
        "class": "Mysterious",
        "rank": "S",
        "element": "Fire",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Kyubi",
        "class": "Mysterious",
        "rank": "S",
        "element": "Fire",
        "favoriteFood": "Oden (Honke and Shin'uchi only)",
        "evolution": null
      },
      {
        "name": "Frostail",
        "class": "Mysterious",
        "rank": "S",
        "element": "Ice",
        "favoriteFood": "Oden",
        "evolution": null
      },
      {
        "name": "Dulluma",
        "class": "Tough",
        "rank": "E",
        "element": "Earth",
        "favoriteFood": "Curry (YW1: Bread)",
        "evolution": "+ Mochismo ↓ Darumacho"
      },
      {
        "name": "Darumacho",
        "class": "Tough",
        "rank": "B",
        "element": "Earth",
        "favoriteFood": "Curry (YW1: Bread)",
        "evolution": null
      },
      {
        "name": "Goruma",
        "class": "Tough",
        "rank": "B",
        "element": "Wind",
        "favoriteFood": "Curry (YW1: Bread)",
        "evolution": null
      },
      {
        "name": "Noway",
        "class": "Tough",
        "rank": "E",
        "element": "Earth",
        "favoriteFood": "Noodles",
        "evolution": "Lv. 29 → Impass"
      },
      {
        "name": "Impass",
        "class": "Tough",
        "rank": "A",
        "element": "Earth",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Walldin",
        "class": "Tough",
        "rank": "A",
        "element": "Earth",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Armsman",
        "class": "Tough",
        "rank": "D",
        "element": "Ice",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Fidgephant",
        "class": "Tough",
        "rank": "D",
        "element": "Water",
        "favoriteFood": "Rice Balls",
        "evolution": "+ Touphant ↓ Gamanmosu (YW2)"
      },
      {
        "name": "Touphant",
        "class": "Tough",
        "rank": "D",
        "element": "Water",
        "favoriteFood": "Rice Balls",
        "evolution": null
      },
      {
        "name": "Blowkade",
        "class": "Tough",
        "rank": "D",
        "element": "Water",
        "favoriteFood": "Milk",
        "evolution": null
      },
      {
        "name": "Mad Mountain",
        "class": "Tough",
        "rank": "C",
        "element": "Ice",
        "favoriteFood": "Sushi (YW1: Rice Balls)",
        "evolution": null
      },
      {
        "name": "Lava Lord",
        "class": "Tough",
        "rank": "B",
        "element": "Thunder",
        "favoriteFood": "Sushi (YW1: Rice Balls)",
        "evolution": null
      },
      {
        "name": "Roughraff",
        "class": "Tough",
        "rank": "E",
        "element": "Earth",
        "favoriteFood": "Noodles",
        "evolution": "Lv. 26 → Badude"
      },
      {
        "name": "Badude",
        "class": "Tough",
        "rank": "B",
        "element": "Earth",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Bruff",
        "class": "Tough",
        "rank": "A",
        "element": "Earth",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Rhinoggin",
        "class": "Tough",
        "rank": "B",
        "element": "Earth",
        "favoriteFood": "Vegetables",
        "evolution": "+ Unbeatable Soul ↓ Rhinormous"
      },
      {
        "name": "Rhinormous",
        "class": "Tough",
        "rank": "S",
        "element": "Earth",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Hornaplenty",
        "class": "Tough",
        "rank": "S",
        "element": "Earth",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Castelius III",
        "class": "Tough",
        "rank": "C",
        "element": "Earth",
        "favoriteFood": "Milk",
        "evolution": "+ Castelius III ↓ Castelius II"
      },
      {
        "name": "Castelius II",
        "class": "Tough",
        "rank": "B",
        "element": "Ice",
        "favoriteFood": "Milk",
        "evolution": "+ Castelius II ↓ Castelius I"
      },
      {
        "name": "Castelius I",
        "class": "Tough",
        "rank": "A",
        "element": "Thunder",
        "favoriteFood": "Milk",
        "evolution": "+ Platinum Bar ↓ Castelius Max"
      },
      {
        "name": "Castelius Max",
        "class": "Tough",
        "rank": "S",
        "element": "Wind",
        "favoriteFood": "Milk",
        "evolution": null
      },
      {
        "name": "Robonyan",
        "class": "Tough",
        "rank": "A",
        "element": "Ice",
        "favoriteFood": "Chocobo (YW1: Seafood)",
        "evolution": null
      },
      {
        "name": "Goldenyan",
        "class": "Tough",
        "rank": "S",
        "element": "Thunder",
        "favoriteFood": "Chocobo (YW1: Seafood)",
        "evolution": null
      },
      {
        "name": "Dromp",
        "class": "Tough",
        "rank": "A",
        "element": "Earth",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Swosh",
        "class": "Tough",
        "rank": "S",
        "element": "Water",
        "favoriteFood": "Vegetables (Seafood?)",
        "evolution": null
      },
      {
        "name": "Dazzabel",
        "class": "Charming",
        "rank": "E",
        "element": "Fire",
        "favoriteFood": "Hamburgers",
        "evolution": "+ Cupistol ↓ Rattelle"
      },
      {
        "name": "Rattelle",
        "class": "Charming",
        "rank": "C",
        "element": "Fire",
        "favoriteFood": "Sweets",
        "evolution": null
      },
      {
        "name": "Skelebella",
        "class": "Charming",
        "rank": "B",
        "element": "Water",
        "favoriteFood": "Sweets",
        "evolution": null
      },
      {
        "name": "Cadin",
        "class": "Charming",
        "rank": "E",
        "element": "Wind",
        "favoriteFood": "Juice",
        "evolution": "Lv. 21 → Cadable"
      },
      {
        "name": "Cadable",
        "class": "Charming",
        "rank": "C",
        "element": "Wind",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Singcada",
        "class": "Charming",
        "rank": "B",
        "element": "Fire",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Pupsicle",
        "class": "Charming",
        "rank": "E",
        "element": "Ice",
        "favoriteFood": "Noodles",
        "evolution": "+ Snowstorm Cloak ↓ Chilhuahua"
      },
      {
        "name": "Chilhuahua",
        "class": "Charming",
        "rank": "A",
        "element": "Ice",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Swelterrier",
        "class": "Charming",
        "rank": "S",
        "element": "Fire",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Jibanyan",
        "class": "Charming",
        "rank": "D",
        "element": "Fire",
        "favoriteFood": "Chocobo (YW1: Seafood)",
        "evolution": "+ Coughkoff ↓ Thornyan + Roughraff ↓ Baddinyan"
      },
      {
        "name": "Thornyan",
        "class": "Charming",
        "rank": "B",
        "element": "Wind",
        "favoriteFood": "Chocobo (YW1: Seafood)",
        "evolution": null
      },
      {
        "name": "Baddinyan",
        "class": "Charming",
        "rank": "B",
        "element": "Fire",
        "favoriteFood": "Chocobo (YW1: Seafood)",
        "evolution": null
      },
      {
        "name": "Walkappa",
        "class": "Charming",
        "rank": "D",
        "element": "Water",
        "favoriteFood": "Sushi (YW1: Vegetables)",
        "evolution": "Lv. 32 → Appak"
      },
      {
        "name": "Appak",
        "class": "Charming",
        "rank": "A",
        "element": "Water",
        "favoriteFood": "Sushi (YW1: Vegetables)",
        "evolution": null
      },
      {
        "name": "Supyo",
        "class": "Charming",
        "rank": "A",
        "element": "Water",
        "favoriteFood": "Sushi (YW1: Vegetables)",
        "evolution": null
      },
      {
        "name": "Komasan",
        "class": "Charming",
        "rank": "D",
        "element": "Fire",
        "favoriteFood": "Milk",
        "evolution": "Lv. 35 → Komane"
      },
      {
        "name": "Komane",
        "class": "Charming",
        "rank": "A",
        "element": "Fire",
        "favoriteFood": "Milk",
        "evolution": null
      },
      {
        "name": "Komajiro",
        "class": "Charming",
        "rank": "D",
        "element": "Thunder",
        "favoriteFood": "Milk",
        "evolution": "Lv. 33 → Komiger"
      },
      {
        "name": "Komiger",
        "class": "Charming",
        "rank": "A",
        "element": "Thunder",
        "favoriteFood": "Milk",
        "evolution": null
      },
      {
        "name": "Baku",
        "class": "Charming",
        "rank": "D",
        "element": "Absorption",
        "favoriteFood": "Juice",
        "evolution": "Lv. 29 → Obakusama (YW2)"
      },
      {
        "name": "Whapir",
        "class": "Charming",
        "rank": "C",
        "element": "Absorption",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Shmoopie",
        "class": "Charming",
        "rank": "C",
        "element": "Restoration",
        "favoriteFood": "Hamburgers",
        "evolution": "+ Love Scepter ↓ Pinkipoo"
      },
      {
        "name": "Pinkipoo",
        "class": "Charming",
        "rank": "B",
        "element": "Restoration",
        "favoriteFood": "Hamburgers",
        "evolution": null
      },
      {
        "name": "Pookivil",
        "class": "Charming",
        "rank": "A",
        "element": "Absorption",
        "favoriteFood": "Hamburgers",
        "evolution": null
      },
      {
        "name": "Frostina",
        "class": "Charming",
        "rank": "B",
        "element": "Ice",
        "favoriteFood": "Cheap Sweets",
        "evolution": "+ Glacial Clip ↓ Blizzaria"
      },
      {
        "name": "Blizzaria",
        "class": "Charming",
        "rank": "S",
        "element": "Ice",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Damona",
        "class": "Charming",
        "rank": "S",
        "element": "Ice",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Wiglin",
        "class": "Heartful",
        "rank": "E",
        "element": "Restoration",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Steppa",
        "class": "Heartful",
        "rank": "E",
        "element": "Restoration",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Rhyth",
        "class": "Heartful",
        "rank": "D",
        "element": "Restoration",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Wantson",
        "class": "Heartful",
        "rank": "E",
        "element": "Thunder",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Grubsnitch",
        "class": "Heartful",
        "rank": "D",
        "element": "Earth",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Hungramps",
        "class": "Heartful",
        "rank": "E",
        "element": "Restoration",
        "favoriteFood": "Rice Balls",
        "evolution": "Lv. 22 → Hungogre"
      },
      {
        "name": "Hungogre",
        "class": "Heartful",
        "rank": "B",
        "element": "Absorption",
        "favoriteFood": "Rice Balls",
        "evolution": null
      },
      {
        "name": "Grainpa",
        "class": "Heartful",
        "rank": "B",
        "element": "Restoration",
        "favoriteFood": "Rice Balls",
        "evolution": null
      },
      {
        "name": "Lodo",
        "class": "Heartful",
        "rank": "D",
        "element": "Wind",
        "favoriteFood": "Milk",
        "evolution": "Lv. 28 → Okanenaidaa (YW2)"
      },
      {
        "name": "Chippa",
        "class": "Heartful",
        "rank": "C",
        "element": "Water",
        "favoriteFood": "Milk",
        "evolution": null
      },
      {
        "name": "Enerfly",
        "class": "Heartful",
        "rank": "D",
        "element": "Restoration",
        "favoriteFood": "Juice",
        "evolution": "+ Enefly ↓ Betterfly"
      },
      {
        "name": "Enefly",
        "class": "Heartful",
        "rank": "D",
        "element": "Absorption",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Betterfly",
        "class": "Heartful",
        "rank": "A",
        "element": "Restoration",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Peppillon",
        "class": "Heartful",
        "rank": "S",
        "element": "Restoration",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Happierre",
        "class": "Heartful",
        "rank": "C",
        "element": "Restoration",
        "favoriteFood": "Bread",
        "evolution": "Dismarelda + ↓ Reversa"
      },
      {
        "name": "Reversa",
        "class": "Heartful",
        "rank": "A",
        "element": "Restoration",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Reversette",
        "class": "Heartful",
        "rank": "A",
        "element": "Wind",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Ol' Saint Trick",
        "class": "Heartful",
        "rank": "B",
        "element": "Restoration",
        "favoriteFood": "Milk",
        "evolution": null
      },
      {
        "name": "Ol' Fortune",
        "class": "Heartful",
        "rank": "B",
        "element": "Thunder",
        "favoriteFood": "Curry",
        "evolution": null
      },
      {
        "name": "Rollen",
        "class": "Heartful",
        "rank": "B",
        "element": "Water",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Dubbles",
        "class": "Heartful",
        "rank": "A",
        "element": "Water",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Papa Bolt",
        "class": "Heartful",
        "rank": "A",
        "element": "Thunder",
        "favoriteFood": "Sushi (YW1: Meat)",
        "evolution": null
      },
      {
        "name": "Uncle Infinite",
        "class": "Heartful",
        "rank": "S",
        "element": "Thunder",
        "favoriteFood": "Sushi (YW1: Meat)",
        "evolution": null
      },
      {
        "name": "Mama Aura",
        "class": "Heartful",
        "rank": "A",
        "element": "Restoration",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Auntie Heart",
        "class": "Heartful",
        "rank": "S",
        "element": "Restoration",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Leadoni",
        "class": "Shady",
        "rank": "E",
        "element": "Ice",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Mynimo",
        "class": "Shady",
        "rank": "D",
        "element": "Absorption",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Ake",
        "class": "Shady",
        "rank": "E",
        "element": "Earth",
        "favoriteFood": "Cheap Sweets",
        "evolution": "+ Buff Weight ↓ Payn"
      },
      {
        "name": "Payn",
        "class": "Shady",
        "rank": "C",
        "element": "Earth",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Agon",
        "class": "Shady",
        "rank": "B",
        "element": "Earth",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Negatibuzz",
        "class": "Shady",
        "rank": "E",
        "element": "Absorption",
        "favoriteFood": "Juice",
        "evolution": "Lv. 17 → Moskevil"
      },
      {
        "name": "Moskevil",
        "class": "Shady",
        "rank": "C",
        "element": "Absorption",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Scritchy",
        "class": "Shady",
        "rank": "A",
        "element": "Thunder",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Dimmy",
        "class": "Shady",
        "rank": "E",
        "element": "Wind",
        "favoriteFood": "Rice Balls",
        "evolution": "Lv. 24 → Blandon"
      },
      {
        "name": "Blandon",
        "class": "Shady",
        "rank": "B",
        "element": "Wind",
        "favoriteFood": "Rice Balls",
        "evolution": null
      },
      {
        "name": "Nul",
        "class": "Shady",
        "rank": "A",
        "element": "Wind",
        "favoriteFood": "Rice Balls",
        "evolution": null
      },
      {
        "name": "Hidabat",
        "class": "Shady",
        "rank": "D",
        "element": "Wind",
        "favoriteFood": "Meat",
        "evolution": "+ Tengloom ↓ Abodabat"
      },
      {
        "name": "Abodabat",
        "class": "Shady",
        "rank": "A",
        "element": "Wind",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Belfree",
        "class": "Shady",
        "rank": "A",
        "element": "Wind",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Suspicioni",
        "class": "Shady",
        "rank": "D",
        "element": "Water",
        "favoriteFood": "Chinese Food",
        "evolution": null
      },
      {
        "name": "Tantroni",
        "class": "Shady",
        "rank": "D",
        "element": "Fire",
        "favoriteFood": "Chinese Food",
        "evolution": null
      },
      {
        "name": "Contrarioni",
        "class": "Shady",
        "rank": "B",
        "element": "Thunder",
        "favoriteFood": "Chinese Food",
        "evolution": null
      },
      {
        "name": "Tengloom",
        "class": "Shady",
        "rank": "C",
        "element": "Wind",
        "favoriteFood": "Bread (YW1: Vegetables)",
        "evolution": null
      },
      {
        "name": "Nird",
        "class": "Shady",
        "rank": "B",
        "element": "Wind",
        "favoriteFood": "Bread (YW1: Vegetables)",
        "evolution": null
      },
      {
        "name": "Negasus",
        "class": "Shady",
        "rank": "A",
        "element": "Wind",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Neighfarious",
        "class": "Shady",
        "rank": "A",
        "element": "Absorption",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Timidevil",
        "class": "Shady",
        "rank": "A",
        "element": "Fire",
        "favoriteFood": "Noodles",
        "evolution": "+ Shard of Evil ↓ Beelzebold"
      },
      {
        "name": "Beelzebold",
        "class": "Shady",
        "rank": "S",
        "element": "Fire",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Count Cavity",
        "class": "Shady",
        "rank": "S",
        "element": "Fire",
        "favoriteFood": "Noodles",
        "evolution": null
      },
      {
        "name": "Greesel",
        "class": "Shady",
        "rank": "S",
        "element": "Fire",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Awevil",
        "class": "Shady",
        "rank": "S",
        "element": "Water",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Coughkoff",
        "class": "Eerie",
        "rank": "E",
        "element": "Water",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Hurchin",
        "class": "Eerie",
        "rank": "D",
        "element": "Ice",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Peckpocket",
        "class": "Eerie",
        "rank": "E",
        "element": "Absorption",
        "favoriteFood": "Hamburgers",
        "evolution": "Lv. 23 → Bunbundori (YW2)"
      },
      {
        "name": "Rockabelly",
        "class": "Eerie",
        "rank": "D",
        "element": "Absorption",
        "favoriteFood": "Hamburgers",
        "evolution": null
      },
      {
        "name": "Buhu",
        "class": "Eerie",
        "rank": "E",
        "element": "Wind",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Flumpy",
        "class": "Eerie",
        "rank": "C",
        "element": "Wind",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Skreek",
        "class": "Eerie",
        "rank": "A",
        "element": "Wind",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Manjimutt",
        "class": "Eerie",
        "rank": "E",
        "element": "Fire",
        "favoriteFood": "Curry (YW1: Chinese Food)",
        "evolution": "+ Manjimutt ↓ Multimutt"
      },
      {
        "name": "Multimutt",
        "class": "Eerie",
        "rank": "B",
        "element": "Fire",
        "favoriteFood": "Curry (YW1: Chinese Food)",
        "evolution": null
      },
      {
        "name": "Sir Berus",
        "class": "Eerie",
        "rank": "A",
        "element": "Earth",
        "favoriteFood": "Curry (YW1: Chinese Food)",
        "evolution": null
      },
      {
        "name": "Droplette",
        "class": "Eerie",
        "rank": "E",
        "element": "Water",
        "favoriteFood": "Juice",
        "evolution": "Lv. 25 → Drizzle"
      },
      {
        "name": "Drizzle",
        "class": "Eerie",
        "rank": "B",
        "element": "Water",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Slush",
        "class": "Eerie",
        "rank": "E",
        "element": "Ice",
        "favoriteFood": "Juice",
        "evolution": "Lv. 25 → Alhail"
      },
      {
        "name": "Alhail",
        "class": "Eerie",
        "rank": "B",
        "element": "Ice",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Gush",
        "class": "Eerie",
        "rank": "D",
        "element": "Fire",
        "favoriteFood": "Juice",
        "evolution": null
      },
      {
        "name": "Chatalie",
        "class": "Eerie",
        "rank": "D",
        "element": "Thunder",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Nagatha",
        "class": "Eerie",
        "rank": "C",
        "element": "Absorption",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Dismarelda",
        "class": "Eerie",
        "rank": "D",
        "element": "Earth",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Cheeksqueek",
        "class": "Eerie",
        "rank": "C",
        "element": "Ice",
        "favoriteFood": "Milk",
        "evolution": null
      },
      {
        "name": "Cuttincheez",
        "class": "Eerie",
        "rank": "A",
        "element": "Ice",
        "favoriteFood": "Milk",
        "evolution": null
      },
      {
        "name": "Compunzer",
        "class": "Eerie",
        "rank": "A",
        "element": "Absorption",
        "favoriteFood": "Snacks",
        "evolution": null
      },
      {
        "name": "Lamedian",
        "class": "Eerie",
        "rank": "A",
        "element": "Absorption",
        "favoriteFood": "Snacks",
        "evolution": null
      },
      {
        "name": "Grumples",
        "class": "Eerie",
        "rank": "B",
        "element": "Absorption",
        "favoriteFood": "Milk",
        "evolution": "+ Ageless Powder ↓ Everfore"
      },
      {
        "name": "Everfore",
        "class": "Eerie",
        "rank": "S",
        "element": "Absorption",
        "favoriteFood": "Milk",
        "evolution": null
      },
      {
        "name": "Eterna",
        "class": "Eerie",
        "rank": "S",
        "element": "Absorption",
        "favoriteFood": "Milk",
        "evolution": null
      },
      {
        "name": "Insomni",
        "class": "Eerie",
        "rank": "A",
        "element": "Ice",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Sandi",
        "class": "Eerie",
        "rank": "S",
        "element": "Absorption",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Noko",
        "class": "Slippery",
        "rank": "E",
        "element": "Earth",
        "favoriteFood": "Hamburgers",
        "evolution": "+ Drop of Joy ↓ Bloominoko"
      },
      {
        "name": "Bloominoko",
        "class": "Slippery",
        "rank": "A",
        "element": "Earth",
        "favoriteFood": "Hamburgers",
        "evolution": null
      },
      {
        "name": "Pandanoko",
        "class": "Slippery",
        "rank": "A",
        "element": "Ice",
        "favoriteFood": "Hamburgers",
        "evolution": null
      },
      {
        "name": "Heheheel",
        "class": "Slippery",
        "rank": "D",
        "element": "Restoration",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Croonger",
        "class": "Slippery",
        "rank": "C",
        "element": "Absorption",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Urnaconda",
        "class": "Slippery",
        "rank": "C",
        "element": "Restoration",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Fishpicable",
        "class": "Slippery",
        "rank": "D",
        "element": "Thunder",
        "favoriteFood": "Meat",
        "evolution": "Lv. 27 → Rageon"
      },
      {
        "name": "Rageon",
        "class": "Slippery",
        "rank": "B",
        "element": "Thunder",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Tunatic",
        "class": "Slippery",
        "rank": "A",
        "element": "Fire",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Draggie",
        "class": "Slippery",
        "rank": "D",
        "element": "Earth",
        "favoriteFood": "Chinese Food",
        "evolution": "+ Dragon Orb ↓ Dragon Lord"
      },
      {
        "name": "Dragon Lord",
        "class": "Slippery",
        "rank": "S",
        "element": "Earth",
        "favoriteFood": "Chinese Food",
        "evolution": null
      },
      {
        "name": "Azure Dragon",
        "class": "Slippery",
        "rank": "S",
        "element": "Water",
        "favoriteFood": "Chinese Food",
        "evolution": null
      },
      {
        "name": "Daiz",
        "class": "Slippery",
        "rank": "C",
        "element": "Absorption",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Confuze",
        "class": "Slippery",
        "rank": "B",
        "element": "Absorption",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Chummer",
        "class": "Slippery",
        "rank": "C",
        "element": "Water",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Shrook",
        "class": "Slippery",
        "rank": "B",
        "element": "Water",
        "favoriteFood": "Vegetables",
        "evolution": null
      },
      {
        "name": "Spenp",
        "class": "Slippery",
        "rank": "C",
        "element": "Wind",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Almi",
        "class": "Slippery",
        "rank": "B",
        "element": "Water",
        "favoriteFood": "Bread",
        "evolution": null
      },
      {
        "name": "Babblong",
        "class": "Slippery",
        "rank": "C",
        "element": "Restoration",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Bananose",
        "class": "Slippery",
        "rank": "A",
        "element": "Water",
        "favoriteFood": "Cheap Sweets",
        "evolution": null
      },
      {
        "name": "Copperled",
        "class": "Slippery",
        "rank": "B",
        "element": "Fire",
        "favoriteFood": "Seafood",
        "evolution": null
      },
      {
        "name": "Cynake",
        "class": "Slippery",
        "rank": "B",
        "element": "Water",
        "favoriteFood": "Seafood",
        "evolution": null
      },
      {
        "name": "Slitheref",
        "class": "Slippery",
        "rank": "A",
        "element": "Thunder",
        "favoriteFood": "Seafood",
        "evolution": null
      },
      {
        "name": "Venoct",
        "class": "Slippery",
        "rank": "S",
        "element": "Thunder",
        "favoriteFood": "Seafood",
        "evolution": null
      },
      {
        "name": "Shadow Venoct",
        "class": "Slippery",
        "rank": "S",
        "element": "Restoration",
        "favoriteFood": "Seafood",
        "evolution": null
      },
      {
        "name": "Shogunyan",
        "class": "Brave",
        "rank": "S",
        "element": "Wind",
        "favoriteFood": "Seafood",
        "evolution": null
      },
      {
        "name": "Komashura",
        "class": "Mysterious",
        "rank": "S",
        "element": "Fire",
        "favoriteFood": "Milk",
        "evolution": null
      },
      {
        "name": "Dandoodle",
        "class": "Eerie",
        "rank": "S",
        "element": "Restoration",
        "favoriteFood": "Chinese Food",
        "evolution": null
      },
      {
        "name": "Elder Bloom",
        "class": "Heartful",
        "rank": "S",
        "element": "Restoration",
        "favoriteFood": "Rice Balls",
        "evolution": null
      },
      {
        "name": "Gilgaros",
        "class": "Tough",
        "rank": "S",
        "element": "Thunder",
        "favoriteFood": "Meat",
        "evolution": null
      },
      {
        "name": "Sapphinyan",
        "class": "Charming",
        "rank": "A",
        "element": "Water",
        "favoriteFood": "Chocobo (YW1: Seafood)",
        "evolution": null
      },
      {
        "name": "Emenyan",
        "class": "Charming",
        "rank": "A",
        "element": "Restoration",
        "favoriteFood": "Chocobo (YW1: Seafood)",
        "evolution": null
      },
      {
        "name": "Rubinyan",
        "class": "Charming",
        "rank": "A",
        "element": "Fire",
        "favoriteFood": "Chocobo (YW1: Seafood)",
        "evolution": null
      },
      {
        "name": "Topanyan",
        "class": "Charming",
        "rank": "A",
        "element": "Thunder",
        "favoriteFood": "Chocobo (YW1: Seafood)",
        "evolution": null
      },
      {
        "name": "Dianyan",
        "class": "Charming",
        "rank": "A",
        "element": "Ice",
        "favoriteFood": "Chocobo (YW1: Seafood)",
        "evolution": null
      }
    ]);
    });
};

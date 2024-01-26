import roseOne from './Assets/roseOne.jpg';
import roseTwo from './Assets/roseTwo.jpg';
import roseThree from './Assets/roseThree.jpg';
import peonyOne from './Assets/peonyOne.jpg';
import peonyTwo from './Assets/peonyTwo.jpg';
import peonyThree from './Assets/peonyThree.jpg';
import liliesOne from './Assets/liliesOne.jpg';
import liliesTwo from './Assets/liliesTwo.jpg';
import liliesThree from './Assets/liliesThree.jpg';
import tulipsOne from './Assets/tulipsOne.jpg';
import tulipsTwo from './Assets/tulipsTwo.jpg';
import tulipsThree from './Assets/tulipsThree.jpg';
import gladiolaOne from './Assets/gladiolaOne.jpg';
import gladiolaTwo from './Assets/gladiolaTwo.jpg';
import mixOne from './Assets/mixOne.jpg';
import mixTwo from './Assets/mixTwo.jpg';
import mixThree from './Assets/mixThree.jpg';
import mixFour from './Assets/mixFour.jpg';

export const data = [
    {
        id: 1,
        name: "Pastel roses bouquet",
        searchTerm: ["roses"],
        title: "pastel-roses-bouquet",
        price: "30.99€",
        image: roseOne,
        description: `Give your day a chance to blossom. This bouquet, resembling a painting of soft pastel shades, embodies gentleness and beauty. The variety of roses infuses the bouquet with a multifaceted character, while the green decorations lend it freshness and naturalness.`,
        features: ['Floral Symphony: Each rose variety is a note in this melody of colors, creating a unique bouquet.', 'Pastel Shades: Gentle and warm rose colors add sophistication and subtlety.', 'Green Branches: The freshness of green branches embodies natural inspiration and life energy.', 'Gift with Soul: This bouquet is an embodiment of feelings and attention, a perfect gift for those you love.']
    },

    {
        id: 2,
        name: "Mono roses bouquet",
        searchTerm: ["roses"],
        title: "mono-rose",
        price: "32.99€",
        image: roseTwo,
        description: 'Create a moment of timeless beauty and elegance with our bouquet of 25 White Long Stem Roses. This refined bouquet symbolizes purity and tenderness, framed by the splendor of 25 long and beautiful white roses. Each rose is not just a flower but a delicate expression of your deepest feelings.',
        features: ['25 Long Stem Roses: Each rose in this bouquet is long and exquisite, giving it a special luxury and charm.', 'Pure White Elegance: The white color of the roses symbolizes purity, innocence, and harmony, making this bouquet an ideal choice for special occasions.', 'Elegance and Style: Presenting these long white roses in a mono bouquet adds elegance and style, making the gift truly impressive.', 'Perfect Gift: This bouquet makes a splendid gift for anniversaries, weddings, romantic moments, or as a gesture of care and love.']
    },

    {
        id: 3,
        name: "White decorated bouquet in basket",
        searchTerm: ["roses", "lilies"],
        title: "white-mix",
        price: "35.99€" ,
        image: roseThree,
        description: 'In this bouquet, each element is like a note in a melody, creating a magical chord of natural beauty. White roses, delicately arranged in a woven basket, are complemented by green twigs and graceful white accents, adding lightness and sophistication to the composition.',
        features: ['Innocent White Roses: Elegant white roses embody purity and beauty.', 'Woven Basket: Carefully crafted woven basket gives the bouquet a natural and cozy character.', 'Green Twigs: Fresh green twigs add a touch of lively naturalness and harmony to the composition.', 'Airy White Accents: Light white decorative elements create an atmosphere of lightness and unique sophistication.', 'Inspiring Gift: This bouquet will be a unique expression of your admiration, a gift filled with tenderness and warmth.']
    },

    {
        id: 4,
        name: "Light pink peony bouquet",
        searchTerm: ["peony"],
        title: "pink-peony",
        price: "34.99€",
        image: peonyOne,
        description: 'Give free rein to your emotions with this exquisite bouquet where light-pink peonies bloom, creating an atmosphere of incredible beauty and tranquility. This bouquet is not just flowers; it is an expression of magic and pure elegance.',
        features: ['Light-Pink Peonies: The delicate shades of peonies give the bouquet a romantic and warm touch, creating a visual symphony of beauty.', 'Exquisite Fragrance: Peonies not only captivate with the splendor of their petals but also fill the space around you with an incredible fragrance.', 'Elegant Packaging: The bouquet is stylishly arranged and packaged to emphasize its special value and give it a finished look.', 'Perfect Gift for Special Moments: This bouquet will be an ideal gift for romantic encounters, birthdays, or any other special occasion in your life.']
    },

    {
        id: 5,
        name: "Big coral peony bouquet",
        searchTerm: ["peony"],
        title: "coral-peony",
        price: "35.99€",
        image: peonyTwo,
        description: 'An enchanting bouquet of 25 lush coral peonies is not only a feast for the eyes but also a source of delight. The vibrant coral hues bring not only beauty but also the energy of summer warmth into your home.',
        features: ['25 Coral Peonies: This bouquet includes an entire collection of lush peonies, creating a visual festival of flowers.', 'Bright and Energetic Color: The coral shade adds an exciting brightness to the bouquet, reminiscent of warm and sunny days.', 'Lushness and Elegance: Peonies, with their abundance of petals, lend the bouquet lushness and elegance, creating an impression of luxury.', 'Striking Gift: This bouquet will be an amazing gift for those who appreciate beauty and carry the joy of live flowers.']
    },

    {
        id: 6,
        name: "Big peony mix",
        searchTerm: ["peony"],
        title: "big-peony-mix",
        price: "38.99€",
        image: peonyThree,
        description: 'Infuse your day with gentleness and sophistication with this delightful mixed bouquet of 25 peonies in light pink and pink hues. This bouquet embodies elegance and allure, creating an atmosphere of exquisite beauty.',
        features: ['25 Peonies in Two Shades: The combination of light pink and pink peonies creates a harmonious and stylish mix, emphasizing the diversity of colors.', 'Tenderness and Romance: The light pink shade adds incredible tenderness to the bouquet, while the pink introduces notes of romance and passion.', 'Lushness and Abundance of Petals: The abundance of peony petals gives the bouquet a lush and luxurious appearance.', 'Beautiful Gift for Any Occasion: This mixed bouquet is perfect as a gift for birthdays, weddings, anniversaries, or simply to delight your loved ones.']
    },

    {
        id: 7,
        name: "Cute pink lilies bouquet",
        searchTerm: ["lilies"],
        title: "pink-lilies",
        price: "33.99€",
        image: liliesOne,
        description: 'Bring tenderness and sophistication to your day with this magnificent bouquet of 15 light-pink lilies. These lush and incredibly beautiful flowers create an atmosphere of refined beauty and captivating harmony.',
        features: ['15 Light-Pink Lilies: The abundance of lilies in light-pink shades brings incredible freshness and delicacy to the bouquet.', 'Gentle Pink Shade: Light-pink lilies symbolize tenderness, purity, and joy, creating an atmosphere of enchantment.', 'Exquisite Fragrance: In addition to their beauty, lilies also fill the space with their subtle fragrance, bringing incredible pleasure to the home.', 'Elegant Packaging: The bouquet is stylishly arranged to emphasize its special value and sophistication.']
    },

    {
        id: 8,
        name: "Big orange lilies bouquet",
        searchTerm: ["lilies"],
        title: "orange-lilies",
        price: "34.99€",
        image: liliesTwo,
        description: 'Infuse your day with a rainbow of emotions with this amazing bouquet of 21 orange lilies. The bright and vibrant shade of orange adds energy and positivity to the bouquet, creating an impression of warmth and happiness.',
        features: ['21 Orange Lilies: The abundance of lilies in a bright orange color brings dynamism and exciting beauty to the bouquet.', 'Energetic Hue: Orange symbolizes joy, warmth, and positive emotions, creating an atmosphere of liveliness around the bouquet.', 'Exquisite Fragrance: Lilies not only captivate with their appearance but also fill the space with their refined and pleasant fragrance.', 'Striking Gift: This bouquet will be a splendid gift for celebratory events, birthdays, or simply to bring joy to your loved ones.']
    },

    {
        id: 9,
        name: "Big bouquet of white lilies",
        searchTerm: ["lilies"],
        title: "white-lilies",
        price: "37.99€",
        image: liliesThree,
        description: 'This bouquet of 27 white lilies is a wonderful combination of refinement and simplicity. The pure white lilies, embodying delicacy and purity, create an atmosphere of refined elegance.',
        features: ['27 White Lilies: The abundance of white lilies brings grandeur and elegance to the bouquet.', 'Purity and Delicacy: The pristine white color of the lilies symbolizes purity, innocence, and harmony, creating an atmosphere of tranquility around the bouquet.', 'Exquisite Fragrance: Lilies not only visually captivate but also fill the space with their refined and pleasant fragrance.', 'Elegant Gift: This bouquet will be a beautiful gift for those who appreciate classical elegance and simplicity.']
    },

    {
        id: 10,
        name: "Bouquet of white tulips",
        searchTerm: ["tulips"],
        title: "white-tulips",
        price: "29.99€",
        image: tulipsOne,
        description: 'Create an incredibly cozy and fresh corner with this beautiful bouquet of 15 white tulips. Simple yet elegant, tulips bring not only beauty but also the gentleness of spring days into your home.',
        features: ['15 White Tulips: The abundance of white tulips creates an impression of purity and simplicity in the bouquet.', 'Lightness and Freshness: Snow-white tulips symbolize the beginning of spring, bringing lightness and freshness into the home.', 'Simplicity and Elegance: Tulips, with their simplicity and at the same time sophistication, create harmony in the bouquet.', 'Perfect Gift for Any Occasion: This bouquet is suitable for both joyous occasions and everyday delights.']
    },

    {
        id: 11,
        name: "Pink tulips bouquet",
        searchTerm: ["tulips"],
        title: "pink-tulips",
        price: "28.99€",
        image: tulipsTwo,
        description: 'Bring the magic of spring with this refined bouquet of 11 pink tulips. These exquisite flowers not only bring incredible beauty into your home but also the tenderness of the pink hue.',
        features: ['11 Pink Tulips: The abundance of pink tulips creates an impression of delicacy and spring freshness in the bouquet.', 'Romantic Shade: The pink color of the tulips symbolizes love, tenderness, and romance.', 'Simplicity and Beauty: Tulips, with their simplicity and grace, create a harmonious bouquet.', 'Perfect Gift for Expressing Feelings: This bouquet will be an ideal way to express your emotions and bring joy to your loved ones.']
    }, 

    {
        id: 12,
        name: "Big bouquet of multi-pastel-color tulips",
        searchTerm: ["tulips"],
        title: "multi-tulips",
        price: "32.99€",
        image: tulipsThree,
        description: 'Bring the feeling of spring into your day with this enchanting bouquet of 25 tulips in various pastel shades. Each flower in this composition is like a little chord of tenderness, creating a wonderful harmony of colors together.',
        features: ['25 Tulips in Various Pastel Shades: The abundance of flowers in pastel hues brings lightness and delightful beauty to the bouquet.', 'Soft and Gentle Tones: Pastel colors give the impression of tenderness, warmth, and tranquility.', 'Beautiful Harmony: Each tulip, combining with others, creates a charming harmony of colors.', 'Perfect Gift for Any Occasion: This bouquet is suitable for celebratory moments or just to bring joy and color into everyday life.']
    },

    {
        id: 13,
        name: "Bouquet of orange gladioluses",
        searchTerm: ["gladiolus"],
        title: "orange-gladiolus",
        price: "38.99€",
        image: gladiolaOne,
        description: 'Brighten your day with this delightful bouquet of 7 orange gladioli. The vivid color of the gladioli fills the space around you with warmth and energy, creating an impression of lush and elegant beauty.',
        features: ['7 Orange Gladioli: The abundance of gladioli brings brightness and energy to the bouquet.', 'Passionate Orange Color: The orange color of the gladioli symbolizes energy, passion, and warmth.', 'Height and Gracefulness: Gladioli, with their graceful stems, create a striking and majestic bouquet.', 'Beautiful Gift for Special Occasions: This bouquet will be an ideal gift for celebratory events or simply to bring joy to your loved ones.']
    },

    {
        id: 14,
        name: "Pink gladioluses bouquet",
        searchTerm: ["gladiolus"],
        title: "pink-gladiolus",
        price: "38.99€",
        image: gladiolaTwo,
        description: 'Be enchanted by this bouquet of 9 pink gladioli, bringing not only lush beauty but also tenderness in each graceful bud. The pink color of the gladioli creates an impression of refined romance and passionate elegance.',
        features: ['9 Pink Gladioli: The abundance of gladioli in pink tones creates an impression of tenderness and refined beauty.', 'Romantic Pink Color: The pink hue of the gladioli symbolizes love, tenderness, and romance.', 'Height and Gracefulness: Gladioli, with their elegant stems, give the bouquet a majestic and elegant appearance.', 'Perfect Gift for Special Moments: This bouquet is suitable for special occasions or simply to bring joy to your loved ones.']
    },

    {
        id: 15,
        name: "Big mix bouquet",
        searchTerm: ["gladiolus", "tulips", "roses"],
        title: "big-mix",
        price: "38.99€",
        image: mixOne,
        description: 'Create a wonderful corner of nature in your home with this mixed bouquet, featuring orange roses, tulips, and gladioli, complemented by various herbs. This composition not only brings the joy of flowers but also inspires with the scent of fresh herbs, creating an atmosphere of natural beauty.',
        features: ['Orange Roses, Tulips, and Gladioli: The abundance of flowers in shades of orange creates a bright and captivating palette.', 'Various Herbs: Decorating the bouquet with various herbs adds notes of natural charm and aroma.', 'Harmony of Tones: The combination of orange hues with green herbs creates a harmonious and natural look.', 'Beautiful Gift for Nature Lovers: This bouquet emphasizes a love for nature and brings freshness to everyday life.']
    },

    {
        id: 16,
        name: "Big mixed bouquet",
        searchTerm: ["tulips", "roses"],
        title: "mixed-bouquet",
        price: "39.99€",
        image: mixTwo,
        description: 'Immerse yourself in the magic of colors and forms with this beautiful bouquet, featuring pink lilies, red and yellow roses, yellow tulips, as well as unique decorations and mini lilies. This bouquet will be a unique expression of your admiration and love for the beauty of nature.',
        features: ['Pink Lilies: Incredible elegance and tenderness in each bud.', 'Red and Yellow Roses: A vibrant combination of colors brings passion and joy to the bouquet.', 'Yellow Tulips: The lightness and freshness of spring in each tulip bud.', 'Mini Lilies: Small lilies add unique charm and harmony.', 'Unique Decoration: Additional decorative elements give the bouquet a special character.', 'Exquisite Gift for Special Moments: This bouquet will emphasize your feelings and bring joy to your loved ones.']
    },

    {
        id: 17,
        name: "Cute mixed bouquet",
        searchTerm: ["gladiolus", "lilies"],
        title: "cute-mix",
        price: "40.99€",
        image: mixThree,
        description: 'Marvel at the beauty of nature with this delightful bouquet featuring pink and white lilies, pink gladioli, adorned with sunflowers and green accents. This composition will be a symbol of freshness and brightness in your home.',
        features: ['Pink and White Lilies: Gentle shades of lilies give the bouquet an elegant and romantic touch.', 'Pink Gladioli: Bright gladioli add passion and energy to the bouquet.', 'Sunflower Decor: Sunflowers bring a summer atmosphere and brightness to the composition.', 'Green Accents: Green elements create harmony with nature.', 'Exquisite Gift for Various Occasions: This bouquet is suitable for congratulations, celebrations, or simply to lift the spirits.'] 
    },

    {
        id: 18,
        name: "Pastel mixed bouquet",
        searchTerm: ["peony", "tulips", "roses"],
        title: "pastel-mix",
        price: "42.99€",
        image: mixFour,
        description: 'Be enchanted by this exquisite bouquet featuring light pink tulips, white and pink roses, pink peonies, adorned with green branches. This composition will be a tender expression of your love and admiration.',
        features: ['Light Pink Tulips: Soft shades of tulips give the bouquet an incredible tenderness.', 'White and Pink Roses: The classic combination of roses adds romance and sophistication.', 'Pink Peonies: Peonies bring lushness and delightful beauty to the bouquet.', 'Green Branch Decor: Green branches add freshness and naturalness to the composition.', 'Exquisite Gift for Romantic Moments: This bouquet is suitable for birthdays, weddings, anniversaries, or simply to create a romantic atmosphere.']
    }
]
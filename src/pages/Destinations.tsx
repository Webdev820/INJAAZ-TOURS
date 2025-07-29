import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Destinations = () => {
  const { language } = useLanguage();

  const destinations = [
    {
      name: language === 'en' ? 'Maasai Mara' : 'ماساي مارا',
      description: language === 'en' ? 'The Great Migration & Big Five Safari' : 'الهجرة الكبرى والحيوانات الخمسة الكبار',
      detailedDescription: language === 'en' ? 'Home to the Great Migration and the Big Five, an unforgettable safari experience' : 'موطن الهجرة الكبرى والحيوانات الخمسة الكبار، تجربة سفاري لا تُنسى',
      image: 'https://images.pexels.com/photos/39353/lion-lioness-cat-big-cat-39353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/destinations/maasai-mara',
      duration: language === 'en' ? '3-5 Days' : '3-5 أيام',
      bestTime: language === 'en' ? 'July - October' : 'يوليو - أكتوبر',
      highlights: [language === 'en' ? 'The Great Migration' : 'الهجرة الكبرى', language === 'en' ? 'Lions and Leopards' : 'الأسود والنمور', language === 'en' ? 'Maasai Culture' : 'ثقافة الماساي']
    },
    {
      name: language === 'en' ? 'Amboseli' : 'أمبوسيلي',
      description: language === 'en' ? 'Stunning views of Mount Kilimanjaro with elephant herds' : 'مناظر خلابة لجبل كيليمنجارو مع قطعان الأفيال',
      detailedDescription: language === 'en' ? 'Stunning views of Mount Kilimanjaro with elephant herds in their natural habitat' : 'مناظر خلابة لجبل كيليمنجارو مع قطعان الأفيال في بيئتها الطبيعية',
      image: 'https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/destinations/amboseli',
      duration: language === 'en' ? '2-3 Days' : '2-3 أيام',
      bestTime: language === 'en' ? 'June - October' : 'يونيو - أكتوبر',
      highlights: [language === 'en' ? 'Mount Kilimanjaro' : 'جبل كيليمنجارو', language === 'en' ? 'Elephant Herds' : 'قطعان الأفيال', language === 'en' ? 'Landscapes' : 'المناظر الطبيعية']
    },
    {
      name: language === 'en' ? 'Tsavo' : 'تسافو',
      description: language === 'en' ? 'Kenya\'s largest national park with incredible biodiversity' : 'أكبر حديقة وطنية في كينيا مع تنوع بيولوجي مذهل',
      detailedDescription: language === 'en' ? 'A vast area of African wilderness with diverse wildlife and stunning landscapes' : 'منطقة شاسعة من البرية الأفريقية مع حياة برية متنوعة ومناظر طبيعية رائعة',
      image: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/destinations/tsavo',
      duration: language === 'en' ? '3-4 Days' : '3-4 أيام',
      bestTime: language === 'en' ? 'June - September' : 'يونيو - سبتمبر',
      highlights: [language === 'en' ? 'Red Elephants' : 'الأفيال الحمراء', language === 'en' ? 'Biodiversity' : 'التنوع البيولوجي', language === 'en' ? 'Wild Landscapes' : 'المناظر البرية']
    },
    {
      name: language === 'en' ? 'Diani Beach' : 'شاطئ ديان',
      description: language === 'en' ? 'Tropical beaches with turquoise waters and white sands' : 'شواطئ استوائية بمياه فيروزية ورمال بيضاء ناعمة',
      detailedDescription: language === 'en' ? 'Tropical beaches with turquoise waters and soft white sands on the Indian Ocean' : 'شواطئ استوائية بمياه فيروزية ورمال بيضاء ناعمة على المحيط الهندي',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/destinations/diani-beach',
      duration: language === 'en' ? '4-7 Days' : '4-7 أيام',
      bestTime: language === 'en' ? 'October - March' : 'أكتوبر - مارس',
      highlights: [language === 'en' ? 'White Beaches' : 'الشواطئ البيضاء', language === 'en' ? 'Water Sports' : 'الرياضات المائية', language === 'en' ? 'Relaxation' : 'الاسترخاء']
    },
    {
      name: language === 'en' ? 'Lake Nakuru' : 'بحيرة ناكورو',
      description: language === 'en' ? 'An alkaline lake famous for its beautiful pink flamingos' : 'بحيرة قلوية مشهورة بطيور النحام الوردية الجميلة',
      detailedDescription: language === 'en' ? 'A stunning nature reserve with thousands of migratory birds and diverse wildlife' : 'محمية طبيعية مذهلة تضم آلاف الطيور المهاجرة وحيوانات برية متنوعة',
      image: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/destinations/lake-nakuru',
      duration: language === 'en' ? '1-2 Days' : '1-2 يوم',
      bestTime: language === 'en' ? 'January - March' : 'يناير - مارس',
      highlights: [language === 'en' ? 'Flamingos' : 'طيور النحام', language === 'en' ? 'Rhinos' : 'وحيد القرن', language === 'en' ? 'Lake Views' : 'المناظر البحيرية']
    },
    {
      name: language === 'en' ? 'Mount Kenya' : 'جبل كينيا',
      description: language === 'en' ? 'The highest mountain in Kenya and the second highest peak in Africa' : 'أعلى جبل في كينيا وثاني أعلى قمة في أفريقيا',
      detailedDescription: language === 'en' ? 'An exciting climbing experience with stunning landscapes and unique flora' : 'تجربة تسلق مثيرة مع مناظر طبيعية خلابة ونباتات فريدة',
      image: 'https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/destinations/mount-kenya',
      duration: language === 'en' ? '5-7 Days' : '5-7 أيام',
      bestTime: language === 'en' ? 'January - February' : 'يناير - فبراير',
      highlights: [language === 'en' ? 'Climbing & Hiking' : 'التسلق والمشي', language === 'en' ? 'Alpine Plants' : 'النباتات الألبية', language === 'en' ? 'Mountain Views' : 'المناظر الجبلية']
    }
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-800 mb-4 sm:mb-6">
            {language === 'en' ? 'Destinations' : 'الوجهات'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {language === 'en' ? 'Explore the most beautiful destinations in Kenya, from African safaris to tropical beaches' : 'استكشف أجمل الوجهات في كينيا من السفاري الأفريقي إلى الشواطئ الاستوائية'}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {destinations.map((destination, index) => (
            <Link
              key={index}
              to={destination.link}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-yellow-300 text-base sm:text-lg">
                    {destination.description}
                  </p>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {destination.detailedDescription}
                </p>
                
                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 ml-2 text-yellow-500" />
                    <span className="mr-2">{language === 'en' ? 'Duration:' : 'المدة:'}</span>
                    <span className="font-medium">{destination.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 ml-2 text-yellow-500" />
                    <span className="mr-2">{language === 'en' ? 'Best Time:' : 'أفضل وقت:'}</span>
                    <span className="font-medium">{destination.bestTime}</span>
                  </div>
                </div>
                
                {/* Highlights */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-green-800 mb-2 sm:mb-3 text-sm sm:text-base">{language === 'en' ? 'Highlights:' : 'أبرز المعالم:'}</h4>
                  <div className="space-y-2">
                    {destination.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full ml-3 mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-3 sm:pt-4 border-t border-gray-200">
                  <span className="text-yellow-600 font-semibold group-hover:text-green-600 transition-colors">
                    {language === 'en' ? 'Discover More →' : 'اكتشف المزيد ←'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 sm:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {language === 'en' ? 'Ready for your next adventure?' : 'جاهز لمغامرتك القادمة؟'}
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-green-100">
            {language === 'en' ? 'Let us help you plan your dream trip to Kenya' : 'دعنا نساعدك في التخطيط لرحلة أحلامك إلى كينيا'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              {language === 'en' ? 'Request a Quote' : 'طلب عرض سعر'}
            </Link>
            <Link
              to="/tours"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-green-700 transition-all"
            >
              {language === 'en' ? 'View Tours' : 'عرض الجولات'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
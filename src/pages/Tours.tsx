import { Link } from 'react-router-dom';
import { Camera, Star, Users, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Tours = () => {
  const { language } = useLanguage();

  const tourCategories = [
    {
      title: language === 'en' ? 'Safari Tours' : 'جولات السفاري',
      description: language === 'en' ? 'Explore the African wilderness with traditional safari tours' : 'استكشف البرية الأفريقية مع جولات السفاري التقليدية',
      image: 'https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/tours/safari',
      icon: Camera,
      features: [
        language === 'en' ? 'Wildlife viewing' : 'مشاهدة الحيوانات البرية',
        language === 'en' ? 'Expert local guides' : 'مرشدون محليون خبراء',
        language === 'en' ? 'Traditional meals' : 'وجبات تقليدية'
      ]
    },
    {
      title: language === 'en' ? 'Luxury Safaris' : 'السفاري الفاخرة',
      description: language === 'en' ? 'An unforgettable luxury experience with the best services' : 'تجربة فاخرة لا تُنسى مع أفضل الخدمات',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/tours/luxury',
      icon: Star,
      features: [
        language === 'en' ? '5-star accommodation' : 'إقامة 5 نجوم',
        language === 'en' ? 'Private flights' : 'رحلات طيران خاصة',
        language === 'en' ? 'Personalized service' : 'خدمة شخصية'
      ]
    },
    {
      title: language === 'en' ? 'Budget Safaris' : 'السفاري الاقتصادية',
      description: language === 'en' ? 'Great adventures at affordable prices for everyone' : 'مغامرات رائعة بأسعار مناسبة للجميع',
      image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/tours/budget',
      icon: Users,
      features: [
        language === 'en' ? 'Competitive prices' : 'أسعار تنافسية',
        language === 'en' ? 'Small groups' : 'مجموعات صغيرة',
        language === 'en' ? 'Flexible programs' : 'برامج مرنة'
      ]
    },
    {
      title: language === 'en' ? 'Custom Packages' : 'باقات مخصصة',
      description: language === 'en' ? 'Programs tailored to your needs' : 'برامج مصممة خصيصاً حسب احتياجاتك',
      image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/tours/custom',
      icon: Clock,
      features: [
        language === 'en' ? 'Custom planning' : 'تخطيط مخصص',
        language === 'en' ? 'Flexible dates' : 'مرونة في المواعيد',
        language === 'en' ? 'Various options' : 'خيارات متنوعة'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-800 mb-4 sm:mb-6">
            {language === 'en' ? 'Tours' : 'الجولات'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {language === 'en'
              ? 'Discover a wide range of tours designed to suit all tastes and budgets'
              : 'اكتشف تشكيلة واسعة من الجولات السياحية المصممة لتناسب جميع الأذواق والميزانيات'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {tourCategories.map((tour, index) => (
            <Link
              key={index}
              to={tour.link}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <tour.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4 group-hover:text-yellow-600 transition-colors">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {tour.description}
                </p>
                
                <div className="space-y-2">
                  {tour.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full ml-3 mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200">
                  <span className="text-yellow-600 font-semibold group-hover:text-green-600 transition-colors">
                    {language === 'en' ? 'Explore More →' : 'استكشف المزيد ←'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 sm:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {language === 'en' ? 'Can\'t find what you\'re looking for?' : 'لا تجد ما تبحث عنه؟'}
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-green-100">
            {language === 'en'
              ? 'Let us help you design the perfect trip for your needs'
              : 'دعنا نساعدك في تصميم الرحلة المثالية حسب احتياجاتك'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              {language === 'en' ? 'Request a Quote' : 'طلب عرض سعر'}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-green-700 transition-all"
            >
              {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
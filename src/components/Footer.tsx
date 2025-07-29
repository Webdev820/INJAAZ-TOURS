import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Apple as WhatsApp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <img src="/IMG-20250721-WA0001.jpg" alt="Injaaz Logo" className="h-12 sm:h-16 w-auto" />
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              {language === 'en' ? 'Injaaz is a leading tour agency in Kenya, specializing in luxury and customized travel experiences for Arab travelers. We believe that tourism should be a transformative experience that combines natural beauty, local culture, and authentic hospitality.' : 'إنجاز هي وكالة سياحية رائدة في كينيا، متخصصة في تقديم تجارب سياحية فاخرة ومخصصة للمسافرين العرب. نحن نؤمن بأن السياحة يجب أن تكون تجربة تحويلية تجمع بين الجمال الطبيعي والثقافة المحلية والضيافة الأصيلة.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{language === 'en' ? 'Tours' : 'الجولات'}</h4>
            <ul className="space-y-2 text-sm">
              <li key="/tours/safari"><Link to="/tours/safari" className="text-green-100 hover:text-yellow-400 transition-colors">{language === 'en' ? 'Safari Tours' : 'جولات السفاري'}</Link></li>
              <li key="/tours/luxury"><Link to="/tours/luxury" className="text-green-100 hover:text-yellow-400 transition-colors">{language === 'en' ? 'Luxury Safaris' : 'السفاري الفاخرة'}</Link></li>
              <li key="/tours/budget"><Link to="/tours/budget" className="text-green-100 hover:text-yellow-400 transition-colors">{language === 'en' ? 'Budget Safaris' : 'السفاري الاقتصادية'}</Link></li>
              <li key="/tours/custom"><Link to="/tours/custom" className="text-green-100 hover:text-yellow-400 transition-colors">{language === 'en' ? 'Custom Packages' : 'باقات مخصصة'}</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{language === 'en' ? 'Destinations' : 'الوجهات'}</h4>
            <ul className="space-y-2 text-sm">
              <li key="/destinations/maasai-mara"><Link to="/destinations/maasai-mara" className="text-green-100 hover:text-yellow-400 transition-colors">{language === 'en' ? 'Maasai Mara' : 'ماساي مارا'}</Link></li>
              <li key="/destinations/amboseli"><Link to="/destinations/amboseli" className="text-green-100 hover:text-yellow-400 transition-colors">{language === 'en' ? 'Amboseli' : 'أمبوسيلي'}</Link></li>
              <li key="/destinations/tsavo"><Link to="/destinations/tsavo" className="text-green-100 hover:text-yellow-400 transition-colors">{language === 'en' ? 'Tsavo' : 'تسافو'}</Link></li>
              <li key="/destinations/diani-beach"><Link to="/destinations/diani-beach" className="text-green-100 hover:text-yellow-400 transition-colors">{language === 'en' ? 'Diani Beach' : 'شاطئ ديان'}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{language === 'en' ? 'Contact Us' : 'اتصل بنا'}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span>+254 712 346 678</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span>info@injaazagency.com</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span>{language === 'en' ? 'Nairobi, Kenya' : 'نيروبي، كينيا'}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4 sm:mt-6">
              <h5 className="font-medium mb-2 sm:mb-3 text-sm">{language === 'en' ? 'Follow Us' : 'تابعنا'}</h5>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="https://wa.me/254712346678" target="_blank" rel="noopener noreferrer" className="text-green-100 hover:text-yellow-400 transition-colors">
                  <WhatsApp className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-green-700">
          <h4 className="text-base sm:text-lg font-semibold mb-4 text-center">{language === 'en' ? 'Payment Methods' : 'طرق الدفع'}</h4>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-8 mb-4 sm:mb-6">
            <div className="bg-white rounded-lg p-2 sm:p-3 shadow-lg">
              <span className="text-blue-600 font-bold text-xs sm:text-sm">VISA</span>
            </div>
            <div className="bg-white rounded-lg p-2 sm:p-3 shadow-lg">
              <span className="text-red-600 font-bold text-xs sm:text-sm">MasterCard</span>
            </div>
            <div className="bg-white rounded-lg p-2 sm:p-3 shadow-lg">
              <span className="text-blue-500 font-bold text-xs sm:text-sm">PayPal</span>
            </div>
            <div className="bg-white rounded-lg p-2 sm:p-3 shadow-lg">
              <span className="text-gray-700 font-bold text-xs sm:text-sm">Apple Pay</span>
            </div>
            <div className="bg-green-600 rounded-lg p-2 sm:p-3 shadow-lg">
              <span className="text-white font-bold text-xs sm:text-sm">M-PESA</span>
            </div>
          </div>
          <p className="text-center text-green-200 text-xs sm:text-sm">{language === 'en' ? 'Secure & Guaranteed Payment' : 'دفع آمن ومضمون'}</p>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-green-700 text-center">
          <p className="text-green-100 text-xs sm:text-sm">
            © 2025 Injaaz Tours. {language === 'en' ? 'All Rights Reserved' : 'جميع الحقوق محفوظة'}
          </p>
        </div>
      </div>
    </footer>
  );
};
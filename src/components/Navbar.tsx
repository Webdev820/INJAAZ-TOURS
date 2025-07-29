import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToursOpen, setIsToursOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="bg-gradient-to-br from-green-900 to-green-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/IMG-20250721-WA0001.jpg" alt="Injaaz Logo" className="h-12 sm:h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 rtl:space-x-reverse">
            <Link to="/" className="text-white hover:text-gray-200 font-medium transition-colors">
              {language === 'en' ? 'Home' : 'الرئيسية'}
            </Link>
            
            {/* Tours Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-gray-200 font-medium transition-colors">
                {language === 'en' ? 'Tours' : 'الجولات'} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-gradient-to-br from-green-900 to-green-800 rounded-lg shadow-lg py-2 border opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-95 transform transition-all duration-300 ease-in-out z-50">
                <Link to="/tours/safari" className="block px-4 py-2 text-white hover:bg-green-800">
                  {language === 'en' ? 'Safari Tours' : 'جولات السفاري'}
                </Link>
                <Link to="/tours/luxury" className="block px-4 py-2 text-white hover:bg-green-800">
                  {language === 'en' ? 'Luxury Safaris' : 'السفاري الفاخرة'}
                </Link>
                <Link to="/tours/budget" className="block px-4 py-2 text-white hover:bg-green-800">
                  {language === 'en' ? 'Budget Safaris' : 'السفاري الاقتصادية'}
                </Link>
                <Link to="/tours/custom" className="block px-4 py-2 text-white hover:bg-green-800">
                  {language === 'en' ? 'Custom Packages' : 'باقات مخصصة'}
                </Link>
              </div>
            </div>

            {/* Destinations Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-gray-200 font-medium transition-colors">
                {language === 'en' ? 'Destinations' : 'الوجهات'} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-gradient-to-br from-green-900 to-green-800 rounded-lg shadow-lg py-2 border opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-95 transform transition-all duration-300 ease-in-out z-50">
                <Link to="/destinations/maasai-mara" className="block px-4 py-2 text-white hover:bg-green-800">
                  {language === 'en' ? 'Maasai Mara' : 'ماساي مارا'}
                </Link>
                <Link to="/destinations/amboseli" className="block px-4 py-2 text-white hover:bg-green-800">
                  {language === 'en' ? 'Amboseli' : 'أمبوسيلي'}
                </Link>
                <Link to="/destinations/tsavo" className="block px-4 py-2 text-white hover:bg-green-800">
                  {language === 'en' ? 'Tsavo' : 'تسافو'}
                </Link>
                <Link to="/destinations/diani-beach" className="block px-4 py-2 text-white hover:bg-green-800">
                  {language === 'en' ? 'Diani Beach' : 'شاطئ ديان'}
                </Link>
              </div>
            </div>

            <Link to="/about" className="text-white hover:text-gray-200 font-medium transition-colors">
              {language === 'en' ? 'About Us' : 'من نحن'}
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200 font-medium transition-colors">
              {language === 'en' ? 'Contact' : 'اتصل بنا'}
            </Link>
            <Link to="/request-quote" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 xl:px-6 py-2 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105 text-sm xl:text-base">
              {language === 'en' ? 'Request Quote' : 'طلب عرض سعر'}
            </Link>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-white/20 text-white px-2 xl:px-3 py-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs xl:text-sm font-medium">{language === 'ar' ? 'EN' : 'العربية'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center bg-white/20 text-white px-2 py-1 rounded-full text-xs sm:text-sm"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs ml-1 hidden sm:inline">{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-gradient-to-br from-green-900 to-green-800 border-t border-green-700">
              <Link to="/" className="block px-3 py-3 text-white hover:bg-green-800 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                {language === 'en' ? 'Home' : 'الرئيسية'}
              </Link>

              {/* Tours Mobile Dropdown */}
              <div>
                <button onClick={() => { setIsToursOpen(!isToursOpen); setIsDestinationsOpen(false); }} className="w-full flex justify-between items-center px-3 py-3 text-white hover:bg-green-800 rounded-md transition-colors">
                  {language === 'en' ? 'Tours' : 'الجولات'}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isToursOpen ? 'rotate-180' : ''}`} />
                </button>
                {isToursOpen && (
                  <div className="pl-4 border-l-2 border-green-700 ml-3 space-y-1">
                    <Link to="/tours/safari" className="block px-4 py-2 text-white hover:bg-green-800 rounded-md transition-colors text-sm" onClick={() => setIsOpen(false)}>{language === 'en' ? 'Safari Tours' : 'جولات السفاري'}</Link>
                    <Link to="/tours/luxury" className="block px-4 py-2 text-white hover:bg-green-800 rounded-md transition-colors text-sm" onClick={() => setIsOpen(false)}>{language === 'en' ? 'Luxury Safaris' : 'السفاري الفاخرة'}</Link>
                    <Link to="/tours/budget" className="block px-4 py-2 text-white hover:bg-green-800 rounded-md transition-colors text-sm" onClick={() => setIsOpen(false)}>{language === 'en' ? 'Budget Safaris' : 'السفاري الاقتصادية'}</Link>
                    <Link to="/tours/custom" className="block px-4 py-2 text-white hover:bg-green-800 rounded-md transition-colors text-sm" onClick={() => setIsOpen(false)}>{language === 'en' ? 'Custom Packages' : 'باقات مخصصة'}</Link>
                  </div>
                )}
              </div>

              {/* Destinations Mobile Dropdown */}
              <div>
                <button onClick={() => { setIsDestinationsOpen(!isDestinationsOpen); setIsToursOpen(false); }} className="w-full flex justify-between items-center px-3 py-3 text-white hover:bg-green-800 rounded-md transition-colors">
                  {language === 'en' ? 'Destinations' : 'الوجهات'}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDestinationsOpen && (
                  <div className="pl-4 border-l-2 border-green-700 ml-3 space-y-1">
                    <Link to="/destinations/maasai-mara" className="block px-4 py-2 text-white hover:bg-green-800 rounded-md transition-colors text-sm" onClick={() => setIsOpen(false)}>{language === 'en' ? 'Maasai Mara' : 'ماساي مارا'}</Link>
                    <Link to="/destinations/amboseli" className="block px-4 py-2 text-white hover:bg-green-800 rounded-md transition-colors text-sm" onClick={() => setIsOpen(false)}>{language === 'en' ? 'Amboseli' : 'أمبوسيلي'}</Link>
                    <Link to="/destinations/tsavo" className="block px-4 py-2 text-white hover:bg-green-800 rounded-md transition-colors text-sm" onClick={() => setIsOpen(false)}>{language === 'en' ? 'Tsavo' : 'تسافو'}</Link>
                    <Link to="/destinations/diani-beach" className="block px-4 py-2 text-white hover:bg-green-800 rounded-md transition-colors text-sm" onClick={() => setIsOpen(false)}>{language === 'en' ? 'Diani Beach' : 'شاطئ ديان'}</Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="block px-3 py-3 text-white hover:bg-green-800 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                {language === 'en' ? 'About Us' : 'من نحن'}
              </Link>
              <Link to="/contact" className="block px-3 py-3 text-white hover:bg-green-800 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                {language === 'en' ? 'Contact' : 'اتصل بنا'}
              </Link>
              <Link to="/request-quote" className="block mx-3 mt-4 px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg text-center font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all" onClick={() => setIsOpen(false)}>
                {language === 'en' ? 'Request Quote' : 'طلب عرض سعر'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
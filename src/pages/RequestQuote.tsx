import React, { useState } from 'react';
import { Send, Users, Calendar, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const RequestQuote = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupSize: '',
    budget: '',
    startDate: '',
    endDate: '',
    destinations: [],
    interests: [],
    accommodation: '',
    specialRequests: '',
    nationality: '',
    experience: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (checkbox.checked) {
        setFormData({
          ...formData,
          [name]: [...(formData[name as keyof typeof formData] as string[]), value]
        });
      } else {
        setFormData({
          ...formData,
          [name]: (formData[name as keyof typeof formData] as string[]).filter(item => item !== value)
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    alert(language === 'en' ? 'Quote request submitted successfully! We will contact you within 24 hours.' : 'تم إرسال طلب العرض بنجاح! سنتواصل معك خلال 24 ساعة.');
  };

  const destinations = [
    { id: 'maasai-mara', name: language === 'en' ? 'Maasai Mara' : 'ماساي مارا' },
    { id: 'amboseli', name: language === 'en' ? 'Amboseli' : 'أمبوسيلي' },
    { id: 'tsavo', name: language === 'en' ? 'Tsavo' : 'تسافو' },
    { id: 'diani-beach', name: language === 'en' ? 'Diani Beach' : 'شاطئ ديان' },
    { id: 'lake-nakuru', name: language === 'en' ? 'Lake Nakuru' : 'بحيرة ناكورو' },
    { id: 'mount-kenya', name: language === 'en' ? 'Mount Kenya' : 'جبل كينيا' }
  ];

  const interests = [
    { id: 'wildlife', name: language === 'en' ? 'Wildlife viewing' : 'مشاهدة الحياة البرية' },
    { id: 'photography', name: language === 'en' ? 'Photography' : 'التصوير الفوتوغرافي' },
    { id: 'culture', name: language === 'en' ? 'Heritage and Culture' : 'التراث والثقافة' },
    { id: 'adventure', name: language === 'en' ? 'Adventure activities' : 'الأنشطة المغامرة' },
    { id: 'beach', name: language === 'en' ? 'Beaches and Relaxation' : 'الشواطئ والاسترخاء' },
    { id: 'hiking', name: language === 'en' ? 'Hiking and Climbing' : 'المشي والتسلق' }
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />
      <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            {language === 'en' ? 'Request a Quote' : 'طلب عرض سعر'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed px-4">
            {language === 'en'
              ? 'Fill out the form below and we will design a customized tour program that suits your needs and budget'
              : 'املأ النموذج أدناه وسنقوم بتصميم برنامج سياحي مخصص يناسب احتياجاتك وميزانيتك'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
          {/* Personal Information */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 sm:mb-6 flex items-center">
              <Users className="h-6 w-6 ml-3 text-yellow-600" />
              {language === 'en' ? 'Personal Information' : 'المعلومات الشخصية'}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Name' : 'الاسم'} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder={language === 'en' ? 'Your Full Name' : 'اسمك الكامل'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Email Address' : 'البريد الإلكتروني'} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Phone Number' : 'رقم الهاتف'} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="+966 50 123 4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Nationality' : 'الجنسية'}
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder={language === 'en' ? 'Saudi Arabia, UAE, etc.' : 'السعودية، الإمارات، إلخ...'}
                />
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 sm:mb-6 flex items-center">
              <Calendar className="h-6 w-6 ml-3 text-yellow-600" />
              {language === 'en' ? 'Trip Details' : 'تفاصيل الرحلة'}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Group Size' : 'حجم المجموعة'} *
                </label>
                <select
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="">{language === 'en' ? 'Select Group Size' : 'اختر حجم المجموعة'}</option>
                  <option value="1">{language === 'en' ? '1 Person' : 'شخص واحد'}</option>
                  <option value="2">{language === 'en' ? '2 People' : 'شخصان'}</option>
                  <option value="3-4">{language === 'en' ? '3-4 People' : '3-4 أشخاص'}</option>
                  <option value="5-8">{language === 'en' ? '5-8 People' : '5-8 أشخاص'}</option>
                  <option value="9-15">{language === 'en' ? '9-15 People' : '9-15 شخص'}</option>
                  <option value="16+">{language === 'en' ? '16+ People' : 'أكثر من 16 شخص'}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Budget' : 'الميزانية'} (USD)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="">{language === 'en' ? 'Select Budget Range' : 'اختر نطاق الميزانية'}</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="2000-5000">$2,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-20000">$10,000 - $20,000</option>
                  <option value="20000+">{language === 'en' ? 'More than $20,000' : 'أكثر من $20,000'}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Start Date' : 'تاريخ البداية'} *
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'End Date' : 'تاريخ النهاية'} *
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Preferred Accommodation Type' : 'نوع الإقامة المفضل'}
              </label>
              <select
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              >
                <option value="">{language === 'en' ? 'Select Accommodation Type' : 'اختر نوع الإقامة'}</option>
                <option value="luxury">{language === 'en' ? 'Luxury Hotels & Resorts (5-star)' : 'فنادق ومنتجعات فاخرة (5 نجوم)'}</option>
                <option value="mid-range">{language === 'en' ? 'Mid-range Hotels (3-4 star)' : 'فنادق متوسطة (3-4 نجوم)'}</option>
                <option value="budget">{language === 'en' ? 'Budget Accommodation' : 'إقامة اقتصادية'}</option>
                <option value="camping">{language === 'en' ? 'Camping & Adventure' : 'التخييم والمغامرة'}</option>
                <option value="mixed">{language === 'en' ? 'Mixed Options' : 'مزيج من الخيارات'}</option>
              </select>
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Previous Safari Experience' : 'خبرتك السابقة في السفاري'}
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              >
                <option value="">{language === 'en' ? 'Select Experience Level' : 'اختر مستوى الخبرة'}</option>
                <option value="first-time">{language === 'en' ? 'First Time' : 'أول مرة'}</option>
                <option value="beginner">{language === 'en' ? 'Beginner (1-2 trips)' : 'مبتدئ (1-2 رحلة)'}</option>
                <option value="experienced">{language === 'en' ? 'Experienced (3-5 trips)' : 'خبير (3-5 رحلات)'}</option>
                <option value="expert">{language === 'en' ? 'Expert (5+ trips)' : 'محترف (أكثر من 5 رحلات)'}</option>
              </select>
            </div>
          </div>

          {/* Destinations */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 sm:mb-6 flex items-center">
              <MapPin className="h-6 w-6 ml-3 text-yellow-600" />
              {language === 'en' ? 'Desired Destinations' : 'الوجهات المرغوبة'}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {destinations.map((destination) => (
                <label key={destination.id} className="flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    name="destinations"
                    value={destination.id}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-gray-700 text-sm sm:text-base">{destination.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 sm:mb-6 flex items-center">
              <Clock className="h-6 w-6 ml-3 text-yellow-600" />
              {language === 'en' ? 'Interests' : 'الاهتمامات'}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {interests.map((interest) => (
                <label key={interest.id} className="flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest.id}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-gray-700 text-sm sm:text-base">{interest.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 sm:mb-6">{language === 'en' ? 'Special Requests' : 'طلبات خاصة'}</h2>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
              placeholder={language === 'en' ? 'Tell us about any special requests, dietary restrictions, medical needs, or other preferences...' : 'أخبرنا عن أي طلبات خاصة، قيود غذائية، احتياجات طبية، أو تفضيلات أخرى...'}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 flex items-center justify-center"
          >
            <Send className="h-5 w-5 mr-2" />
            {language === 'en' ? 'Submit Quote Request' : 'إرسال طلب العرض'}
          </button>

          <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
            {language === 'en' ? '* We will respond to your request within 24 hours with a detailed and customized itinerary' : '* سنقوم بالرد على طلبك خلال 24 ساعة مع عرض مفصل ومخصص لرحلتك'}
          </p>
        </form>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-12 bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            {language === 'en' ? 'Excellent Customer Service' : 'خدمة عملاء متميزة'}
          </h3>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">
            {language === 'en' ? 'Our team of experts is ready to assist you every step of the way in planning your trip' : 'فريق خبرائنا جاهز لمساعدتك في كل خطوة من خطوات التخطيط لرحلتك'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/254712346678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-yellow-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              WhatsApp: +254 712 346 678
            </a>
            <a
              href="tel:+254712346678"
              className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
            >
              {language === 'en' ? 'Call Now' : 'اتصل الآن'}
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
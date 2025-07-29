import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(language === 'en' ? 'Your message has been sent successfully! We will contact you soon.' : 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            {language === 'en'
              ? 'We are here to help you plan your perfect trip. Contact us today!'
              : 'نحن هنا لمساعدتك في التخطيط لرحلتك المثالية. تواصل معنا اليوم!'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8">{language === 'en' ? 'Contact Information' : 'معلومات التواصل'}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{language === 'en' ? 'Phone' : 'الهاتف'}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">+254 712 346 678</p>
                    <p className="text-sm text-gray-500">{language === 'en' ? 'Available 24/7' : 'متاح 24/7'}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{language === 'en' ? 'Email' : 'البريد الإلكتروني'}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">info@injaazagency.com</p>
                    <p className="text-sm text-gray-500">{language === 'en' ? 'Quick response within 24 hours' : 'رد سريع خلال 24 ساعة'}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{language === 'en' ? 'Address' : 'العنوان'}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{language === 'en' ? 'Nairobi, Kenya' : 'نيروبي، كينيا'}</p>
                    <p className="text-sm text-gray-500">{language === 'en' ? 'Office in the city center' : 'مكتب في قلب المدينة'}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{language === 'en' ? 'Working Hours' : 'ساعات العمل'}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{language === 'en' ? 'Monday - Friday: 8:00 - 18:00' : 'الاثنين - الجمعة: 8:00 - 18:00'}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{language === 'en' ? 'Saturday - Sunday: 9:00 - 16:00' : 'السبت - الأحد: 9:00 - 16:00'}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <a
                  href="https://wa.me/254712346678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 text-white px-4 sm:px-6 py-3 rounded-full hover:bg-green-600 transition-colors text-sm sm:text-base"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  {language === 'en' ? 'Message us on WhatsApp' : 'راسلنا على WhatsApp'}
                </a>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-4">{language === 'en' ? 'Our Location' : 'موقعنا'}</h3>
              <div className="bg-gray-200 rounded-lg h-48 sm:h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm sm:text-base">{language === 'en' ? 'Google Map - Nairobi, Kenya' : 'خريطة Google - نيروبي، كينيا'}</p>
                  <p className="text-sm">{language === 'en' ? '(Interactive map will be added)' : '(سيتم إضافة الخريطة التفاعلية)'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8">{language === 'en' ? 'Send us a Message' : 'أرسل لنا رسالة'}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Phone Number' : 'رقم الهاتف'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="+966 50 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Subject' : 'الموضوع'}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="">{language === 'en' ? 'Select Subject' : 'اختر الموضوع'}</option>
                    <option value="safari">{language === 'en' ? 'Safari Tours' : 'جولات السفاري'}</option>
                    <option value="luxury">{language === 'en' ? 'Luxury Safaris' : 'السفاري الفاخرة'}</option>
                    <option value="budget">{language === 'en' ? 'Budget Safaris' : 'السفاري الاقتصادية'}</option>
                    <option value="custom">{language === 'en' ? 'Custom Packages' : 'باقات مخصصة'}</option>
                    <option value="general">{language === 'en' ? 'General Inquiry' : 'استفسار عام'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Message' : 'الرسالة'} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                  placeholder={language === 'en' ? 'Write your message here...' : 'اكتب رسالتك هنا...'}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 flex items-center justify-center text-sm sm:text-base"
              >
                <Send className="h-5 w-5 mr-2" />
                {language === 'en' ? 'Submit' : 'إرسال'}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-black/20 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {language === 'en' ? 'We Look Forward to Hearing From You!' : 'نتطلع للسماع منك!'}
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Our team of experts is ready to help you plan your dream trip to Kenya. Contact us today and let\'s start making unforgettable memories.'
              : 'فريقنا من الخبراء جاهز لمساعدتك في تخطيط رحلة أحلامك إلى كينيا. تواصل معنا اليوم ودعنا نبدأ في صنع ذكريات لا تُنسى.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="tel:+254712346678"
              className="bg-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              {language === 'en' ? 'Call Now' : 'اتصل الآن'}
            </a>
            <a
              href="mailto:info@injaazagency.com"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-green-700 transition-all"
            >
              {language === 'en' ? 'Email Us' : 'راسلنا بالإيميل'}
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
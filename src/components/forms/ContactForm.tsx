import React from 'react';
import { Mail, Phone, User, MessageSquare, Calendar, MapPin } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import { ContactForm as ContactFormType } from '../../types';
import Input from '../ui/Input';
import Button from '../ui/Button';

const initialValues: ContactFormType = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  tourType: '',
  preferredDate: ''
};

const validationRules = {
  name: { required: true, minLength: 2 },
  email: { 
    required: true, 
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: { 
    required: true, 
    pattern: /^[+]?[\d\s-()]{10,}$/
  },
  subject: { required: true, minLength: 5 },
  message: { required: true, minLength: 10 },
  tourType: { required: true }
};

interface ContactFormProps {
  onSubmit?: (data: ContactFormType) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset
  } = useForm(initialValues, validationRules);

  const submitForm = async (formData: ContactFormType) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    
    if (onSubmit) {
      onSubmit(formData);
    }
    
    alert('Thank you for your inquiry! We will get back to you soon.');
    reset();
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(submitForm);
    }} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          type="text"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          error={touched.name ? errors.name : ''}
          leftIcon={<User className="w-5 h-5" />}
          required
        />

        <Input
          label="Email Address"
          type="email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          error={touched.email ? errors.email : ''}
          leftIcon={<Mail className="w-5 h-5" />}
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          value={values.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          error={touched.phone ? errors.phone : ''}
          leftIcon={<Phone className="w-5 h-5" />}
          required
        />

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Tour Type <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={values.tourType}
              onChange={(e) => handleChange('tourType', e.target.value)}
              onBlur={() => handleBlur('tourType')}
              className={`w-full pl-12 pr-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                touched.tourType && errors.tourType
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:border-green-500 focus:ring-green-200'
              }`}
              required
            >
              <option value="">Select Tour Type</option>
              <option value="adventure">Adventure Tourism</option>
              <option value="heritage">Heritage Tours</option>
              <option value="wildlife">Wildlife Safari</option>
              <option value="spiritual">Spiritual Tours</option>
              <option value="family">Family Packages</option>
              <option value="custom">Custom Package</option>
            </select>
          </div>
          {touched.tourType && errors.tourType && (
            <p className="text-sm text-red-600" role="alert">
              {errors.tourType}
            </p>
          )}
        </div>
      </div>

      <Input
        label="Subject"
        type="text"
        value={values.subject}
        onChange={(e) => handleChange('subject', e.target.value)}
        onBlur={() => handleBlur('subject')}
        error={touched.subject ? errors.subject : ''}
        leftIcon={<MessageSquare className="w-5 h-5" />}
        required
      />

      <Input
        label="Preferred Travel Date"
        type="date"
        value={values.preferredDate}
        onChange={(e) => handleChange('preferredDate', e.target.value)}
        onBlur={() => handleBlur('preferredDate')}
        leftIcon={<Calendar className="w-5 h-5" />}
        min={new Date().toISOString().split('T')[0]}
      />

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-vertical ${
            touched.message && errors.message
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:border-green-500 focus:ring-green-200'
          }`}
          placeholder="Tell us about your travel preferences, group size, budget, or any special requirements..."
          required
        />
        {touched.message && errors.message && (
          <p className="text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        loading={isSubmitting}
        fullWidth
        size="lg"
        leftIcon={<Mail className="w-5 h-5" />}
      >
        {isSubmitting ? 'Sending Message...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
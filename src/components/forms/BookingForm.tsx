import React from 'react';
import { Calendar, Users, MapPin, MessageSquare } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import { BookingForm as BookingFormType } from '../../types';
import Input from '../ui/Input';
import Button from '../ui/Button';

const initialValues: BookingFormType = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  checkIn: '',
  checkOut: '',
  guests: 1,
  specialRequests: ''
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
  destination: { required: true },
  checkIn: { required: true },
  checkOut: { required: true },
  guests: { required: true }
};

interface BookingFormProps {
  onSubmit?: (data: BookingFormType) => void;
  preselectedDestination?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ 
  onSubmit, 
  preselectedDestination 
}) => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset
  } = useForm({
    ...initialValues,
    destination: preselectedDestination || ''
  }, validationRules);

  const submitForm = async (formData: BookingFormType) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Booking submitted:', formData);
    
    if (onSubmit) {
      onSubmit(formData);
    }
    
    alert('Booking request submitted successfully! We will contact you shortly to confirm your reservation.');
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
          required
        />

        <Input
          label="Email Address"
          type="email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          error={touched.email ? errors.email : ''}
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          value={values.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          error={touched.phone ? errors.phone : ''}
          required
        />

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Destination <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={values.destination}
              onChange={(e) => handleChange('destination', e.target.value)}
              onBlur={() => handleBlur('destination')}
              className={`w-full pl-12 pr-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                touched.destination && errors.destination
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:border-green-500 focus:ring-green-200'
              }`}
              required
            >
              <option value="">Select Destination</option>
              <option value="netarhat">Netarhat</option>
              <option value="hundru-falls">Hundru Falls</option>
              <option value="betla-national-park">Betla National Park</option>
              <option value="deoghar">Deoghar</option>
              <option value="parasnath-hills">Parasnath Hills</option>
              <option value="ranchi">Ranchi</option>
              <option value="custom">Custom Package</option>
            </select>
          </div>
          {touched.destination && errors.destination && (
            <p className="text-sm text-red-600" role="alert">
              {errors.destination}
            </p>
          )}
        </div>

        <Input
          label="Check-in Date"
          type="date"
          value={values.checkIn}
          onChange={(e) => handleChange('checkIn', e.target.value)}
          onBlur={() => handleBlur('checkIn')}
          error={touched.checkIn ? errors.checkIn : ''}
          leftIcon={<Calendar className="w-5 h-5" />}
          min={new Date().toISOString().split('T')[0]}
          required
        />

        <Input
          label="Check-out Date"
          type="date"
          value={values.checkOut}
          onChange={(e) => handleChange('checkOut', e.target.value)}
          onBlur={() => handleBlur('checkOut')}
          error={touched.checkOut ? errors.checkOut : ''}
          leftIcon={<Calendar className="w-5 h-5" />}
          min={values.checkIn || new Date().toISOString().split('T')[0]}
          required
        />

        <Input
          label="Number of Guests"
          type="number"
          value={values.guests}
          onChange={(e) => handleChange('guests', parseInt(e.target.value))}
          onBlur={() => handleBlur('guests')}
          error={touched.guests ? errors.guests : ''}
          leftIcon={<Users className="w-5 h-5" />}
          min={1}
          max={20}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Special Requests
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <textarea
            value={values.specialRequests}
            onChange={(e) => handleChange('specialRequests', e.target.value)}
            onBlur={() => handleBlur('specialRequests')}
            rows={4}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 resize-vertical"
            placeholder="Any special requirements, dietary restrictions, accessibility needs, or preferences..."
          />
        </div>
      </div>

      <Button
        type="submit"
        loading={isSubmitting}
        fullWidth
        size="lg"
        leftIcon={<Calendar className="w-5 h-5" />}
      >
        {isSubmitting ? 'Processing Booking...' : 'Submit Booking Request'}
      </Button>
    </form>
  );
};

export default BookingForm;
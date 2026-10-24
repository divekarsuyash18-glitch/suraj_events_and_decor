// Replace these placeholders with the business's verified contact details.
export const business = {
  name: 'Suraj Events and Decor',
  // Obvious non-routable mock for the design preview; replace before launch.
  phoneDisplay: '+91 00000 00000',
  phone: '',
  whatsapp: '',
  location: 'Roha, Maharashtra',
}

export const whatsappUrl = (message = 'Hello, I would like to know more about your decoration services.') =>
  business.whatsapp
    ? `https://wa.me/${business.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    : '#contact'

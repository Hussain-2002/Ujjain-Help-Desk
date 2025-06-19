import { openWhatsApp, openEmail } from "@/lib/utils";

const contactNumbers = [
  "+91-7024951915",
  "+91-8959584011", 
  "+91-8959584011",
  "+91-8959584011"
];

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    openWhatsApp("917024951915", "Hi, I need help regarding Ujjain Relay Centre services");
  };

  const handleEmailClick = () => {
    openEmail("asharaujjainhelpdesk@gmail.com", "Support Request - Ujjain Relay Centre");
  };

  return (
    <section id="contact" className="bg-white rounded-lg material-shadow-2 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with our support team through WhatsApp or email for immediate assistance.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* WhatsApp Contact */}
        <div className="text-center">
          <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <span className="material-icons text-3xl text-green-600">chat</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Helpline</h3>
          <p className="text-gray-600 mb-4">Quick support via WhatsApp messaging</p>
          <button
            onClick={handleWhatsAppClick}
            className="contact-button text-white px-6 py-3 rounded-lg font-medium inline-flex items-center"
          >
            <span className="material-icons mr-2">phone</span>
            +91-7024951915
          </button>
        </div>

        {/* Email Contact */}
        <div className="text-center">
          <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <span className="material-icons text-3xl text-red-600">email</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
          <p className="text-gray-600 mb-4">Send detailed queries via email</p>
          <button
            onClick={handleEmailClick}
            className="email-button text-white px-6 py-3 rounded-lg font-medium inline-flex items-center"
          >
            <span className="material-icons mr-2">mail</span>
            asharaujjainhelpdesk@gmail.com
          </button>
        </div>
      </div>

      {/* Additional Contact Numbers */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4 text-center">Additional Helpline Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contactNumbers.map((number, index) => (
            <a
              key={index}
              href={`tel:${number}`}
              className="flex items-center justify-center p-3 bg-white rounded-lg material-shadow-1 hover:material-shadow-2 transition-all text-gray-700 hover:text-red-600"
            >
              <span className="material-icons text-sm mr-2">phone</span>
              <span className="text-sm font-medium">{number}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Important Notice */}
      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <div className="flex items-start">
          <span className="material-icons text-amber-600 mr-3 mt-0.5">warning</span>
          <div>
            <h4 className="font-semibold text-amber-800 mb-1">Important Notice</h4>
            <p className="text-amber-700 text-sm">
              If Mumineen guests need accommodation in Ujjain, they should contact this helpline (WhatsApp message only).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

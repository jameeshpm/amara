"use client";

import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
      document.body.style.overflow = "hidden"; // Disable background scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  const toggleAccordion = (section: string) => {
    setExpanded(expanded === section ? null : section);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center justify-center">Consent to Cookies & Data Processing</h2>
        <p className="text-sm text-gray-600 mb-4">
        On this website we use cookies and similar functions to process end device information and personal data 
        (e.g. such as IP-addresses or browser information). The processing is used for purposes such as to integrate 
        content, external services and elements from third parties, statistical analysis/measurement, personalized 
        advertising and the integration of social media. Depending on the function, data is passed on to up to 6 third
         parties and processed by them. This consent is voluntary, not required for the use of our website and can be 
         revoked at any time using the icon on the bottom left.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          {[
            { title: "Function", 
              description: "These cookies and similar technologies are used for activities that are strictly necessary to operate or deliver the service you requested from us. They do not require you to consent and cannot be deactivated.", 
              icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/>
                    </svg>
             },
            { title: "Marketing", 
              description: "These cookies and similar technologies help us to deliver personalized ads or marketing content to you, and to measure their performance.", 
              icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 13.9999L5.57465 20.2985C5.61893 20.4756 5.64107 20.5642 5.66727 20.6415C5.92317 21.397 6.60352 21.9282 7.39852 21.9933C7.4799 21.9999 7.5712 21.9999 7.75379 21.9999C7.98244 21.9999 8.09677 21.9999 8.19308 21.9906C9.145 21.8982 9.89834 21.1449 9.99066 20.193C10 20.0967 10 19.9823 10 19.7537V5.49991M18.5 13.4999C20.433 13.4999 22 11.9329 22 9.99991C22 8.06691 20.433 6.49991 18.5 6.49991M10.25 5.49991H6.5C4.01472 5.49991 2 7.51463 2 9.99991C2 12.4852 4.01472 14.4999 6.5 14.4999H10.25C12.0164 14.4999 14.1772 15.4468 15.8443 16.3556C16.8168 16.8857 17.3031 17.1508 17.6216 17.1118C17.9169 17.0756 18.1402 16.943 18.3133 16.701C18.5 16.4401 18.5 15.9179 18.5 14.8736V5.1262C18.5 4.08191 18.5 3.55976 18.3133 3.2988C18.1402 3.05681 17.9169 2.92421 17.6216 2.88804C17.3031 2.84903 16.8168 3.11411 15.8443 3.64427C14.1772 4.55302 12.0164 5.49991 10.25 5.49991Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> 
            },
            { title: "Preferences", 
              description: "These cookies and similar technologies help us to improve the quality of your user experience, and provide you enhanced functionality and personalisation.", 
              icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/>
                    </svg>
             
            },
            { title: "Measurement", 
              description: "With the help of cookies and similar technologies, we're able to measure how many users visit our website and observe how you interact with our services, which aids us in making improvements.", 
              icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"/>
                    </svg>
             
            },
            { title: "Other", 
              description: "These cookies and similar technologies are used for activities that do not fit the above categorizations.", 
              icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
                    </svg>
             
            },
            { title: "Social Media", 
              description: "These cookies and similar technologies enable interactions with external content, networks and platforms.", 
              icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"/>
                    </svg>
             
            },
          ].map((item) => (
            <div key={item.title}>
              <button
                onClick={() => toggleAccordion(item.title)}
                className="w-full flex justify-between items-center text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg focus:outline-none"
              >
          <span className="flex items-center">
            <span className="mr-2">{item.icon}</span>
            {item.title}
          </span>
          <span>{expanded === item.title ? 
                <svg className="w-6 h-6 text-gray-800 dark:text-white opacity-50 hover:opacity-100 transition-opacity" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 14-4-4-4 4"/>
                </svg>
              : <svg className="w-6 h-6 text-gray-800 dark:text-white opacity-50 hover:opacity-100 transition-opacity" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
                </svg>
          }</span>
              </button>
              {expanded === item.title && (
          <p className="mt-2 text-sm text-gray-600 px-4">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6 flex items-center justify-center">
          <button
            onClick={handleReject}
            className="px-8 py-2 bg-blue hover:bg-blue text-white rounded-full"
          >
            Reject All
          </button>
          <button
            onClick={handleAccept}
            className="px-8 py-2 bg-blue hover:bg-blue text-white rounded-full"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

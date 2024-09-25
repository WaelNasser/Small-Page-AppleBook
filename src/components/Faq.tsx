/** @format */

import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const title = <>Questions? Answers</>;
const faqs = [
  {
    question: "What is an Apple Account?",
    answer:
      "An Apple Account is the personal account you use to access Apple services like the App Store, iCloud, Messages, the Apple Online Store, FaceTime, and more. It includes the information you use to sign in, as well as all the contact, payment, and security details that you’ll use across Apple services.",
  },
  {
    question: "How many Apple Accounts do I need?",
    answer:
      "Just one. Use the same Apple Account everywhere you sign in to ensure that all your Apple services and devices work together seamlessly and you can access your personal information from all your devices.",
  },
  {
    question: "When do I use my Apple Account?",
    answer:
      "Any time you set up a new device, make a purchase, or use any Apple service, you will be asked to sign in with your Apple Account email or phone number and password. Once signed in you’ll have access to the service and all your personal information.",
  },
  {
    question: "If I have multiple Apple Accounts can I merge them together?",
    answer:
      "Apple Accounts are for individual use and cannot be merged together.",
  },
  {
    question: "Do I have to pay for an Apple Account?",
    answer:
      "No, you do not need to pay for an Apple Account. Learn more about how to create an Apple AccountOpens in a new window..",
  },
];
const Faq = () => {
  return (
    <div className="bg-center bg-no-repeat text-gray-800 dark:bg-gray-800  dark:text-white">
      <div className="px-4 mx-auto text-center pt-24 lg:pt-32">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <Accordion collapseAll className="border-none">
          {faqs.map((faq, index) => {
            return (
              <AccordionPanel key={index}>
                <AccordionTitle className="text-gray-800 text-xl">
                  {faq.question}
                </AccordionTitle>
                <AccordionContent>
                  <p className="mb-2 text-left text-gray-500 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionPanel>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;

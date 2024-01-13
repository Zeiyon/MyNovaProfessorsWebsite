import React from "react";

const FAQComponent: React.FC = () => {
  const faqs = [
    {
      question: "Will this get me in trouble?",
      answer:
        "This information is only displayed on the client-side and the website won't know about it. All the information is public information",
    },
    {
      question: "How does it work?",
      answer:
        "We use an API call for each professor you see on screen, and display the information you recieve back in a nice popup.",
    },
    {
      question: "Does it update regularly?",
      answer:
        "Yup, as this is done using an API request, the information you recieve will be the exact same as if you went to the RMP page.",
    },
    {
      question: "How much does it cost?",
      answer:
        "It's completely free and open-source. Meaning I don't make a cent from this, and anyone can get the code and add additional features or change it to fit their needs.",
    },
    {
      question: "Does it offer customization?",
      answer:
        "Sadly, not yet. We have plans to add futher features but for now it's a one-size-fits all, but fourtunately you see all the information you will most likely need.",
    },
    {
      question: "Do you collect or share my personal data?",
      answer: "Nope, not at all. We don't collect any data from you, at all.",
    },
    {
      question: "Will my browser slow down?",
      answer:
        "This extension is very lightweight and only turns on when viewing the NOVA SIS website, so it shouldn't effect any other web traffic.",
    },
    {
      question: "Can I use this on Firefox or any other browsers?",
      answer:
        "We have plans to add support for other browsers in the future, but for right now this only works with Google Chrome.",
    },
    {
      question: "I installed the extension but it's not working?",
      answer:
        "First, make sure you are on NOVA SIS class search, if it still doesn't work, you could inspect element and click console and reload the page. Check what error it gives you and report that to us using the contact form below.",
    },
    {
      question: "How can I support this extensions development?",
      answer:
        "We're glad you like this extension as much as we do. It would really help us out if you could leave a positive review on the Chrome Extension page, or spread the word. Knowing more people are using are extension is more than enough to keep us motivated. You can also suggest new features using the contact form.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-8 mt-24 md:mt-40" id="faq">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;


import type { Project } from '@/types/content';

// Project information reflects actual contributions.
// Add only authorized screenshots and verified links.

export const projects: Project[] = [
  {
    slug: 'learning-management-system',
    projectUrl: 'https://website.wakp.net/',
    title: 'Learning Management System (LMS)',
    description:
      'A comprehensive educational platform for managing courses, lectures, examinations, subscriptions, and online payments, supported by RESTful APIs.',

    overview:
      'A multi-tenant Learning Management System designed to support educational institutions in managing academic operations, online learning, and student services. The platform includes a Laravel-based administration dashboard and a React web application connected through RESTful APIs.',

    type: 'Company Project',
    featured: true,

    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'Blade',
      'JavaScript',
      'jQuery',
      'AJAX',
      'React',
      'REST APIs',
      'Payment Integrations',
      'VdoCipher',
      'Pusher',
    ],

    personalTechnologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'Blade',
      'JavaScript',
      'jQuery',
      'AJAX',
      'REST APIs',
      'Git',
      'Pusher',
    ],

    role: 'Laravel Backend Developer',

    responsibilities: [
      'Developed and maintained backend modules for course, lecture, examination, and subscription management.',
      'Built and maintained RESTful APIs supporting the web application.',
      'Implemented business logic for student enrollment, payments, coupons, and educational workflows.',
      'Developed and maintained administration dashboard features using Laravel and Blade.',
      'Integrated third-party services and worked on database queries and performance optimization.',
    ],

    contributionNotes:
      'Contributed to the Laravel backend, administration dashboard, RESTful APIs, and database functionality. Worked alongside frontend developers responsible for the React website. Extended and maintained the existing multi-tenant platform.',

    features: [
      'Course, lecture, and educational content management.',
      'Examination systems, question banks, and student assessments.',
      'Student subscriptions and enrollment workflows.',
      'Online payment gateway integrations and coupon management.',
      'Authentication, authorization, and role-based permissions.',
      'RESTful APIs supporting the website.',
      'Administration dashboard and configurable system settings.',
    ],

    technicalHighlights: [
      'Developed and maintained RESTful APIs using Laravel.',
      'Implemented payment processing workflows and payment webhook handling.',
      'Worked with MySQL relationships, complex queries, and query optimization.',
      'Integrated external services, including VdoCipher.',
      'Worked with real-time notifications using Pusher.',
      'Maintained and extended functionality within an existing multi-tenant architecture.',
    ],

    challenges: [],
    thumbnail: {
      src: '/images/projects/lms/dashboard.png',
      alt: 'LMS administration dashboard showing pending actions, platform statistics, and management navigation.',
      width: 1897,
      height: 919,
      interface: 'dashboard',
    },
    screenshots: [
      {
        src: '/images/projects/lms/lectures.png',
        alt: 'Arabic LMS lecture website showing the introduction, search filters, and lecture cards.',
        width: 1896,
        height: 896,
        interface: 'website',
        caption: 'Lecture website powered by Laravel REST APIs. The React frontend was developed by frontend collaborators.',
      },
      {
        src: '/images/projects/lms/courses.png',
        alt: 'Arabic LMS course website showing the course introduction, search field, and course cards.',
        width: 1917,
        height: 896,
        interface: 'website',
        caption: 'Course website consuming the Laravel REST APIs; the React frontend belongs to the frontend team.',
      },
      {
        src: '/images/projects/lms/dashboard.png',
        alt: 'LMS administration dashboard with pending actions, student and subscription statistics, and management navigation.',
        width: 1897,
        height: 919,
        interface: 'dashboard',
        caption: 'Laravel administration dashboard: operational overview and platform management.',
      },
      {
        src: '/images/projects/lms/question_banks.png',
        alt: 'Arabic LMS administration form for creating a question bank, entering translated names, and adding questions.',
        width: 1611,
        height: 900,
        interface: 'dashboard',
        caption: 'Laravel administration dashboard: question-bank creation and question management.',
      },
    ],
  },

  {
    slug: 'click-and-learn',
    projectUrl: 'https://click-and-learn.com/',
    title: 'Click & Learn',

    description:
      'An e-learning platform featuring video and live courses, examinations, subscriptions, discount coupons, and course bundles.',

    overview:
      'An e-learning platform that allows students to explore and subscribe to educational courses, access recorded lessons and live Zoom sessions, take examinations, and purchase discounted course bundles. The platform includes an administration dashboard and a student-facing website built with Laravel and Blade.',

    type: 'Company Project',
    featured: true,

    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'Blade',
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
      'AJAX',
      'Bootstrap',
      'Zoom',
    ],

    personalTechnologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'Blade',
      'HTML5',
      'JavaScript',
      'jQuery',
      'AJAX',
    ],

    role: 'Laravel Backend Developer',

    responsibilities: [
      'Developed most of the platform functionality using Laravel, MySQL, and Blade.',
      'Integrated pre-built HTML templates with Laravel to build the administration dashboard and student-facing website.',
      'Implemented academic unit, lesson, course, and course subscription management.',
      'Developed course examination workflows, including quiz attempts and automatic grading.',
      'Implemented discount coupons and course bundles with discounted pricing.',
      'Developed authentication and email verification functionality.',
      'Connected dashboard management features with their corresponding website functionality.',
    ],

    contributionNotes:
      'Developed the majority of the platform functionality, covering both the administration dashboard and student-facing website. The original HTML templates were provided, while my work focused on integrating them with Laravel and implementing the application logic, database functionality, and educational workflows.',

    features: [
      'Academic unit, lesson, and course management.',
      'Recorded video courses and live Zoom sessions.',
      'Course subscriptions and student enrollment.',
      'Course quizzes, quiz attempts, and automatic grading.',
      'Discount coupons for educational courses.',
      'Course bundles containing multiple courses at discounted prices.',
      'User authentication and email verification.',
      'Administration dashboard and student-facing website.',
    ],

    technicalHighlights: [
      'Built the application functionality using Laravel and Blade.',
      'Integrated pre-built HTML templates with dynamic Laravel functionality.',
      'Implemented quiz attempt and automatic grading workflows.',
      'Developed course subscription and discounted bundle functionality.',
      'Implemented authentication and email verification.',
      'Worked with MySQL relationships and database-driven educational workflows.',
    ],

    challenges: [],
    thumbnail: {
      src: '/images/projects/click_and_learn/homepage.png',
      alt: 'Click & Learn homepage with its learning introduction and course navigation.',
      width: 1917,
      height: 960,
      interface: 'website',
    },
    screenshots: [
      {
        src: '/images/projects/click_and_learn/homepage.png',
        alt: 'Click & Learn student-facing homepage showing the learning introduction, navigation, and Start Now action.',
        width: 1917,
        height: 960,
        interface: 'website',
        caption: 'Student-facing homepage: a provided HTML template integrated with Laravel and Blade.',
      },
      {
        src: '/images/projects/click_and_learn/courses.png',
        alt: 'Click & Learn course catalog with academic year, term, and subject filters, course cards, and cart actions.',
        width: 1901,
        height: 955,
        interface: 'website',
        caption: 'Course discovery and purchasing interface, connected to Laravel course and subscription functionality.',
      },
    ],
  },

  {
    slug: 'saudi-suppliers',
    projectUrl: 'https://saudi-suppliers.com/',
    title: 'Saudi Suppliers — B2B Marketplace',

    description:
      'A B2B marketplace connecting buyers and suppliers through product and service listings, quotation requests, supplier offers, and direct communication.',

    overview:
      'A B2B marketplace designed to connect businesses with suppliers of products and services. Buyers can browse available offerings, create Requests for Quotation (RFQs), review supplier proposals, and accept or reject offers. Suppliers can manage their products and services, respond to relevant quotation requests, and communicate directly with buyers through an integrated chat system.',

    type: 'Company Project',
    featured: true,

    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'Blade',
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
      'AJAX',
      'Bootstrap',
      'Pusher',
    ],

    personalTechnologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'Blade',
      'HTML5',
      'JavaScript',
      'jQuery',
      'AJAX',
      'Bootstrap',
      'Pusher',
    ],

    role: 'Laravel Backend Developer',

    responsibilities: [
      'Developed backend functionality for buyer and supplier workflows using Laravel and MySQL.',
      'Integrated pre-built HTML templates with Laravel and Blade.',
      'Implemented supplier registration with category selection and product or service management.',
      'Developed RFQ workflows allowing buyers to request quotations for products and services.',
      'Implemented supplier offer submission and buyer offer acceptance or rejection.',
      'Implemented real-time chat functionality between buyers and suppliers using Pusher.',],


    contributionNotes:
      'Worked on Laravel backend functionality and integrated the provided HTML templates with dynamic application features. The platform focused on connecting buyers and suppliers through quotation and communication workflows rather than processing online payments.',

    features: [
      'Separate buyer and supplier user roles.',
      'Supplier registration with category selection.',
      'Product and service listing management.',
      'Buyer Requests for Quotation (RFQs).',
      'Supplier offers based on relevant products and services.',
      'Buyer acceptance and rejection of supplier offers.',
      'Direct chat between buyers and suppliers.',
    ],

    technicalHighlights: [
      'Implemented buyer and supplier business workflows using Laravel.',
      'Developed RFQ creation and supplier offer handling.',
      'Implemented offer acceptance and rejection functionality.',
      'Worked with MySQL relationships connecting users, categories, products, services, and quotation requests.',
      'Integrated pre-built HTML interfaces with Laravel and Blade.',
      'Integrated Pusher to enable real-time communication between buyers and suppliers.',
    ],

    challenges: [],
    thumbnail: {
      src: '/images/projects/saudi_suppliers/mock-up.png',
      alt: 'Illustrative Saudi Suppliers marketplace mockup, not a screenshot of the real application.',
      width: 1778,
      height: 884,
      interface: 'other',
      isIllustration: true,
    },
    screenshots: [
      {
        src: '/images/projects/saudi_suppliers/mock-up.png',
        alt: 'Illustrative mockup explaining Saudi Suppliers product discovery and supplier categories; not a real application screenshot.',
        width: 1778,
        height: 884,
        interface: 'other',
        isIllustration: true,
        caption: 'Explanatory marketplace mockup only. This is not a screenshot of the real platform and does not represent its actual interface.',
      },
      {
        src: '/images/projects/saudi_suppliers/workflow.png',
        alt: 'Illustrative Saudi Suppliers workflow showing buyers, suppliers, quotation requests, offers, and chat; not real application screenshots.',
        width: 1536,
        height: 1024,
        interface: 'other',
        isIllustration: true,
        caption: 'Explanatory workflow illustration only. The interface mockups are not real screenshots; they illustrate buyer and supplier interactions, RFQs, offers, and communication.',
      },
    ],
  },

  {
    slug: 'elmasrah',
    projectUrl: 'https://play.google.com/store/apps/details?id=com.elmasrah.app',
    title: 'ElMasrah — Theater Management Platform',

    description:
      'A theater management platform for the Egyptian Ministry of Culture, enhanced with Fawry POS payments integrated into the ticket reservation workflow.',

    overview:
      'An existing theater management platform developed for the Egyptian Ministry of Culture, supporting theatrical performances, show scheduling, seat reservations, and ticket management. My primary contribution was enhancing the reservation workflow by integrating Fawry POS payments, allowing staff to reserve seats, process payments through POS terminals, and issue tickets.',

    type: 'Company Project',
    featured: true,

    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'Blade',
      'JavaScript',
      'jQuery',
      'AJAX',
      'REST APIs',
      'Fawry POS',
      'Flutter',
    ],

    personalTechnologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'Blade',
      'JavaScript',
      'jQuery',
      'AJAX',
      'REST APIs',
      'Fawry POS',
    ],

    role: 'Laravel Backend Developer',

    responsibilities: [
      'Maintained and enhanced an existing Laravel-based theater management platform.',
      'Extended the ticket reservation workflow to support payment through Fawry POS terminals.',
      'Implemented backend functionality connecting seat reservations, POS payment processing, and ticket issuance.',
      'Made targeted fixes and improvements to existing RESTful APIs supporting the Flutter mobile application.',
      'Troubleshot existing application functionality, including ticket pricing-related issues.',
    ],

    contributionNotes:
      'Joined the project after its initial development and focused on maintenance, backend enhancements, and Fawry POS integration. Also made targeted API adjustments supporting the existing Flutter application.',

    features: [
      'Theater and performance management.',
      'Show scheduling and seat reservations.',
      'Ticket reservation and issuance workflows.',
      'Fawry POS payment integration.',
      'Laravel administration dashboard.',
      'RESTful APIs supporting a Flutter mobile application.',
    ],

    technicalHighlights: [
      'Extended an existing ticket reservation workflow to support Fawry POS payments.',
      'Connected seat reservation, payment processing, and ticket issuance within the backend workflow.',
      'Maintained Laravel and Blade dashboard functionality.',
      'Debugged ticket pricing-related issues and existing application functionality.',
      'Updated selected APIs used by the Flutter mobile application.',
    ],

    challenges: [],
    thumbnail: {
      src: '/images/projects/mock-up_workflow.png',
      alt: 'Illustrative ElMasrah ticket reservation and Fawry POS workflow mockup, not a real application screenshot.',
      width: 1536,
      height: 1024,
      interface: 'other',
      isIllustration: true,
    },
    screenshots: [
      {
        src: '/images/projects/mock-up_workflow.png',
        alt: 'Explanatory ElMasrah mockup showing show selection, seat reservation, Fawry POS payment, booking confirmation, and ticket issuance; not real application screenshots.',
        width: 1536,
        height: 1024,
        interface: 'other',
        isIllustration: true,
        caption: 'Illustrative workflow mockup only, not a screenshot of the real platform. The example interfaces, show details, prices, and tickets explain the reservation and Fawry POS payment process and do not represent actual application records.',
      },
    ],
  },
];

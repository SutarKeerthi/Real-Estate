import logo from './zenora.png'
import logo_dark from './zenora.png'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import testimonial_1 from './testimonial_1.webp'
import testimonial_2 from './testimonial_2.webp'
import testimonial_3 from './testimonial_3.webp'


export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Rooftop",
      price: "₹43,00,000",
      location: "Vidyanagar",
      image: project_img_1
    },
    {
      title: "Vishwakarma Nilaya",
      price: "₹35,00,000",
      location: "Shirur Park",
      image: project_img_2
    },
    {
      title: "Brundavana",
      price: "₹50,00,000",
      location: "Keshwapaur",
      image: project_img_3
    },
    {
      title: "Ram Nivas",
      price: "₹45,00,000",
      location: "Kalyan Nagar",
      image: project_img_4
    },
    {
      title: "Vishnu Nilaya",
      price: "₹39,00,000",
      location: "Shakti Nagar",
      image: project_img_5
    },
    {
      title: "Shanti Nivas",
      price: "₹42,00,000",
      location: "Navanagar",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Abhishek Tivari",
        title: "Marketing Manager",
        image: testimonial_1,
        alt: "Portrait of Abhishek Tivari",
        rating: 5,
        text: "The Zenora team guided me patiently through every step — from booking to paperwork. I was impressed with how they handled everything professionally and delivered the apartment on schedule. Highly recommended."
    },
    {
        name: "Anjali Gupta",
        title: "UI/UX Designer",
        image: testimonial_2,
        alt: "Portrait of Anjali Gupta",
        rating: 4,
        text: "Buying a home at Zenora has been one of the best decisions for our family. The location is perfect, and the peaceful surroundings make it feel like a resort every day. The team was transparent and supportive throughout the process."
    },
    {
        name: "Rohit Sharma",
        title: "Co-Founder",
        image: testimonial_3,
        alt: "Portrait of Rohit Sharma",
        rating: 5,
        text: "What attracted me most was the balance between modern living and green spaces. Zenora’s layout, natural lighting, and amenities like the jogging track and garden really add value to everyday life. Truly feels like home."
    }
];
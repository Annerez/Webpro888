
import { Testimonial } from './types';
import { FAQ } from './types';
import { HOW } from './types';
import { Team } from './types';
import { DormType } from '../components/types';


//landing page

export const teamMembers: Team[] = [
  {
    name: "ณฐกร หอมพันนา",
    studentId: "66070055",
    role: "Project Manager",
    githubUrl: "https://github.com/MAK1z",
    email: "mailto:66070055@kmitl.ac.th",
    imageUrl: "/profile/namon.jpg"
  },
  {
    name: "อรุชา เขมทโรนนท์",
    studentId: "66070220",
    role: "Frontend Developer",
    githubUrl: "https://github.com/Annerez",
    email: "mailto:66070220@kmitl.ac.th",
    imageUrl: "/profile/arucha.png"
  },
  {
    name: "กฤษณปกรณ์ เมรัตรัน์",
    studentId: "66070006",
    role: "Backend Developer",
    githubUrl: "https://github.com/kirdsanapakron-m",
    email: "mailto:66070006@kmitl.ac.th",
    imageUrl: "/profile/krid.jpg"
  },
  {
    name: "คณิตพัฒน์ เตชะอัครเศรษฐ์",
    studentId: "66070245",
    role: "Backend Developer",
    githubUrl: "https://github.com/TKanidpat",
    email: "mailto:66070245@kmitl.ac.th",
    imageUrl: "/profile/tenten.jpg"
  }
];

export const reviews: Testimonial[] = [
  {
    id: 1,
    quote: "ระบบใช้งานง่าย สะดวกมากในการจัดการห้องพัก ช่วยประหยัดเวลาในการทำงานได้มาก",
    name: "คุณสมศักดิ์",
    role: "เจ้าของหอพัก",
    initial: "ส"
  },
  {
    id: 2,
    quote: "การแจ้งซ่อมและติดตามสถานะทำได้ง่าย ทีมงานตอบสนองรวดเร็ว ประทับใจมากครับ",
    name: "คุณวิชัย",
    role: "ผู้เช่า",
    initial: "ว"
  },
  {
    id: 3,
    quote: "ระบบจัดการค่าน้ำค่าไฟทำให้การชำระเงินสะดวกขึ้นมาก ไม่ต้องกังวลเรื่องการคำนวณ",
    name: "คุณนภา",
    role: "ผู้จัดการหอพัก",
    initial: "น"
  }
];

export const faqs: FAQ[] = [
  {
    question: "การจองห้องพักมีขั้นตอนอย่างไร?",
    answer: "ขั้นตอนการจองห้องพักทำได้ง่ายๆ เพียงสมัครสมาชิก เลือกห้องที่ต้องการ กรอกข้อมูลการจอง และชำระเงินมัดจำ จากนั้นรอการยืนยันจากทางหอพัก"
  },
  {
    question: "มีช่องทางการชำระเงินอะไรบ้าง?",
    answer: "รองรับการชำระเงินหลากหลายช่องทาง ทั้งโอนผ่านธนาคาร, QR Code, บัตรเครดิต/เดบิต และการชำระเงินผ่านแอพพลิเคชั่นธนาคาร"
  },
  {
    question: "การแจ้งซ่อมใช้เวลานานไหม?",
    answer: "ระบบแจ้งซ่อมของเราตอบสนองรวดเร็ว โดยทั่วไปจะดำเนินการภายใน 24 ชั่วโมง สำหรับกรณีเร่งด่วนจะได้รับการดูแลทันที"
  },
  {
    question: "จองห้องแล้วไม่เอาได้ไหม?",
    answer: "สามารถทำได้ เพราะหารจองห้องเป็นแค่การดูห้องเฉยๆ และดูแล้วชอบถึงค่อยตกลงเอา"
  },
  {
    question: "ห้องมีสัญญานานแค่ไหน?",
    answer: "ห้องพักจะมีสัญญาอยู่ได้ 1 ปี หลังจากนั้นต้องทำสัญญาใหม่"
  },
  {
    question: "อยู่ตอนภาคเรียน Summer ได้ไหม?",
    answer: "สามารถพักอาศัยในภาคเรียนพิเศษได้ หอพักนักศึกษาให้บริการทั้งภาคเรียนที่ 1, 2, และภาคเรียนพิเศษ"
  },
  {
    question: "สามารถเปลี่ยนห้องระหว่างเทอมได้ไหม?",
    answer: "สามารถขอเปลี่ยนห้องได้ โดยต้องแจ้งความประสงค์ล่วงหน้าอย่างน้อย 30 วัน และต้องได้รับการอนุมัติจากผู้จัดการหอพัก ทั้งนี้ขึ้นอยู่กับห้องว่างที่มีในขณะนั้น"
  },
  {
    question: "มีบริการซักรีดในหอพักหรือไม่?",
    answer: "มีบริการซักรีดแบบหยอดเหรียญตั้งอยู่ที่ชั้น 1 ของแต่ละอาคาร เปิดให้บริการตลอด 24 ชั่วโมง โดยมีทั้งเครื่องซักผ้าและเครื่องอบผ้า"
  },
  {
    question: "กรณีมีของหายในหอพักต้องทำอย่างไร?",
    answer: "ให้แจ้งเจ้าหน้าที่หอพักทันทีเพื่อตรวจสอบกล้องวงจรปิด และกรอกแบบฟอร์มแจ้งของหาย โดยระบุรายละเอียดของที่หาย วันเวลา และสถานที่ที่คาดว่าทำหาย เพื่อให้เจ้าหน้าที่ช่วยตรวจสอบและติดตาม"
  },
  {
    question: "มีระบบรักษาความปลอดภัยอย่างไรบ้าง?",
    answer: "เรามีระบบรักษาความปลอดภัย 24 ชั่วโมง พร้อมกล้องวงจรปิด ระบบคีย์การ์ด และพนักงานรักษาความปลอดภัยตลอดวัน"
  }
];


export const HowTo: HOW[] = [
  { 
    icon: (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />), 
    title: "สมัครสมาชิก", 
    description: "กรอกข้อมูลส่วนตัวและสร้างบัญชีผู้ใช้" 
  },
  { 
    icon: (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />), 
    title: "จองห้องพัก", 
    description: "เลือกห้องพักเพื่อทำการนัดดูห้อง" 
  },
  { 
    icon: (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />), 
    title: "ยืนยันการจอง", 
    description: "ชำระเงินมัดจำและยืนยันการจอง" 
  },
  { 
    icon: (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />), 
    title: "เข้าพัก", 
    description: "รับกุญแจและเข้าพักในห้องใหม่" 
  }
];

export const dorms: DormType[] = [
  {
    id: '1',
    title: 'Type A',
    description: 'ห้องพักมาตรฐาน พร้อมเฟอร์นิเจอร์ครบครัน',
    price: 24000,
    building: 'new',
    features: [
      'เตียงนอนพร้อมที่นอน',
      'โต๊ะทำงานพร้อมเก้าอี้',
      'ตู้เสื้อผ้า',
      'เครื่องปรับอากาศ',
      'ห้องน้ำในตัว'
    ],
    amenities: [
      'ห้องซักรีด',
      'ห้องอ่านหนังสือ',
      'ระบบรักษาความปลอดภัย 24 ชม.',
      'Wi-Fi ความเร็วสูง'
    ]
  },
  {
    id: '2',
    title: 'Type B',
    description: 'ห้องพักมาตรฐาน พร้อมเฟอร์นิเจอร์ครบครัน',
    price: 24000,
    building: 'new',
    features: [
      'เตียงนอนพร้อมที่นอน',
      'โต๊ะทำงานพร้อมเก้าอี้',
      'ตู้เสื้อผ้า',
      'เครื่องปรับอากาศ',
      'ห้องน้ำในตัว'
    ],
    amenities: [
      'ห้องซักรีด',
      'ห้องอ่านหนังสือ',
      'ระบบรักษาความปลอดภัย 24 ชม.',
      'Wi-Fi ความเร็วสูง'
    ]
  },
  {
    id: '3',
    title: 'Type C',
    description: 'ห้องพักมาตรฐาน พร้อมเฟอร์นิเจอร์ครบครัน',
    price: 10000,
    building: 'new',
    features: [
      'เตียงนอนพร้อมที่นอน',
      'โต๊ะทำงานพร้อมเก้าอี้',
      'ตู้เสื้อผ้า',
      'เครื่องปรับอากาศ',
      'ห้องน้ำในตัว'
    ],
    amenities: [
      'ห้องซักรีด',
      'ห้องอ่านหนังสือ',
      'ระบบรักษาความปลอดภัย 24 ชม.',
      'Wi-Fi ความเร็วสูง'
    ]
  },
  {
    id: '4',
    title: 'ไม่ปรับอากาศชายล้วน',
    description: 'ห้องพักมาตรฐาน พร้อมเฟอร์นิเจอร์ครบครัน ห้องน้ำรวม',
    price: 10000,
    building: 'old',
    features: [
      'เตียงนอนพร้อมที่นอน',
      'โต๊ะทำงานพร้อมเก้าอี้',
      'ตู้เสื้อผ้า',
      'พัดลม'
    ],
    amenities: [
      'ห้องน้ำรวม',
      'ห้องซักรีด',
      'ห้องอ่านหนังสือ',
      'Wi-Fi'
    ]
  },
  {
    id: '5',
    title: 'ไม่ปรับอากาศชาย-หญิง',
    description: 'ห้องพักมาตรฐาน พร้อมเฟอร์นิเจอร์ครบครัน ห้องน้ำรวม',
    price: 10000,
    building: 'old',
    features: [
      'เตียงนอนพร้อมที่นอน',
      'โต๊ะทำงานพร้อมเก้าอี้',
      'ตู้เสื้อผ้า',
      'พัดลม'
    ],
    amenities: [
      'ห้องน้ำรวม',
      'ห้องซักรีด',
      'ห้องอ่านหนังสือ',
      'Wi-Fi'
    ]
  },
  {
    id: '6',
    title: 'ปรับอากาศหญิงล้วน',
    description: 'ห้องพักมาตรฐาน พร้อมเฟอร์นิเจอร์ครบครัน มีห้องน้ำในตัว',
    price: 10000,
    building: 'old',
    features: [
      'เตียงนอนพร้อมที่นอน',
      'โต๊ะทำงานพร้อมเก้าอี้',
      'ตู้เสื้อผ้า',
      'เครื่องปรับอากาศ',
      'ห้องน้ำในตัว'
    ],
    amenities: [
      'ห้องซักรีด',
      'ห้องอ่านหนังสือ',
      'ระบบรักษาความปลอดภัย 24 ชม.',
      'Wi-Fi'
    ]
  }
];

export const getNewDorms = () => dorms.filter(dorm => dorm.building === 'new');
export const getOldDorms = () => dorms.filter(dorm => dorm.building === 'old');

//end of landing page
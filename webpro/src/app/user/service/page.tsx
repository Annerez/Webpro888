"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import SidebarUser from '@/components/SidebarUser';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  Clock, 
  Wrench, 
  PhoneCall, 
  ClipboardCheck, 
  Shield, 
  Lightbulb, 
  Snowflake, 
  WashingMachine, 
  Trash, 
  ChevronRight,
  Check,
  Package,
  X 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Service type definition
type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'housekeeping' | 'maintenance';
  estimatedTime: string;
  priceRange?: string;
};

// Available time slots
const timeSlots = [
  "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"
];

const ServicePage = () => {
  // List of available services
  const services: Service[] = [
    {
      id: 1,
      title: "ทำความสะอาดห้อง",
      description: "บริการทำความสะอาดทั่วไป ดูดฝุ่น ถูพื้น เช็ดกระจก จัดเตียง",
      icon: <PhoneCall className="h-8 w-8" />,
      category: 'housekeeping',
      estimatedTime: "1-2 ชั่วโมง",
    },
    {
      id: 2,
      title: "ซักผ้า/รีดผ้า",
      description: "บริการซักและรีดผ้า สำหรับเสื้อผ้าไม่เกิน 5 กิโลกรัม",
      icon: <WashingMachine className="h-8 w-8" />,
      category: 'housekeeping',
      estimatedTime: "3-4 ชั่วโมง",
      priceRange: "฿150-300"
    },
    {
      id: 3,
      title: "ทำความสะอาดห้องน้ำ",
      description: "บริการทำความสะอาดห้องน้ำอย่างละเอียด ขัดพื้น ล้างสุขภัณฑ์",
      icon: <PhoneCall className="h-8 w-8" />,
      category: 'housekeeping',
      estimatedTime: "1 ชั่วโมง",
    },
    {
      id: 4,
      title: "ซ่อมอุปกรณ์ไฟฟ้า",
      description: "แก้ไขปัญหาไฟฟ้า ปลั๊ก สวิตช์ หลอดไฟ และอุปกรณ์ไฟฟ้าทั่วไป",
      icon: <Lightbulb className="h-8 w-8" />,
      category: 'maintenance',
      estimatedTime: "30-60 นาที",
    },
    {
      id: 5,
      title: "ซ่อมเครื่องปรับอากาศ",
      description: "ตรวจเช็คและซ่อมแซมเครื่องปรับอากาศที่มีปัญหาทั้งระบบทำความเย็นและระบายน้ำ",
      icon: <Snowflake className="h-8 w-8" />,
      category: 'maintenance',
      estimatedTime: "1-2 ชั่วโมง",
    },
    {
      id: 6,
      title: "ซ่อมอุปกรณ์ประปา",
      description: "แก้ไขปัญหาน้ำรั่ว ท่อตัน ก๊อกน้ำ ชักโครก และอุปกรณ์ประปาทั่วไป",
      icon: <Wrench className="h-8 w-8" />,
      category: 'maintenance',
      estimatedTime: "30-60 นาที",
    },
    {
      id: 7,
      title: "กำจัดแมลง",
      description: "บริการฉีดสเปรย์กำจัดแมลงและสัตว์ที่เป็นพาหะนำโรค",
      icon: <Shield className="h-8 w-8" />,
      category: 'maintenance',
      estimatedTime: "30-45 นาที",
    },
    {
      id: 8,
      title: "ขนของเข้า",
      description: "บริการขนของเข้าห้องพักแบบครบวงจร",
      icon: <Package className="h-8 w-8" />,
      category: 'housekeeping',
      estimatedTime: "15-30 นาที",
    },
  ];

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  // Handle service selection
  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
    setSelectedDate("");
    setSelectedTime("");
    setNote("");
    setBookingConfirmed(false);
  };

  // Handle booking submission
  const handleBookingSubmit = () => {
    setIsDialogOpen(false);
    setIsConfirmationOpen(true);
  };

  // Handle booking confirmation
  const handleConfirmBooking = () => {
    setIsConfirmationOpen(false);
    setBookingConfirmed(true);
    // Here you would typically make an API call to save the booking
  };

  // Generate a list of dates for the next 7 days
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const dateString = date.toISOString().split('T')[0];
      const readableDate = date.toLocaleDateString('th-TH', { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long',
        year: 'numeric'
      });
      
      dates.push({ value: dateString, label: readableDate });
    }
    
    return dates;
  };

  const availableDates = generateAvailableDates();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1">
        <SidebarUser />
        
        <main className="flex-1 p-6 pt-16 md:pt-6 overflow-auto">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0 flex items-center">
                <ClipboardCheck className="w-6 h-6 mr-2 text-primary" />
                บริการหอพัก
              </h1>
            </div>
            
            {/* Service Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Housekeeping Services */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl flex items-center">
                    <PhoneCall className="w-5 h-5 mr-2 text-blue-500" />
                    บริการแม่บ้าน
                  </CardTitle>
                  <CardDescription>
                    บริการทำความสะอาดและดูแลห้องพัก
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {services
                    .filter(service => service.category === 'housekeeping')
                    .map(service => (
                      <Button
                        key={service.id}
                        variant="outline"
                        className="h-auto p-4 justify-start flex flex-col items-start text-left hover:bg-blue-50 transition-colors border-blue-100"
                        onClick={() => handleServiceSelect(service)}
                      >
                        <div className="flex items-center w-full mb-2">
                          <div className="bg-blue-100 p-2 rounded-md mr-3">
                            {service.icon}
                          </div>
                          <span className="font-medium flex-1">{service.title}</span>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-500 mb-1">{service.description}</p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>ระยะเวลาโดยประมาณ: {service.estimatedTime}</span>
                          {service.priceRange && (
                            <>
                              <span className="mx-2">•</span>
                              <span>ราคา: {service.priceRange}</span>
                            </>
                          )}
                        </div>
                      </Button>
                    ))}
                </CardContent>
              </Card>
              
              {/* Maintenance Services */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-orange-500" />
                    บริการซ่อมบำรุง
                  </CardTitle>
                  <CardDescription>
                    บริการซ่อมแซมและแก้ไขปัญหาในห้องพัก
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {services
                    .filter(service => service.category === 'maintenance')
                    .map(service => (
                      <Button
                        key={service.id}
                        variant="outline"
                        className="h-auto p-4 justify-start flex flex-col items-start text-left hover:bg-orange-50 transition-colors border-orange-100"
                        onClick={() => handleServiceSelect(service)}
                      >
                        <div className="flex items-center w-full mb-2">
                          <div className="bg-orange-100 p-2 rounded-md mr-3">
                            {service.icon}
                          </div>
                          <span className="font-medium flex-1">{service.title}</span>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-500 mb-1">{service.description}</p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>ระยะเวลาโดยประมาณ: {service.estimatedTime}</span>
                          {service.priceRange && (
                            <>
                              <span className="mx-2">•</span>
                              <span>ราคา: {service.priceRange}</span>
                            </>
                          )}
                        </div>
                      </Button>
                    ))}
                </CardContent>
              </Card>
            </div>
            
            {/* Booking Confirmation Message */}
            {bookingConfirmed && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-green-800">การจองสำเร็จ!</h3>
                  <p className="text-green-700">
                    คุณได้จองบริการ "{selectedService?.title}" สำหรับวันที่ {selectedDate && new Date(selectedDate).toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })} เวลา {selectedTime} น. โดยจะมีเจ้าหน้าที่มาให้บริการตามเวลาที่นัดหมาย
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
      
      {/* Service Booking Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>จองบริการ: {selectedService?.title}</DialogTitle>
            <DialogDescription>
              เลือกวันและเวลาที่ต้องการรับบริการ
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="booking-date" className="text-right">
                วันที่
              </Label>
              <select
                id="booking-date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled>เลือกวันที่</option>
                {availableDates.map((date) => (
                  <option key={date.value} value={date.value}>
                    {date.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="booking-time" className="text-right">
                เวลา
              </Label>
              <select
                id="booking-time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!selectedDate}
              >
                <option value="" disabled>เลือกเวลา</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time} น.
                  </option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="booking-note" className="text-right pt-2">
                หมายเหตุ
              </Label>
              <textarea
                id="booking-note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="รายละเอียดเพิ่มเติม เช่น จุดที่ต้องการให้เน้นเป็นพิเศษ หรือข้อมูลที่ต้องการแจ้ง"
                className="col-span-3 flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
            >
              ยกเลิก
            </Button>
            <Button
              onClick={handleBookingSubmit}
              disabled={!selectedDate || !selectedTime}
              className="bg-primary hover:bg-primary/90"
            >
              ยืนยันการจอง
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Confirmation Dialog */}
      <AlertDialog open={isConfirmationOpen} onOpenChange={setIsConfirmationOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>ยืนยันการจองบริการ</AlertDialogTitle>
            <AlertDialogDescription>
              คุณต้องการจองบริการ "{selectedService?.title}" ในวันที่ {selectedDate && new Date(selectedDate).toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })} เวลา {selectedTime} น. ใช่หรือไม่?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmBooking}>
              ยืนยัน
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ServicePage;
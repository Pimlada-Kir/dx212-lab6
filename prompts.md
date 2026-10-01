// A1

function calculateTaxiFare(distanceKm) {
  const baseFare = 35;
  const ratePerKm = 6;
  
  if (distanceKm <= 0) return 0;
  
  const totalFare = baseFare + (distanceKm * ratePerKm);
  return totalFare;
}

// ตัวอย่างการใช้งาน (ระยะทาง 10 กิโลเมตร)
console.log(calculateTaxiFare(10)); // Output: 95

// A2

/**
 * คำนวณค่าโดยสารรถ NGV ในมหาวิทยาลัย
 * @param {number} distanceKm - ระยะทาง (กิโลเมตร)
 * @returns {number} ค่าโดยสาร (บาท)
 */
const calcFare = (distanceKm) => {
  // ตรวจสอบว่ากรอกข้อมูลถูกต้องและไม่เป็นค่าติดลบหรือไม่
  if (typeof distanceKm !== 'number' || isNaN(distanceKm) || distanceKm < 0) {
    return 0;
  }

  // ปัดเศษระยะทางขึ้นเป็นจำนวนเต็ม
  const totalKm = Math.ceil(distanceKm);

  // ถ้าระยะทางไม่เกิน 2 กม. แรก คิด 10 บาท (ถ้าระยะทางเป็น 0 คิด 0 บาท)
  if (totalKm === 0) return 0;
  if (totalKm <= 2) return 10;

  // 2 กม. แรก 10 บาท + กม. ถัดไป คิดกิโลเมตรละ 2 บาท
  return 10 + (totalKm - 2) * 2;
};

// ทดสอบ 3 กรณี
console.log(calcFare(1.5)); // ผลลัพธ์: 10 (1.5 กม. ปัดขึ้นเป็น 2 กม. คิด 10 บาท)
console.log(calcFare(2));   // ผลลัพธ์: 10 (2 กม. พอดี คิด 10 บาท)
console.log(calcFare(7.2)); // ผลลัพธ์: 22 (7.2 กม. ปัดขึ้นเป็น 8 กม. -> 10 + (6 * 2) = 22 บาท)



## Part A2 - calcFare
**Prompt:** คุณคือนักพัฒนา JavaScript อาวุโส เขียนฟังก์ชัน calcFare...
**ผลลัพธ์ย่อ:** ได้ฟังก์ชันคำนวณค่าโดยสาร NGV พร้อม console.log ทดสอบ 3 กรณี
**ตรวจแล้ว:** ใช้ได้
**รอบที่ iterate:** 1

## Part B - Code Review
**Prompt:** รีวิวโค้ดนี้ในฐานะ senior developer...
**ผลลัพธ์ย่อ:** ได้คำแนะนำเรื่อง Naming Conventions, Scope, และ Type Safety
**ตรวจแล้ว:** แก้ไขชื่อตัวแปรและฟังก์ชันให้สื่อความหมายเรียบร้อย

## Part C - Debugging
**Prompt:** สั่งดีบั๊กบั๊ก 2 จุด (filter ลืม return และ reduce ลืมใส่ initial value)
**ผลลัพธ์ย่อ:** แก้ไขเรื่อง arrow function return และใส่ค่าเริ่มต้น 0 ให้ reduce
**ตรวจแล้ว:** ใช้ได้ ผลลัพธ์ตรงตามที่คาดหวัง

## Part D - User Story
**Prompt:** As a นักศึกษา I want โพสต์ลงรายการของที่ไม่ใช้แล้วเพื่อส่งต่อ...
**ผลลัพธ์ย่อ:** ได้ฟังก์ชัน manageExchange สำหรับ POST และ SEARCH ข้อมูล
**ตรวจแล้ว:** ใช้ได้ ผ่านทั้ง 3 กรณีทดสอบ
**รอบที่ iterate:** 1
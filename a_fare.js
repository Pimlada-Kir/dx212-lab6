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
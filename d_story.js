// ตัวอย่างข้อมูลจำลอง (Mock Data)
const itemBoard = [
  { id: 1, title: "หนังสือเรียน JS", category: "book", status: "available" },
  { id: 2, title: "หูฟัง Bluetooth", category: "electronics", status: "available" },
  { id: 3, title: "เสื้อกันหนาว", category: "clothes", status: "swapped" },
  { id: 4, title: "กล่องสุ่มโมเดล", category: "toy", status: "available" }
];

/**
 * ฟังก์ชันสำหรับจัดการรายการแลกเปลี่ยนของ
 * @param {Array} items - รายการของทั้งหมด
 * @param {Object} action - Action ที่ต้องการทำ { type: 'POST'|'SEARCH', payload: object|string }
 */
const manageExchange = (items, action) => {
  if (!Array.isArray(items) || !action) return [];

  // กรณีโพสต์ของที่ไม่ใช้แล้วเพิ่มลงรายการ
  if (action.type === "POST") {
    const newItem = {
      id: items.length + 1,
      ...action.payload,
      status: "available"
    };
    return [...items, newItem];
  }

  // กรณีค้นหาของที่ต้องการแลกเปลี่ยน (ค้นจากชื่อหรือหมวดหมู่ และต้องพร้อมแลกอยู่)
  if (action.type === "SEARCH") {
    const keyword = (action.payload || "").toLowerCase().trim();
    if (!keyword) return [];

    return items.filter(
      item =>
        item.status === "available" &&
        (item.title.toLowerCase().includes(keyword) || item.category.toLowerCase().includes(keyword))
    );
  }

  return items;
};

// ==========================================
// console.log ทดสอบ 3 กรณี
// ==========================================

// กรณีที่ 1: โพสต์รายการของที่ไม่ใช้แล้วเพิ่มลงระบบ (การใช้งานปกติ)
console.log("--- กรณีที่ 1: โพสต์ของใหม่ ---");
const updatedBoard = manageExchange(itemBoard, {
  type: "POST",
  payload: { title: "พัดลมตั้งโต๊ะ", category: "electronics" }
});
console.log(updatedBoard);

// กรณีที่ 2: ค้นหาของที่กำลังต้องการแลกเปลี่ยน (การใช้งานปกติ)
console.log("\n--- กรณีที่ 2: ค้นหาของด้วยคำว่า 'book' ---");
const searchResults = manageExchange(itemBoard, {
  type: "SEARCH",
  payload: "book"
});
console.log(searchResults);

// กรณีที่ 3 (กรณีขอบ / Edge Case): ค้นหาด้วยค่าว่างเปล่า หรือค้นหาของที่มีสถานะ 'swapped' ไปแล้ว
console.log("\n--- กรณีที่ 3 (Edge Case): ค้นหาด้วยข้อความว่างเปล่า หรือค้นหาของที่แลกไปแล้ว ---");
const emptySearch = manageExchange(itemBoard, {
  type: "SEARCH",
  payload: "   "
});
console.log("ผลการค้นหาด้วยค่าว่างเปล่า (ต้องได้ []):", emptySearch);

const swappedSearch = manageExchange(itemBoard, {
  type: "SEARCH",
  payload: "เสื้อกันหนาว"
});
console.log("ผลการค้นหาของที่ถูกแลกไปแล้ว (ต้องได้ []):", swappedSearch);
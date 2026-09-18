const calcFare = (distanceKm) => {
  if (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm < 0) {
    return 0;
  }

  const distance = Math.ceil(distanceKm);

  if (distance <= 2) {
    return 10;
  }

  return 10 + (distance - 2) * 2;
};

// ทดสอบ 3 กรณี
console.log(calcFare(1.5)); // 10
console.log(calcFare(2));   // 10
console.log(calcFare(7.2)); // 22
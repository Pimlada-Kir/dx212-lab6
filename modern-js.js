function greet(name, faculty) {
    return "สวัสดี" + name + "จากคณะ" + faculty + "!" ;
}

const greet_modern = (name, faculty) => {`สวัสดี${name}จากคณะ${faculty}!`};

console.log(greet("Aom", "IT"));
console.log(greet_modern("Aom", "IT"));
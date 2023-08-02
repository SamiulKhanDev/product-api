const category = [
  "Project Management",
  "Data ",
  "Customer",
  "Development",
  "Marketing",
  "Finance",
  "Communication",
  "Sales",
  "Business",
  "IT",
  "Human Resources",
  "Operations Management",
];
const subcategory = [
  [
    "Collaboration",
    "Task Management",
    "Productivity",
    "Presentation",
    "Time Management",
  ],
  [
    "Cloud Computing",
    "Cloud Storage",
    "Data Analytics",
    "Cloud And Data Management",
    "Document Management",
  ],
  ["CRM", "Lead Management", "Customer Experience", "Survey"],
  [
    "Web Development",
    "No-Code Development",
    "Website Builder",
    "Design",
    "Video",
    "Application Development",
    "Content Management System",
    "Educational",
  ],
  [
    "Email Marketing",
    "Content Marketing",
    "SEO",
    "Marketing Automation",
    "Social Media",
    "Growth Marketing",
    "Translation",
    "Mobile Marketing",
  ],
  ["Payments", "Online Banking", "Accounting", "Investment Management"],
  ["Customer Support", "Call Centers", "Video Conferencing"],
  ["Prospecting", "E Commerce"],
  [
    "Digital Signature",
    "Company Formation",
    "Legal",
    "Business Process Management",
    "Scheduling",
    "ERP",
    "Business Intelligence",
  ],
  ["Application Monitoring", "Security", "IT Management", "Remote Desktop"],
  [
    "Recruitment",
    "Payroll Management",
    "Employee Engagement",
    "Applicant Tracking",
  ],
  ["Contract Management", "Inventory Management", "Field Service Management"],
];

const products = [];
function generator() {
  for (let i = 0; i < category.length; i++) {
    for (let j = 0; j < subcategory[i].length; j++) {
      const randomPrice = Math.floor(Math.random() * 100) + 1;
      const randomDiscount = Math.floor(Math.random() * 30) + 1;
      const randomCategoryIndex = i;
      const randomSubCategoryIndex = j;

      const reviews = [];

      const count = Math.floor(Math.random() * 20);
      for (let i = 0; i < count; i++) {
        reviews.push({
          name: `Human ${Math.floor(Math.random() * 1000)}`,
        });
      }

      const obj = {
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        price: randomPrice * 10,
        discount: randomDiscount,
        category: category[randomCategoryIndex],
        subcategory: subcategory[randomCategoryIndex][randomSubCategoryIndex],
        reviews,
      };

      products.push(obj);
    }
  }
}
generator();
// console.log(JSON.stringify(products));

const map1 = {};
for (let value of category) {
  const key = value.split(" ").join("").toLowerCase();
  map1[key] = value;
}
const map2 = {};
for (let sub of subcategory) {
  for (let value of sub) {
    const key = value.split(" ").join("").toLowerCase();
    map2[key] = value;
  }
}
module.exports = {
  category: map1,
  subcategory: map2,
};

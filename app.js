const catalog = [
  //shoes
  { category: "shoes", name: "Nike Sports Shoes", price: 115, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqde9iOITqyOsVrworl2l1rVeZboYGjuPObrzN0lPU-g&s=10" },
  { category: "shoes", name: "Adidas Sports Shoes", price: 100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwA6NrjOx-iqut7zvxqL7pPfhL-d_xjgnL5u4QW0wHA&s=10" },
  { category: "shoes", name: "Crocs", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgieGWMDLV9GEvgw-YnCxMH9975SBKx10cW9iUnmycbg&s" },
  { category: "shoes", name: "Skechers", price: 80, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQOQmLuHX8wXAfxdGntRl6_G3KWq-na2I9xerLDmbvQ&s=10" },
  //hoodie
  { category: "hoodies", name: "Supreme Hoodie", price: 160, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliTFDbryvZkRf9Jh0uCXTLpTN8X6MlbRQqFg9SpEHoA&s=10" },
  { category: "hoodies", name: "Essentials Hoodie", price: 160, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7CQ8lLUkiY95Jt5LuZ9MOQSTfGNPARfKX-xcoA6b0g&s=10" },
  { category: "hoodies", name: "Balenciaga Hoodie", price: 1600, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQGbNzEa9x7VIVTN7zGme0IGR1N8T7qdgumOHd4Impg&s=10" },
  { category: "hoodies", name: "Champion Hoodie", price: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPGXt2HxqMed2hE1QaPFNbwrwTLJEe-XCYxeUAE4Uag&s=10" },
  //pants
  { category: "pants", name: "Levi's Pants", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoOD8T4HUEsIkSDVOmKsTr5_BpFf3370erDS5gy3aUQ&s" },
  { category: "pants", name: "Lululemon Pants", price: 130, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-6hIss10iX710VRxgJil7_hzNQRzth92uRRGThTELA&s=10" },
  { category: "pants", name: "Banana Republic Pants", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzRKuapvMpJJ8FHHVENmEEbyEV4xdxLTGZo9jEoWzuw&s=10" },
  { category: "pants", name: "J.Crew Pants", price: 100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIniNCUmTAWE5ckiJWYOTcW_c5ei3Ix63UTcXyxdQv1A&s=10" },
  //graphic tees
  { category: "graphic-tees", name: "Uniqlo Graphic Tee", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfWCqwFF0U7uCKus9zvORcP5JYKHfKPuw8L9GoQLnxw&s=10" },
  { category: "graphic-tees", name: "Hot Topic Graphic Tee", price: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAydtZh1bV3Rl_m7gjijiwyohWKrAQWag82NJal9oGw&s=10" },
  { category: "graphic-tees", name: "Represent Graphic Tee", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQaYZzBwBnAEz_rPn6pCJVPVu59qmFnaeDydwKkQo1ow&s=10" },
  { category: "graphic-tees", name: "Tillys Graphic Tee", price: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakspTxRPEnWPtlJKmqxil-0ObYYAF9RIYtznlKOARlQ&s=10" },
  //socks
  { category: "socks", name: "Uniqlo Socks", price: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihwYT7wRZr3pSXCr4_f2UZt0-xEnlLJYnmvzj0lQnAw&s=10" },
  { category: "socks", name: "Dickies Socks", price: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgV6zXACsWwPypgh8gsmbUNpjI7PJsTTm-hSHwi94inQ&s=10" },
  { category: "socks", name: "Nike Socks", price: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDm-4wdqnTpI8ASdfsdHSQ1XYGZ9JHGlmS3ucJl4xgw&s=10" },
  { category: "socks", name: "Bombas Socks", price: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRfE6MWWl5RfxHgq7p1YkWC64gDdFDIBTLUg9y7Azfw&s" },
];

function inject() {
  const container = document.querySelector(".container");

  catalog.forEach((item) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card">
          <h2 class="name">${item.name}</h2>
          <p class="category">Category: ${item.category}</p>
          <p class="price">Price: $${item.price}</p>
          <img class="image" src="${item.image}" alt="">
          <button class="btn">Add to Cart</button>
        </div>
      `,
    );
  });
}

inject();

const buttons = document.querySelectorAll(".filter .button");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.currentTarget.dataset.category);
  }),
);

let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
    }
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];

// Задача:
// Создать функцию - конструктор Product, которая принимает на вход аргументы category, type, price и присваивать их полям объекта
//  c соответствующим названием ключа.

// Каждому объекту созданному с помощью функции - конструктор Product доступна функция render, которая возвращает строку вида: 

// Все заданные продукты создаем с помощью функции - конструктор Product и для всех вызываем метод render().

function Product(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
};

Product.prototype.render = function () {
    return `
    <tr>
	<td><img src="images/${this.category}/${this.type}.svg" alt="grater" width="50" height="50"></td>
	<td>${this.type}</td>
	<td>${this.price} USD</td>
    </tr>`
};

const html = [];
function filters(mass, category) {
    mass
        .filter(function (object, i) {
            if (Array.isArray(object.price) === true) {
                return mass[i].price = object.price.join("-");
            } else {
                return object;
            };
        })
        .map(function (object) {
            return new Product(category, object.type, object.price);
        })
        .forEach(function (object) {
            html.push(object.render());
        });
};

filters(kitchenProducts, "kitchen");
filters(devicesProducts, "devices");
filters(cosmeticsProducts, "cosmetics");

document.write(`
<table class="table" border="1" cellspacing="0" cellpadding="0">
<thead> 
<tr> 
<th>Image</th> 
<th>Name</th> 
<th>Price</th> 
</tr> 
</thead> 
<tbody>${html.join("")}
</tbody>
</table>`);
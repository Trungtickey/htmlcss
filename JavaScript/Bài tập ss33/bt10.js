class product{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
        // this.expiryDate = expiryDate;
    }
}
class employee{
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class invoice {
    constructor(products, quantities){
        this.products = products;
        this.quantities = quantities;
    }
    calculateTotal(){
        let total=0;
        for(let i = 0; i < this.products.length; i++){
            total += this.products[i].price * this.quantities[i];
        }
        return total;
    }
}
class store{
    constructor(){
        this.products = [];
        this.employees = [];
        this.invoices=[];
    }
    addProduct(product){
        this.products.push(product);
    }
    addEmployee(employee){
        this.employees.push(employee);
    }
    addInvoice(invoice){
        this.invoices.push(invoice);
    }
    getTotalRevenue(){
        let totalRevenue = 0;
        for(let invoice of this.invoices){
            totalRevenue += invoice.calculateTotal();
        }
        return totalRevenue;
    }
    displayOverView(){
        console.log("Số lượng sản phẩm: " + this.products.length);
        console.log("Số lượng nhân viên: " + this.employees.length);
        console.log("Tổng doanh thu: $" + this.getTotalRevenue());
    }
    checkDate(){
        const today = new Date();
        const productNearDate = [];
        for(let product of this.products){
            const expiryDate = new Date(product.expiryDate);
            const timeDiff = expiryDate.getTime() - today.getTime();
            const daysDiff = Math.ceil(timeDiff/(1000 * 3600 * 24));
            if(daysDiff <= 7){ // Sản phẩm còn 7 ngày nữa là hết hạn
                productNearDate.push(product);
            }
        }
        return productNearDate;
    }
}
const cuaHang = new store();

const product1 = new product(1, "Sản phẩm 1", 10, "28/03/2004");
const product2 = new product(2, "Sản phẩm 2", 20, "28/05/2004");
const product3 = new product(3, "Sản phẩm 3", 15, "15/03/2024");
cuaHang.addProduct(product1);
cuaHang.addProduct(product2);
cuaHang.addProduct(product3);

const employee1 = new employee(1, "Nhân viên A", 20);
const employee2 = new employee(2, "Nhân viên B", 35);
cuaHang.addEmployee(employee1);
cuaHang.addEmployee(employee2);

const invoice1 = new invoice([product1, product2], [2, 3]);
const invoice2 = new invoice([product2], [5]);
cuaHang.addInvoice(invoice1);
cuaHang.addInvoice(invoice2);

cuaHang.displayOverView();

const productsNearDate = cuaHang.checkDate();
    if (productsNearDate.length > 0) {
        console.log("Sản phẩm sắp hết hạn sử dụng:");
        for (let product of productsNearDate) {
            console.log("- " + product.name + " (Hết hạn vào ngày " + product.expiryDate + ")");
        }
    } else {
        console.log("Không có sản phẩm nào sắp hết hạn sử dụng.");
    }
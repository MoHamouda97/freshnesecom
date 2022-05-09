export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    quantity: number;

    constructor(obj?: Product, quantity: number = 1) {
        this.id = obj?.id || 0;
        this.title = obj?.title || '';
        this.description = obj?.description || '';
        this.price = obj?.price || 0;
        this.discountPercentage = obj?.discountPercentage || 0;
        this.rating = obj?.rating || 0;
        this.stock = obj?.stock || 0;
        this.brand = obj?.brand || '';
        this.category = obj?.category || '';
        this.thumbnail = obj?.thumbnail || '';
        this.images = obj?.images || [];
        this.quantity = +quantity;
    }
}
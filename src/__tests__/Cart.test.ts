import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card must contain 1 product', () => {
  const cart = new Cart();
  cart.add(new Movie(1010, 'Avengers', 1500, 2012, 'USA', 'Avengers Assemble!', 'fantasy, action, adventure', '02:17'));

  expect(cart.items.length).toBe(1);
});

test('method totalSum must calculate sum of prices in cart ', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1010, 'Avengers', 1500, 2012, 'USA', 'Avengers Assemble!', 'fantasy, action, adventure', '02:17'));
  
    expect(cart.sum()).toBe(4400);
});

test('method sumSale must calculate sum with sale of prices in cart ', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1010, 'Avengers', 1500, 2012, 'USA', 'Avengers Assemble!', 'fantasy, action, adventure', '02:17'));
  
    expect(cart.sumSale(0.2)).toBe(3520);
});

test('method deleteId must delete prodact from cart ', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.deleteId(1008);
  
    expect(cart.items.length).toBe(1);
});


import { Product } from '../model/Iproduct';
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class ProductService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 1,
        name: 'Apple iPhone XR',
        price: '22,300',
        rate: 'ขายดีมาก',
        des: 'ระบบปฏิบัติการ iOS 12',
        img: '//th-test-11.slatic.net/original/b0e83f53f0efa36cad734d4da49543bf.jpg_120x120q80.jpg_.webp'
      },
      {
        id: 2,
        name: 'Apple iPhone XR',
        price: '22,300',
        rate: 'ขายดีมาก',
        des: 'ระบบปฏิบัติการ iOS 12',
        img: '//th-test-11.slatic.net/original/b0e83f53f0efa36cad734d4da49543bf.jpg_120x120q80.jpg_.webp'
      },
      {
        id: 3,
        name: 'Apple iPhone XR',
        price: '22,300',
        rate: 'ขายดีมาก',
        des: 'ระบบปฏิบัติการ iOS 12',
        img: '//th-test-11.slatic.net/original/b0e83f53f0efa36cad734d4da49543bf.jpg_120x120q80.jpg_.webp'
      },
      {
        id: 4,
        name: 'Apple iPhone XR',
        price: '22,300',
        rate: 'ขายดีมาก',
        des: 'ระบบปฏิบัติการ iOS 12',
        img: '//th-test-11.slatic.net/original/b0e83f53f0efa36cad734d4da49543bf.jpg_120x120q80.jpg_.webp'
      },
      {
        id: 5,
        name: 'Apple iPhone XR',
        price: '22,300',
        rate: 'ขายดีมาก',
        des: 'ระบบปฏิบัติการ iOS 12',
        img: '//th-test-11.slatic.net/original/b0e83f53f0efa36cad734d4da49543bf.jpg_120x120q80.jpg_.webp'
      },
    ];
    return { products };
  }

}

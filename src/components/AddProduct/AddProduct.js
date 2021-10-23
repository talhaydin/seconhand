import React from 'react';
import './AddProduct.scss';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddProduct({ categories }) {
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [newProduct, setNewProduct] = useState({
    price: 0,
    imageUrl: 'string',
    title: '',
    status: {
      title: 'eski',
      id: 'pejnzB7dQnqf9Z9xyfE0',
    },
    color: {
      title: 'pembe',
      id: 'c4nOCfWbyBlk8wPf0QLb',
    },
    brand: {
      title: 'pull&bear',
      id: '7lGYUTwVdJm3Dspwy5Ps',
    },
    category: {
      title: 'sweatshirt',
      id: 'DuucIuRejjB4nVJOAwbG',
    },
    description: '',
    isOfferable: true,
  });

  console.log(newProduct);

  useEffect(() => {
    fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/color/all')
      .then((response) => response.json())
      .then((data) => setColors(data));
  }, []);

  useEffect(() => {
    fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/brand/all')
      .then((response) => response.json())
      .then((data) => setBrands(data));
  }, []);

  useEffect(() => {
    fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/status/all')
      .then((response) => response.json())
      .then((data) => setStatuses(data));
  }, []);

  const addItems = () => {
    fetch('https://bootcampapi.techcs.io/api/fe/v1/product/create', {
      method: 'POST',
      headers: {
        accept: '*/*',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG91dGxvb2suY29tIiwiaWQiOiJOeGJUVm04S1RTY09KNWROOUE3ciIsImlhdCI6MTYzNTAwMjgyNX0.c9iNhGGkku7DRuRDC9el_6dCTU7YDPoGJusk_LpREnc',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: newProduct.price,
        imageUrl: newProduct.imageUrl,
        title: newProduct.title,
        status: {
          title: newProduct.status.title,
          id: newProduct.status.id,
        },
        color: {
          title: newProduct.color.title,
          id: newProduct.color.id,
        },
        brand: {
          title: newProduct.brand.title,
          id: newProduct.brand.id,
        },
        category: {
          title: newProduct.category.title,
          id: newProduct.category.id,
        },
        description: newProduct.description,
        isOfferable: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="addproduct-layout">
      <div className="addproduct-container">
        <div className="addproduct-left">
          <h2>Ürün Detayları</h2>
          <form>
            <label htmlFor="title">Ürün Adı</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Örnek: Ekose Pantolon"
              value={newProduct.title}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  title: e.target.value,
                })
              }
            />
            <label htmlFor="details">Açıklama</label>
            <input
              type="text"
              id="details"
              name="details"
              placeholder="Ürün açıklaması girin.."
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  description: e.target.value,
                })
              }
            />
          </form>
          <div className="half-forms">
            <div className="half-forms-left">
              <form>
                <label htmlFor="categories">Kategori </label>
                <select
                  id="categories"
                  name="categories"
                  className="capitalize"
                  value={newProduct.category.title}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      category: {
                        title: e.target.value,
                        id: newProduct.category.id,
                      },
                    })
                  }

                  // HERE HERE HERE HERE HERE HERE
                >
                  {categories.map((item) => (
                    <option value={item.title} key={uuidv4()}>
                      {item.title}
                    </option>
                  ))}
                </select>
                <label htmlFor="colors">Renk</label>
                <select id="colors" name="colors" className="capitalize">
                  {colors.map((item) => (
                    <option value={item.title} key={uuidv4()}>
                      {item.title}
                    </option>
                  ))}
                </select>
                <label htmlFor="title">Fiyat</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Bir fiyat girin "
                />
              </form>
            </div>
            <div className="half-forms-right">
              <form>
                <label htmlFor="brands">Marka</label>
                <select id="brands" name="brands" className="capitalize">
                  {brands.map((item) => (
                    <option value={item.title} key={uuidv4()}>
                      {item.title}
                    </option>
                  ))}
                </select>
                <label htmlFor="status">Kullanım Durumu</label>
                <select id="status" name="status" className="capitalize">
                  {statuses.map((item) => (
                    <option value={item.title} key={uuidv4()}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="addproduct-right">
          <h2>Ürün Görseli</h2>
          <form>
            <label htmlFor="productimage">Görsel Url</label>
            <input
              type="text"
              id="productimage"
              name="productimage"
              placeholder="Örnek: Ekose Pantolon"
            />
          </form>
          <button onClick={addItems}>Kaydet</button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

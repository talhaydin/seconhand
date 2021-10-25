import React from 'react';
import './ProductDetails.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';

function ProductDetails() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [purchaseModal, setPurchaseModal] = useState(false);
  const [offerModal, setOfferModal] = useState(false);

  useEffect(() => {
    fetch(`https://bootcampapi.techcs.io/api/fe/v1/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, []);

  function closeModal() {
    setPurchaseModal(false);
  }

  console.log(item);
  if (loading === true) {
    return <div>Loading data...</div>;
  } else {
    return (
      <div className="product-details-layout">
        <div className="product-details-container">
          <div className="image-container">
            <img src={item.imageUrl} alt="detailedimage"></img>
          </div>
          <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <h3>
              <div>
                Marka: <span>{item.brand.title}</span>
              </div>
              <div>
                Renk:
                <span> {item.color.title}</span>
              </div>
              <div>
                Kullanım Durumu: <span>{item.status.title}</span>
              </div>
              <div>
                <h2>{item.price},00 ₺</h2>
              </div>
              {item.isSold ? (
                <button className="btn-notonsale">
                  Bu ürün satışta değil{' '}
                </button>
              ) : (
                <button
                  className="btn-purchase"
                  onClick={() => setPurchaseModal(true)}
                >
                  Satın Al
                  <Modal
                    isOpen={purchaseModal}
                    className="purchase-modal"
                    overlayClassName="purchase-modal-overlay"
                    onRequestClose={closeModal}
                    centered
                  >
                    <div className="md-header">
                      <h2>Teklif Ver</h2>
                    </div>
                    <div className="md-body">
                      <img src={item.imageUrl} alt="small item img" />
                      <h4>{item.title}</h4>
                      <h3>{item.price},00 ₺</h3>
                    </div>
                  </Modal>
                </button>
              )}
              {item.isOfferable === true && item.isSold === false ? (
                <button className="btn-offer">Teklif Ver</button>
              ) : null}
            </h3>
            <h3>Açıklama:</h3>
            <div className="product-specs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
              dolorum! Doloribus eum deleniti quidem corrupti commodi minus
              atque consequuntur nesciunt?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;

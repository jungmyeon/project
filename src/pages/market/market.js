import { useEffect, useRef, useState } from 'react';
import './market.css'

export default function Market()
{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productList, setProductList] = useState([]);
    const [newProduct, setNewProduct] = useState("");
    const [newProductPrice, setNewProductPrice] = useState("");
    const [newProductImage, setNewProuductImage] = useState(null);
    const [newProductImagePreview, setNewProductImagePreview] = useState(null);
    const modalRef = useRef();

    const handleButtonClick = ()=>{
        setIsModalOpen(true);
    }

    const handleCloseModal = ()=>{
        setIsModalOpen(false)
        setNewProuductImage(null);
        setNewProduct("");
        setNewProductPrice("");
        setNewProductImagePreview(null);
        setNewProuductImage(null);
    }

    const handleAddProduct = ()=>{
        if(newProduct.trim() && newProductPrice.trim() && newProductImage){
            const newProductItem ={
                name: newProduct,
                price: newProductPrice,
                image: newProductImagePreview
            }
            setProductList([...productList, newProductItem]);
            setNewProduct("");
            setNewProductPrice("");
            setNewProductImagePreview(null);
            setNewProuductImage(null);
            setIsModalOpen(false);
        }
    }
    const handleImageChange = (e)=> {
        const file = e.target.files[0];
        setNewProuductImage(file);

        const reader = new FileReader();
        reader.onload = ()=>{
            setNewProductImagePreview(reader.result);
        }
        reader.readAsDataURL(file);
    }

    const handleContentClick = (e)=>{
        e.stopPropagation();
    }

    return(
        <div className='market-main'>
            <div className='market-title'>
            장터 게시판
            </div>
            <div className='market-list'>
                <p>오늘의 상품</p>
                <button onClick={handleButtonClick}>등록</button>
            </div>
            <div className='productlist-grid'>
                {productList.map((product, index)=>(
                    <div key={index} className='productlist'>
                        <img src={product.image} alt={product.name} className='productlist-img'/>
                        <div>
                        <h3>{product.name}</h3> 
                        <p>{product.price}원</p>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && (<div className='modal'onClick={handleCloseModal}>
                <div className='modal-content'onClick={handleContentClick} >
                    <div className='close' onClick={handleCloseModal}>&times;</div>
                    <h2>상품 등록</h2>
                    <div className='modal-content-product'>
                    <input type='text' value={newProduct} onChange={(e)=> setNewProduct(e.target.value)} placeholder='상품 이름을 입력하세요'/>
                    <input type='number' value={newProductPrice} onChange={(e)=> setNewProductPrice(e.target.value)} placeholder='가격'/>
                    <br/><br/>
                    <input type='file' onChange={handleImageChange}/>
                    {newProductImagePreview && <img src={newProductImagePreview} alt='상품 미리보기' style={{maxWidth:'100px', maxHeight:'100px'}}/>}
                    </div>
                    <br/>
                    <button onClick={handleAddProduct}>등록</button>
                </div>
            </div>)}
        </div>
    )
}
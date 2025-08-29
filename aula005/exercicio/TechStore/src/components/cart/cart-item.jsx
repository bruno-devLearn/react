/* 
<div className="item">
    <div className="img">
        <img src="#" />
    </div>
    <div className="characteristics">
        <h3>Eyeshadow Palette with Mirror</h3>
        <span>$19.99</span>
        <div className="actions">
            <div className="count">
                <button className="decrease">-</button>
                <span className="value">1</span>
                <button className="increase">+</button>
            </div>
            <div className="delete">Remove</div>
        </div>
    </div>
</div>
*/

export function CartItem() {
    return (
        <div className="cart-item">
            <div className="itens"></div>

            <div className="finish">
                <div className="purchase">
                    <span className="text">Total:</span>
                    <span className="value"></span>
                </div>
                <div className="finish-btn">
                    <button className="conclude">Finalize Purchase</button>
                </div>
            </div>
        </div>
    );
}

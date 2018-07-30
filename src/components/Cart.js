import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import { CartContextConsumer } from '../containers/CartProvider';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

function Cart() {
  return (
    <CartContextConsumer>
      {({ items, totalCount, totalSum }) => (
        <Card className="my-4">
          <CardHeader>
            Your shopping cart
          </CardHeader>
          <CardBody>
            {(items.length > 0) ? (
              items.map(product => (
                <CartItem key={`cartItem-${product.id}`} product={product} />
              ))
            ) : (
              <p className="text-muted">
                Cart is empty
              </p>
            )}
          </CardBody>
          <CardFooter>
            <CartTotals count={totalCount()} sum={totalSum()} />
          </CardFooter>
        </Card>
      )}
    </CartContextConsumer>
  );
}

export default Cart;

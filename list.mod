
mod MYLIST* {
	protecting(NAT) -- predefined type: natural numbers
	[List] -- sort declaration
		
	-- signatures
	op inventory :  -> List
	op loginlist :  -> List
	op orderlist :  -> List
	
	op cons : List Nat -> List
	
	op add-to-inventory : List Nat -> List
	op add-to-cart : List Nat -> List
	op validate : List Nat -> Bool 
	op totalbill : List -> Nat 	
	
	op empty-list : -> ?Nat 	
	op firstproduct : List -> Nat
	op lastproducts : List -> List
	
	-- axioms 
	var V : Nat
	var L : List
	var E : Nat
	var S : Nat
	
	-- add product to database when user tries to sell a product
	eq add-to-inventory(inventory,V) = cons(inventory,V).
	eq add-to-inventory(cons(L,V),E) = cons(cons(L,V),E).
		
	-- validate UserId from data base
	eq validate(loginlist,V)= false .
	eq validate(cons(loginlist,V),V) = true .
	eq validate(cons(L,V),V) = true .
	eq validate(cons(L,V),E) = validate(L,E).
		
	-- add product to cart when user tries to buy any product
	eq add-to-cart(orderlist,V) = cons(orderlist,V).
	eq add-to-cart(cons(L,V),E) = cons(cons(L,V),E).
	
	-- to get first product item price
	eq firstproduct (orderlist) = empty-list . 
	eq firstproduct (cons(orderlist,V)) = V .
	eq firstproduct (cons(L,V)) = firstproduct (L) .
	
	-- to get list of product items except first one.
	eq lastproducts (orderlist) = orderlist .
	eq lastproducts (cons(orderlist,V)) = orderlist .
	eq lastproducts (cons(L,V)) = cons(lastproducts(L),V).	
	
	-- to get total bill value to proceed payment
	eq totalbill (orderlist) = 0 .
	eq totalbill (cons(orderlist,V))= V .
	eq totalbill (cons(L,V))= firstproduct (cons(L,V)) + totalbill (lastproducts (cons(L,V))) .
	
	
}

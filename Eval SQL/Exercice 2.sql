/* Requête n°1 */

    SELECT CompanyName AS Société, ContactName AS Contact, ContactTitle AS Fonction, Phone AS Téléphone 
    FROM Customers
    WHERE Country = 'FRANCE' ;


/* Requête n°2 */

    SELECT ProductName AS Produit, UnitPrice AS Prix 
    FROM products 
    JOIN suppliers ON suppliers.SupplierID = products.SupplierID 
    WHERE CompanyName = 'Exotic Liquids' ;


/* Requête n°3 */

    SELECT Companyname AS Fournisseur,COUNT(UnitsOnOrder) AS 'Nbre produits'
    FROM Suppliers
    JOIN Products ON Products.SupplierID = Suppliers.SupplierID
    WHERE Country ='France'
    GROUP BY Fournisseur
    ORDER BY COUNT(unitsonorder) DESC ;


/* Requête n°4 */

    SELECT companyname AS Client, COUNT(orderid) AS 'Nbre commandes'
    FROM customers
    JOIN orders ON orders.customerid = customers.customerid
    WHERE country = 'France'
    GROUP BY customers.customerid
    HAVING COUNT(orderid) > 10 ;


/* Requête n°5 */ 

    SELECT CompanyName AS Client,
    SUM(UnitPrice*Quantity) AS CA, Country AS Pays
    FROM Customers
    JOIN orders ON Customers.customerID=orders.customerID
    JOIN `order details` ON orders.orderID= `order details`.OrderID
    GROUP BY orders.CustomerID
    HAVING SUM(UnitPrice*Quantity)>30000
    ORDER BY SUM(UnitPrice*Quantity) DESC ;


/* Requête n°6 */

    SELECT DISTINCT customers.country AS Pays
    FROM customers
    JOIN orders ON orders.customerid = customers.customerid
    JOIN `order details` ON `order details`.orderid = orders.orderid
    JOIN products ON products.productid = `order details`.productid
    JOIN suppliers ON suppliers.supplierid = products.supplierid
    WHERE suppliers.companyname = 'Exotic Liquids'
    ORDER BY pays ;


/* Requête n°7 */

    SELECT SUM(UnitPrice*Quantity) AS 'Montant Ventes 97'
    FROM `order details`
    JOIN orders ON `order details`.orderID = orders.orderID
    WHERE year(OrderDate) = 1997 ;


/* Requête n°8 */

    SELECT MONTH(OrderDate) AS 'Mois 97', SUM(UnitPrice*Quantity) AS 'Montant Ventes 97'
    FROM `order details`
    JOIN orders ON `order details`.orderID = orders.orderID
    WHERE YEAR(OrderDate) = 1997
    group by MONTH(OrderDate); 


/* Requête n°9 */

    SELECT MAX(OrderDate) AS 'Date de dernière commande'
    FROM orders
    JOIN customers ON orders.CustomerID = customers.CustomerID
    WHERE CompanyName = 'Du monde entier' ;

/* Requête n°10 */

    SELECT ROUND(AVG(DATEDIFF(ShippedDate, OrderDate))) AS 'Délai moyen de livraison en jours' 
    FROM orders ;
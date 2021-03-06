-- Delete data for MS SQL Server
ALTER TABLE ORDERPOSITION NOCHECK CONSTRAINT FK_ORDPOS2ORDER;
ALTER TABLE OFFER NOCHECK CONSTRAINT FK_OFFER2MEAL;
ALTER TABLE OFFER NOCHECK CONSTRAINT FK_OFFER2SIDEDISH;
ALTER TABLE OFFER NOCHECK CONSTRAINT FK_OFFER2DRINK;
ALTER TABLE BILLORDERPOSITION NOCHECK CONSTRAINT FK_BILLORDPOS2BILL;
ALTER TABLE BILLORDERPOSITION NOCHECK CONSTRAINT FK_BILLORDPOS2ORDPOS;

DELETE FROM RESTAURANTTABLE;
DELETE FROM RESTAURANTORDER;
DELETE FROM PRODUCT;
DELETE FROM OFFER;
DELETE FROM ORDERPOSITION;
DELETE FROM BILL;

--Keep Staffmembers to allow authentication
--DELETE FROM STAFFMEMBER;

ALTER TABLE ORDERPOSITION CHECK CONSTRAINT FK_ORDPOS2ORDER;
ALTER TABLE OFFER CHECK CONSTRAINT FK_OFFER2MEAL;
ALTER TABLE OFFER CHECK CONSTRAINT FK_OFFER2SIDEDISH;
ALTER TABLE OFFER CHECK CONSTRAINT FK_OFFER2DRINK;
ALTER TABLE BILLORDERPOSITION CHECK CONSTRAINT FK_BILLORDPOS2BILL;
ALTER TABLE BILLORDERPOSITION CHECK CONSTRAINT FK_BILLORDPOS2ORDPOS;
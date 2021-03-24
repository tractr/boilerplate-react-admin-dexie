import dexieDataProvider from './DexieDataProvider';

export default dexieDataProvider(
  'ReactAdmin', 1,
  {
    bookmark: "++id,&owner,&place",
    comment: "++id,title,&owner,&order,restaurant",
    conversation: "++id,*participants,lastMessage,closed,closedBy,closedAt",
    conversationReport: "++id,complaint,complainant,conversation,defendant,handled,handledAt,admissible",
    menu: "++id,name,&restaurant,owner,*parts,*specials",
    menuItem: "++id,name,restaurant,owner,price,active",
    menuPart: "++id,name,restaurant,owner,*items",
    message: "++id,content,conversation,sender,recipient,readByRecipient,readByRecipientAt,notifiedRecipient,notifiedRecipientAt",
    order: "++id,readyAt,deliveredAt,customer,restaurant,owner,*items,price,ready,delivered",
    place: "++id,name,*categories,latitude,longitude,*services,owner,disabled",
    placeCategory: "++id,name",
    product: "++id,name,price,stock,disabled",
    restaurant: "++id,name,*category,latitude,longitude,owner,rating,disabled",
    restaurantCategory: "++id,name",
    service: "++id,&name",
    shoppingCartItem: "++id,&owner,&product,quantity",
    user: "++id,name,&email,role,banned",
    wishlist: "++id,&owner,*products",
  }
);

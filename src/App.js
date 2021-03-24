import * as React from "react";

import { Admin, Resource } from 'react-admin';
import dataProvider from "./data/AppDataProvider";

import { BookmarkList, BookmarkShow } from './resources/Bookmark/Read.js';
import { BookmarkCreate, BookmarkEdit } from './resources/Bookmark/Write.js';
import { CommentList, CommentShow } from './resources/Comment/Read.js';
import { CommentCreate, CommentEdit } from './resources/Comment/Write.js';
import { ConversationList, ConversationShow } from './resources/Conversation/Read.js';
import { ConversationCreate, ConversationEdit } from './resources/Conversation/Write.js';
import { ConversationReportList, ConversationReportShow } from './resources/ConversationReport/Read.js';
import { ConversationReportCreate, ConversationReportEdit } from './resources/ConversationReport/Write.js';
import { MenuList, MenuShow } from './resources/Menu/Read.js';
import { MenuCreate, MenuEdit } from './resources/Menu/Write.js';
import { MenuItemList, MenuItemShow } from './resources/MenuItem/Read.js';
import { MenuItemCreate, MenuItemEdit } from './resources/MenuItem/Write.js';
import { MenuPartList, MenuPartShow } from './resources/MenuPart/Read.js';
import { MenuPartCreate, MenuPartEdit } from './resources/MenuPart/Write.js';
import { MessageList, MessageShow } from './resources/Message/Read.js';
import { MessageCreate, MessageEdit } from './resources/Message/Write.js';
import { OrderList, OrderShow } from './resources/Order/Read.js';
import { OrderCreate, OrderEdit } from './resources/Order/Write.js';
import { PlaceList, PlaceShow } from './resources/Place/Read.js';
import { PlaceCreate, PlaceEdit } from './resources/Place/Write.js';
import { PlaceCategoryList, PlaceCategoryShow } from './resources/PlaceCategory/Read.js';
import { PlaceCategoryCreate, PlaceCategoryEdit } from './resources/PlaceCategory/Write.js';
import { ProductList, ProductShow } from './resources/Product/Read.js';
import { ProductCreate, ProductEdit } from './resources/Product/Write.js';
import { RestaurantList, RestaurantShow } from './resources/Restaurant/Read.js';
import { RestaurantCreate, RestaurantEdit } from './resources/Restaurant/Write.js';
import { RestaurantCategoryList, RestaurantCategoryShow } from './resources/RestaurantCategory/Read.js';
import { RestaurantCategoryCreate, RestaurantCategoryEdit } from './resources/RestaurantCategory/Write.js';
import { ServiceList, ServiceShow } from './resources/Service/Read.js';
import { ServiceCreate, ServiceEdit } from './resources/Service/Write.js';
import { ShoppingCartItemList, ShoppingCartItemShow } from './resources/ShoppingCartItem/Read.js';
import { ShoppingCartItemCreate, ShoppingCartItemEdit } from './resources/ShoppingCartItem/Write.js';
import { UserList, UserShow } from './resources/User/Read.js';
import { UserCreate, UserEdit } from './resources/User/Write.js';
import { WishlistList, WishlistShow } from './resources/Wishlist/Read.js';
import { WishlistCreate, WishlistEdit } from './resources/Wishlist/Write.js';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="bookmark"
      options={{ label: 'Bookmark' }}
      list={BookmarkList}
      create={BookmarkCreate}
      edit={BookmarkEdit}
      show={BookmarkShow}
    />
    <Resource
      name="comment"
      options={{ label: 'Comment' }}
      list={CommentList}
      create={CommentCreate}
      edit={CommentEdit}
      show={CommentShow}
    />
    <Resource
      name="conversation"
      options={{ label: 'Conversation' }}
      list={ConversationList}
      create={ConversationCreate}
      edit={ConversationEdit}
      show={ConversationShow}
    />
    <Resource
      name="conversationReport"
      options={{ label: 'Conversation Report' }}
      list={ConversationReportList}
      create={ConversationReportCreate}
      edit={ConversationReportEdit}
      show={ConversationReportShow}
    />
    <Resource
      name="menu"
      options={{ label: 'Menu' }}
      list={MenuList}
      create={MenuCreate}
      edit={MenuEdit}
      show={MenuShow}
    />
    <Resource
      name="menuItem"
      options={{ label: 'Menu Item' }}
      list={MenuItemList}
      create={MenuItemCreate}
      edit={MenuItemEdit}
      show={MenuItemShow}
    />
    <Resource
      name="menuPart"
      options={{ label: 'Menu Part' }}
      list={MenuPartList}
      create={MenuPartCreate}
      edit={MenuPartEdit}
      show={MenuPartShow}
    />
    <Resource
      name="message"
      options={{ label: 'Message' }}
      list={MessageList}
      create={MessageCreate}
      edit={MessageEdit}
      show={MessageShow}
    />
    <Resource
      name="order"
      options={{ label: 'Order' }}
      list={OrderList}
      create={OrderCreate}
      edit={OrderEdit}
      show={OrderShow}
    />
    <Resource
      name="place"
      options={{ label: 'Place' }}
      list={PlaceList}
      create={PlaceCreate}
      edit={PlaceEdit}
      show={PlaceShow}
    />
    <Resource
      name="placeCategory"
      options={{ label: 'Place Category' }}
      list={PlaceCategoryList}
      create={PlaceCategoryCreate}
      edit={PlaceCategoryEdit}
      show={PlaceCategoryShow}
    />
    <Resource
      name="product"
      options={{ label: 'Product' }}
      list={ProductList}
      create={ProductCreate}
      edit={ProductEdit}
      show={ProductShow}
    />
    <Resource
      name="restaurant"
      options={{ label: 'Restaurant' }}
      list={RestaurantList}
      create={RestaurantCreate}
      edit={RestaurantEdit}
      show={RestaurantShow}
    />
    <Resource
      name="restaurantCategory"
      options={{ label: 'Restaurant Category' }}
      list={RestaurantCategoryList}
      create={RestaurantCategoryCreate}
      edit={RestaurantCategoryEdit}
      show={RestaurantCategoryShow}
    />
    <Resource
      name="service"
      options={{ label: 'Service' }}
      list={ServiceList}
      create={ServiceCreate}
      edit={ServiceEdit}
      show={ServiceShow}
    />
    <Resource
      name="shoppingCartItem"
      options={{ label: 'Shopping Cart Item' }}
      list={ShoppingCartItemList}
      create={ShoppingCartItemCreate}
      edit={ShoppingCartItemEdit}
      show={ShoppingCartItemShow}
    />
    <Resource
      name="user"
      options={{ label: 'User' }}
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
      show={UserShow}
    />
    <Resource
      name="wishlist"
      options={{ label: 'Wishlist' }}
      list={WishlistList}
      create={WishlistCreate}
      edit={WishlistEdit}
      show={WishlistShow}
    />
  </Admin>
);

export default App;

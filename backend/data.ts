import { CarvedRockFitnessApi } from "@carved-rock-fitness/shared";

export const orders: CarvedRockFitnessApi.Order[] = [
  {
    id: 1001,
    orderedAt: "2020-05-26T09:00:00-0500",
    status: CarvedRockFitnessApi.OrderStatus.Pending,
    orderItems: [
      {
        productId: 900,
        productName: "XtraTuff Men's Hiking Boots",
        price: 35,
        qty: 1,
        image: "",
      },
      {
        productId: 901,
        productName: "Backpacker's Guide to Colorado Hiking Trails",
        price: 21,
        qty: 1,
        image: "",
      },
    ],
    total: 56,
    subTotal: 52,
    tax: 4,
  },
  {
    id: 1000,
    orderedAt: "2020-05-22T06:00:00-0500",
    status: CarvedRockFitnessApi.OrderStatus.Delayed,
    orderItems: [
      {
        productId: 800,
        productName: "Super Tuff III Hiking Backpack",
        price: 162,
        qty: 1,
        image: "",
      },
      {
        productId: 801,
        productName: "Hard Helmet",
        price: 17.85,
        qty: 2,
        image: "",
      },
      {
        productId: 802,
        productName: "6-pack Ultra Light Adamantium Carabiner",
        price: 59.99,
        qty: 1,
        image: "",
      },
    ],
    total: 275.69,
    subTotal: 257.69,
    tax: 18,
  },
  {
    id: 985,
    orderedAt: "2020-03-17T23:30:00-0500",
    status: CarvedRockFitnessApi.OrderStatus.Delivered,
    orderItems: [
      {
        productId: 700,
        productName: "Wingman UltraLite 3 1-Person Kayak",
        price: 699,
        qty: 1,
        image: "",
      },
    ],
    total: 724,
    subTotal: 699,
    tax: 25,
  }
];

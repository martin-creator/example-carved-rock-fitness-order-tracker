import React, { FC, useCallback } from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonLoading,
  IonRefresher,
  IonRefresherContent,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import { useQuery, queryCache } from "react-query";

import { getOrders, getOrder } from "../data/orders";
import OrderStatusBadge from "./OrderStatusBadge";
import Amount from "./Amount";
import InstallationPrompt from "./InstallationPrompt";

import "./OrdersContainer.css";

export const OrdersContainer: FC<RouteComponentProps> = (props) => {
  const { data: orders = [], status, refetch } = useQuery("orders", getOrders, {
    onSuccess(orders) {
      // prefetch orders for caching purposes, in case user goes offline at _least_ we'll have preloaded some
      // of their latest orders
      orders.forEach((order) => {
        queryCache.prefetchQuery(["order", order.id], getOrder);
      });
    },
  });
  const refreshOrders = useCallback(
    async (e) => {
      await refetch({ force: true });

      e.detail.complete();
    },
    [refetch]
  );

  if (status === "loading") {
    return <IonLoading isOpen message="Loading orders..." />;
  }

  return (
    <>
      <InstallationPrompt />
      <IonRefresher slot="fixed" onIonRefresh={refreshOrders}>
        <IonRefresherContent />
      </IonRefresher>
      <IonList>
        {orders.map((order) => (
          <IonItem
            key={order.id}
            button
            onClick={() => props.history.push("/orders/" + order.id)}
          >
            <IonLabel>
              <h1 className="orders-heading">Order #{order.id}</h1>
              <IonNote>
                {order.orderItems.length} items &bull;{" "}
                <Amount amount={order.total} />
              </IonNote>
            </IonLabel>
            <OrderStatusBadge status={order.status} slot="end" />
          </IonItem>
        ))}
      </IonList>
    </>
  );
};

export default OrdersContainer;
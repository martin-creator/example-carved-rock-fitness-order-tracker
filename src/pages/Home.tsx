import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";
import OrdersContainer from "../components/OrdersContainer";
import "./Home.css";

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Order Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Order Tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <OrdersContainer {...props} />
      </IonContent>
    </IonPage>
  );
};

export default Home;

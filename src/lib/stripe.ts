import { Alert } from "react-native";
import { supabase } from "./supabase";
import {
  initPaymentSheet,
  presentPaymentSheet,
} from "@stripe/stripe-react-native";

export const fetchPaymenySheetParams = async (amount: number) => {
  const { data, error } = await supabase.functions.invoke("payment-sheet", {
    body: { amount },
  });

  if (data) {
    return data;
  }

  Alert.alert(error);
  return {};
};

export const initialisePaymentSheet = async (amount: number) => {
  console.log("Initializing payment sheet for: ", amount);

  const { paymentIntent, publishableKey } = await fetchPaymenySheetParams(
    amount
  );

  if (!paymentIntent || !publishableKey) return;

  await initPaymentSheet({
    merchantDisplayName: "mrPizza",
    paymentIntentClientSecret: paymentIntent,
    defaultBillingDetails: {
      name: "Batman",
    },
  });
};

export const openPaymentSheet = async () => {
  const { error } = await presentPaymentSheet();

  if (error) {
    Alert.alert(error.message);
    return false;
  }
  return true;
};

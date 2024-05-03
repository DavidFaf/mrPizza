import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import { InsertTables, UpdateTables } from "@/types";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useInsertOrderItems = () => {
  const queryClient = useQueryClient();
  return useMutation({
    async mutationFn(items: InsertTables<"order_items">[]) {
      const { data: newOrder, error } = await supabase
        .from("order_items")
        .insert(items)
        .select();
      if (error) {
        throw new Error(error.message);
      }
      return newOrder;
    },
  });
};

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    async mutationFn({
      id,
      updatedField,
    }: {
      id: number;
      updatedField: UpdateTables<"orders">;
    }) {
      const { data: updateOrder, error } = await supabase
        .from("orders")
        .update(updatedField)
        .eq("id", id)
        .select()
        .single();
      if (error) {
        throw new Error(error.message);
      }
      return updateOrder;
    },
    async onSuccess(_, data) {
      await queryClient.invalidateQueries(["orders"]);
      await queryClient.invalidateQueries(["orders", data.id]);
    },
  });
};

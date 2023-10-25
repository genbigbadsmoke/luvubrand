import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function KidsAllProducts() {
  const getAllProducts = await productByCategory("latex");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}

import React from "react";
import PageHeader from "../../../_components/PageHeader";
import ProductForm from "../../_components/ProductForm";
import prisma from "@/db/db";

const  EditPage =async ({ params: { id } }: { params: { id: string } }) => {
  
const product =await prisma.product.findUnique({where:{id}})
  
 return (
    <>
      <PageHeader>Edit Product</PageHeader>
      <ProductForm product={product}></ProductForm>
    </>
  );
};

export default EditPage;

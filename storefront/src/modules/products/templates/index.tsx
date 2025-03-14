import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  optionsOrder?: string[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  optionsOrder = ['Width', 'Length'] // Default order with Width first
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  // Sort product options based on optionsOrder
  const sortedProduct = {
    ...product,
    options: product.options?.sort((a, b) => {
      const aIndex = optionsOrder.indexOf(a.title)
      const bIndex = optionsOrder.indexOf(b.title)
      return aIndex - bIndex
    })
  }

  return (
    <>
      <div
        className="content-container flex flex-col small:flex-row small:items-start py-6 relative"
        data-testid="product-container"
      >
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
          <ProductInfo product={sortedProduct} />
          <ProductTabs product={sortedProduct} />
        </div>
        <div className="block w-full relative mt-6">
          <ImageGallery images={sortedProduct?.images || []} />
        </div>
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12">
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={sortedProduct}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={sortedProduct.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={sortedProduct} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
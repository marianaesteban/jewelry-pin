export interface IProducts {
    id: number;
    name: string;
    products?: (IProductsEntity)[] | null;
}
export interface IProductsEntity {
    id: number;
    slug: string;
    name: string;
    accurate_name: string;
    material_name: string;
    material_category_icon: string;
    material_stones?: (IMaterialStonesEntity | null)[] | null;
    price: IPrice;
    variant_images?: (IVariantImagesEntity)[] | null;
    material_group_name?: string | null;
    variants?: (IVariantsEntity | null)[] | null;
    product_label?: string | null;
}
export interface IMaterialStonesEntity {
    id: number;
    name: string;
    permalink: string;
}
export interface IPrice {
    amount: string;
    currency: string;
}
export interface IVariantImagesEntity {
    attachment_url_original: string;
    attachment_url_mini: string;
    attachment_url_small: string;
    attachment_url_medium: string;
    attachment_url_large: string;
}
export interface IVariantsEntity {
    option_values?: (IOptionValuesEntity)[] | null;
}
export interface IOptionValuesEntity {
    id: number;
    name: string;
    option_type_id: number;
    position: number;
    presentation: string;
    option_type_name: string;
}

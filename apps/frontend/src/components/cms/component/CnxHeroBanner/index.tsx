import { CnxHeroBannerDataFragmentDoc, type CnxHeroBannerDataFragment } from "@/gql/graphql";
import { getCtaData, getImageAlt, getImageUrl } from "@/lib/optiContentHelpers";
import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import Image from "next/image";

export const CnxHeroBannerComponent: CmsComponent<CnxHeroBannerDataFragment> = ({ data, editProps, inEditMode, ctx }) => {

    const componentName = 'CnxHeroBanner'
    const imageUrl = getImageUrl(data.Image);
    const imageAlt = getImageAlt(data.Image);
    const { text: ctaText, url: ctaUrl } = getCtaData(data.Cta);

    return <CmsEditable className="w-full py-2 mb-4" {...editProps}>
        <CmsEditable as="section" className="relative w-full h-[500px] flex items-center justify-start" ctx={ctx}>
            {imageUrl && <Image
                data-epi-edit={inEditMode ? "Image" : undefined}
                className="absolute inset-0 w-full h-full object-cover"
                src={imageUrl}
                alt={""}
                fill
            />}
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 bg-white/90  rounded-xl shadow-lg max-w-md p-6 m-10">
                <CmsEditable as="h2" cmsFieldName="Title" className="text-2xl font-semibold mb-2 text-blue-800" ctx={ctx}>{data.Title}</CmsEditable>
                <CmsEditable as="p" cmsFieldName="Description" className="text-sm text-gray-700 mb-4" ctx={ctx}>{data.Description}</CmsEditable>
                {ctaText && (
                    <CmsEditable as="a" cmsFieldName="Cta" href={ctaUrl}>
                        <button className="px-4 py-2 rounded-lg bg-azure text-white text-sm hover:bg-gray-800 transition">
                            {ctaText}
                        </button>
                    </CmsEditable>
                )}
            </div>
        </CmsEditable>
    </CmsEditable >

}

CnxHeroBannerComponent.displayName = "CnxHeroBanner (Component/CnxHeroBanner)"
CnxHeroBannerComponent.getDataFragment = () => ['CnxHeroBannerData', CnxHeroBannerDataFragmentDoc]
export default CnxHeroBannerComponent


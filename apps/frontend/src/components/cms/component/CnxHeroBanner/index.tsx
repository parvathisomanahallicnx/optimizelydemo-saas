import { CnxHeroBannerDataFragmentDoc, type CnxHeroBannerDataFragment } from "@/gql/graphql";
import { getCtaData, getImageAlt, getImageUrl } from "@/lib/optiContentHelpers";
import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

export const CnxHeroBannerComponent: CmsComponent<CnxHeroBannerDataFragment> = ({ data, editProps, ctx }) => {

    const componentName = 'CnxHeroBanner'
    const imageUrl = getImageUrl(data.Image);
    const imageAlt = getImageAlt(data.Image);
    const { text: ctaText, url: ctaUrl } = getCtaData(data.Cta);

    return <CmsEditable className="w-full py-2 mb-4" {...editProps}>
        <CmsEditable as="section" ctx={ctx}>
            <section className="relative w-full h-[500px] ...">
                {imageUrl && (
                    <CmsEditable cmsFieldName="Image" ctx={ctx}>
                        <img src={imageUrl} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
                    </CmsEditable>
                )}
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 bg-white/90 p-6 rounded-xl max-w-md m-10">
                    <CmsEditable cmsFieldName="Title" ctx={ctx}>
                        <h2 className="text-2xl font-semibold mb-2 text-blue-800">
                            {data.Title}
                        </h2>
                    </CmsEditable>
                    <CmsEditable cmsFieldName="Description" ctx={ctx}>
                        <p className="text-sm text-gray-700 mb-4">
                            {data.Description}
                        </p>
                    </CmsEditable>
                    {ctaText && (
                        <CmsEditable cmsFieldName="Cta" ctx={ctx}>
                            <a href={ctaUrl}>
                                <button className="px-4 py-2 rounded-lg bg-azure text-white">
                                    {ctaText}
                                </button>
                            </a>
                        </CmsEditable>
                    )}
                </div>
            </section>
        </CmsEditable>
    </CmsEditable>

}

CnxHeroBannerComponent.displayName = "CnxHeroBanner (Component/CnxHeroBanner)"
CnxHeroBannerComponent.getDataFragment = () => ['CnxHeroBannerData', CnxHeroBannerDataFragmentDoc]
export default CnxHeroBannerComponent


import { CnxHeroBannerDataFragmentDoc, type CnxHeroBannerDataFragment } from "@/gql/graphql";

import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

import { getCtaData, getImageAlt, getImageUrl } from "@/lib/optiContentHelpers";






/**

 * CnxHeroBanner

 *

 */

export const CnxHeroBannerComponent: CmsComponent<CnxHeroBannerDataFragment> = ({ data, editProps, ctx }) => {

    const componentName = 'CnxHeroBanner'
    const imageUrl = getImageUrl(data.Image);
    const imageAlt = getImageAlt(data.Image);
    const { text: ctaText, url: ctaUrl } = getCtaData(data.Cta);

    return <CmsEditable className="w-full py-2 mb-4" {...editProps}>

        {/* <CmsImage src={data.Image.imageLink} width={100} height={100}></CmsImage> */}

        <section className="relative w-full h-[500px] flex items-center justify-start overflow-hidden">

            {imageUrl && <img
                src={imageUrl}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
            />}





            {/* Dark Overlay for readability */}

            <div className="absolute inset-0 bg-black/30" />





            {/* Content Card */}

            <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-xl shadow-lg max-w-md p-6 m-10">

                <h2 className="text-2xl font-semibold mb-2 text-blue-800">{data.Title}</h2>

                <p className="text-sm text-gray-700 mb-4">

                    {data.Description}

                </p>

                {ctaText && (
                    <a href={ctaUrl}>
                        <button className="px-4 py-2 rounded-lg bg-azure text-white text-sm hover:bg-gray-800 transition">
                            {ctaText}
                        </button>
                    </a>
                )}

            </div>

        </section>

    </CmsEditable>

}

CnxHeroBannerComponent.displayName = "CnxHeroBanner (Component/CnxHeroBanner)"

CnxHeroBannerComponent.getDataFragment = () => ['CnxHeroBannerData', CnxHeroBannerDataFragmentDoc]



export default CnxHeroBannerComponent


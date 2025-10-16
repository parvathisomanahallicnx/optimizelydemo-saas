import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { WebsiteFooterDataFragmentDoc, type WebsiteFooterDataFragment } from "@/gql/graphql";

/**
 * Website footer configuration
 * Manage the contents shown in the website footer
 */
export const WebsiteFooterComponent : CmsComponent<WebsiteFooterDataFragment> = ({ data, editProps }) => {
    const componentName = 'Website footer configuration'
    const componentInfo = 'Manage the contents shown in the website footer'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
WebsiteFooterComponent.displayName = "Website footer configuration (Component/WebsiteFooter)"
WebsiteFooterComponent.getDataFragment = () => ['WebsiteFooterData', WebsiteFooterDataFragmentDoc]

export default WebsiteFooterComponent
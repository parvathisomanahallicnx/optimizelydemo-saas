import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { NavigationMenuBlockDataFragmentDoc, type NavigationMenuBlockDataFragment } from "@/gql/graphql";

/**
 * Navigation Menu
 * 
 */
export const NavigationMenuBlockComponent : CmsComponent<NavigationMenuBlockDataFragment> = ({ data, editProps }) => {
    const componentName = 'Navigation Menu'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
NavigationMenuBlockComponent.displayName = "Navigation Menu (Component/NavigationMenuBlock)"
NavigationMenuBlockComponent.getDataFragment = () => ['NavigationMenuBlockData', NavigationMenuBlockDataFragmentDoc]

export default NavigationMenuBlockComponent
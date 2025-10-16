import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { DictionaryDataFragmentDoc, type DictionaryDataFragment } from "@/gql/graphql";

/**
 * Application labels dictionary
 * A dictionary of labels that can be used by a frontend
 */
export const DictionaryComponent : CmsComponent<DictionaryDataFragment> = ({ data, editProps }) => {
    const componentName = 'Application labels dictionary'
    const componentInfo = 'A dictionary of labels that can be used by a frontend'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
DictionaryComponent.displayName = "Application labels dictionary (Component/Dictionary)"
DictionaryComponent.getDataFragment = () => ['DictionaryData', DictionaryDataFragmentDoc]

export default DictionaryComponent
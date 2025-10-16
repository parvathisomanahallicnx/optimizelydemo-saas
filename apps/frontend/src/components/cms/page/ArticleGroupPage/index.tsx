import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { ArticleGroupPageDataFragmentDoc, type ArticleGroupPageDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * Article Group Page
 * Provides a listing of all articles added as child of this page, used for news sections, blogs, etc...
 */
export const ArticleGroupPagePage : CmsComponent<ArticleGroupPageDataFragment> = ({ data }) => {
    const componentName = 'Article Group Page'
    const componentInfo = 'Provides a listing of all articles added as child of this page, used for news sections, blogs, etc...'
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </div>
}
ArticleGroupPagePage.displayName = "Article Group Page (Page/ArticleGroupPage)"
ArticleGroupPagePage.getDataFragment = () => ['ArticleGroupPageData', ArticleGroupPageDataFragmentDoc]
ArticleGroupPagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ArticleGroupPagePage
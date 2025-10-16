import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { ArticlePageDataFragmentDoc, type ArticlePageDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * Article
 * 
 */
export const ArticlePagePage : CmsComponent<ArticlePageDataFragment> = ({ data }) => {
    const componentName = 'Article'
    const componentInfo = ''
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </div>
}
ArticlePagePage.displayName = "Article (Page/ArticlePage)"
ArticlePagePage.getDataFragment = () => ['ArticlePageData', ArticlePageDataFragmentDoc]
ArticlePagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ArticlePagePage
import "server-only";
import { createClient, AuthMode } from "@remkoj/optimizely-graph-client";
import { createPage } from "@remkoj/optimizely-cms-nextjs/page";
import { getContentByPath } from "@gql/functions";
import { type getContentByPathQueryVariables } from "@gql/graphql";
import { factory } from "@components/factory";
import { draftMode, headers } from "next/headers";

// Create the page components and functions
const {
    generateMetadata,
    generateStaticParams,
    CmsPage: Page,
} = createPage(factory, {
    /**
     * Inject the "getContentByPath" master query that will be used to load all
     * content for the page in one request. When omitted, the default implementation
     * will revert to many requests in order to load the content.
     */
    getContentByPath: (client, variables) => {
        const host = headers().get('host');
        // eslint-disable-next-line no-console
        console.log('DEBUG [getContentByPath] host header:', host);
        // eslint-disable-next-line no-console
        console.log('DEBUG [getContentByPath] siteId for query:', host || undefined);
        
        return getContentByPath(client, {
            path: variables.path,
            locale: variables.locale,
            siteId: host || undefined,
            changeset: variables.changeset
        } as getContentByPathQueryVariables);
    },

    /**
     * The demo site is single language, so we're always defaulting to English.
     * For a multi-lingual implementation, you may omit this parameters when you
     * have both a [lang] URL segment and define the channel. Otherwise implement
     * your own synchronous logic to get the initial locale based on the parameters.
     * 
     * @returns     The initial locale
     */
    //paramsToLocale: () => "en",

    /**
     * The factory to use to create the GraphQL Client to fetch data from Optimizely
     * CMS.
     * 
     * @returns     The Optimizely Graph Client
     */
    client: (_, scope) => {
        const client = createClient(undefined, undefined, {
            nextJsFetchDirectives: true,
            cache: true,
            queryCache: true,
        })
        if (scope === 'request' && draftMode().isEnabled) {
            client.updateAuthentication(AuthMode.HMAC)
            client.enablePreview()
        }
        return client
    }
});

// Configure the Next.JS route handling for the pages
export const dynamic = "force-dynamic"; // Force dynamic rendering to read the host header for multi-site support. Caching is used to mitigate performance impact.
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = false; // Keep the cache untill manually revalidated using the Webhook

// Export page & helper methods
export { generateMetadata, generateStaticParams };
export default Page
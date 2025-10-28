import {
    CTAElementPropertyDataFragment,
    ImageElementPropertyDataFragment,
    LinkDataFragment,
    ReferenceDataFragment
} from "@/gql/graphql";

// Helper for image extraction
export function getImageUrl(image: ImageElementPropertyDataFragment | null | undefined): string | undefined {
    const reference = image?.imageLink as ReferenceDataFragment | null;
    const linkData = reference?.url as LinkDataFragment | null;
    return linkData?.default || undefined;
}

export function getImageAlt(image: ImageElementPropertyDataFragment | null | undefined): string | undefined {
    return image?.altText || undefined;
}


// Helper for CTA extraction
export function getCtaData(cta: CTAElementPropertyDataFragment | null | undefined) {
    const reference = cta?.Link as ReferenceDataFragment | null;
    const linkData = reference?.url as LinkDataFragment | null;

    return {
        text: cta?.Text || "",
        url: linkData?.default || "",
    };
}

// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import WebsiteFooterComponent from "./WebsiteFooter";
import VideoElementComponent from "./VideoElement";
import TextBlockComponent from "./TextBlock";
import TestimonialElementComponent from "./TestimonialElement";
import RichTextElementComponent from "./RichTextElement";
import QuoteBlockComponent from "./QuoteBlock";
import ParagraphElementComponent from "./ParagraphElement";
import PageSeoSettingsComponent from "./PageSeoSettings";
import OfficeLocationComponent from "./OfficeLocation";
import OdpEmbedBlockComponent from "./OdpEmbedBlock";
import NavigationMenuBlockComponent from "./NavigationMenuBlock";
import MenuNavigationBlockComponent from "./MenuNavigationBlock";
import MegaMenuGroupBlockMobileComponent from "./MegaMenuGroupBlock/mobile";
import MegaMenuGroupBlockComponent from "./MegaMenuGroupBlock";
import LayoutSettingsBlockComponent from "./LayoutSettingsBlock";
import ImageElementComponent from "./ImageElement";
import HeroBlockComponent from "./HeroBlock";
import HeadingElementComponent from "./HeadingElement";
import HeaderBlockComponent from "./HeaderBlock";
import DictionaryItemComponent from "./DictionaryItem";
import DictionaryComponent from "./Dictionary";
import CTAElementComponent from "./CTAElement";
import ContinueReadingComponentComponent from "./ContinueReadingComponent";
import ContentRecsElementComponent from "./ContentRecsElement";
import CarouselBlockComponent from "./CarouselBlock";
import CardBlockComponent from "./CardBlock";
import ButtonBlockComponent from "./ButtonBlock";
import BannerBlockComponent from "./BannerBlock";
import ArticleListElementComponent from "./ArticleListElement";
import ArticleListElementLoader from "./ArticleListElement/loading";
import ComponentPageFactory from "./Page";

// Prefix entries - if needed
prefixDictionaryEntries(ComponentPageFactory, "Page");

// Build dictionary
export const ComponentFactory : ComponentTypeDictionary = [
    { 
        type: "WebsiteFooter", 
        component: WebsiteFooterComponent 
    },
    { 
        type: "VideoElement", 
        component: VideoElementComponent 
    },
    { 
        type: "TextBlock", 
        component: TextBlockComponent 
    },
    { 
        type: "TestimonialElement", 
        component: TestimonialElementComponent 
    },
    { 
        type: "RichTextElement", 
        component: RichTextElementComponent 
    },
    { 
        type: "QuoteBlock", 
        component: QuoteBlockComponent 
    },
    { 
        type: "ParagraphElement", 
        component: ParagraphElementComponent 
    },
    { 
        type: "PageSeoSettings", 
        component: PageSeoSettingsComponent 
    },
    { 
        type: "OfficeLocation", 
        component: OfficeLocationComponent 
    },
    { 
        type: "OdpEmbedBlock", 
        component: OdpEmbedBlockComponent 
    },
    { 
        type: "NavigationMenuBlock", 
        component: NavigationMenuBlockComponent 
    },
    { 
        type: "MenuNavigationBlock", 
        component: MenuNavigationBlockComponent 
    },
    { 
        type: "MegaMenuGroupBlock/mobile", 
        component: MegaMenuGroupBlockMobileComponent 
    },
    { 
        type: "MegaMenuGroupBlock", 
        component: MegaMenuGroupBlockComponent 
    },
    { 
        type: "LayoutSettingsBlock", 
        component: LayoutSettingsBlockComponent 
    },
    { 
        type: "ImageElement", 
        component: ImageElementComponent 
    },
    { 
        type: "HeroBlock", 
        component: HeroBlockComponent 
    },
    { 
        type: "HeadingElement", 
        component: HeadingElementComponent 
    },
    { 
        type: "HeaderBlock", 
        component: HeaderBlockComponent 
    },
    { 
        type: "DictionaryItem", 
        component: DictionaryItemComponent 
    },
    { 
        type: "Dictionary", 
        component: DictionaryComponent 
    },
    { 
        type: "CTAElement", 
        component: CTAElementComponent 
    },
    { 
        type: "ContinueReadingComponent", 
        component: ContinueReadingComponentComponent 
    },
    { 
        type: "ContentRecsElement", 
        component: ContentRecsElementComponent 
    },
    { 
        type: "CarouselBlock", 
        component: CarouselBlockComponent 
    },
    { 
        type: "CardBlock", 
        component: CardBlockComponent 
    },
    { 
        type: "ButtonBlock", 
        component: ButtonBlockComponent 
    },
    { 
        type: "BannerBlock", 
        component: BannerBlockComponent 
    },
    { 
        type: "ArticleListElement", 
        component: ArticleListElementComponent,
        useSuspense: true,
        loader: ArticleListElementLoader
    },
    ...ComponentPageFactory
];

// Export dictionary
export default ComponentFactory;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    });
    return list;
}

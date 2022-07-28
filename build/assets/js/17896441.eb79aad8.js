"use strict";(self.webpackChunkdocu_chris_496=self.webpackChunkdocu_chris_496||[]).push([[918],{1986:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7462),l=a(7294),r=a(6010),s=a(5281),c=a(2802),o=a(8596),i=a(9960),d=a(4996),m=a(5999);function u(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function p(e){let{children:t,href:a,isLast:n}=e;const r="breadcrumbs__link";return n?l.createElement("span",{className:r,itemProp:"name"},t):a?l.createElement(i.Z,{className:r,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function h(e){let{children:t,active:a,index:s,addMicrodata:c}=e;return l.createElement("li",(0,n.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(s+1)}))}function v(){const e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",b.breadcrumbsItemLink),href:e},l.createElement(u,{className:b.breadcrumbHomeIcon})))}function E(){const e=(0,c.s1)(),t=(0,o.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(s.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(v,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(h,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(p,{href:t.href,isLast:n},t.label))})))):null}},230:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ne});var n=a(7294),l=a(1944),r=a(902);const s=n.createContext(null);function c(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(s.Provider,{value:l},t)}function o(){const e=(0,n.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}function i(){var e;const{metadata:t,frontMatter:a,assets:r}=o();return n.createElement(l.d,{title:t.title,description:t.description,keywords:a.keywords,image:null!=(e=r.image)?e:a.image})}var d=a(6010),m=a(7524),u=a(4966);function b(){const{metadata:e}=o();return n.createElement(u.Z,{previous:e.previous,next:e.next})}var p=a(3120),h=a(4364),v=a(5281),E=a(5999);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(E.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(E.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:v.k.common.lastUpdated},n.createElement(E.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var Z=a(7462);const N="iconEdit_Z9Sw";function k(e){let{className:t,...a}=e;return n.createElement("svg",(0,Z.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(N,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function L(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:v.k.common.editThisPage},n.createElement(k,null),n.createElement(E.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var T=a(9960);const U="tag_zVej",w="tagRegular_sFm0",C="tagWithCount_h2kH";function y(e){let{permalink:t,label:a,count:l}=e;return n.createElement(T.Z,{href:t,className:(0,d.Z)(U,l?C:w)},a,l&&n.createElement("span",null,l))}const x="tags_jXut",A="tag_QGVx";function M(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(E.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(x,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:A},n.createElement(y,{label:t,permalink:a}))}))))}const B="lastUpdated_vwxv";function I(e){return n.createElement("div",{className:(0,d.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(M,e)))}function V(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.Z)(v.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(L,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",B)},(a||l)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function H(){const{metadata:e}=o(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:s}=e,c=s.length>0,i=!!(t||a||r);return c||i?n.createElement("footer",{className:(0,d.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(I,{tags:s}),i&&n.createElement(V,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var P=a(6043),D=a(3743);const S="tocCollapsibleButton_TO0P",F="tocCollapsibleButtonExpanded_MG3E";function O(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,Z.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",S,!t&&F,a.className)}),n.createElement(E.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const z="tocCollapsible_ETCw",R="tocCollapsibleContent_vkbj",j="tocCollapsibleExpanded_sAul";function G(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:c}=(0,P.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(z,!s&&j,a)},n.createElement(O,{collapsed:s,onClick:c}),n.createElement(P.z,{lazy:!0,className:R,collapsed:s},n.createElement(D.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const q="tocMobile_ITEo";function J(){const{toc:e,frontMatter:t}=o();return n.createElement(G,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(v.k.docs.docTocMobile,q)})}var Q=a(9407);function W(){const{toc:e,frontMatter:t}=o();return n.createElement(Q.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var X=a(2503),K=a(7654);function Y(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=o();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(v.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(X.Z,{as:"h1"},a)),n.createElement(K.Z,null,t))}var $=a(1986);const ee="docItemContainer_Djhp",te="docItemCol_VOVn";function ae(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=o(),a=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(J,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(W,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&te)},n.createElement(p.Z,null),n.createElement("div",{className:ee},n.createElement("article",null,n.createElement($.Z,null),n.createElement(h.Z,null),a.mobile,n.createElement(Y,null,t),n.createElement(H,null)),n.createElement(b,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function ne(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(c,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(ae,null,n.createElement(a,null))))}},4966:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7462),l=a(7294),r=a(5999),s=a(6010),c=a(9960);function o(e){const{permalink:t,title:a,subLabel:n,isNext:r}=e;return l.createElement(c.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function i(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(o,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(o,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010),r=a(5999),s=a(5281),c=a(4477);function o(e){let{className:t}=e;const a=(0,c.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},3120:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7294),l=a(6010),r=a(2263),s=a(9960),c=a(5999),o=a(4104),i=a(5281),d=a(373),m=a(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,r.Z)(),{pluginId:c}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:h}=(0,o.Jo)(c),v=null!=u?u:(E=h).docs.find((e=>e.id===E.mainDocId));var E;return n.createElement("div",{className:(0,l.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:h.label,to:v.path,onClick:()=>m(h.name)})))}function v(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}}}]);
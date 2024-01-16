var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var institutionKeys = [
  "be5b9c72-e499-42b8-a5dc-c27505cf232e",
  "586ee56e-b0fe-4dff-b7f9-aeb104f3308a",
  "e71f36f1-e271-4720-a604-3c5a1418e7aa",
  "689b4219-8256-4c6e-890b-2e81405d4c58",
  "2fc908ba-e775-49e2-bffe-6b9041c3b70f",
  "1757f021-01b8-4d20-a11a-1da09db2d8b2",
  "dc02e848-9e1f-4dd0-8078-2eb60620d39b",
  "0e919a55-08d3-4bd2-aec1-200858fafd92",
  "6a6ac6c5-1b8a-48db-91a2-f8661274ff80",
  "ac439ab0-b80a-43ea-b2c3-bdaeaf0a52bd",
  "d742cdc8-729f-4a22-8f2c-84c4bd9dc11b",
  "2bea4bb3-e0fa-46be-88fb-e311b23804e8",
  "482f84ca-5fe3-4dd3-86da-b7cf974d6427",
  "6fa52ae0-546b-4a4b-845d-e2014aa68b78",
  "9384011e-4d9b-4488-a5dd-5cb67a3c17f7",
  "9e6a502b-7a44-41f4-a8df-ee15070060c0",
  "68fcaba0-61fe-4e78-a460-4f37654d025d",
  "1a69e6fc-4a8d-44d5-90a6-a7dc7a1aa7c7",
  "1d808a7c-1f9e-4379-9616-edb749ecf10e",
  "c2bfdeef-9c03-435e-8465-c483dadd6995",
  "feac3986-5450-4dac-be9b-51bee542d10b",
  "d2a27206-87ab-47ea-b5fc-d2e57054b688"
];

var siteConfig = {
  version: 2,
  routes: {
    alwaysUseHrefs: true, // Update - there now is translations. since the site isn't translated we can use push for now. if true, then we will always use hrefs, if false we will use onClick events and push state to the history. I've added this because I just realize that the language picker doesn't work with pushState as the url of the translated site is not updated with the new url
    enabledRoutes: ['occurrenceSearch', 'collectionSearch', 'collectionKey', 'institutionSearch', 'institutionKey'],
    occurrenceSearch: {
      route: '/specimen/search'
    }
  },
  occurrence: {
    excludedFilters: ['occurrenceStatus', 'networkKey', 'hostingOrganizationKey', 'protocol', 'publishingCountryCode', 'institutionCode', 'collectionCode'],
    highlightedFilters: ['taxonKey', 'verbatimScientificName', 'institutionKey', 'collectionKey', 'catalogNumber', 'recordedBy', 'identifiedBy'],
    defaultTableColumns: ['features', 'institutionKey', 'collectionKey', 'catalogNumber', 'country', 'year', 'recordedBy', 'identifiedBy'],
    availableCatalogues: ['INSTITUTION', 'COLLECTION', 'OCCURRENCE'],
    mapSettings: {
      lat: 0,
      lng: 0,
      zoom: 0
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: {
      type: "in",
      key: "institutionKey",
      values: [
        "be5b9c72-e499-42b8-a5dc-c27505cf232e",
        "586ee56e-b0fe-4dff-b7f9-aeb104f3308a",
        "e71f36f1-e271-4720-a604-3c5a1418e7aa",
        "689b4219-8256-4c6e-890b-2e81405d4c58",
        "2fc908ba-e775-49e2-bffe-6b9041c3b70f",
        "1757f021-01b8-4d20-a11a-1da09db2d8b2",
        "dc02e848-9e1f-4dd0-8078-2eb60620d39b",
        "0e919a55-08d3-4bd2-aec1-200858fafd92",
        "6a6ac6c5-1b8a-48db-91a2-f8661274ff80",
        "ac439ab0-b80a-43ea-b2c3-bdaeaf0a52bd",
        "d742cdc8-729f-4a22-8f2c-84c4bd9dc11b",
        "2bea4bb3-e0fa-46be-88fb-e311b23804e8",
        "482f84ca-5fe3-4dd3-86da-b7cf974d6427",
        "6fa52ae0-546b-4a4b-845d-e2014aa68b78",
        "9384011e-4d9b-4488-a5dd-5cb67a3c17f7",
        "9e6a502b-7a44-41f4-a8df-ee15070060c0",
        "68fcaba0-61fe-4e78-a460-4f37654d025d",
        "1a69e6fc-4a8d-44d5-90a6-a7dc7a1aa7c7",
        "1d808a7c-1f9e-4379-9616-edb749ecf10e",
        "c2bfdeef-9c03-435e-8465-c483dadd6995",
        "feac3986-5450-4dac-be9b-51bee542d10b",
        "d2a27206-87ab-47ea-b5fc-d2e57054b688"
      ]
    },
    occurrenceSearchTabs: ['TABLE', 'GALLERY', 'MAP', 'CLUSTERS'],
    // occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },
  collection: {
    rootFilter: {
      institutionKey: institutionKeys
    }
  },
  institution: {
    rootFilter: {
      institutionKey: institutionKeys
    },
    mapSettings: {
      enabled: true,
      lat: 0,
      lng: 0,
      zoom: 1
    },
  },
  apiKeys: {
    maptiler: "wFxbBf3Tv2e75QQfYOOW",
    mapbox: "pk.eyJ1IjoiZ2JpZiIsImEiOiJja3VmZm50Z3kxcm1vMnBtdnBmeGd5cm9hIn0.M2z2n9QP9fRHZUCw9vbgOA"
  },
  availableCatalogues: ['OCCURRENCE', 'COLLECTION', 'INSTITUTION'],
  maps: {
    // locale: 'ja',
    defaultProjection: 'MERCATOR',
    defaultMapStyle: 'BRIGHT',
    mapStyles: {
      ARCTIC: ['NATURAL', 'BRIGHT'],
      PLATE_CAREE: ['NATURAL', 'BRIGHT', 'DARK'],
      MERCATOR: ['NATURAL', 'BRIGHT', 'SATELLITE', 'DARK'],
      ANTARCTIC: ['NATURAL', 'BRIGHT', 'DARK']
    }
  },
  messages: {
    "catalogues.occurrences": "Specimens"
  }
};

// example of a language specific route overwrite
// if (pageLang === 'da')  {
//   siteConfig.routes.occurrenceSearch.route = '/observationer/sog';
// }
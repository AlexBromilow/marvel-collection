type ResourceList = {
    Available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

type ResourceItem = {
    name: string;
    resourceURI: string;
}

type ComicResult = {
    data: ResultData;
}

type ResultData = {
    count: number,
    limit: number,
    offset: number,
    total: number,
    results: ComicData[]
}

type ComicData = {
    characters: Characters;
    creators: Creators;
    dates: Date[];
    description: string;
    diamondCode: string;
    digitalId: number;
    ean: string;
    events: Events;
    format: string;
    id: number;
    images: Image[];
    isbn: string;
    issn: string;
    issueNumber: number;
    modified: string;
    pageCount: number;
    prices: Price[];
    resourceURI: string;
    series: ResourceItem[];
    stories: Stories;
    title: string;
    textObjects: TextObject[];
    thumbnail: Image;
    upc: string;
    urls: Url[];
    variantDescription: string;
}

type Characters = ResourceList & {
    items: Character[]
}

type Character = ResourceItem & {
}

type Creators = ResourceList & {
    items: Creator[]
}

type Creator = ResourceItem & {
    role: string;
}

type Date = {
    date: string;
    type: string;
}

type Events = ResourceList &
{}

type Image = {
    extension: string;
    path: string;
}

type Price = {
    price: number;
    type: string;
}

type Stories = ResourceList & {
    returned: number;
    items: Story[];
}

type Story = ResourceItem & {
    type: string;
}

type TextObject = {
    language: string;
    text: string;
    type: string;
}

type Url = {
    type: string;
    url: string;
}
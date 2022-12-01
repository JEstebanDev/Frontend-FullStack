export interface Response {
  responses: ResponseElement[];
}

export interface ResponseElement {
  textAnnotations: TextAnnotation[];
  fullTextAnnotation: FullTextAnnotation;
}

export interface FullTextAnnotation {
  pages: Page[];
  text: string;
}

export interface Page {
  property: WordProperty;
  width: number;
  height: number;
  blocks: Block[];
  confidence: number;
}

export interface Block {
  boundingBox: Bounding;
  paragraphs: Paragraph[];
  blockType: string;
  confidence: number;
}

export interface Bounding {
  vertices: Vertex[];
}

export interface Vertex {
  x: number;
  y: number;
}

export interface Paragraph {
  boundingBox: Bounding;
  words: Word[];
  confidence: number;
}

export interface Word {
  property: WordProperty;
  boundingBox: Bounding;
  symbols: Symbol[];
  confidence: number;
}

export interface WordProperty {
  detectedLanguages: DetectedLanguage[];
}

export interface DetectedLanguage {
  languageCode: string;
  confidence: number;
}

export interface Symbol {
  boundingBox: Bounding;
  text: string;
  confidence: number;
  property?: SymbolProperty;
}

export interface SymbolProperty {
  detectedBreak: DetectedBreak;
}

export interface DetectedBreak {
  type: string;
}

export interface TextAnnotation {
  locale?: string;
  description: string;
  boundingPoly: Bounding;
}

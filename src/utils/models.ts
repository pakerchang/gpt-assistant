export interface DataSchema {}

export interface PromptDataType {
  itemName: string;
  prefixContent?: string;
  content?: string;
  suffixContent?: string;
  isPrompt: boolean;
  isActive: boolean;
}

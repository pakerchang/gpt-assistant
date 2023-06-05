export interface DataSchema {
  promptData: PromptDataType;
  quickRespData: QuickRespDataType;
}

export interface PromptDataType {
  itemName: string;
  prefixContent: string;
  content: string;
  suffixContent: string;
  isActive: boolean;
}

export interface QuickRespDataType {
  itemName: string;
  isActive: boolean;
}

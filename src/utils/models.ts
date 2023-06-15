export interface GPTAssistantDataType {
  promptData?: PromptDataType[];
  quickRepData?: PromptDataType[];
}

export interface PromptDataType {
  itemName: string;
  prefixContent?: string;
  content?: string;
  suffixContent?: string;
  isPrompt: boolean;
  isActive: boolean;
}

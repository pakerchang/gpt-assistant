import React from "react";
import { GPTAssistantDataType, PromptDataType } from "../utils/models";

const storage = localStorage;
const promptKey = "Prompt_Data";
const quickRepKey = "QuickRep_Data";

const fetchPrompt = storage.getItem(promptKey);
const fetchQuickRep = storage.getItem(quickRepKey);

export default function useStorage() {
  const [data, setData] = React.useState<GPTAssistantDataType>({
    promptData: fetchPrompt ? JSON.parse(fetchPrompt) : [],
    quickRepData: fetchQuickRep ? JSON.parse(fetchQuickRep) : [],
  });

  const updatePromptData = (newValue: PromptDataType): void => {
    const updateData = [...(data.promptData || []), newValue];
    storage.setItem(promptKey, JSON.stringify(updateData));
    setData((prev) => ({ ...prev, promptData: updateData }));
  };
  const updateQuickRepData = (newValue: PromptDataType): void => {
    const updateData = [...(data.quickRepData || []), newValue];
    storage.setItem(quickRepKey, JSON.stringify(updateData));
    setData((prev) => ({ ...prev, quickRepData: updateData }));
  };

  return { data, updatePromptData, updateQuickRepData };
}
